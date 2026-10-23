---
layout: ../../layouts/Article.astro
title: "From Einzelunternehmen to GmbH – every step, every letter"
created: 2026-10-20
description: "How I turned a German sole proprietorship with a profitable SaaS into a GmbH plus holding. The real timeline, the real costs, the real letters, and the traps nobody tells you about."
tags: Bootstrapping, Germany, Taxes
cover_image: /img/writing/covers/from-einzelunternehmen-to-gmbh.jpg
translation: /writing/vom-einzelunternehmen-zur-gmbh/
---

<div class="text-sm text-neutral-600 border-t border-b border-neutral-200 pt-4 my-6">

**Status:** This is a living document. I'm writing it while the process is still running and will update it as the remaining items get done.

</div>

Here I am with my Einzelunternehmen and a SaaS product.

The product is [Stagetimer](https://stagetimer.io), a remote-controlled countdown timer for live events. The Einzelunternehmen (sole proprietorship) was registered in 2021. It's profitable, and it has outgrown its legal clothes.

This is the guide to founding a GmbH in Germany I wish I had when I started: Every step in order, how long each one took, what it cost, which letters arrived and the traps that ate my weekends. Confidential details are blurred, everything else is in here.

## TL;DR

I turned my Einzelunternehmen, one SaaS product past €200k yearly revenue, into Stagetimer GmbH, owned by a holding GmbH. The main reason is tax: GmbH is 30% on profit, instead of my top personal tax rate.

The GmbH was a regular cash founding, with the whole Einzelunternehmen contributed on top at book value (§20 UmwStG, effective Dec 31st).

Preparation took about 4 months, mostly waiting for the closing balance sheet. From notary appointment to having a VAT ID and running payroll took another 14 weeks.

Setup cost €2,263 in notary and court fees, plus the tax advisor. Running costs are €2,500+ a year for the tax advisor and a few hundred Euros for everything else.

## Contents

**Decisions**

- [Why start as an Einzelunternehmen?](#why-start-as-an-einzelunternehmen)
- [When to switch to a GmbH?](#when-to-switch-to-a-gmbh)
- [Why not incorporate abroad?](#why-not-incorporate-abroad)
- [GmbH or UG?](#gmbh-or-ug)
- [How should it be structured?](#how-should-it-be-structured)

**The process**

- [Timeline](#timeline)
- [Phase 0: Preparation (4 months before)](#phase-0-preparation-4-months-before)
- [Phase 1: Notary appointment (day 0)](#phase-1-notary-appointment-day-0)
- [Phase 2: Bank account and share capital (day 5)](#phase-2-bank-account-and-share-capital-day-5)
- [Phase 3: Commercial register entry (day 29)](#phase-3-commercial-register-entry-day-29)
- [Phase 4: Registrations and contracts (day 35)](#phase-4-registrations-and-contracts-day-35)
- [Phase 5: Tax number, VAT ID and payroll (from day 54)](#phase-5-tax-number-vat-id-and-payroll-from-day-54)
- [The holding company](#the-holding-company)

**After the founding**

- [Scam letters](#scam-letters)
- [Pitfalls of switching](#pitfalls-of-switching)
- [Was it worth it?](#was-it-worth-it)

## Why start as an Einzelunternehmen?

In Germany you can start a business with a single form: the Gewerbeanmeldung at your town hall (or its website). Pay a small fee, and a few days later you have a trade license and can write invoices.

A GmbH, as the next 400 lines show, is a lot more nonsense before you earn your first Euro.

With zero revenue and an unvalidated idea, the choice is easy. The Einzelunternehmen is cheap to start, cheap to run (simple accounting, no balance sheet, no payroll for yourself) and cheap to close. Closing a GmbH takes over a year and a few thousand Euros, as I wrote in [Bootstrapping a SaaS Business in Germany](/writing/bootstrapping-a-saas-business-in-germany/).

### What about liability?

People usually argue "but a GmbH limits your liability!" Yes. But from *what*?

You sell a SaaS subscription for $8 per month. You don't sign multi-year SLAs, and your terms cap your liability. If the service goes down for an afternoon, a customer can claim roughly $8.[^1] Unless you run something critical (medical data, payment rails), no customer will sue you into personal bankruptcy.

The liability you *can't* limit is towards the Finanzamt. Tax debt reaches through any GmbH to the managing director,[^69ao] and the tax office is the one creditor that actually comes after you. I've never been sued. I *have* had a bank account seized over a (very) late VAT payment. A GmbH wouldn't have helped.

So liability wasn't on my list of reasons.

## When to switch to a GmbH?

In 2023 I wrote that a GmbH makes sense somewhere above €100k yearly revenue. I did it after crossing **€200k**.

My reasons, in order:

1. **Taxes on retained profit.** As a sole proprietor, all profit is personal income at your top tax rate. A GmbH pays about 30% (corporate tax, solidarity surcharge, trade tax) on profit it *keeps*. I pay myself a salary and reinvest the rest. At my revenue, the difference pays for the bureaucracy many times over.
2. **A holding structure** to reinvest profits (almost) for free into future projects.
3. **The product's name, not mine.** A company named after me looks like a one-man show (which it is) and reads awkwardly on an enterprise invoice. "Stagetimer GmbH" looks like a company, and I even have a letterhead.

## Why not incorporate abroad?

Everyone and their dog has a UK Limited, a Singapore company or a Delaware LLC via Stripe Atlas. Why put up with German bureaucracy at all?

I thought the same. In 2019 I got Estonian e-Residency and founded a shiny Estonian OÜ. It felt like the future: real electronic signatures with a card reader, not squiggly pixel signatures in a PDF. My service provider xolo.io ("Leap In" back then) had the business running in days.

You can tell this story didn't end well.

The rule is: you're taxed where you work, and a company is taxed where it makes its decisions (its *place of effective management*). That left me four options:

1. Fly to Tallinn for every executive decision about my business.
2. Lie about flying to Tallinn.
3. Move from country to country, fewer than 180 days in each, and become the elusive "perpetual traveler".
4. Bite the bullet and get taxed in Germany with my Estonian company.

Option 3 works for digital nomads, until they get tired of traveling. I went with option 4. I had the same expensive accounting as a German GmbH, *plus* all the compliance in Estonia. I closed the company in 2021 and just paid the (hopefully) last tax advisor invoice for closing it. Fun times.

The same goes for the UK Limited, the Singapore company and the LLC. If you run it from your German desk, it's taxed in Germany, and you get the foreign bureaucracy *on top of* the German one. The US LLC adds annual filings where a missed form costs five figures.

## GmbH or UG?

Someone has probably told you to start a UG.

The UG (haftungsbeschränkt) is the "mini GmbH" you can found with €1 of capital. Every German founder forum recommends it. Here's why I didn't:

- **The capital isn't the hurdle.** A GmbH needs €25,000 share capital, but only **€12,500 has to be paid in**. It's not a fee: the company can spend it on business expenses from day one.
- **Same overhead.** A UG has the same accounting, balance sheets, payroll and filings as a GmbH, and the same tax advisor bill.
- **Perception.** "UG (haftungsbeschränkt)" on your invoice tells every bank, supplier and customer that you started with less than €25k.
- **No protection from tax debt**, the [liability that actually threatens you](#what-about-liability).

Then there's the **UG & Co. KG**, recommended to solo founders with a straight face. Two legal entities, two sets of books, partnership taxation on top. [Carmine Paolino went that route](https://paolino.me/founding-a-company-in-germany/) and spent €11,800 and 203 days before he could write his first invoice. Don't.

At the very beginning: Einzelunternehmen. Making real money: GmbH. The UG answers a question almost nobody in our situation is asking.

## How should it be structured?

<svg viewBox="0 0 360 246" width="360" class="block mx-auto my-8 max-w-full" role="img" aria-label="Ownership structure: I own 100% of a holding GmbH, which owns 100% of Stagetimer GmbH">
  <defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#a3a3a3"/></marker></defs>
  <g fill="none" stroke="#d4d4d4" stroke-width="1.5">
    <rect x="130" y="1" width="100" height="40" rx="6"/>
    <rect x="60" y="88" width="240" height="56" rx="6"/>
    <rect x="60" y="189" width="240" height="56" rx="6"/>
  </g>
  <g stroke="#a3a3a3" stroke-width="1.5" marker-end="url(#arrow)">
    <line x1="180" y1="41" x2="180" y2="86"/>
    <line x1="180" y1="144" x2="180" y2="187"/>
  </g>
  <g fill="currentColor" font-family="inherit" text-anchor="middle">
    <text x="180" y="27" font-size="15" font-weight="600">Me</text>
    <text x="180" y="112" font-size="15" font-weight="600">Holding GmbH</text>
    <text x="180" y="132" font-size="13" fill="#737373">holds shares, does nothing else</text>
    <text x="180" y="213" font-size="15" font-weight="600">Stagetimer GmbH</text>
    <text x="180" y="233" font-size="13" fill="#737373">the actual business</text>
  </g>
  <g fill="#737373" font-family="inherit" font-size="12">
    <text x="190" y="69">100%</text>
    <text x="190" y="171">100%</text>
  </g>
</svg>

Getting there from a sole proprietorship:

1. **Found Stagetimer GmbH** in cash, with €25,000 share capital, half paid in.
2. **Contribute the entire Einzelunternehmen** on top of the capital (as *Sachagio*). For tax, this is an *Einbringung* under [§20 UmwStG](https://www.gesetze-im-internet.de/umwstg_2006/__20.html) at book value. No tax event: the GmbH simply takes over the business, customers, contracts, bank balance and all.
3. **Found the holding GmbH** and contribute the Stagetimer GmbH shares ([§21 UmwStG](https://www.gesetze-im-internet.de/umwstg_2006/__21.html), again at book value).

Why not start a fresh GmbH next to the old business? Because the value is in the product: code, brand, customers. Any other way to move it means *selling* it to yourself at market value: you pay an appraiser (Sachverständiger) for the valuation, then income tax on it. The Einbringung avoids both. The catch is a [7-year lock-up](#pitfalls-of-switching): sell the shares early and the tax comes back. I don't plan to sell, but if you do, this may be a deal breaker.

I worked this out with my tax advisor about four months before the notary appointment.

## Timeline

| Day | Step |
|---|---|
| Before | Preparation: tax advisor, IHK, notary, closing balance sheet (~4 months) |
| 0 | Notary appointment (1.5 hours) |
| 5 | Business bank account opened, share capital paid in |
| 29 | Entry in the commercial register (Handelsregister) |
| 35 | Transparency register, do-it-yourself |
| 39 | Trade registration, tax registration questionnaire, employers' liability insurance |
| 40 | Company number for payroll (Betriebsnummer) |
| 54 | Tax number |
| 61 | “Employer flag” missing at the tax office, fixed with one phone call |
| 67 | GmbH's ELSTER account upgraded with the tax number, after a week waiting for the activation code by snail mail |
| 69 | Minijob registration, activation code by snail mail again |
| 89 | VAT ID still missing, "VAT flag" never set. Fixed with one phone call |
| 99 | VAT ID in the mailbox |
| 104 | Federal tax office demands EU sales reports, threatens a fine. Filed within 10 days |

**From notary to fully operational: ~14 weeks.** Now the long version.

## Phase 0: Preparation (4 months before)

The founding itself is quick. Getting ready for it took four months.

**I started with a tax advisor.** Not a lawyer, not a notary. The legal side of a GmbH founding is standardized. The tax side (moving the Einzelunternehmen over without triggering taxes, the effective date) is where money is won or lost. Mine sketched the whole sequence in one meeting: found the GmbH, contribute the Einzelunternehmen, put the holding on top, file the book value applications.

**The IHK checked my company name.** That's all I used them for. At least it was free.

**I contacted a notary about 100 days before the appointment.** The notary drafts the documents from standard templates, and I had my tax advisor review them. The appointment had to wait for the closing balance sheet.

**The closing balance sheet was the bottleneck.** The notary deed needs the Einzelunternehmen's balance sheet as of the effective date (December 31st, 2025). So my tax advisor had to close the old books *before* the appointment, in their busiest season. It arrived a week before.

**Withdrawing cash before the effective date** is the tip I wish I'd had. With an Einbringung, the bank balance moves into the GmbH too. Anything withdrawn before December 31st is simply private money. Anything taken out afterwards has to be untangled in the accounting, which costs tax advisor time.

## Phase 1: Notary appointment (day 0)

The appointment took about 1.5 hours. By law, the notary reads every document aloud, word by word.

What I signed:

- **Articles of association** (Gesellschaftsvertrag): name, seat, purpose, share capital.
- **Contribution agreement** (Einbringungsvertrag): the Einzelunternehmen goes in as agio, closing balance sheet attached.
- **Shareholder resolution**: appoints me managing director (Geschäftsführer). The articles exempt me from §181 BGB, so I can sign contracts between myself and the company.
- **Application to the commercial register**, filed electronically by the notary.

Cost:

- €1,771.23 for the founding and contribution
- €191.93 for the register application
- **€1,963.16** in total

Until the register entry, my company was a "GmbH in Gründung" (i.G.). It could open a bank account, but it wasn't a real company yet.

## Phase 2: Bank account and share capital (day 5)

The notary only files the register application once the share capital is paid into a bank account. Although the GmbH takes over my sole proprietorship, I did open a dedicated bank account for the GmbH i.G., deposited €12,500 and sent the bank confirmation to the notary.

I picked [**Qonto**](https://qonto.com/r/xp3mdc) (referral link): solid support ratings, its own licence instead of a layer on top of Solarisbank, native Lexware Office integration and a free debit Mastercard. The account was open and the capital paid in five days after the notary.

## Phase 3: Commercial register entry (day 29)

Four weeks after the notary appointment, the Handelsregister was done, faster than the horror stories I'd heard. I found out by checking their [online portal](https://www.handelsregister.de/rp_web/normalesuche/welcome.xhtml), which is free, unlike other websites that try to sell you this data. The court's official notice arrived by snail mail another 24 days later.

The notice came with an info sheet on my new duties and a big warning about [fraudulent invoices](#scam-letters).

<div class="letters">
<figure><a href="/img/writing/gmbh/hr-eintragungsnachricht.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/hr-eintragungsnachricht.jpg" alt="Entry notice from Amtsgericht Stuttgart for Stagetimer GmbH, with a warning that register costs are billed only by the Landesoberkasse" loading="lazy"></a><figcaption>The entry notice. Note the warning: register costs come only from the Landesoberkasse.</figcaption></figure>
</div>

The register fees were billed separately: **€300** (€225 for the entry, €75 for providing the register data). I mistook [the actual bill for a scam](#the-real-invoice-i-mistook-for-a-scam).

The register entry triggered everything else.

## Phase 4: Registrations and contracts (day 35)

**Transparency register (Transparenzregister).** Every GmbH must report its beneficial owners to yet another register, manually. And it charges yet another small annual fee, of course. The notary is supposed to inform you about it. Mine rolled his eyes while doing so.

**Trade registration (Gewerbeanmeldung).** For whatever reason a GmbH needs one too, separately from the commercial register. I filed it online via the state portal (Service-BW) on day 39. Five months later: no confirmation, no fee invoice. When I asked, the trade office said they are "too busy" and written filings take *months*, but walk-ins are processed the same day. I've let it wait: the commercial register entry covers what I need, and the IHK found my company anyway.

**Tax registration questionnaire (Fragebogen zur steuerlichen Erfassung).** The first mini-boss of German entrepreneurship. I filed it via ELSTER on day 39, including the request for a VAT ID. I wrote [the whole FsE walkthrough](/writing/fragebogen-zur-steuerlichen-erfassung-gmbh/) into a separate post, line by line, with what happened afterwards.

**Employers' liability insurance (Berufsgenossenschaft).** As soon as the GmbH has employees, it has to register with its Berufsgenossenschaft. For me that was the minijob: as majority shareholder and managing director I'm not insured automatically. For software companies that's the VBG. One online form.

**Company number (Betriebsnummer).** And if you thought that's enough, wrong. Yet another number is needed for payroll. I got it from the Federal Employment Agency on day 40, the day after registering with the Berufsgenossenschaft. It has to be in that order.

<div class="letters">
<figure><a href="/img/writing/gmbh/transparenzregister.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/transparenzregister.jpg" alt="Transparenzregister confirmation of receipt for Stagetimer GmbH" loading="lazy"></a><figcaption>Transparency register: confirmation of receipt.</figcaption></figure>
<figure><a href="/img/writing/gmbh/betriebsnummer.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/betriebsnummer.jpg" alt="Summary of the online application for a Betriebsnummer at the Bundesagentur für Arbeit" loading="lazy"></a><figcaption>The online application for the company number.</figcaption></figure>
</div>

**Managing director contract (day 48).** As managing director, I'm an employee of my own company. That needs a written contract, on letterhead, dated, approved between me and myself as shareholder, printed and signed. The salary has to pass the arm's length test (*Fremdvergleich*): would the company pay a stranger this much? If not, the excess counts as a hidden profit distribution. Every later salary change needs a new written agreement *before* it takes effect.

<div class="letters">
<figure><a href="/files/gmbh/gesellschafterbeschluss-anstellungsvertrag.pdf" target="_blank" rel="noopener"><img src="/img/writing/gmbh/gesellschafterbeschluss-anstellungsvertrag.jpg" alt="Shareholder resolution approving the managing director's employment contract, with key terms: salary, company car, health insurance subsidy, vacation, notice period" loading="lazy"></a><figcaption>The shareholder resolution for my contract (PDF). <a href="/files/gmbh/gesellschafterbeschluss-anstellungsvertrag-vorlage.md" download>Download it as a template</a> (Markdown, German).</figcaption></figure>
</div>

**Other shareholder resolutions (day 78).** Kindergarten subsidy, recreation allowance, tax-free benefits in kind: each one only works if I, as shareholder, resolve it in writing. I put them all into one collective resolution (Sammelbeschluss). "Why does everything need a Gesellschafterbeschluss?" Because. Every to-do on the list has a rat tail trailing behind it.

## Phase 5: Tax number, VAT ID and payroll (from day 54)

**Tax number (day 54).** It arrived two weeks after the questionnaire (See [FsE walkthrough](/writing/fragebogen-zur-steuerlichen-erfassung-gmbh/)). Until then nothing works on the tax side: no VAT returns, no payroll, no ELSTER account.

**Missing employer flag (day 61).** My payroll software refused to submit the first wage tax return (Lohnsteuer): the employer flag (Lohnsteuersignal) wasn't set at the tax office. So I had to make a phone call, and talk to a real human, to get this resolved.

**ELSTER access (day 67).** I upgraded the GmbH's ELSTER account with the tax number. The activation code came by post, a week after I applied.

**Tax prepayment notices (day 69).** Corporate and trade tax prepayments, based on the profit estimate from the questionnaire. Quarterly, starting in Q3.

**Minijob registration (day 69).** The Minijob-Zentrale sent its own welcome letter, with its own activation code, by post.

**The VAT ID saga (days 89–99).** I had requested the VAT ID in the questionnaire on day 39. Seven weeks later, nothing. The online form of the Federal Central Tax Office (BZSt), which can issue VAT IDs, said "assignment not possible". So I called the tax office (again): the VAT flag (Umsatzsteuersignal) had never been set. That also meant the VAT returns I'd filed for January to April had never been processed. The clerk set the flag during the ten-minute call. The BZSt issued the VAT ID three days later, and the letter arrived a week after that.

**The lesson: call.** The tax office doesn't tell you when something is missing. Now, when something is overdue, I pick up the phone. It feels very 1995. It works.

**The VAT ID gap had consequences.** EU B2B invoices need a VAT ID (reverse charge), and from January to June the GmbH didn't have one. With my tax advisor's blessing ("the ugly but necessary middle way") I used the old Einzelunternehmen VAT ID as a bridge. Then the paperwork followed:

- Day 103: the tax office asks why I reported EU B2B sales without a VAT ID.
- Day 104: the BZSt demands the EU sales report (Zusammenfassende Meldung) for Q1 and threatens a €250 fine. Twelve days after the BZSt itself had issued my VAT ID.

I filed Q1 and Q2 within ten days, no fine. If you have EU B2B customers, start the VAT ID chase on day one.

<div class="letters">
<figure><a href="/img/writing/gmbh/steuernummer.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/steuernummer.jpg" alt="Tax number letter, valid for corporate tax, trade tax base, balance sheet and capital gains withholding tax" loading="lazy"></a><figcaption>Day 54: the tax number. No wage tax, no VAT on the list.</figcaption></figure>
<figure><a href="/img/writing/gmbh/lohnsteuer.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/lohnsteuer.jpg" alt="Letter: the tax number now also applies to Lohnsteuer" loading="lazy"></a><figcaption>Day 64: wage tax added, after a phone call.</figcaption></figure>
<figure><a href="/img/writing/gmbh/ust-idnr.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/ust-idnr.jpg" alt="BZSt notice of the VAT ID" loading="lazy"></a><figcaption>Day 99: the VAT ID, finally.</figcaption></figure>
<figure><a href="/img/writing/gmbh/zm-zwangsgeld.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/zm-zwangsgeld.jpg" alt="BZSt demand for the EU sales report for Q1 2026, threatening a €250 penalty" loading="lazy"></a><figcaption>Day 104: file the EU sales report or pay €250.</figcaption></figure>
</div>

All the tax letters, and how to spot a missing flag early, are in the [FsE walkthrough](/writing/fragebogen-zur-steuerlichen-erfassung-gmbh/#what-happened-afterwards).

**Book value application (day 217).** The Einbringung is only tax-neutral if the GmbH *applies* to keep the book values ([§20 Abs. 2 UmwStG](https://www.gesetze-im-internet.de/umwstg_2006/__20.html)). It goes to the GmbH's tax office, no later than when the GmbH first files its tax balance sheet. Miss it and the hidden reserves get taxed. Nobody reminds you. I sent it myself as a free-text message via ELSTER. The holding needs the same for its §21 contribution.

<div class="letters">
<figure><a href="/img/writing/gmbh/antrag-buchwertfortfuehrung.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/antrag-buchwertfortfuehrung.jpg" alt="ELSTER transmission log of a message to the tax office: application to continue book values under §20 Abs. 2 S. 2 UmwStG for the contributed Einzelunternehmen" loading="lazy"></a><figcaption>The book value application, sent via ELSTER. <a href="/files/gmbh/antrag-buchwertfortfuehrung-vorlage.md" download>Download it as a template</a> (Markdown, German).</figcaption></figure>
</div>

## The holding company

The second GmbH, founded once the operating company was in the register.

**Why bother?** Dividends from Stagetimer GmbH to a holding GmbH are 95% tax-free (§8b KStG). Paid to me personally, they're taxed right away. The holding can keep the money and invest it in the next thing, and I only pay personal tax when I take it out. Future ventures go there too, not into Stagetimer.

The setup is deliberately minimal:

- Same notary. The appointment went "like butter": contributing shares needs no closing balance sheet.
- €25,000 share capital, half paid in. It has to be in the account *before* the register entry. I forgot until the notary asked a few weeks later.
- The Stagetimer GmbH shares go in as agio, at book value via [§21 UmwStG](https://www.gesetze-im-internet.de/umwstg_2006/__21.html).
- Registered at a family address, bank account at FYRST, no bookkeeping software.
- No trade license, payroll or VAT ID needed, so much simpler this time.

## Scam letters

Once the company is in the commercial register, its name and address are public. Within days, letters arrive that look like official invoices: coat of arms, legal paragraphs, a reference number, a short deadline. They're scams, or "offers" for worthless directory listings phrased like a fee.

The court warns about this. My entry notice came with a sheet titled **"Achtung! Betrügerische Rechnungen"** (warning: fraudulent invoices): register costs come *only* from the state treasury, in Baden-Württemberg the Landesoberkasse.

### Example of a scam letter

It arrived for my holding, dated the day of its register entry. Scammers scrape new entries.

<div class="letters">
<figure><a href="/img/writing/gmbh/fake-amtsgericht-invoice.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/fake-amtsgericht-invoice.jpg" alt="A fake &quot;Amtsgericht&quot; invoice for €1,909.10 with a Spanish IBAN (confidential details blurred)" loading="lazy"></a><figcaption>The fake: an "Amtsgericht" invoice for €1,909.10</figcaption></figure>
</div>

What gives it away:

- **Wrong coat of arms.** North Rhine-Westphalia, but my company is registered in Stuttgart, Baden-Württemberg.
- **Wrong biller.** A "Zentrale Zahlstelle, Frankfurt am Main", not the Landesoberkasse.
- **A Spanish IBAN**, payable to an "Unternehmensclusterregister". Official bodies publish their bank details. Check those, not the logo.
- **Pay within 3 working days.** Real invoices give two weeks or more.
- **€1,909.10** for a "commercial register announcement". The real entry cost €300, publication included.
- **Signed by a "judge"**, with legal citations as decoration. Judges don't send invoices.

### The real invoice I mistook for a scam

I took the court's warning a bit too seriously.

On day 34 the Landesoberkasse sent the actual bill: €300, due in two weeks. I filed it under "scam". Six weeks later the reminder (Mahnung) came, and my first reaction was: "This looks fishy to me."

This time I checked the sender's address and domain against official sources and dug out the original. Same reference number, same amount. The real one.

<div class="letters">
<figure><a href="/img/writing/gmbh/kostenrechnung-300.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/kostenrechnung-300.jpg" alt="Real cost invoice from Landesoberkasse Baden-Württemberg for €300: €225 for the entry and €75 for register data" loading="lazy"></a><figcaption>The real invoice: €300 from the Landesoberkasse.</figcaption></figure>
<figure><a href="/img/writing/gmbh/mahnung.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/mahnung.jpg" alt="Payment reminder (Mahnung) from Landesoberkasse Baden-Württemberg for €300" loading="lazy"></a><figcaption>Six weeks later: the Mahnung.</figcaption></figure>
</div>

Paid the next day, no reminder fee.

For a founding, these are the only ones who bill you: the notary, the state treasury, the tax office, the city (trade tax), the IHK, the Berufsgenossenschaft and the broadcast fee service. Anything else gets checked before I pay. And what I can't place goes on a pile, not in the bin.

## Pitfalls of switching

Things that each cost me an afternoon.

- **Wind down the Einzelunternehmen.** Its town kept charging trade tax prepayments for 2026. I told them the business no longer exists, and they set them to zero and refunded what I'd paid. Same for my private income tax prepayments, still based on the old profit. Small fees also keep trickling into the old account. I booked them via the shareholder clearing account (*Verrechnungskonto Gesellschafter*) and kept them out of the GmbH's VAT returns.
- **Correctly handle January invoices.** Supplier invoices from 2025 paid in January are liabilities the GmbH took over, not new purchases. Book them as purchases and you deduct the input VAT twice.
- **Keep the shares for 7 years.** Both contributions (§20 and §21 UmwStG) come with a 7-year holding period. Every year I need to prove to the tax office that I still own the shares. They could look it up, but they require an explicit message.
- **Move all contracts.** About 17 services needed a new entity, address, VAT ID or bank account. Bank accounts stay with the Einzelunternehmen. Apple wants a D-U-N-S number for a company developer account. And [§35a GmbHG](https://www.gesetze-im-internet.de/gmbhg/__35a.html) requires a signature like this on every email or letter:

<svg viewBox="0 0 580 64" width="580" class="block my-6 max-w-full" role="img" aria-label="Example email signature: Mustermann GmbH, Musterstraße 1, 12345 Musterstadt, Germany. Commercial Register: Amtsgericht Musterstadt HRB 123456. Managing Director: Max Mustermann">
  <rect x="0.75" y="0.75" width="578.5" height="62.5" rx="6" fill="none" stroke="#d4d4d4" stroke-width="1.5"/>
  <g fill="currentColor" font-family="inherit" font-size="13">
    <text x="18" y="27">Mustermann GmbH · Musterstraße 1, 12345 Musterstadt, Germany</text>
    <text x="18" y="47" fill="#737373">Commercial Register: Amtsgericht Musterstadt HRB 123456 · Managing Director: Max Mustermann</text>
  </g>
</svg>

## Was it worth it?

Yes, at €200k+ revenue. Switching around the €100k I recommended in 2023 would have been fine too. Much earlier, no: while the business is small, an Einzelunternehmen is cheaper and leaves more time for the product.

Customers only noticed a new name on their invoices. No single step was hard: the notary was smooth, the court was fast, and both tax office problems took a ten-minute phone call. The work is the number of small tasks, many waiting on a letter, spread over half a year. I spent a few hours a week on it.

Some steps are still running, like the holding's book value application and the first annual financial statements. I'll update this post as they get done.

[^69ao]: Strictly speaking, only if the managing director breaches their duties intentionally or with gross negligence ([§69 AO](https://www.gesetze-im-internet.de/ao_1977/__69.html)). For example, by paying other bills while the tax office waits, or by not paying the wage tax.

[^1]: Suing works by asking for damages. If your damages are $8, the lawyer will dismiss you with a pitiful smile.
