---
layout: ../../layouts/Article.astro
title: "The Fragebogen zur steuerlichen Erfassung for a new GmbH, line by line"
created: 2026-10-20
description: "A walkthrough of the German tax registration questionnaire for a newly founded GmbH that takes over an Einzelunternehmen: what each line asks, what I answered, and the eight weeks of letters and phone calls that followed."
tags: Bootstrapping, Germany, Taxes
cover_image: /img/writing/covers/fragebogen-steuerliche-erfassung.jpg
translation: /writing/fragebogen-zur-steuerlichen-erfassung-gmbh-ausfuellen/
---

The tax registration questionnaire (*Fragebogen zur steuerlichen Erfassung*, FsE) is how a new company introduces itself to the tax office. Until it's processed, the GmbH has no tax number. Without a tax number there are no VAT returns, no payroll and no VAT ID.

This is the version for a newly founded GmbH ("Gründung einer Kapitalgesellschaft bzw. Genossenschaft"). Mine took over my sole proprietorship (Einzelunternehmen) under [§20 UmwStG](https://www.gesetze-im-internet.de/umwstg_2006/__20.html). For each block: what it asks, what I answered and why.

The screenshots come from my transmission protocol, the seven-page PDF ELSTER gives you after submitting. Amounts, addresses and IDs are blurred.

I'm not a tax advisor. My tax advisor reviewed the form after I'd filed it and signed off, but your situation will differ.

## TL;DR

I filed the FsE five days after the tax office asked for it. The tax number came two weeks later, but without wage tax and VAT. Each took a phone call, and the VAT ID came eight weeks after filing.

Two blocks matter the most. Lines 91–94 link the old business to the new GmbH and need its tax number. Lines 165–168 are the profit estimates, and the tax office set my prepayments straight from them.

When the BZSt's online VAT ID form said “not possible”, the tax office hadn't set my VAT flag (Umsatzsteuersignal) yet.

## Before filing

### The tax office wrote first

My GmbH was entered in the commercial register 29 days after the notary appointment. Five days later, before I had filed anything, the tax office sent me a letter. The notary has to send the tax office a copy of every founding deed ([§54 EStDV](https://www.gesetze-im-internet.de/estdv_1955/__54.html)), so it already knew my company existed.

<div class="letters">
<figure><a href="/img/writing/gmbh/finanzamt-gruendung-p1.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/finanzamt-gruendung-p1.jpg" alt="Letter from Finanzamt Stuttgart-Körperschaften titled 'Gründung einer Kapitalgesellschaft', asking for the questionnaire within about five weeks" loading="lazy"></a><figcaption>“Gründung einer Kapitalgesellschaft”: file the FsE.</figcaption></figure>
<figure><a href="/img/writing/gmbh/finanzamt-gruendung-p2.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/finanzamt-gruendung-p2.jpg" alt="Second page of the tax office letter, asking for copies of all founding contracts and contracts between company and shareholders" loading="lazy"></a><figcaption>Page 2: send copies of every contract between the company and its shareholders.</figcaption></figure>
</div>

The letter asks for the FsE within about five weeks.

### What I needed at hand

- The notarial deed as a PDF (articles of association, contribution agreement, closing balance sheet), to attach to the form.
- The register entry: court, register number, date of entry.
- The company's new bank account (IBAN).
- My own tax ID (*Steuer-ID*) and personal tax number, plus the tax number of the old Einzelunternehmen.
- Estimates for profit, revenue and wage tax. They decide the [prepayments](#estimates-for-prepayments-lines-165168).

### The company's ELSTER account

I filed the FsE through the GmbH's own account on [ELSTER](https://www.elster.de), the tax administration's online portal. The registration has a checkbox for companies that don't have a tax number yet. Until the number arrives, the FsE is the only form the account offers. Once it arrived, I upgraded the account in Mein ELSTER. The activation code came by post a week later, and then all forms were available.

## The form, block by block

The line numbers are the official ones. The form skips the lines that don't apply, so they jump around.

### Basic details (lines 1–18)

![Page 1 of the FsE transmission protocol: tax number, company name, seat, addresses, phone, website and activity (addresses and phone blurred)](/img/writing/gmbh/fse-p1.jpg)
Figure: Page 1 of my transmission protocol.

| Line | What it asks | What I answered |
|---|---|---|
| 1 | Tax number | "wird neu beantragt" (to be assigned) |
| 2 | Company name, exactly as in the register | Stagetimer GmbH |
| 3 | Seat | Stuttgart |
| 4–6 | Business address | The office address |
| 8–10 | Place of management, if different | Same address |
| 11–12 | Phone, website | — |
| 13 | Type of business, as precisely as possible | One sentence: development, operation and sale of software and hardware for the events industry, plus related services |
| 15–18 | Permanent establishments | One, the head office |

**Lines 8–10 are not a formality.** Where a company is *managed* decides where it's taxed (it's why [my Estonian company didn't work out](/writing/from-einzelunternehmen-to-gmbh/#why-not-incorporate-abroad)).

The tax office asked me to prove it. My coworking contract was already in the name of the GmbH i.G., so that was the answer.

**Line 13** ends up on the tax number letter as the "type of business". Mine came back as "Softwareentwicklung".

### Managing director, bank, register (lines 25–61)

| Line | What it asks | What I answered |
|---|---|---|
| 25–30 | Legal representative: name, birth date, tax ID, *personal* tax number, private address | Me |
| 49 | IBAN for refunds and direct debit | The new company account |
| 52 | Account holder | The company itself |
| 54 | Date of the notarial deed | The notary appointment |
| 55–57 | Register application, entry date, court, register type and number | From the entry notice |
| 58–61 | The notary who did the founding | Name and address |

The form also asks for the SEPA direct debit mandate. It's a separate form, listed again under the attachments.

### Legal form, capital, shareholders (lines 63–90)

| Line | What it asks | What I answered |
|---|---|---|
| 63 | Legal form | GmbH |
| 64 | Start of activity | The day of the notary appointment |
| 65 | Fiscal year different from calendar year? | No |
| 66–67 | Share capital, of which paid in | €25,000, of which €12,500 |
| 67a–78 | Shareholders: who, how much, tax ID, tax number, address | Me, 100% |
| 90 | Trust arrangements? | No |

At founding, I was the only shareholder. The holding came later and is a story for [the main article](/writing/from-einzelunternehmen-to-gmbh/#the-holding-company).

### How the company was founded (lines 91–94)

![Page 4 of the FsE: founding type, the contribution under §20 UmwStG, the estimates for prepayments and the payroll block (all numbers blurred)](/img/writing/gmbh/fse-p4.jpg)
Figure: Page 4. The founding block on top, then the estimates that decide the prepayments.

This is the block that matters for an Einbringung:

- **Line 91:** cash founding (“Bargründung”). That's what it legally was.
- **Next:** "In connection with the cash founding, the company took over assets by…" Here I ticked *Einbringung eines Betriebs, Teilbetriebs oder Mitunternehmeranteils nach § 20 Absatz 1 UmwStG*.
- **Lines 93–94:** the name of the Einzelunternehmen and *its* tax number.

Lines 93–94 are how the tax office links the old business to the new one. The tax-neutral contribution at book value is a [separate application](/writing/from-einzelunternehmen-to-gmbh/#phase-5-tax-number-vat-id-and-payroll-from-day-54), which I filed months later. Here I only told them it happened.

### Estimates for prepayments (lines 165–168)

| Line | What it asks |
|---|---|
| 165 | Expected annual profit, founding year and following year |
| 166 | Expected taxable income, same two years |
| 167 | Tax credits (withholding taxes). Zero for me. |
| 168 | Expected trade income (*Gewerbeertrag*), same two years |

**The tax office set my corporate tax and trade tax prepayments straight from these numbers.** About a month after filing, I had a trade tax notice and a corporate tax prepayment notice, both calculated from exactly what I'd typed in.

<div class="letters">
<figure><a href="/img/writing/gmbh/gewst-vorauszahlung.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/gewst-vorauszahlung.jpg" alt="Notice of the trade tax base for prepayments, based on the expected trade income (amounts blurred)" loading="lazy"></a><figcaption>Day 69: the trade tax base, straight from line 168.</figcaption></figure>
</div>

I rounded my estimates down. That keeps the prepayments low, and I set money aside for the back payment after the year ends. The trade tax bill itself comes from the city. If the estimate turns out wrong, the prepayments can be adjusted on application.

With a contribution retroactive to December 31st, the GmbH's first year carries a full year of business profit, not just the months since the notary.

### Payroll (lines 169–177)

| Line | What it asks |
|---|---|
| 169 | Total number of employees |
| 170 | Of those, how many are shareholders or their spouses |
| 171 | Of those, how many are minijobs (flat 2% tax paid to the Minijob-Zentrale) |
| 172 | First salary payment |
| 173 | Expected wage tax for the calendar year |
| 174–177 | Where payroll is run from |

This block didn't set the employer flag (Lohnsteuersignal) at the tax office. It took a [phone call](#why-wage-tax-and-vat-were-missing-from-the-tax-number), which [payroll practitioners describe](https://www.datev-community.de/t5/Personalwirtschaft/A-Signal/td-p/439799) as the usual way.

### VAT (lines 178–197)

![Page 6 of the FsE: Ist-taxation requested, VAT ID requested, attachments (attachment details and email blurred)](/img/writing/gmbh/fse-p6.jpg)
Figure: Page 6. Line 197 is the VAT ID request that went nowhere for seven weeks.

| Line | What it asks | What I answered |
|---|---|---|
| 178 | Was a business acquired as a whole? (*Geschäftsveräußerung im Ganzen*, [§1 Abs. 1a UStG](https://www.gesetze-im-internet.de/ustg_1980/__1.html)) | Yes |
| 179 | Expected revenue, founding year and following year | Estimate |
| 181 | Waive the small business VAT exemption (*Kleinunternehmer*)? | Waived |
| 182 | Expected VAT: payable or refund, and how much | Estimate |
| 184–190 | Tax-exempt sales, reduced rates, zero rate, agriculture | No to all |
| 194–195 | VAT on invoiced amounts (*Soll*) or on received payments (*Ist*) | *Ist* |
| 197 | VAT ID needed for EU business | Yes |

**Line 178: yes.** Contributing the whole Einzelunternehmen into the GmbH is a transfer of a going concern. That's not a taxable sale for VAT purposes, so no VAT on the contribution.

**Line 181** was irrelevant, since my revenue is well above the [small business threshold](https://www.gesetze-im-internet.de/ustg_1980/__19.html) (at the time €25,000 in the previous year). Waiving it just confirms the GmbH charges VAT normally.

**Lines 194–195: I asked for *Ist*.** With *Istversteuerung*, VAT is due when the customer pays, not when the invoice goes out. Better for cash flow.

It was available because my projected revenue for the founding year was below the €800,000 limit in [§20 UStG](https://www.gesetze-im-internet.de/ustg_1980/__20.html).

**Line 197: yes**, for my EU business customers. It took eight weeks and [a self-check](#checking-the-vat-id-status) to get it.

### Attachments (lines 226–236)

I attached the SEPA mandate, the articles of association, and the notarial deed as one PDF (articles, contribution agreement, balance sheet).

## What happened afterwards

Day 0 is the notary appointment, as in the [main timeline](/writing/from-einzelunternehmen-to-gmbh/#timeline).

| Day | What happened |
|---|---|
| 34 | Tax office writes first: file the FsE, send contracts, prove place of management, estimate revenue |
| 39 | Submitted the FsE via ELSTER |
| 47 | Answered the open questions with the rent contract and revenue estimate |
| 54 | **Received tax number.** Valid for corporate tax, trade tax base, balance sheet, capital gains withholding. Not for wage tax or VAT. |
| 61 | Payroll software can't submit: employer flag missing. One phone call. |
| 64 | Letter: Tax number now also valid for wage tax |
| 69 | Letter: Trade tax base for prepayments, set from my estimate |
| 78 | Letter: Corporate tax prepayments, set from my estimate |
| 89 | Still no VAT ID. VAT flag never set, VAT returns for January to April never processed. One phone call. |
| 92 | Letter: Tax number now also valid for VAT, monthly returns. [Applied for the VAT ID online](https://online.portal.bzst.de/SharedDocs/ExterneLinks/DE/Leistungsbeschreibung/antrag_umsatzsteuer-identifikationsnummer.html) the same day. |
| 99 | **Received VAT ID** |
| 103 | Letter: My March VAT return reports EU services, but the GmbH has no VAT ID. Correct the return or file an EU sales report. |
| 104 | Warning letter from the BZSt: File the EU sales report for Q1, or pay €250 |
| 114 | EU sales reports filed. No fine. |

### Answering without a tax number

To answer the tax office's letter, I wanted to send a message through ELSTER. The general "Sonstige Nachricht an das Finanzamt" requires a tax number, which I didn't have yet. I used the tax administration's contact form instead (for Baden-Württemberg: [kontakt.fv-bwl.de](https://kontakt.fv-bwl.de)), which accepts attachments.

The tax number came a week later.

### Why wage tax and VAT were missing from the tax number

The tax number letter says what the number is valid for. Mine listed corporate tax, the trade tax base, the balance sheet and capital gains withholding tax. No wage tax, no VAT, although I'd filled in both blocks in the form.

<div class="letters">
<figure><a href="/img/writing/gmbh/steuernummer.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/steuernummer.jpg" alt="Tax number letter listing Körperschaftsteuer, Gewerbesteuermessbetrag, Bilanz and Kapitalertragsteuer" loading="lazy"></a><figcaption>Day 54: the tax number. Read the “Sie gilt für” list.</figcaption></figure>
</div>

Each tax type is its own switch at the tax office. Nobody tells you when one isn't flipped.

You find out when a filing bounces (wage tax) or when something just never arrives (VAT ID). Both times a phone call fixed it within minutes, and a letter confirming the change followed a few days later.

I should have compared that list with my form the day it arrived. Instead I waited five more weeks, hoping the VAT ID would just show up.

<div class="letters">
<figure><a href="/img/writing/gmbh/lohnsteuer.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/lohnsteuer.jpg" alt="Letter: the tax number now also applies to Lohnsteuer" loading="lazy"></a><figcaption>Day 64: “gilt nun auch für: Lohnsteuer”, after a phone call.</figcaption></figure>
<figure><a href="/img/writing/gmbh/umsatzsteuer.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/umsatzsteuer.jpg" alt="Letter: the tax number now also applies to Umsatzsteuer, monthly VAT returns" loading="lazy"></a><figcaption>Day 92: “gilt nun auch für: Umsatzsteuer”, after another phone call.</figcaption></figure>
</div>

### Checking the VAT ID status

The Federal Central Tax Office (BZSt) issues VAT IDs, but only after the tax office has set the VAT flag and passed it on. The BZSt has an [online form to apply for a VAT ID](https://online.portal.bzst.de/SharedDocs/ExterneLinks/DE/Leistungsbeschreibung/antrag_umsatzsteuer-identifikationsnummer.html).

When I tried it on day 89, it answered: "Eine Vergabe der USt-IdNr. ist nicht möglich" (assignment not possible). It took me a while to figure out what that means for a new company: the tax office hasn't passed on the VAT registration yet. One phone call fixed it. Three days later the same form went through, and the VAT ID was valid from that day.

<div class="letters">
<figure><a href="/img/writing/gmbh/ust-idnr.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/ust-idnr.jpg" alt="BZSt notice of the VAT ID" loading="lazy"></a><figcaption>Day 99: the VAT ID, eight weeks after line 197.</figcaption></figure>
</div>

The two follow-up letters are the price of the delay. My VAT returns since January included EU business sales, but the GmbH had no VAT ID, so there were no EU sales reports either.

The tax office asked about it, and the BZSt demanded the reports with a fine attached. I filed them within ten days and heard nothing more.

<div class="letters">
<figure><a href="/img/writing/gmbh/ustva-18b.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/ustva-18b.jpg" alt="Tax office letter about EU services reported in the March VAT return without a VAT ID" loading="lazy"></a><figcaption>Day 103: EU services reported without a VAT ID.</figcaption></figure>
<figure><a href="/img/writing/gmbh/zm-zwangsgeld.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/zm-zwangsgeld.jpg" alt="BZSt demand for the EU sales report for Q1 2026, threatening a €250 penalty" loading="lazy"></a><figcaption>Day 104: file the EU sales report or pay €250.</figcaption></figure>
</div>
