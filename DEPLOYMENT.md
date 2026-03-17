---
layout: default
title: "Deployment Guide"
summary: "How to deploy and maintain this Jekyll-based emergency communication resource on GitHub Pages."
reading_level: "Grade 6"
last_updated: 2026-03-17
---

# Deployment Guide

## Resilience Comms: The Inclusive Emergency Blueprint

This guide explains how to deploy and maintain this Jekyll-based emergency communication resource.

> **Important**: Before contributing, review our governance documents:
> - [AGENTS.md](AGENTS.md) - Protocols for AI and human contributors
> - [ACCESSIBILITY.md](ACCESSIBILITY.md) - Our accessibility commitment
> - [SUSTAINABILITY.md](SUSTAINABILITY.md) - Performance and resilience standards

## Prerequisites

- Ruby 2.7 or higher
- Bundler gem
- Git
- GitHub account (for GitHub Pages deployment)

## Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/mgifford/inclusive-emergency-readiness.git
cd inclusive-emergency-readiness
```

### 2. Install Dependencies

```bash
# Install Bundler if not already installed
gem install bundler

# Install Jekyll and dependencies
bundle install
```

### 3. Run Locally

```bash
# Serve the site locally
bundle exec jekyll serve

# Site will be available at http://localhost:4000
```

### 4. Build for Production

```bash
# Build static site
bundle exec jekyll build

# Output will be in _site/ directory
```

## GitHub Pages Deployment

### Option 1: Automatic Deployment (Recommended)

This repository is configured for automatic GitHub Pages deployment.

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://[username].github.io/inclusive-emergency-readiness`

### Option 2: Manual Configuration

If automatic deployment isn't working:

1. Go to repository Settings > Pages
2. Set Source to "Deploy from a branch"
3. Set Branch to `main` and folder to `/ (root)`
4. Click Save
5. Site will build in a few minutes

## GitHub Actions Setup

Two workflows are included:

### Link-Rot Guard

**Purpose:** Weekly check of all external URLs. Dead links are reported.

**Schedule:** Every Sunday at 2 AM UTC

**Manual trigger:** Go to Actions > Link Rot Guard > Run workflow

**Configuration:** `.github/workflows/link-checker.yml`

### Linter of Clarity

**Purpose:** Readability checks on all Markdown files (Flesch-Kincaid).

**Triggers:** 
- Pull requests that modify Markdown files
- Pushes to main branch

**Configuration:** `.github/workflows/readability-check.yml`

## Customization

### Site Configuration

Edit `_config.yml` to customize:
- Site title and description
- Author information
- Social media links
- Theme settings

### Styling

Edit stylesheets in `assets/css/`:
- `emergency.scss` - Main stylesheet
- `print.scss` - Print-specific styles

### Content

Add or modify content in:
- `_disabilities/` - Disability impact pages
- `_toolkits/` - Tactical guides
- `_templates/` - Emergency alert templates
- `framework/` - Framework documentation

### Layouts

Modify layouts in `_layouts/`:
- `default.html` - Base page layout
- `disability.html` - Disability page layout

### Includes

Modify reusable components in `_includes/`:
- `header.html` - Site header
- `footer.html` - Site footer
- `navigation.html` - Main navigation

## PWA Configuration

### Manifest

Edit `manifest.json` to customize PWA settings:
- App name
- Icons (add icon images to `assets/images/`)
- Theme colors
- Shortcuts

### Service Worker

Edit `assets/js/service-worker.js` to customize offline behavior:
- Cache strategy
- Precached URLs
- Offline fallback

## Performance Optimization

### Images

1. Add images to `assets/images/`
2. Use WebP format for best compression
3. Provide alt text for all images
4. Keep images under 100KB when possible

### CSS

The stylesheets are already optimized:
- Minimal CSS
- No unnecessary decorations
- High contrast built-in
- Print-optimized

### JavaScript

JavaScript is minimal and optional:
- `mode-toggle.js` - Accessibility mode switching
- `service-worker.js` - Offline capability

Site works fully without JavaScript.

## Content Guidelines

### Writing Style

- Grade 6 reading level or lower
- Short sentences (15 words max)
- Active voice
- One idea per line/paragraph
- No jargon

### Accessibility

All content must meet:
- WCAG 2.2 Level AA minimum
- Screen reader compatible
- Keyboard navigable
- High contrast
- Print-friendly

### Readability

Run readability checks:
```bash
# The readability workflow will check automatically
# Or use online tools:
# - Hemingway Editor (hemingwayapp.com)
# - Readable.com
# - WebFX Readability Test
```

## Testing

### Before Each Release

- [ ] Test all links (manual or wait for Link-Rot Guard)
- [ ] Check readability of new content (Linter of Clarity will flag issues)
- [ ] Test with screen reader (NVDA or VoiceOver)
- [ ] Test keyboard navigation (Tab key)
- [ ] Test on mobile device
- [ ] Test print output
- [ ] Test offline (airplane mode)
- [ ] Verify all images have alt text

### Automated Testing

Workflows run automatically:
- **Link checker:** Weekly on Sundays
- **Readability:** On every PR and push to main

### Manual Testing Tools

- **WAVE:** Browser extension for accessibility
- **Lighthouse:** Built into Chrome DevTools
- **axe DevTools:** Accessibility testing
- **Screen readers:** NVDA (Windows), VoiceOver (Mac)

## Maintenance

### Regular Tasks

**Weekly:**
- Review Link-Rot Guard reports
- Update any broken links
- Check for new issues/discussions

**Monthly:**
- Review analytics (if implemented)
- Update content based on feedback
- Check for security updates (`bundle update`)

**Quarterly:**
- Full content review
- Update statistics and case studies
- Test all workflows
- Review and respond to contributions

**Annually:**
- Major content refresh
- Framework updates (WCAG, WSG)
- Design refresh if needed

## Troubleshooting

### Jekyll Build Fails

**Problem:** `bundle exec jekyll build` fails

**Solutions:**
1. Update dependencies: `bundle update`
2. Check Ruby version: `ruby --version` (need 2.7+)
3. Clear cache: `bundle exec jekyll clean`
4. Reinstall: `bundle install`

### GitHub Pages Not Updating

**Problem:** Changes pushed but site doesn't update

**Solutions:**
1. Check Actions tab for build errors
2. Verify GitHub Pages is enabled in Settings
3. Check `_config.yml` for errors
4. Try force rebuild (Settings > Pages > Rebuild)

### Links Not Working

**Problem:** Internal links return 404

**Solutions:**
1. Check file paths (case-sensitive)
2. Verify files are in correct collections (`_disabilities`, `_toolkits`, `_templates`)
3. Check `_config.yml` collection configuration
4. Clear browser cache

### Styles Not Applying

**Problem:** CSS not loading or applying

**Solutions:**
1. Check SCSS syntax in `assets/css/`
2. Verify `_config.yml` includes `sass` configuration
3. Clear Jekyll cache: `bundle exec jekyll clean`
4. Check browser console for errors

## Support

### Getting Help

- **GitHub Issues:** Report bugs or request features
- **GitHub Discussions:** Ask questions, share ideas
- **Documentation:** Review this guide and README.md

### Contributing

Before contributing, please review our governance documents:
- **[AGENTS.md](AGENTS.md)** - Protocols and constraints for contributors
  - Technical mandates (500KB page limit, Grade 6 reading level)
  - Automated workflows and quality checks
  - Disability-specific design requirements
- **[ACCESSIBILITY.md](ACCESSIBILITY.md)** - Accessibility standards and commitment
  - WCAG 2.2 Level AA minimum requirement
  - Emergency-specific features (One Idea Per Line)
  - Feedback process for accessibility barriers
- **[SUSTAINABILITY.md](SUSTAINABILITY.md)** - Performance and resilience standards
  - Low-bandwidth mandate
  - Energy preservation guidelines
  - Asset optimization requirements

See [README.md](README.md) for general contribution information.

All contributions must:
- Follow accessibility guidelines (WCAG 2.2 Level AA)
- Use plain language (Grade 6 reading level target)
- Stay under 500KB page weight
- Include tests when applicable
- Be documented
- Pass automated Link-Rot and Readability checks

## Security

### Reporting Issues

If you discover a security vulnerability:
1. DO NOT open a public issue
2. Email project maintainers
3. Include detailed description
4. Allow time for fix before disclosure

### Updates

Keep dependencies updated:
```bash
# Update all gems
bundle update

# Update specific gem
bundle update jekyll
```

## License

This project is licensed under the Creative Commons Attribution 4.0 International License (CC-BY-4.0). See [LICENSE](LICENSE) file for details.

This license maximizes sharing and adaptation of emergency preparedness information worldwide.

## Credits

Built with:
- Jekyll (static site generator)
- GitHub Pages (hosting)
- GitHub Actions (automation)

Follows:
- WCAG 2.2 (accessibility)
- WSG 1.0 (sustainability)
- Plain Language standards

## Additional Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [Web Sustainability Guidelines](https://w3c.github.io/sustyweb/)
- [Plain Language Guidelines](https://www.plainlanguage.gov/)

---

**Questions?** Open an issue or discussion on GitHub.

**Ready to Deploy?** Push to `main` and let GitHub Actions handle it!
