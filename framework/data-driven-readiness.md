---
layout: default
title: "Data-Driven Readiness: Protecting Electricity-Dependent Populations"
category: framework
summary: "Technical guide on leveraging functional-needs databases to identify and protect electricity-dependent individuals during emergencies."
reading_level: "Grade 6"
last_updated: 2026-03-02
---

# Data-Driven Readiness: Protecting Electricity-Dependent Populations

## Why This Matters

**Critical Reality:** Thousands of people rely on electricity for life-sustaining medical equipment.

When power fails:
- Oxygen concentrators stop working
- Ventilators shut down
- Electric wheelchairs cannot recharge
- Home dialysis equipment fails
- Feeding pumps stop

**The Challenge:** How do emergency responders find these people before it's too late?

**The Solution:** Data-driven readiness systems that identify at-risk populations before disasters strike.

---

## The US Model: HHS emPOWER Program

**Official Resource:** <a href="https://empowerprogram.hhs.gov/">empowerprogram.hhs.gov</a>

### What is emPOWER?

**Definition:** A federal program that uses Medicare claims data to identify people who depend on electricity-powered medical equipment.

**Data Source:** Centers for Medicare & Medicaid Services (CMS)

**Coverage:** Medicare beneficiaries only (approximately 65 million people)

### Equipment Tracked

emPOWER identifies people using:
- Oxygen concentrators
- Ventilators
- Suction machines
- Electric wheelchairs
- Continuous Positive Airway Pressure (CPAP) machines
- Other electricity-dependent durable medical equipment

---

## Two Views of emPOWER: Planning vs. Response

### View 1: The Planning View (De-identified Data)

**What It Is:** Aggregated, anonymized data showing the density of electricity-dependent residents by geographic area.

**Who Can Access:** 
- Emergency managers
- Public health officials
- Utility companies
- Hospital administrators
- Anyone preparing for potential disasters

**Key Features:**
- Data shown at zip code or county level
- No personally identifiable information (PII)
- Updated monthly from Medicare claims
- Includes heat maps and trend data
- Free to access via the emPOWER Map website

**How It's Used - "Cold-Start" Resource Staging:**

Before an emergency happens, planners use de-identified data to:

1. **Optimize Shelter Placement**
   - Choose shelter locations with high-capacity backup generators
   - Position shelters near concentrations of at-risk residents
   - Calculate oxygen supply needs per shelter

2. **Stage Critical Resources**
   - Pre-position mobile oxygen hubs in high-density zip codes
   - Stockpile backup batteries for medical equipment
   - Stage portable generators near vulnerable populations
   - Position charging stations for electric wheelchairs

3. **Grid Prioritization**
   - Share density maps with utility companies
   - Prioritize power restoration for critical transformers
   - Identify which substations serve the most at-risk residents
   - Plan for targeted "islands of power" during extended outages

4. **Resource Allocation**
   - Calculate how many backup generators to acquire
   - Determine oxygen supply chain requirements
   - Plan transportation logistics for high-need areas

**Example Use Case:**

A county emergency manager sees that zip code 12345 has 500 residents with oxygen concentrators.

**Actions Taken:**
- Designate the nearest shelter as "oxygen-ready" with backup generators
- Pre-position 50 portable oxygen tanks
- Alert utility company to prioritize that area for restoration
- Brief EMS teams on expected demand

---

### View 2: The Response View (Identified Data)

**What It Is:** Real, identifiable data with names, addresses, and specific equipment needs.

**Who Can Access:**
- Emergency management agencies (with signed data-use agreement)
- Public health departments (authorized personnel only)
- First responders conducting wellness checks
- Evacuation teams during mandatory orders

**Access Requirements:**
- Formal data-sharing agreement with HHS
- Authorized users only (background checks)
- Secure systems with encryption
- Audit trails for all access
- Time-limited access (expires after event)

**Legal Framework:**

Access is governed by:
- **HIPAA (Health Insurance Portability and Accountability Act)** - Allows disclosure for public health emergencies
- **State emergency management laws** - Vary by state
- **Data Use Agreements** - Signed by authorized agencies before access

**How It's Used - Emergency Response:**

During an active emergency, responders use identified data to:

1. **Conduct Targeted Wellness Checks**
   - Contact individuals within 2 hours of power loss
   - Prioritize visits based on equipment criticality
   - Verify functional status of backup power
   - Offer immediate evacuation if needed

2. **Execute Priority Evacuations**
   - Identify residents who must evacuate first
   - Arrange accessible transportation
   - Ensure medical equipment can travel with patient
   - Confirm arrival at equipped shelter

3. **Track and Follow-Up**
   - Maintain contact throughout event
   - Check in every 4-6 hours during prolonged outages
   - Document status and needs
   - Coordinate with medical providers

**Example Use Case:**

Hurricane warning issued 48 hours before landfall.

**Actions Taken:**
- Emergency manager accesses identified emPOWER data
- System generates list of 150 residents in evacuation zone
- Teams begin calling each person on the list
- Those who cannot self-evacuate get priority transportation
- Teams track who evacuated, who sheltered in place, who declined assistance

---

## Ethical Protocols: Balancing Speed and Privacy

### The Crisis Dilemma

**Tension:** People need help fast, but their medical information is private.

**Balance:** Use the minimum necessary information to save lives.

### Best Practices for Handling Identified Data

**1. Access Control**
- Only authorized personnel can view identifiable data
- Use role-based access (not everyone needs names/addresses)
- Automatic logout after 15 minutes of inactivity
- All access logged with timestamps

**2. Time Limits**
- Access expires 30 days after emergency declaration ends
- Data must be deleted from local systems
- Re-authorization required for new events

**3. Communication with Residents**
- Never mention how you obtained their information
- Use general language: "We're checking on residents who may need support during the power outage"
- Respect refusals (document and move on)
- Offer options, not mandates

**4. Data Security**
- Encrypted transmission only
- No printing unless absolutely necessary
- Shred all printed materials after use
- Do not send PII via text or unencrypted email

**5. Staff Training**
- Annual HIPAA training for all users
- Specific training on emPOWER protocols
- Clear consequences for misuse
- Practice scenarios during drills

---

## Important Limitations

### What emPOWER Does NOT Include

**Population Gaps:**
- People under 65 without Medicare
- People with disabilities who have private insurance
- Equipment not covered by Medicare
- Informal or improvised medical equipment
- Recent equipment changes (1-2 month lag in data)

**Equipment Gaps:**
- Battery-powered devices (assumed to have backup)
- Manually-operated equipment
- Over-the-counter devices
- Equipment prescribed but not yet delivered

### The Zero-Baseline Warning

**Critical Understanding:** emPOWER data shows the **minimum** number of at-risk people, not the total.

**Why This Matters:**

If emPOWER shows 500 people in a county:
- ✅ At least 500 people need support
- ❌ Exactly 500 people need support

**Real number could be:**
- 750 people (younger individuals with disabilities)
- 1,000 people (private insurance holders)
- 1,500 people (including informal caregivers)

**Action:** Always plan for 2-3x the emPOWER count to account for gaps. This multiplier is a recommended practice based on field experience—track your actual vs. registered populations to refine it for your community.

---

## Global Alternatives: International Functional-Needs Systems

Different countries use different models to identify and protect electricity-dependent populations.

### Overview Table

**Note:** For screen reader users, a list-based version follows the table.

| Country | System Name | Model Type | Who Maintains | Responder Access |
|---------|-------------|------------|---------------|------------------|
| **USA** | emPOWER | Healthcare Claims | Federal Government (HHS) | Emergency managers via data-use agreement |
| **UK** | Priority Services Register (PSR) | Utility-Managed | Energy Companies | Responders coordinate with utility companies |
| **Australia** | Life Support Equipment Registers | Retailer-Managed | Energy Retailers | Emergency services request from retailers |
| **Japan** | Hinan Kodo Yoshien-sha | Municipal Census | Local Governments | Community support workers and neighbors |
| **France** | Registre Nominatif | Voluntary Municipal | Town Halls (Mairies) | Local emergency services direct access |

**List Format:**

- **USA - emPOWER:** Healthcare claims model maintained by Federal Government (HHS). Emergency managers access via data-use agreement.
- **UK - Priority Services Register (PSR):** Utility-managed model maintained by energy companies. Responders coordinate with utility companies.
- **Australia - Life Support Equipment Registers:** Retailer-managed model maintained by energy retailers. Emergency services request from retailers.
- **Japan - Hinan Kodo Yoshien-sha:** Municipal census model maintained by local governments. Community support workers and neighbors provide access.
- **France - Registre Nominatif:** Voluntary municipal model maintained by town halls (mairies). Local emergency services have direct access.

---

### United Kingdom: Priority Services Register (PSR)

**Model:** Utility-Managed

**Legal Basis:** Energy Industry regulations require energy companies to maintain registries of vulnerable customers.

**Who's Included:**
- People dependent on electricity for medical equipment
- Older adults
- People with disabilities
- People with cognitive impairments
- Families with young children

**How It Works:**

1. **Registration:**
   - Customers self-register with their energy supplier
   - Can register online, by phone, or by mail
   - Free service, no eligibility verification

2. **Data Management:**
   - Energy companies maintain individual registries
   - Data is NOT centralized nationally
   - Each supplier manages their own customers

3. **Emergency Access:**
   - During power outages, utilities contact PSR registrants first
   - Utilities may share data with emergency services during major events
   - Responders coordinate through utility company liaisons

**Responder Protocol:**

During an emergency:
- Emergency manager contacts regional utility provider
- Utility provides list of affected PSR customers (with consent protocols)
- Teams conduct wellness checks
- Utility prioritizes restoration for critical customers

**Limitations:**
- Decentralized (different suppliers, different systems)
- Voluntary registration (low opt-in rates)
- Data not accessible until emergency is active
- Customers who switch suppliers may fall through gaps

---

### Australia: Life Support Equipment Registers

**Model:** Energy Retailer-Managed

**Legal Basis:** National Energy Retail Rules require retailers to maintain registers of customers using life support equipment.

**Who's Included:**
- People using life support equipment at home
- Includes oxygen concentrators, ventilators, dialysis machines
- Must provide medical confirmation from healthcare provider

**How It Works:**

1. **Registration:**
   - Customer notifies energy retailer
   - Medical practitioner provides confirmation
   - Retailer registers customer as "life support"

2. **Protections:**
   - Retailer must give 4 days' notice for planned outages
   - Cannot disconnect for non-payment without extra protections
   - Priority restoration during unplanned outages

3. **Data Sharing:**
   - Retailers share registers with distribution network operators
   - Data can be shared with emergency services during disasters
   - Governed by state privacy laws

**Responder Protocol:**

During an emergency:
- State emergency service requests data from retailers
- Retailers provide addresses and equipment types
- Emergency workers prioritize wellness checks
- Network operators prioritize power restoration

**Limitations:**
- Requires medical confirmation (barrier to registration)
- Decentralized across multiple retailers
- Data quality varies by retailer
- Privacy laws can slow emergency access

---

### Japan: Hinan Kodo Yoshien-sha (Evacuation Support Registry)

**Model:** Community-Led Municipal Census

**Translation:** "People requiring assistance with evacuation actions"

**Legal Basis:** Disaster Countermeasures Basic Act (revised 2013)

**Who's Included:**
- Older adults living alone
- People with physical disabilities
- People with cognitive disabilities
- People with medical equipment needs

**How It Works:**

1. **Registration:**
   - Municipalities conduct census of vulnerable residents
   - Community welfare officers visit households
   - Voluntary participation with strong social encouragement
   - Creates individual evacuation plans

2. **Support Network:**
   - Each registrant assigned community supporters (family, neighbors)
   - Supporters responsible for checking on person during disaster
   - Pre-arranged evacuation assistance plans
   - Local evacuation centers identified

3. **Data Management:**
   - Maintained at municipal level (cities/towns)
   - Shared with local community associations
   - Pre-authorized access for support persons
   - Updated annually

**Responder Protocol:**

During an emergency:
- Municipal government activates community support network
- Designated supporters check on their assigned residents
- Community associations coordinate evacuations
- Municipal workers follow up on non-responses

**Strengths:**
- High registration rates (cultural emphasis on community)
- Pre-identified support persons (faster response)
- Integrated with community preparedness
- Regular updates through community connections

**Limitations:**
- Labor-intensive to maintain
- Relies on community participation
- Privacy concerns in small communities
- Support persons may be unavailable during large disasters

---

### France: Registre Nominatif (Nominative Registry)

**Model:** Voluntary Municipal Registration

**Legal Basis:** Plan Communal de Sauvegarde (Municipal Safeguard Plan) - mandated by national law

**Who's Included:**
- People who consider themselves vulnerable during emergencies
- No specific eligibility criteria
- Self-identified need

**How It Works:**

1. **Registration:**
   - Residents register with local town hall (mairie)
   - Simple form, no medical documentation required
   - Can register in person, by phone, or online
   - Registry managed by municipal emergency services

2. **Data Collected:**
   - Name, address, contact information
   - Type of vulnerability (mobility, medical, sensory)
   - Emergency contact information
   - Preferred communication method

3. **Access:**
   - Municipal emergency services have direct access
   - Firefighters and civil protection teams authorized
   - Data not shared outside municipality without consent

**Responder Protocol:**

During an emergency:
- Mayor activates Municipal Safeguard Plan
- Emergency teams receive registry list
- Teams conduct systematic check-ins with all registrants
- Transportation provided if evacuation needed
- Follow-up continues throughout event

**Strengths:**
- Simple registration (no barriers)
- Direct municipal access (fast response)
- Centralized at local level
- Clear chain of responsibility

**Limitations:**
- Voluntary (low awareness in some areas)
- Requires proactive self-identification
- Data refresh depends on municipal capacity
- Not standardized across all municipalities

---

## Implementation Best Practices: Building Your Own Registry

### The Resilience Checklist

Use this checklist to evaluate or build a functional-needs registry:

#### ✅ Registration Accessibility

- [ ] Online form that works with screen readers
- [ ] Phone registration option (multilingual)
- [ ] Paper forms available at community centers
- [ ] In-person registration at multiple locations
- [ ] Registration takes less than 10 minutes
- [ ] No medical documentation required (trust-based)
- [ ] Clear explanation of how data will be used
- [ ] Opt-in is easy; opt-out is also easy

#### ✅ Data Management

- [ ] Encrypted database with access controls
- [ ] Role-based permissions (not everyone sees everything)
- [ ] Audit logs for all data access
- [ ] Annual data refresh process
- [ ] Automated reminders for registrants to update
- [ ] System to flag outdated records (>12 months)
- [ ] Integration with 311/911 systems
- [ ] Backup systems in multiple locations

#### ✅ Privacy Protections

- [ ] Clear privacy policy in plain language
- [ ] Data use limited to emergencies only
- [ ] PII not shared with third parties
- [ ] Regular security audits
- [ ] Staff training on HIPAA/privacy laws
- [ ] Consequences for data misuse
- [ ] Registrants can request data deletion
- [ ] Notification if data breach occurs

#### ✅ Emergency Protocols

- [ ] Pre-authorized access for emergency responders
- [ ] 24/7 access to registry during events
- [ ] Mobile-friendly interface for field teams
- [ ] Printable lists for areas without connectivity
- [ ] Status tracking (contacted, evacuated, refused)
- [ ] Integration with 911 dispatch
- [ ] Multi-language support for responders
- [ ] After-action review process to improve

#### ✅ Data Quality and Refresh

- [ ] Monthly reminder emails to registrants
- [ ] Annual renewal requirement
- [ ] Incentives for updating information
- [ ] Partner with healthcare providers for referrals
- [ ] Cross-reference with utility PSR data
- [ ] Community outreach at health fairs
- [ ] Faith community partnerships
- [ ] School nurse referrals for families

---

## Critical Success Factors

### 1. Data Refresh Rate

**The Challenge:** People's needs change constantly.

**Estimated Decay Rates (Based on Municipal Experience):**

*Note: These are approximations based on emergency management experience, not rigorous research. Your community's rates may vary.*

- **0-6 months:** Approximately 90-95% accurate
- **6-12 months:** Approximately 75-85% accurate
- **12-18 months:** Approximately 50-60% accurate
- **18+ months:** Essentially unreliable

**Why Data Decays:**
- People move
- Medical conditions change
- Equipment no longer needed
- Contact information becomes outdated

**Best Practice:** 
- Require annual renewal
- Send quarterly check-in emails
- Flag records older than 12 months
- Plan for 25% annual turnover

**Gold Standard (emPOWER):**
- Updates monthly from Medicare claims
- Automatic capture of new equipment
- No manual renewal needed
- Still has 1-2 month lag time

---

### 2. Balancing Privacy and Speed

**The Tension:** Privacy laws protect people, but can slow emergency response.

**Framework:**

| Situation | Access Level | Legal Basis |
|-----------|--------------|-------------|
| Planning (pre-event) | De-identified data only | Public health authority |
| Imminent threat (24-48 hrs) | Identified data with safeguards | Emergency declaration |
| Active emergency (ongoing) | Full access for authorized responders | Immediate danger to life |
| Post-event (recovery) | Limited access, case-by-case | Specific authorization |

**Key Principle:** Use the **minimum necessary** information to accomplish the task.

**Examples:**

- **Planning shelter locations:** Only need zip code-level counts (no names)
- **Wellness checks:** Need addresses and equipment type (may not need diagnosis)
- **Evacuation assistance:** Need full contact information and specific needs

---

### 3. The Zero-Baseline Principle

**Core Truth:** No registry is ever 100% complete.

**Why Registries Are Incomplete:**

1. **Voluntary participation barriers:**
   - Privacy fears
   - Distrust of government
   - Stigma around disability
   - Language barriers
   - Digital access issues

2. **Rapid population changes:**
   - People move
   - Needs change
   - New equipment prescribed
   - Equipment no longer needed

3. **System exclusions:**
   - Undocumented residents
   - Homeless populations
   - People without formal healthcare
   - Informal medical equipment
   - Temporary medical needs

**Operational Impact:**

If your registry shows 500 people:
- **Plan for:** 1,000-1,500 people (2-3x multiplier recommended by emergency management practitioners)
- **Budget for:** Supplies for 1,500 people
- **Expect:** More people showing up at shelters than on your list

*Note: The 2-3x multiplier is a recommended practice based on field experience. Your community may need a different multiplier based on local opt-in rates and demographic factors. Track actual vs. registered populations during each event to refine your multiplier.*

**Mitigation Strategies:**

1. **Multi-Channel Outreach:**
   - Don't rely solely on registry
   - Door-to-door checks in high-risk areas
   - Partner with community organizations
   - Alert systems for entire population

2. **Flexible Resource Planning:**
   - Overstock critical supplies by 50%
   - Mobile response teams for unexpected needs
   - Rapid procurement contracts for surge

3. **Continuous Improvement:**
   - After-action reviews: Who did we miss?
   - Community feedback: Why didn't you register?
   - Data analysis: Where are the gaps?
   - Partnership expansion: Who else knows vulnerable residents?

---

## Integration with Other Systems

### Recommended Data Connections

**Utility Companies:**
- Share de-identified registry data for restoration prioritization
- Coordinate on Priority Services Register alignment
- Joint exercises and planning

**Healthcare Providers:**
- Referral pathway for new equipment users
- Discharge planning includes registry enrollment
- Medical supply coordination during disasters

**Social Services:**
- Cross-reference with aging services lists
- Meal delivery programs (people often homebound)
- Disability services coordination

**911/311 Systems:**
- Flag addresses in CAD (Computer-Aided Dispatch)
- Special instructions for responders
- Automatic prioritization during high-call volume

**Shelters:**
- Pre-register for accessible shelter spaces
- Medical needs known before arrival
- Equipment compatibility verified

---

## Measuring Success

### Key Performance Indicators (KPIs)

**Registration Metrics:**
- Total registrants (trend over time)
- New registrations per month
- Renewal rate (annual)
- Accuracy rate (% of records up-to-date)

**Outreach Metrics:**
- Registration sources (online, phone, in-person)
- Community partner referrals
- Multi-language registrations
- Geographic coverage (all zip codes represented)

**Response Metrics:**
- Time to first contact (target: <2 hours)
- Successful contact rate (target: >80%)
- Evacuation completion rate
- Post-event satisfaction survey

**Outcome Metrics:**
- Zero preventable deaths among registrants
- Reduction in emergency hospitalizations
- Faster recovery for registered populations
- Community trust (willingness to register)

---

## Case Study: Putting It All Together

### Scenario: Hurricane Approaching Coastal County

**T-48 Hours (Planning View):**
- Emergency manager checks emPOWER Map
- 1,200 Medicare beneficiaries with oxygen concentrators in evacuation zone
- Multiplies by 2.5x = plan for 3,000 total electricity-dependent residents
- Activates evacuation plan

**T-36 Hours (Response View):**
- Accesses identified emPOWER data via data-use agreement
- Downloads list of 1,200 residents with names/addresses
- Imports into call center system
- Teams begin outreach

**T-24 Hours (Execution):**
- Call center contacts all 1,200 registrants
- 800 plan to evacuate (many to out-of-area family)
- 300 need evacuation assistance (prioritized)
- 100 plan to shelter in place (marked for wellness checks)

**T-12 Hours (Transportation):**
- Accessible buses dispatched to priority addresses
- Medical equipment loaded with passengers
- Arrival confirmed at equipped shelters
- 290/300 evacuated (10 changed mind, documented)

**T-0 Hours (Landfall):**
- Power lost across county
- Wellness check teams dispatched to 100 shelter-in-place addresses
- 85 contacted (safe with backup power)
- 15 non-responsive (in-person visits conducted)
- 12 found safe, 3 evacuated post-landfall

**Post-Event:**
- After-action review: Who did we miss?
- 47 people showed up at shelters needing oxygen who were NOT on registry
- Investigation: 12 had recently moved, 18 had private insurance, 17 never registered
- Action: Expanded community outreach, partnered with private insurers

---

## Resources for Implementation

### US Resources

- **emPOWER Program:** <a href="https://empowerprogram.hhs.gov/">empowerprogram.hhs.gov</a>
- **emPOWER Map (Public):** <a href="https://empowermap.hhs.gov/">empowermap.hhs.gov</a>
- **Data Access Request:** Contact: emPOWER@hhs.gov

### Research and Guidance

- **FEMA Guidance:** "Planning Considerations: Evacuation and Shelter-in-Place"
- **CDC Toolkit:** "Medical and Functional Needs Support During Disasters"
- **ASPR TRACIE:** "At-Risk Populations Resources"

### International

- **UK PSR:** <a href="https://www.ofgem.gov.uk/environmental-and-social-schemes/priority-services-register-psr">ofgem.gov.uk/priority-services-register</a>
- **Australia Energy:** <a href="https://www.energy.gov.au/households/life-support-equipment">energy.gov.au/life-support-equipment</a>
- **Japan Cabinet Office:** Disaster Management Resources (Japanese)

---

## Summary: Data-Driven Readiness Saves Lives

**The Core Message:**

Data-driven readiness is about **knowing who needs help before disaster strikes**.

**Key Principles:**

1. **Multiple Data Sources:** Don't rely on one system
2. **Plan for Incompleteness:** Registries are minimum baselines, not complete lists
3. **Balance Privacy and Speed:** Protect data, but don't let red tape kill people
4. **Continuous Improvement:** Learn from every event, expand your reach
5. **Community Trust:** People must believe you'll protect their information

**The Goal:**

Zero preventable deaths among electricity-dependent populations during emergencies.

**The Reality:**

We're not there yet. But data-driven readiness gets us closer with every disaster.

---

**Questions? Feedback? Corrections?**

This guide aspires to be comprehensive and accurate, but we recognize we're continuously learning from real-world implementations.

If you have experience with functional-needs registries, especially from international contexts, please share your knowledge through issues or pull requests.

Your expertise helps make this guide more trustworthy and useful for emergency managers worldwide.
