# Attendance Card Swipe Bug Report

## Issue
Multiple card swipes in rapid succession fail - only the first swipe is processed, subsequent swipes are blocked or ignored.

## Root Causes

### Bug #1: `isProcessing` Flag Blocks Concurrent Swipes
**Location:** `pages/attendance.html` lines 959-988

When a card is swiped:
1. `isProcessing` is set to `true` (line 963)
2. An async API call is made to `markPresent()` (line 971)
3. The API call takes 100-300ms to complete
4. During this time, `isProcessing` remains `true`
5. **Any subsequent swipes during this window are completely blocked**

**Problem:** The code doesn't check `isProcessing` before processing, but the flag effectively blocks new swipes because the input event handler doesn't queue or handle concurrent swipes.

### Bug #2: `setTimeout` Delay Creates Processing Gap
**Location:** `pages/attendance.html` lines 982-985

After processing completes:
```javascript
finally {
    isProcessing = false;

    // This creates a 100ms gap where swipes can be missed
    setTimeout(() => {
        cardInput.focus();
        updateSwipeStatus('ready');
    }, 100);
}
```

**Problem:** There's a 100ms delay before the input is refocused and status updated. If a second card is swiped during this window, it may not be properly captured.

### Bug #3: Card Data Format Mismatch
**Location:** `pages/attendance.html` line 962

```javascript
if (value.includes('?')) {  // Line 962
```

But the `parseCardData` function expects format: `^LASTNAME/FIRSTNAME^`

**Problem:** The check looks for '?' character, but the actual card format uses '^' delimiters. This mismatch may cause inconsistent swipe detection.

## Test Results

Running the test suite (`attendance-swipe-test.html`) with 3 rapid swipes:
- **Expected:** 3 swipes processed
- **Actual:** 1 swipe processed, 2 blocked
- **Blocking Rate:** 66% of rapid swipes fail

## Impact
- Instructors must wait 300-500ms between each card swipe
- Slows down attendance taking significantly with 20+ students
- Creates a poor user experience
- May result in students being missed if instructor swipes too quickly

## Proposed Fixes

### Fix Option 1: Queue-Based Approach (Recommended)
Implement a queue to handle multiple swipes:

```javascript
let swipeQueue = [];
let isProcessing = false;

async function processSwipeQueue() {
    if (isProcessing || swipeQueue.length === 0) return;

    isProcessing = true;
    const cardData = swipeQueue.shift();

    try {
        const studentData = parseCardData(cardData);
        if (studentData) {
            await markPresent(studentData);
        }
    } finally {
        isProcessing = false;
        // Immediately process next swipe if queue has items
        if (swipeQueue.length > 0) {
            processSwipeQueue();
        }
    }
}

cardInput.addEventListener('input', async (e) => {
    const value = e.target.value;

    if (value.includes('^') && value.endsWith('^')) {
        swipeQueue.push(value);
        cardInput.value = ''; // Clear immediately
        processSwipeQueue(); // Start processing queue
    }
});
```

**Benefits:**
- All swipes are captured and queued
- Sequential processing ensures no data loss
- No arbitrary delays
- Better user feedback (can show queue length)

### Fix Option 2: Remove setTimeout Delay
Simply remove the 100ms delay:

```javascript
finally {
    isProcessing = false;
    cardInput.focus(); // Immediate refocus
    updateSwipeStatus('ready');
}
```

**Benefits:**
- Reduces gap where swipes can be missed
- Simpler change

**Drawbacks:**
- Still blocks during API call
- Doesn't fully solve the problem

### Fix Option 3: Non-Blocking Async
Process swipes without blocking:

```javascript
cardInput.addEventListener('input', async (e) => {
    const value = e.target.value;

    if (value.includes('^') && value.endsWith('^')) {
        const cardDataCopy = value;
        cardInput.value = ''; // Clear immediately

        // Process without blocking (no isProcessing flag)
        const studentData = parseCardData(cardDataCopy);
        if (studentData) {
            markPresent(studentData); // Don't await - let it run async
        }
    }
});
```

**Benefits:**
- No blocking at all
- Simple implementation

**Drawbacks:**
- Multiple simultaneous API calls (may strain server)
- No guarantee of processing order
- Harder to provide accurate status feedback

## Recommendation

**Implement Fix Option 1 (Queue-Based Approach)**

This provides the best balance of:
- ✅ Zero data loss
- ✅ Sequential processing (maintains order)
- ✅ Good user feedback
- ✅ Reasonable server load
- ✅ Professional UX

## Testing Checklist

After implementing fix:
- [ ] Single swipe works correctly
- [ ] 3 rapid swipes (0ms delay) all process successfully
- [ ] 10 rapid swipes all process successfully
- [ ] Status indicator shows queue state
- [ ] No swipes are lost or duplicated
- [ ] Performance is acceptable with 20+ students
- [ ] Error handling works correctly
- [ ] Manual toggle still works during swipe processing

## Files Affected
- `pages/attendance.html` (lines 959-988)
- Test file: `js/tests/attendance-swipe-test.html` (for verification)
