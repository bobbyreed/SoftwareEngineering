# Blueprint Theme Design System

**Course**: CSCI 5403 - Software Engineering
**Last Updated**: 2025-11-17
**Version**: 2.0

## Overview

The Blueprint Theme Design System provides a comprehensive set of design tokens (CSS custom properties) for consistent styling across the Software Engineering course website. All values use a systematic approach based on mathematical scales for predictable and harmonious designs.

---

## Table of Contents

1. [Color System](#color-system)
2. [Spacing Scale](#spacing-scale)
3. [Typography Scale](#typography-scale)
4. [Border Radius Scale](#border-radius-scale)
5. [Shadow System](#shadow-system)
6. [Component Classes](#component-classes)
7. [Usage Examples](#usage-examples)
8. [Best Practices](#best-practices)

---

## Color System

### Primary Blueprint Colors

#### Light Mode
```css
--blueprint-bg-primary: #F0F4F8      /* Page background */
--blueprint-bg-secondary: #FFFFFF    /* Card/slide background */
--blueprint-bg-accent: #E0E7EF       /* Accent background */
--blueprint-text-primary: #334155    /* Body text */
--blueprint-text-secondary: #64748B  /* Secondary text */
--blueprint-text-muted: #94A3B8      /* Muted/disabled text */
```

#### Dark Mode
```css
--blueprint-bg-primary: #0F172A      /* Page background */
--blueprint-bg-secondary: #1E293B    /* Card/slide background */
--blueprint-bg-accent: #334155       /* Accent background */
--blueprint-text-primary: #F1F5F9    /* Body text */
--blueprint-text-secondary: #CBD5E1  /* Secondary text */
--blueprint-text-muted: #94A3B8      /* Muted/disabled text */
```

### Accent Colors (Sky Blue & Purple)

#### Light Mode
```css
--blueprint-sky: #0EA5E9             /* Primary sky blue */
--blueprint-sky-light: #38BDF8       /* Light variant */
--blueprint-sky-dark: #0284C7        /* Dark variant */
--blueprint-purple: #8B5CF6          /* Primary purple */
--blueprint-purple-light: #A78BFA    /* Light variant */
--blueprint-purple-dark: #7C3AED     /* Dark variant */
```

#### Dark Mode
```css
--blueprint-sky: #38BDF8             /* Brighter for dark backgrounds */
--blueprint-sky-light: #7DD3FC
--blueprint-sky-dark: #0EA5E9
--blueprint-purple: #A78BFA
--blueprint-purple-light: #C4B5FD
--blueprint-purple-dark: #8B5CF6
```

### Semantic Colors

| Purpose | Background | Border | Text |
|---------|-----------|--------|------|
| **Success** | `--success-bg` | `--success-border` | `--success-text` |
| **Warning** | `--warning-bg` | `--warning-border` | `--warning-text` |
| **Error** | `--error-bg` | `--error-border` | `--error-text` |

**Usage Example:**
```css
.tip-box {
    background: var(--success-bg);
    border-left: 4px solid var(--success-border);
    color: var(--success-text);
}
```

### Borders & Grids
```css
--blueprint-border: #CBD5E1          /* Standard border color */
--blueprint-grid: rgba(203, 213, 225, 0.3)  /* Grid overlay */
```

---

## Spacing Scale

Based on a **4px grid system** for mathematical consistency.

| Variable | Value | Rem | Common Use |
|----------|-------|-----|------------|
| `--space-1` | 4px | 0.25rem | Icon spacing, small gaps |
| `--space-2` | 8px | 0.5rem | Tight padding, small margins |
| `--space-3` | 12px | 0.75rem | Input padding |
| `--space-4` | 16px | 1rem | Standard spacing unit |
| `--space-5` | 20px | 1.25rem | Medium padding |
| `--space-6` | 24px | 1.5rem | Section spacing |
| `--space-8` | 32px | 2rem | Large padding |
| `--space-10` | 40px | 2.5rem | Large margins |
| `--space-12` | 48px | 3rem | Extra large spacing |
| `--space-16` | 64px | 4rem | Hero spacing |
| `--space-20` | 80px | 5rem | XXL spacing |
| `--space-24` | 96px | 6rem | XXXL spacing |

### Usage Examples

```css
/* Instead of arbitrary values */
.card {
    padding: 20px;              /* ❌ Avoid */
    margin-bottom: 25px;        /* ❌ Avoid */
}

/* Use the spacing scale */
.card {
    padding: var(--space-5);           /* ✅ Good - 20px */
    margin-bottom: var(--space-6);     /* ✅ Good - 24px */
}

/* Combining values */
.button {
    padding: var(--space-3) var(--space-6);  /* 12px 24px */
}
```

---

## Typography Scale

### Font Sizes

Based on a **modular scale** (1.125 ratio) for harmonious sizing.

| Variable | Value | Pixels | Common Use |
|----------|-------|--------|------------|
| `--font-size-xs` | 0.75rem | 12px | Small labels, metadata |
| `--font-size-sm` | 0.875rem | 14px | Small text, captions |
| `--font-size-base` | 1rem | 16px | Body text (default) |
| `--font-size-lg` | 1.125rem | 18px | Large body text |
| `--font-size-xl` | 1.25rem | 20px | Subheadings |
| `--font-size-2xl` | 1.5rem | 24px | H3 headings |
| `--font-size-3xl` | 1.875rem | 30px | H2 headings |
| `--font-size-4xl` | 2.25rem | 36px | H1 headings |
| `--font-size-5xl` | 3rem | 48px | Hero text |

### Line Heights

| Variable | Value | Best For |
|----------|-------|----------|
| `--line-height-tight` | 1.25 | Headings, compact text |
| `--line-height-normal` | 1.5 | UI elements, short text |
| `--line-height-relaxed` | 1.7 | Long-form reading |
| `--line-height-loose` | 2 | Poetry, special emphasis |

### Font Weights

| Variable | Value | Common Use |
|----------|-------|------------|
| `--font-weight-normal` | 400 | Body text |
| `--font-weight-medium` | 500 | Slightly emphasized |
| `--font-weight-semibold` | 600 | Subheadings, labels |
| `--font-weight-bold` | 700 | Headings, strong emphasis |

### Typography Usage Examples

```css
/* Heading styles */
h1 {
    font-size: var(--font-size-4xl);        /* 36px */
    line-height: var(--line-height-tight);  /* 1.25 */
    font-weight: var(--font-weight-bold);   /* 700 */
}

h2 {
    font-size: var(--font-size-3xl);        /* 30px */
    line-height: var(--line-height-tight);
    font-weight: var(--font-weight-semibold);
}

/* Body text */
p {
    font-size: var(--font-size-base);       /* 16px */
    line-height: var(--line-height-relaxed); /* 1.7 */
    font-weight: var(--font-weight-normal);  /* 400 */
}

/* Small text */
.metadata {
    font-size: var(--font-size-sm);         /* 14px */
    color: var(--text-secondary);
}
```

---

## Border Radius Scale

Systematic progression for rounded corners.

| Variable | Value | Common Use |
|----------|-------|------------|
| `--radius-sm` | 4px | Small buttons, badges |
| `--radius-md` | 8px | Standard buttons, inputs |
| `--radius-lg` | 12px | Cards, panels |
| `--radius-xl` | 16px | Large cards |
| `--radius-2xl` | 20px | Hero cards, containers |
| `--radius-3xl` | 24px | Extra large containers |
| `--radius-full` | 9999px | Pills, circular buttons |

### Usage Examples

```css
.button {
    border-radius: var(--radius-md);    /* 8px */
}

.card {
    border-radius: var(--radius-lg);    /* 12px */
}

.pill-button {
    border-radius: var(--radius-full);  /* Fully rounded */
}
```

---

## Shadow System

Three-tier shadow system for depth and hierarchy.

| Variable | Value | Common Use |
|----------|-------|------------|
| `--shadow-light` | `rgba(0, 0, 0, 0.05)` | Subtle elevation |
| `--shadow-medium` | `rgba(0, 0, 0, 0.1)` | Standard cards |
| `--shadow-heavy` | `rgba(0, 0, 0, 0.15)` | Modals, dropdowns |

**Dark Mode:** Shadow opacity increases (0.2, 0.3, 0.4) for better visibility.

### Usage Examples

```css
.card {
    box-shadow: 0 4px 6px var(--shadow-medium);
}

.modal {
    box-shadow: 0 10px 25px var(--shadow-heavy);
}

.button:hover {
    box-shadow: 0 2px 8px var(--shadow-light);
}
```

---

## Component Classes

Pre-built component classes using the design system.

### Content Boxes

| Class | Purpose | Colors |
|-------|---------|--------|
| `.activity-box` | Interactive activities | Sky→Purple gradient |
| `.tip-box` | Helpful tips | Success green |
| `.warning-box` | Warnings/cautions | Warning orange |
| `.demo-box` | Demonstrations | Dashed border, accent bg |
| `.code-example` | Code snippets | Dark background |

### Layout Utilities

| Class | Purpose |
|-------|---------|
| `.comparison-table` | Two-column comparison grid |
| `.comparison-card` | Individual comparison item |
| `.two-column` | General two-column layout |

### Example Usage

```html
<div class="activity-box">
    <h3>Hands-on Exercise</h3>
    <p>Create a CI/CD pipeline for your project.</p>
</div>

<div class="tip-box">
    <strong>Pro Tip:</strong> Always write tests before deploying!
</div>
```

---

## Usage Examples

### Creating a Custom Component

```css
.custom-alert {
    /* Spacing */
    padding: var(--space-6);
    margin-bottom: var(--space-8);

    /* Typography */
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);

    /* Colors */
    background: var(--warning-bg);
    border-left: 4px solid var(--warning-border);
    color: var(--text-primary);

    /* Borders */
    border-radius: var(--radius-lg);

    /* Shadows */
    box-shadow: 0 2px 8px var(--shadow-light);
}
```

### Responsive Spacing

```css
.container {
    padding: var(--space-4);
}

@media (min-width: 768px) {
    .container {
        padding: var(--space-8);
    }
}

@media (min-width: 1024px) {
    .container {
        padding: var(--space-12);
    }
}
```

### Creating a Button Scale

```css
.btn-sm {
    padding: var(--space-2) var(--space-4);
    font-size: var(--font-size-sm);
    border-radius: var(--radius-sm);
}

.btn-md {
    padding: var(--space-3) var(--space-6);
    font-size: var(--font-size-base);
    border-radius: var(--radius-md);
}

.btn-lg {
    padding: var(--space-4) var(--space-8);
    font-size: var(--font-size-lg);
    border-radius: var(--radius-lg);
}
```

---

## Best Practices

### ✅ DO

1. **Use design tokens** instead of hardcoded values
   ```css
   /* Good */
   margin: var(--space-6);
   font-size: var(--font-size-xl);

   /* Avoid */
   margin: 24px;
   font-size: 1.25rem;
   ```

2. **Stay within the scales**
   - Use spacing values from the scale (4, 8, 12, 16, 20, 24...)
   - Avoid arbitrary values like 15px, 22px, 37px

3. **Use semantic color aliases**
   ```css
   /* Good */
   color: var(--text-primary);
   background: var(--bg-secondary);

   /* Less flexible */
   color: var(--blueprint-text-primary);
   background: var(--blueprint-bg-secondary);
   ```

4. **Combine scales harmoniously**
   ```css
   .card {
       padding: var(--space-6);           /* 24px */
       margin-bottom: var(--space-8);     /* 32px */
       border-radius: var(--radius-lg);   /* 12px */
       font-size: var(--font-size-lg);    /* 18px */
   }
   ```

### ❌ DON'T

1. **Avoid magic numbers**
   ```css
   /* Bad */
   padding: 23px;
   margin: 17px;
   font-size: 1.3742rem;
   ```

2. **Don't mix scales arbitrarily**
   ```css
   /* Inconsistent */
   padding: 15px 22px;  /* Neither value is on the scale */
   ```

3. **Don't hardcode colors**
   ```css
   /* Bad - not theme-aware */
   color: #334155;
   background: #FFFFFF;

   /* Good - respects theme */
   color: var(--text-primary);
   background: var(--bg-secondary);
   ```

4. **Don't override design tokens unnecessarily**
   ```css
   /* Bad - defeats the purpose */
   :root {
       --space-4: 18px;  /* Should stay 16px */
   }
   ```

---

## Migration Guide

### Updating Existing Styles

**Before (hardcoded values):**
```css
.my-component {
    padding: 20px 30px;
    margin-bottom: 25px;
    font-size: 1.2em;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

**After (using design tokens):**
```css
.my-component {
    padding: var(--space-5) var(--space-8);      /* 20px 32px - closest match */
    margin-bottom: var(--space-6);                /* 24px - closest to 25px */
    font-size: var(--font-size-xl);               /* 1.25rem - closest to 1.2em */
    border-radius: var(--radius-md);              /* 8px - closest to 10px */
    box-shadow: 0 2px 8px var(--shadow-light);
}
```

### Lecture-Specific Styles

When adding lecture-specific inline styles:

```html
<style>
    .lecture-specific-card {
        /* Use design tokens */
        padding: var(--space-6);
        margin: var(--space-4) 0;
        border-radius: var(--radius-lg);
        background: var(--bg-accent);
        border-left: 4px solid var(--blueprint-purple);
    }
</style>
```

---

## Reference Chart

### Quick Spacing Reference

| Need spacing for... | Use variable | Value |
|---------------------|--------------|-------|
| Icon gap | `--space-1` | 4px |
| Button padding (vertical) | `--space-3` | 12px |
| Button padding (horizontal) | `--space-6` | 24px |
| Card padding | `--space-6` or `--space-8` | 24px or 32px |
| Section margin | `--space-10` or `--space-12` | 40px or 48px |
| Hero section padding | `--space-16` or `--space-20` | 64px or 80px |

### Quick Typography Reference

| Element | Font Size | Line Height | Weight |
|---------|-----------|-------------|--------|
| H1 | `--font-size-4xl` | `--line-height-tight` | `--font-weight-bold` |
| H2 | `--font-size-3xl` | `--line-height-tight` | `--font-weight-semibold` |
| H3 | `--font-size-2xl` | `--line-height-normal` | `--font-weight-semibold` |
| Body | `--font-size-base` | `--line-height-relaxed` | `--font-weight-normal` |
| Small | `--font-size-sm` | `--line-height-normal` | `--font-weight-normal` |

---

## Version History

### Version 2.0 (2025-11-17)
- Added comprehensive spacing scale (4px grid system)
- Added typography scale (modular scale 1.125)
- Added border radius scale
- Consolidated and documented shadow system
- Created design system documentation

### Version 1.0 (2025-10-20)
- Initial Blueprint theme with Sky Blue + Purple colors
- Basic color system with light/dark mode support
- Component classes (activity-box, tip-box, etc.)

---

## Support

For questions or suggestions about the design system:
- Review this documentation
- Check `docs/maintenance/style-audit-workflow.md` for maintenance guidelines
- Consult `styles/presentation.css` for implementation details

---

**Maintained by**: Course Instructor
**Repository**: /home/bobby/repos/SoftwareEngineering
**Last Updated**: 2025-11-17
