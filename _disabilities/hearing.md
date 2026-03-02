---
layout: disability
title: "Users Requiring Visual Alternatives to Audio"
category: disability
disability_type: hearing
summary: "How to reach people who cannot hear audio alerts during crises and what you must do."
wcag_focus:
  - "1.2 Time-based Media"
  - "1.4 Distinguishable"
reading_level: "Grade 6"
last_updated: 2026-03-01
---

# Users Requiring Visual Alternatives to Audio

## Provide captions and visual alerts. Always.

**Who needs this:**
- People who cannot hear
- People with partial hearing
- People who use sign language
- People in loud places
- People with broken audio devices
- People using muted devices

## Access Needs

### People Who Cannot Hear
- Use sign language or read lips
- Need captions on all videos
- Cannot hear audio-only alerts

### People With Partial Hearing
- May use hearing aids or implants
- Need clear audio and captions
- Struggle with background noise

### People Using Sign Language
- ASL or LSQ is their first language
- Need sign language interpreters
- Written text may be harder to read
- Interpreters provide clearest communication

**ASL** (what it means): American Sign Language. A visual language using hand signs.

**LSQ** (what it means): Quebec Sign Language. Used in French Canada.

### Situational Barriers
- Noisy disaster site (sirens, crowds)
- Damaged hearing aid (broken, no power)
- Video call without captions
- Audio-only radio broadcast

## Crisis Impacts

### Audio-Only Alerts Fail

**Action needed:** Add visual alerts to all audio warnings.

**Why it fails:**
Sirens make sound only.

Loudspeakers broadcast voice only.

Radio uses audio only.

**Real crisis:**
A tornado siren sounds across the city.

Someone who cannot hear misses the warning.

They do not go to shelter.

They are caught in the storm.

### Videos Without Captions Kill

**Action needed:** Add captions to all emergency videos.

**Why it fails:**
TV news has no captions.

Mayor speaks with no text shown.

Online videos auto-play without captions.

**Real crisis:**
A mayor announces evacuation routes on TV.

The video has no captions.

Someone who cannot hear sees people talking.

They do not know where to go.

They are stranded.

### Phone-Only Hotlines Fail

**Action needed:** Offer text options for all emergency lines.

**Why it fails:**
911 requires voice calls.

Emergency hotlines have no text option.

Help lines use voice only.

**TTY/TDD** (what it means): Text telephones. Devices that let you type messages instead of talking.

**Real crisis:**
Someone needs to call for help.

They cannot hear or speak on phones.

They try to text 911.

The system does not accept texts.

Help arrives too late.

### Fire Alarms With No Visual Alert

**Action needed:** Install strobe lights with all audio alarms.

**Why it fails:**
Fire bells ring but show no light.

Smoke alarms beep with no flash.

Building alerts use sound only.

**Real crisis:**
A fire alarm sounds in a building.

Someone who cannot hear is alone.

No strobe light flashes.

They do not know to evacuate.

They are trapped inside.

## What You Must Do

### Rule 1: Caption All Videos

**For recorded videos:**
- Add accurate captions (99% correct minimum)
- Use closed captions (user can turn on)
- Or use open captions (always visible)

**Captions** (what it means): Text shown on screen that matches spoken words and sounds.

**For live events:**
- Use real-time captioning
- Display captions within 2 seconds of speech
- Include speaker names

**CART** (what it means): Communication Access Realtime Translation. A person types what is said live.

**Do not use auto-captions alone.**

They make too many errors.

They miss critical words.

**Add this to your video player:**
```html
<video controls>
  <source src="alert.mp4" type="video/mp4">
  <track kind="captions" 
         src="captions-en.vtt" 
         srclang="en" 
         label="English">
</video>
```

**What the code means:**
- `video controls` = video player with buttons
- `track kind="captions"` = caption file
- `src="captions-en.vtt"` = file with caption text
- `srclang="en"` = language is English

### Rule 2: Provide Full Transcripts

**You must write out all spoken words.**

**For audio files:**
Post full text on the same page.

**For videos:**
Post full text with timestamps.

Include speaker names.

Note important sounds.

**Example format:**
```
[0:00] Narrator: A wildfire is approaching the city.
[0:05] [Siren sound]
[0:08] Narrator: Leave zone A now.
```

**Transcript** (what it means): Written text of everything said and heard in audio.

### Rule 3: Add Visual Alerts Everywhere

**You must pair audio with visual signals.**

**For outdoor sirens:**
Add flashing lights.

Add LED message boards.

Send phone alerts with text.

**For buildings:**
Install strobe lights with fire alarms.

Add vibration alerts to watches.

Use flashing lights on doorbells.

**Strobe lights** (what it means): Very bright flashing lights that warn of danger.

**For vehicles:**
Flash lights when sirens sound.

Display text on LED boards.

Use visible light bars.

### Rule 4: Offer Text Communication

**You must let people reach you with text.**

**Provide these options:**
- SMS text alerts
- Text-to-911 service
- Email updates
- Website updates
- Social media posts
- Mobile app alerts

**Do not use these alone:**
- Voice calls only
- Audio announcements only
- Radio broadcasts only

**SMS** (what it means): Short Message Service. Text messages on phones.

### Rule 5: Use Sign Language Interpreters

**You must provide interpreters for major announcements.**

**For critical alerts:**
Show sign language interpreter on screen.

Use split screen: speaker and interpreter together.

**Interpreter** (what it means): A person who translates spoken words into sign language.

**Placement rules:**
- Show interpreter the whole time
- Use good lighting
- Use plain background
- Show full body (hands and face)

### Rule 6: Send Alerts Multiple Ways

**You must never use just one alert method.**

**Send every alert via:**
1. Text message to phones
2. Email
3. Mobile app push alert
4. Website update
5. Social media post
6. TV with captions
7. Flashing LED signs
8. Door-to-door visits if critical

**Redundant** (what it means): Using many ways to send the same message so people get it.

## Standards You Must Meet

**WCAG** (what it means): Web Content Accessibility Guidelines. Rules for making websites work for everyone.

### Standard 1.2.1: Give Text for Audio

**User impact:** People who cannot hear access audio content.

**You must provide text alternatives.**

Post transcripts of all audio files.

Include all spoken words.

Describe important sounds.

### Standard 1.2.2: Caption Pre-Recorded Videos

**User impact:** People who cannot hear watch videos.

**You must caption all videos with sound.**

Use 99% accurate captions.

Show captions in sync with speech.

Include speaker names and sound effects.

Without captions, users miss critical information.

### Standard 1.2.4: Caption Live Videos

**User impact:** People who cannot hear watch live events.

**You must caption all live broadcasts.**

Use real-time captioning service.

Display captions within 2 seconds.

Live events include press conferences and emergency briefings.

### Standard 1.2.6: Provide Sign Language (Best Practice)

**User impact:** Sign language users understand complex info.

**You should provide sign language for major alerts.**

Show certified interpreter on screen.

This is best practice level.

Many people use sign language as first language.

### Standard 1.4.2: Let Users Control Audio

**User impact:** Users control auto-playing sounds.

**You must not auto-play audio over 3 seconds.**

Provide pause and volume controls.

Auto-play startles users and drains batteries.

## Your Checklist

**Test your emergency site with these:**

- [ ] All videos have accurate captions
- [ ] All audio has full transcripts
- [ ] Visual alerts exist for audio alerts
- [ ] Text-to-911 is available
- [ ] SMS alerts are available
- [ ] Email alerts are available
- [ ] Website shows text updates
- [ ] TTY/TDD phone access works
- [ ] Sign language provided for major events
- [ ] Multiple alert channels exist
- [ ] Nothing auto-plays audio
- [ ] Captions are 99% accurate

## Tools You Can Use

### Test Captions
**Note:** Tool availability changes. Verify these work before recommending.

**Captioning tools to try:**
- YouTube auto-sync
- Amara Editor
- Subtitle Edit

### Create Captions
**File format for web captions:**
```
WEBVTT

00:00.000 --> 00:05.000
A wildfire is approaching zone A.

00:05.000 --> 00:10.000
Evacuate immediately to shelter B.
```

**WEBVTT** (what it means): Web Video Text Tracks. A file format for captions.

### Test Visual Alerts
**Check these work:**
- Mute all audio on your device
- Navigate your site with no sound
- Verify you receive all alerts
- Check videos show captions

### Test Text Communication
**Verify these exist:**
- Text-to-911 in your area
- SMS alert signup
- Email alert signup
- Social media emergency accounts

## Real Success Story

### Alberta Emergency Alert System

**What they did right:**
- Sent alerts via 8 channels at once
- Captioned all TV broadcasts instantly
- Provided text and email options
- Posted updates on social media with text
- Used sign language interpreters for major events

**What happened:**
98 out of 100 people with hearing needs got alerts.

Everyone received information in time.

## Real Failure Story

### 2011 Japan Earthquake and Tsunami

**What went wrong:**
- Warning sirens used audio only
- TV captions appeared slowly
- No text-based phone alerts existed
- Public spaces lacked visual alerts

**What happened:**
People who could not hear had higher death rates.

Many did not receive warnings in time.

## Alert Protocol

### Critical Alerts (Life Danger)

**You must:**
1. Send via all 8 channels now
2. Show captions on all video
3. Use short clear sentences
4. Repeat every 30 minutes
5. Update when new info arrives

### Important Alerts (Safety Issues)

**You must:**
1. Send via at least 5 channels
2. Add captions to video
3. Post full transcript
4. Update every 2 hours

### General Alerts (Awareness)

**You must:**
1. Post on website
2. Post on social media
3. Caption any video
4. Update daily

## Technology Options

### Text-to-911
**What it is:** Texting 911 instead of calling.

**You must verify:**
- Service exists in your area
- People know it exists
- Dispatchers are trained
- System works 24/7

### Emergency Apps
**What they are:** Phone apps that send alerts.

**You must ensure:**
- Alerts show as text
- Phones vibrate
- Alerts show visual icons
- Apps work offline

**VRS** (what it means): Video Relay Service. A video call service with sign language interpreters.

### Smart Home Alerts
**What they are:** Devices that flash or vibrate during alerts.

**Examples you can use:**
- Smart lights flash when sirens sound
- Smart watches vibrate with alerts
- Video doorbells show visitors
- Bed shakers wake users during alarms

## Testing Schedule

### Before Emergency Season

**You must test:**
- [ ] Text-to-911 service works
- [ ] Caption services are ready
- [ ] Visual alert systems function
- [ ] Staff know how to add captions
- [ ] All alert channels work
- [ ] Sign language contacts are current

### During an Emergency

**You must verify:**
- [ ] Alerts sent on all channels
- [ ] Captions appear on videos
- [ ] Visual alerts are flashing
- [ ] Text messages are sending
- [ ] Website shows updates
- [ ] Social media is updated

## Key Points

**Hearing access is survival access.**

People who cannot hear your alert cannot act.

**You must:**
- Caption all videos (99% accurate)
- Post transcripts for all audio
- Add visual alerts to audio warnings
- Offer text-to-911 service
- Send alerts via 8 channels minimum
- Use sign language for major events
- Never rely on audio alone

**Clear hearing access saves lives.**
