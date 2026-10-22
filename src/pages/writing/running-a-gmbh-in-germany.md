---
layout: ../../layouts/Article.astro
title: "Running a GmbH in Germany: accounting, costs and bureaucracy"
created: 2026-10-21
description: "What a small German GmbH needs after the founding: the accounting setup, the monthly, quarterly and yearly duties, what it costs, and the bureaucracy that comes with it."
tags: Bootstrapping, Germany, Taxes
cover_image: /img/writing/covers/running-a-gmbh-in-germany.jpg
translation: /writing/gmbh-in-deutschland-fuehren/
---

I run [Stagetimer](https://stagetimer.io), a bootstrapped SaaS, as a small German GmbH. This is what that takes after the founding: the accounting setup, the monthly to yearly tax duties, the fees, and the bureaucracy around it. Read [From Einzelunternehmen to GmbH](/writing/from-einzelunternehmen-to-gmbh/) for my experience creating a German GmbH.

## Accounting setup

**Bookkeeping: [Lexware Office](https://www.lexware.de/preise?pid=kC1hh07bGA&pdata=AIZvBWomhS&cid=1777&utm_medium=affiliate&utm_source=recommend-kC1hh07bGA&utm_campaign=kunden-werben-kunden&couponCode=LXOK4YWK)** (referral link). I already used it for the Einzelunternehmen, so the GmbH got a fresh account and I moved over 111 invoices from January to April.

All tax things (VAT returns, EU sales reports) run through it. I took the largest plan because it includes API access, and hooked it up to my AI agent.

**Payroll:** the Lexware Lohn & Gehalt add-on, inside the same tool.

**Tax advisor:** does the annual financial statements (*Jahresabschluss*) and the opening balance sheet. Everything else I do myself.

**Finding a tax advisor.** The real obstacle for German founders. Many tax advisors don't take on small new clients, and you should have one *before* you make your first Euro. Ask other founders for referrals, and start looking early. For a GmbH you can't do without one.

**Bank: [Qonto](https://qonto.com/r/xp3mdc)** (referral link).

**Payments:** [Paddle](https://paddle.com) as merchant of record for all self-serve subscriptions, as explained in [How to collect money without accidentally summoning a tax inspector](/writing/2-how-to-collect-money-without-accidentally-summoning-a-tax-inspector/). For enterprise invoices I switched to Stripe Invoicing, because Lexware can't do localized number formats, currencies other than EUR, or a card payment link. The bookkeeping still goes through Lexware.

## Recurring duties

**Monthly:** VAT return, wage tax return, payroll.

**Quarterly:** EU sales report (for EU B2B customers), corporate tax prepayment (tax office), trade tax prepayment (city).

**Yearly:** annual financial statements and their publication in the company register, corporate, trade and VAT tax returns, the wage report to the Berufsgenossenschaft, the IHK fee, the Transparenzregister fee, and the [§22 UmwStG](https://www.gesetze-im-internet.de/umwstg_2006/__22.html) proof of ownership for 7 years.

## Running costs

Per year, without the taxes themselves:

| Item | Per year |
|---|---|
| Tax advisor (annual financial statements, tax returns) | €2,500+ |
| Lexware Office XL (€32.90 per month, net) | €394.80 |
| Lexware Office payroll add-on (€12.90 per month, net) | €154.80 |
| Qonto business account (€23 per month) | €276 |
| Public Broadcast fee: Tier 1 (€36.72 per quarter) | €146.88 |
| IHK membership (provisional) | €114 |
| [Transparency register](https://www.transparenzregister.de) | €19.80 |
| Unternehmensregister: publishing the annual financial statements ([third-party estimate](https://onlinebilanz.de/?p=19098)) | ~€50 |
| Berufsgenossenschaft | Based on payroll, billed after the year ends |
| Health and long-term care insurance<br>(paid personally; mandatory; maximum contribution) | ~€14,300 |

For comparison: my previous tax advisor charged about €3,000 net per year for the Einzelunternehmen (profit statement plus income, trade and VAT tax returns). Tax advisor fees follow a statutory fee schedule ([StBVV](https://www.gesetze-im-internet.de/stbgebv/)) and grow with profit and revenue.

**IHK membership fee.** Every GmbH is a compulsory member of its chamber of commerce. Mine sent a provisional fee notice of €114 for 2026, with a final calculation to follow once the profit is known. It found the GmbH through the commercial register, even before the trade office processed my registration.

**Rundfunkbeitrag** (public broadcasting fee). It's charged per household *and* per business location, so the company pays separately from my private household. Mine also counts the company car, which as far as I understand shouldn't cost extra. A correction request is pending.

<div class="letters">
<figure><a href="/img/writing/gmbh/rundfunkbeitrag.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/rundfunkbeitrag.jpg" alt="Beitragsservice letter: no employee count given, so tier 1 (up to 8 employees) is applied" loading="lazy"></a><figcaption>The broadcast fee: tier 1, up to 8 employees.</figcaption></figure>
</div>

**Health insurance.** As the controlling managing director of my own GmbH, social security treats me as self-employed, so I pay 100% of my health insurance myself. I'm publicly insured, which charges a percentage of income up to a ceiling (*Beitragsbemessungsgrenze*, €5,812.50 per month in 2026). I pay the maximum contribution (*Höchstbeitrag*): about 17% for health and 3.6% for long-term care (*Pflegeversicherung*), around €1,190 per month. With little income you still pay a few hundred Euros per month, because public insurance assumes a [minimum income](https://www.gesetze-im-internet.de/sgb_5/__240.html) for the self-employed. Private insurance looks cheaper when you're young and single, and gets expensive with family and age. Switching back is hard.
