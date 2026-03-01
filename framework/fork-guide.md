---
layout: default
title: "Fork Guide: Adapt This Repository for Your Municipality"
category: framework
summary: "Step-by-step guide to fork and customize this emergency preparedness site for your local area"
reading_level: "Grade 6"
last_updated: 2026-03-01
---

# Fork Guide for Municipalities

## What Is Forking?

**Forking** means copying a project.

You get your own version.

You can change it without affecting the original.

**Goal:** Get a working emergency site in hours, not months.

---

## Why Fork This Repository?

### What You Get

✅ **Fully accessible** - WCAG 2.2 compliant
✅ **Mobile-friendly** - Works on all devices
✅ **Low bandwidth** - Loads on weak signals
✅ **Offline-capable** - Works without internet
✅ **Print-ready** - Makes good emergency binders
✅ **Plain language** - Grade 6 reading level
✅ **Free to use** - CC-BY-4.0 license

### What You Change

- Your city or county name
- Local emergency numbers
- Shelter locations
- Local resources
- Your branding (logo, colors)

### What Stays the Same

- All accessibility features
- All sustainability features
- All plain language guidelines
- All technical standards

---

## Quick Start (5 Steps)

### Step 1: Fork on GitHub

1. Go to: https://github.com/mgifford/inclusive-emergency-readiness
2. Click the **Fork** button (top right)
3. Choose your organization or personal account
4. Wait for the copy to finish

**Result:** You now have your own copy of the repository.

### Step 2: Update Local Information

Files to change:

#### A. Update Contact Info (`_config.yml`)

```yaml
title: "Your City Emergency Guide"
description: "Emergency preparedness for [Your City]"
url: "https://yourcity.github.io"
baseurl: "/emergency-guide"
```

#### B. Update Emergency Numbers (`index.md`)

Find the section with:
- 911 or local emergency
- Police non-emergency
- Fire department
- Poison control
- Hospital locations

Change to your local numbers.

#### C. Update Shelter List (`_data/shelters.yml`)

If this file exists, update it.

If not, create it:

```yaml
shelters:
  - name: "Community Center"
    address: "123 Main St"
    phone: "555-0100"
    accessible: true
    capacity: 200
  
  - name: "High School Gym"
    address: "456 School Rd"
    phone: "555-0200"
    accessible: true
    capacity: 500
```

#### D. Update Footer Links (`_includes/footer.html`)

Change social media links.

Change contact email.

Keep the credits section.

### Step 3: Test Locally

**Option A: With Docker**

```bash
docker run -v $(pwd):/site bretfisher/jekyll-serve
```

Open: http://localhost:4000

**Option B: With Ruby**

```bash
bundle install
bundle exec jekyll serve
```

Open: http://localhost:4000

**Check:**
- All pages load
- Links work
- Your changes show up
- No broken images

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** (left sidebar)
4. Set **Source** to: Deploy from a branch
5. Set **Branch** to: main and /root
6. Click **Save**

**Wait 2-5 minutes.**

Your site will be live at:
`https://[your-username].github.io/[your-repo-name]/`

### Step 5: Verify Deployment

Go to your new URL.

Check:
- ✅ Site loads
- ✅ Your local info shows
- ✅ Navigation works
- ✅ Mobile view works

**Done!** You have a working emergency site.

---

## Detailed Customization

### Branding

#### Logo

Replace: `/assets/images/IER-a11y-logo.svg`

**Requirements:**
- SVG format (for scaling)
- Transparent background
- High contrast colors
- Under 10KB file size

**Tip:** Keep the original as `logo-original.svg` for reference.

#### Colors

Edit: `/assets/css/emergency.scss`

Find:

```scss
// Emergency red
$emergency-red: #cc0000;

// High contrast
$text-color: #1a1a1a;
$bg-color: #ffffff;
```

Change to your city colors.

**Rules:**
- Keep contrast ratio 7:1 minimum
- Test with a contrast checker
- Don't use color alone to convey info

#### Fonts

We use system fonts for performance.

If you must change fonts:

1. Use only 1 or 2 font families
2. Host fonts locally (don't use Google Fonts)
3. Subset fonts to reduce size
4. Add font files to `/assets/fonts/`

**Warning:** Custom fonts increase page size.

### Content Pages

#### Add a New Page

1. Create a new `.md` file in the root or a folder
2. Add front matter:

```yaml
---
layout: default
title: "Your Page Title"
category: guides
summary: "Short description"
reading_level: "Grade 6"
---
```

3. Write content in Markdown
4. Use plain language
5. Run readability check

#### Add a New Section

1. Create a folder (e.g., `_guides`)
2. Add files to that folder
3. Update `_config.yml`:

```yaml
collections:
  guides:
    output: true
    permalink: /guides/:name/
```

4. Create an index page: `guides/index.md`

### Data Files

Store repeated info in `_data/` folder.

**Example: Emergency Contacts**

Create: `_data/contacts.yml`

```yaml
emergency:
  - name: "Fire"
    number: "911"
    type: "Emergency"
  - name: "Police"
    number: "555-0100"
    type: "Non-emergency"
```

Use in pages:

```liquid
{% for contact in site.data.contacts.emergency %}
  <p>{{ contact.name }}: {{ contact.number }}</p>
{% endfor %}
```

### Remove What You Don't Need

**Don't want disability guides?**

Delete the `_disabilities/` folder.

**Don't want toolkits?**

Delete the `_toolkits/` folder.

**Update navigation:**

Edit: `_includes/header.html`

Remove menu items you don't need.

---

## Advanced: Custom Domain

### Buy a Domain

Examples:
- `emergency.yourcity.gov`
- `prepare.yourcity.org`

### Point Domain to GitHub Pages

1. In your domain registrar, add a CNAME record:
   - Name: `emergency` (or `prepare`, etc.)
   - Value: `[your-username].github.io`

2. In your repository, create a file: `CNAME`
   - Content: `emergency.yourcity.gov`

3. In GitHub Settings > Pages:
   - Custom domain: `emergency.yourcity.gov`
   - Check "Enforce HTTPS"

**Wait 24 hours** for DNS to update.

---

## Maintenance

### Weekly Tasks

- Check for broken links (automated)
- Review readability reports (automated)
- Update emergency contacts if changed

### Monthly Tasks

- Review accessibility (manual)
- Test on real devices
- Update content as needed

### Yearly Tasks

- Review all content
- Update links to external resources
- Check compliance with latest standards

### Automated Workflows

These run automatically:

1. **Link Checker** (weekly)
   - Finds broken links
   - Suggests Archive.org alternatives

2. **Readability Linter** (on every push)
   - Checks reading level
   - Flags complex text

**See:** `.github/workflows/` for details.

---

## Getting Help

### If You're Stuck

1. **Check the docs:**
   - [DEPLOYMENT.md](/DEPLOYMENT.md)
   - [STRUCTURE.md](/STRUCTURE.md)
   - [Jekyll Documentation](https://jekyllrb.com/docs/)

2. **Open an Issue:**
   - Go to the original repo
   - Click "Issues"
   - Describe your problem
   - We'll help!

3. **Ask the community:**
   - Check existing Issues
   - Read closed Pull Requests
   - Learn from others' solutions

### Common Problems

**Problem:** Site not showing up on GitHub Pages

**Solution:**
- Check Settings > Pages is enabled
- Check your `_config.yml` has correct `baseurl`
- Wait 5 minutes after enabling

**Problem:** CSS not loading

**Solution:**
- Check `assets/css/emergency.scss` has front matter (three dashes at top)
- Check `_config.yml` has correct `baseurl`
- Clear browser cache

**Problem:** Links broken after deployment

**Solution:**
- Use `{{ site.baseurl }}` in links
- Example: `[Link]({{ site.baseurl }}/page.html)`
- Not: `[Link](/page.html)`

---

## Sharing Your Fork

### Tell Us About It

We want to know who's using this!

**Open an Issue** on the original repository:
- Title: "Fork: [Your City Name]"
- Include your deployment URL
- Share what you customized
- Tell us what worked well

We'll add you to a "Community Forks" page.

### Share Your Improvements

Made something better?

**Send a Pull Request** back to the original:
1. Create a new branch
2. Make your improvement
3. Write a clear description
4. Submit to original repo

**Examples of good contributions:**
- Better plain language
- Fixed accessibility issue
- Improved mobile layout
- Added new toolkit

---

## Legal Requirements

### Attribution

You must give credit to the original.

**How:**
Keep the footer text:
"Based on [Inclusive Emergency Readiness Guide](https://github.com/mgifford/inclusive-emergency-readiness)"

Or add a page called "Credits."

### License

This work is **CC-BY-4.0**.

**You can:**
- Use it commercially
- Modify it
- Distribute it
- Use it privately

**You must:**
- Give credit
- Link to the license
- Indicate changes

**You cannot:**
- Hold the creators liable
- Use without attribution

---

## Case Studies

### Example 1: Small Town (Population 10,000)

**Time to deploy:** 4 hours

**Changes made:**
- Updated contact info
- Added 3 local shelters
- Changed logo and colors
- Removed advanced toolkits

**Cost:** $0 (GitHub Pages is free)

### Example 2: County Government (Population 500,000)

**Time to deploy:** 2 weeks

**Changes made:**
- Custom domain (`emergency.county.gov`)
- Translated to 3 languages
- Added county-specific evacuation routes
- Integrated with existing alert system

**Cost:** Domain registration + translation services

### Example 3: Indigenous Community

**Time to deploy:** 1 week

**Changes made:**
- Added Indigenous language content
- Customized for remote location (satellite internet)
- Added traditional knowledge section
- Removed urban-focused content

**Cost:** $0 (used GitHub and community translators)

---

## Quality Checklist

Before going live, check:

### Accessibility
- [ ] All images have alt text
- [ ] Headings are in logical order
- [ ] Forms have labels
- [ ] Color contrast is 7:1
- [ ] Keyboard navigation works

### Performance
- [ ] Pages under 500KB
- [ ] Load time under 3 seconds on 3G
- [ ] No blocking JavaScript
- [ ] Images optimized

### Content
- [ ] Reading level Grade 6 or lower
- [ ] Active voice used
- [ ] Short sentences
- [ ] No jargon
- [ ] Local info updated

### Technical
- [ ] All links work
- [ ] Mobile view works
- [ ] Print CSS works
- [ ] Offline mode works (PWA)

### Compliance
- [ ] WCAG 2.2 AA met
- [ ] WSG 1.0 guidelines followed
- [ ] License attribution included

---

## Next Steps

1. **Fork the repository** today
2. **Update local info** this week
3. **Deploy to GitHub Pages** this month
4. **Tell us about it** when ready
5. **Share improvements** as you go

---

## Related Resources

- [CAN-ASC-6.4 Case Study]({{ '/framework/can-asc-case-study.html' | relative_url }})
- [Digital Egress Checklist]({{ '/toolkits/digital-egress.html' | relative_url }})
- [Deployment Guide](/DEPLOYMENT.md)
- [Structure Documentation](/STRUCTURE.md)

---

**"Emergency preparedness should be forkable. Start now."**
