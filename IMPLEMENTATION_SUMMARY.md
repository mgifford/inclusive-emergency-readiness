# Implementation Summary: Light/Dark Mode Accessibility Testing

## Overview

This implementation adds comprehensive accessibility testing that checks the site in both **light mode** and **dark mode**, addressing the critical issue that standard accessibility tools like axe-core only test in default (light) mode by default.

## Problem Statement

The site uses `@media (prefers-color-scheme: dark)` to automatically adapt to user preferences. However:
- axe-core doesn't test in both light and dark modes by default
- Dark mode issues can be missed entirely
- No way to distinguish between issues needing universal fixes vs. mode-specific fixes

## Solution

Created an automated testing system that:
1. Tests each page in both light and dark modes
2. Identifies issues uniquely per mode and aggregated across modes
3. Categorizes issues into three types:
   - **Both Modes** - Need universal color solution
   - **Light Only** - Need light-mode-specific fix
   - **Dark Only** - Need dark-mode-specific fix
4. Generates actionable reports with fix recommendations

## Files Created

### Configuration
- `package.json` - Dependencies (pa11y@8.0.0, axe-core, puppeteer)
- `.pa11yci.json` - Test configuration for 7 key pages

### Test Scripts
- `scripts/test-light-mode.js` - Tests in default (light) mode
- `scripts/test-dark-mode.js` - Tests with prefers-color-scheme: dark
- `scripts/compare-results.js` - Compares and categorizes results
- `scripts/validate.js` - Validates setup and logic

### CI/CD
- `.github/workflows/accessibility-test.yml` - Automated workflow

### Documentation
- `ACCESSIBILITY_TESTING.md` - Complete guide with examples

### Configuration Updates
- `.gitignore` - Excludes test result artifacts

## How It Works

### 1. Testing Process

**Light Mode Test:**
```bash
npm run test:a11y-light
```
- Uses default browser rendering
- Tests each URL with axe-core
- Saves results to `.a11y-results/light-mode.json`

**Dark Mode Test:**
```bash
npm run test:a11y-dark
```
- Emulates `prefers-color-scheme: dark` via Puppeteer
- Tests each URL with axe-core
- Saves results to `.a11y-results/dark-mode.json`

### 2. Issue Identification

Each issue gets two identifiers:

**Unique ID:** `URL + XPath + Axe Rule + Mode`
- Example: `https://example.com/::#header::color-contrast::light`
- Identifies specific instance in specific mode

**Aggregate ID:** `URL + XPath + Axe Rule`
- Example: `https://example.com/::#header::color-contrast`
- Groups same pattern across modes

### 3. Comparison & Categorization

```bash
npm run test:a11y-compare
```

The comparison script:
1. Loads both result sets
2. Builds maps by aggregateId
3. Identifies which issues appear in:
   - Both modes (aggregateId in both maps)
   - Light only (aggregateId only in light map)
   - Dark only (aggregateId only in dark map)
4. Generates reports with recommendations

### 4. Reporting

**JSON Report** (`.a11y-results/comparison.json`):
- Structured data for programmatic use
- Full issue details for each category

**Markdown Report** (`.a11y-results/comparison.md`):
- Human-readable format
- Includes fix recommendations
- Example code snippets
- Posted to PRs and issues

## CI/CD Workflow

The GitHub Actions workflow (`.github/workflows/accessibility-test.yml`):

**Triggers:**
- Pull requests (when content/styles change)
- Pushes to main branch
- Weekly schedule (Mondays at 3 AM UTC)
- Manual workflow dispatch

**Process:**
1. Install dependencies
2. Run light mode tests
3. Run dark mode tests
4. Compare results
5. Post PR comment with results
6. Create/update issue if problems found
7. Upload artifacts (JSON, markdown, screenshots)

**Output:**
- PR comments with detailed comparison
- Issues for persistent problems
- Workflow artifacts with full data
- Step summary in Actions UI

## Example Output

### Issues in Both Modes 🚨
```
Button contrast fails in both modes
URL: https://example.com/
Element: .btn-primary
Issue: color-contrast
Recommendation: Use CSS variables with mode-specific values
```

### Light Mode Only 🌞
```
Link color too light on white background
URL: https://example.com/
Element: a.nav-link
Issue: color-contrast
Recommendation: Darken color in base stylesheet
```

### Dark Mode Only 🌙
```
Text too dark on dark background
URL: https://example.com/
Element: .card-text
Issue: color-contrast
Recommendation: Lighten color in @media (prefers-color-scheme: dark) block
```

## Key Design Decisions

### Why pa11y + axe-core?
- Industry standard for automated accessibility testing
- Comprehensive WCAG rule coverage
- Puppeteer integration for media query emulation
- Similar to CivicActions' proven approach

### Why separate light/dark tests?
- Ensures complete coverage of both modes
- Allows mode-specific emulation
- Generates separate result sets for comparison
- Produces visual screenshots of each mode

### Why aggregate IDs?
- Enables cross-mode pattern matching
- Identifies issues needing universal vs. mode-specific fixes
- Reduces noise by grouping related issues
- Provides actionable categorization

### Why three categories?
- **Both Modes** = highest priority (fundamental color problem)
- **Mode-specific** = lower priority (contextual issue)
- Clear guidance on appropriate fix strategy

## Validation

Run validation to verify setup:
```bash
npm run validate
```

This checks:
- All required files exist
- Configuration is valid
- Comparison logic works with mock data
- Output formats are correct

## Testing Locally

```bash
# Install dependencies
npm install

# Validate setup
npm run validate

# Run light mode tests
npm run test:a11y-light

# Run dark mode tests
npm run test:a11y-dark

# Compare results
npm run test:a11y-compare

# View results
cat .a11y-results/comparison.md
```

## Future Enhancements

Potential improvements:
- Add forced-colors mode testing (Windows High Contrast)
- Test with different viewport sizes
- Add color-blind simulation testing
- Generate visual regression screenshots
- Integrate with other accessibility tools (WAVE, Lighthouse)

## References

- [CivicActions Accessibility Workflows](https://github.com/CivicActions/accessibility/tree/main/.github/workflows)
- [Automated Testing with pa11y-ci and axe](https://accessibility.civicactions.com/posts/automated-accessibility-testing-leveraging-github-actions-and-pa11y-ci-with-axe)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [prefers-color-scheme (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

## Success Criteria

✅ Tests run in both light and dark modes
✅ Issues are uniquely identified per mode
✅ Issues are aggregated across modes
✅ Three-tier categorization (both/light/dark)
✅ Actionable recommendations provided
✅ CI/CD workflow automated
✅ PR comments and issue creation
✅ Complete documentation
✅ Validation script confirms integrity

## Maintenance

**Weekly Schedule:**
- Tests run automatically every Monday
- Results posted to issues if problems found
- Review and fix high-priority issues

**PR Workflow:**
- Tests run on every PR with content/style changes
- Results posted as PR comment
- Review before merging

**Manual Testing:**
- Run locally before major CSS changes
- Use validation script to verify setup
- Check comparison reports for new patterns
