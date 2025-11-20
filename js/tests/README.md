# Attendance System Tests

This directory contains test files for the CSCI 5403 attendance system.

## Test Files

### `attendance-swipe-test.html`
Interactive test suite for card swipe functionality.

**How to use:**
1. Open `attendance-swipe-test.html` in a web browser
2. Click "Run Full Test Suite" to execute all tests
3. Review the log to see which swipes succeeded/failed
4. Check statistics to see blocking rate

**Tests included:**
- Single card swipe test
- Rapid consecutive swipes (identifies the bug)
- Slow consecutive swipes (baseline)

**Expected Results (Current Bug):**
- Rapid swipes: Only first swipe processes, others blocked
- Slow swipes: All process successfully

**Expected Results (After Fix):**
- All swipes should process successfully regardless of timing

### `BUG_REPORT.md`
Detailed analysis of the card swipe bug including:
- Root cause analysis
- Test results
- Proposed fixes with pros/cons
- Recommendation for best fix approach

## Running Tests

### Browser Tests
```bash
# Open test file in browser
open js/tests/attendance-swipe-test.html

# Or navigate to:
http://localhost:8888/js/tests/attendance-swipe-test.html
```

### Manual Testing
1. Go to `/pages/attendance.html`
2. Swipe 2-3 student cards in rapid succession (within 1 second)
3. Observe that only the first card registers
4. Wait 1 second between swipes - all should register

## Bug Summary

**Issue:** Multiple rapid card swipes fail - only first swipe is processed.

**Root Cause:**
1. `isProcessing` flag blocks concurrent swipes during API call (100-300ms)
2. `setTimeout(100ms)` creates additional gap where swipes are missed

**Impact:** Instructors must wait 300-500ms between each swipe, significantly slowing attendance taking.

**Recommended Fix:** Implement queue-based swipe processing (see BUG_REPORT.md)

## Test Data

Sample card formats used in tests:
```
^SMITH/JOHN^
^DOE/JANE^
^JOHNSON/ROBERT^
^WILLIAMS/MARY^
^BROWN/MICHAEL^
```

Format: `^LASTNAME/FIRSTNAME^`

## Future Tests

Potential additional tests to add:
- [ ] Stress test with 50+ rapid swipes
- [ ] Invalid card data handling
- [ ] Network error handling
- [ ] Duplicate swipe detection
- [ ] Late marking functionality
- [ ] Manual toggle during swipe processing
- [ ] Date change during swipe processing
- [ ] Browser compatibility tests
