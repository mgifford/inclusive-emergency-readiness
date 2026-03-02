# Accessibility Testing: Light and Dark Mode

This repository includes automated accessibility testing that checks the site in both **light mode** and **dark mode** to ensure WCAG compliance across all color schemes.

## Why Test Both Modes?

Many users rely on dark mode for:
- **Reduced eye strain** in low-light conditions
- **Battery savings** on OLED displays
- **Light sensitivity** due to medical conditions
- **Personal preference** for lower luminance

Our site uses `@media (prefers-color-scheme: dark)` to automatically adapt to user preferences. However, standard accessibility tools like axe-core only test the default (light) mode. This can miss critical contrast issues in dark mode.

## How It Works

### 1. Dual-Mode Testing

We test each page twice:
- **Light Mode Test** - Default browser rendering
- **Dark Mode Test** - Browser emulates `prefers-color-scheme: dark`

### 2. Issue Identification

Each accessibility issue gets two identifiers:

**Unique ID:** `URL + XPath + Axe Rule + User Preference`
- Example: `https://example.com/::#header::color-contrast::dark`
- Identifies a specific issue in a specific mode

**Aggregate ID:** `URL + XPath + Axe Rule`
- Example: `https://example.com/::#header::color-contrast`
- Groups the same pattern across modes

### 3. Comparison & Prioritization

The comparison script categorizes issues:

#### 🚨 **Issues in BOTH Modes** (Highest Priority)
- Same pattern fails in light AND dark mode
- Indicates fundamental color problem
- **Fix:** Choose a universal color OR use CSS variables with mode-specific values

#### 🌞 **Light Mode Only Issues**
- Only fail in light mode
- **Fix:** Adjust colors in base stylesheet

#### 🌙 **Dark Mode Only Issues**
- Only fail in dark mode
- **Fix:** Adjust colors in `@media (prefers-color-scheme: dark)` block

## Running Tests Locally

### Prerequisites

```bash
npm install
```

### Run All Tests

```bash
# Test light mode
npm run test:a11y-light

# Test dark mode
npm run test:a11y-dark

# Compare results
npm run test:a11y-compare
```

### View Results

After running tests, check `.a11y-results/`:
- `light-mode.json` - All light mode issues
- `dark-mode.json` - All dark mode issues
- `comparison.json` - Structured comparison data
- `comparison.md` - Human-readable report
- `light-*.png` - Screenshots of light mode pages
- `dark-*.png` - Screenshots of dark mode pages

## Continuous Integration

The GitHub Actions workflow (`.github/workflows/accessibility-test.yml`) automatically:

1. **Runs on:**
   - Pull requests (when content/styles change)
   - Pushes to main
   - Weekly schedule (Mondays at 3 AM UTC)
   - Manual workflow dispatch

2. **Posts results:**
   - PR comments with detailed comparison
   - Issues for persistent problems
   - Workflow artifacts with full data

3. **Provides guidance:**
   - Identifies universal vs mode-specific issues
   - Recommends appropriate fixes
   - Includes code examples

## Example Fixes

### Issue in Both Modes (Universal Fix)

**Problem:** Button text has poor contrast in both light and dark modes.

**Solution 1: CSS Variables**
```css
:root {
  --button-bg: #0066cc;
  --button-text: #ffffff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --button-bg: #6699ff;
    --button-text: #000000;
  }
}

.button {
  background-color: var(--button-bg);
  color: var(--button-text);
}
```

**Solution 2: Universal Color**
```css
/* Find a color that works in both modes */
.button {
  background-color: #0055aa;  /* Works on both white and dark backgrounds */
  color: #ffffff;
}
```

### Light Mode Only Issue

**Problem:** Link color is too light on white background.

**Solution:**
```css
a {
  color: #0055cc;  /* Darker blue for better contrast on white */
}

@media (prefers-color-scheme: dark) {
  a {
    color: #6699ff;  /* Keep the working dark mode color */
  }
}
```

### Dark Mode Only Issue

**Problem:** Text is too dark on dark background.

**Solution:**
```css
body {
  color: #1a1a1a;  /* Keep working light mode color */
}

@media (prefers-color-scheme: dark) {
  body {
    color: #e5e5e5;  /* Lighter text for dark backgrounds */
  }
}
```

## Configuration

### Add/Remove URLs

Edit `.pa11yci.json`:
```json
{
  "urls": [
    "https://mgifford.github.io/inclusive-emergency-readiness/",
    "https://mgifford.github.io/inclusive-emergency-readiness/your-page/"
  ]
}
```

### Adjust Standards

Edit scripts or `.pa11yci.json`:
```json
{
  "defaults": {
    "standard": "WCAG2AAA",  // Change to AAA for stricter testing
    "runners": ["axe", "htmlcs"]  // Add additional runners
  }
}
```

## Tools Used

- **[pa11y](https://github.com/pa11y/pa11y)** - Automated accessibility testing
- **[axe-core](https://github.com/dequelabs/axe-core)** - WCAG rule engine
- **[Puppeteer](https://github.com/puppeteer/puppeteer)** - Headless browser control
- **GitHub Actions** - CI/CD automation

## References

- [CivicActions Accessibility Workflows](https://github.com/CivicActions/accessibility/tree/main/.github/workflows)
- [Automated Accessibility Testing with pa11y-ci](https://accessibility.civicactions.com/posts/automated-accessibility-testing-leveraging-github-actions-and-pa11y-ci-with-axe)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [prefers-color-scheme (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

## Contributing

When contributing CSS changes:

1. **Run tests locally** before pushing
2. **Check the comparison report** for new issues
3. **Fix issues in both modes** when possible
4. **Document color choices** in comments

## License

This testing setup follows the same license as the main repository.
