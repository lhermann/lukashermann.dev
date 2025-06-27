---
title: "Part 2: How to collect money without accidentally summoning a tax inspector"
created: 2025-06-27
description: A German solopreneur's guide to collecting payments without tax headaches. From PayPal to Paddle, and what to do when inspectors visit.
cover_image: /img/writing/covers/...
---

> **Series:** The Solopreneur's German Bureaucracy Handbook – Part 2

# Part 2: How to collect money without accidentally summoning a tax inspector

So, I actually had a tax inspection in 2023!

A tax officer announced he was coming to "see what I actually do" (because apparently selling software on the internet is still witchcraft in 2023). Of course, I completely fumbled the appointment by waiting at my home address while he showed up at my official business address (my parents' place) – what a rookie mistake. I felt my credibility shattered, my business foreclosed.

After rescheduling and a sleepless night wondering if selling pixels for money was legal, we finally met. For two hours I had to trace the journey of a single Euro from my customer's wallet, through their credit card, my payment provider Paddle, past various tax authorities, and finally into my bank account – it was like explaining the plot of Inception with spreadsheets. The good news? He was actually quite nice (apparently, they save the mean ones for suspected fraud cases, so he said) and even sympathized with how hard it is to navigate German tax law as an internet business. He gave me the green light to continue. Phew! I probably aged five years in those two hours.

That experience taught me the real secret: the tax office isn't trying to catch you doing something wrong – they just want to understand what you're actually doing. So let me explain how taxes actually work for your internet business.

## The minimum viable knowledge you need about taxes

Taxes are like an onion, they make you cry. But you can't just avoid cutting it – you need to peel back each layer methodically, even if your eyes water. But once you get through the outer layers, it's manageable.

There are four types of taxes that matter for your business:
- Income tax
- Corporate tax
- Trade tax (Gewerbesteuer)
- Value added tax (VAT)

Which combination you pay depends on your company structure.[^1]

**Sole proprietorship (Einzelunternehmen):** Your business profit becomes your personal income, so you pay income tax on everything you earn. You also pay trade tax to your city on business profits above €24,500.[^2]

**Corporation (GmbH/UG):** The company pays corporate tax[^3] and trade tax on any profits it keeps. Money you pay yourself as salary gets hit with income tax[^4] instead (and doesn't count as company profit).

**VAT (the tricky one):** This applies regardless of your company type. Every sale includes 19% VAT (7% for certain goods) that you collect for the tax office. It's not your money – you're just the middleman. YOU have to calculate how much, YOU have to add that to the sale price, and YOU have to collect that in your bank account. But it's not your money; the tax office will collect it, and they're surprisingly motivated about it. I once had a bank account temporarily seized and personal liability threatened for not paying on time. So take that as a word of warning.

The complexity comes from VAT rates varying by customer type and location. B2B sales within the EU are typically VAT-free, while B2C sales use your customer's local rate. For the full breakdown, [here's my detailed guide](https://lukashermann.dev/writing/european-vat-basics-for-saas-founders/).

## Collecting money: Choose your difficulty

I'm talking specifically about selling digital goods (like online courses) or digital services (like SaaS) to anyone in the world.

There are 3 levels of difficulty for collecting money:

### Easy (with caveats)

PayPal or Stripe are easy. You send a payment link, the customer opens the link and pays, the money goes to your bank account eventually. Your thingamabob costs €8, everyone pays €8. No sales tax, no VAT. Easy.
- This is what you see most solopreneurs on Twitter do. Often they are from the US or other "business friendly" countries.
- In Germany, this is only possible if you have a sole proprietorship and use the small business rule (Kleinunternehmerregelung). But that limits you to €22,000/year revenue and won't scale.
- While technically possible in most countries if you "keep your head down," ignoring VAT obligations is a real liability risk. Tax offices have long memories, and back-payments plus penalties can sink your business.

### Medium

You use a merchant of record (MoR) like the Apple App Store or Paddle. They collect the money and handle everything tax-related: collection, calculations, registrations, and reporting. You receive clean revenue without VAT headaches. The downside is the higher commission – ~5.5% for Paddle[^5] and a whopping 30% for the App Store. But consider this a "sleep well at night" tax.
- Some solopreneurs dislike this option because fees are so high and you're forced to apply VAT. They usually think VAT is just another fee, like a tip you can choose to ignore.
- In Germany, you can use MoRs with any type of business selling digital goods and services. You may get questions from the tax office, but those can be answered satisfactorily.

### Hard

This is not Super Mario hard, this is Dark Souls hard. You use PayPal or Stripe and handle taxes yourself. Even with Stripe Tax helping with calculations, you still need to:
* Register for VAT in the EU when you exceed local thresholds (typically €10,000/year)[^6] (or, and many don't know this, immediately if your business is not in the EU).
* File returns through the EU VAT One Stop Shop system (OSS)[^7].
* Keep accounting records for at least 10 years.
* Probably hire professional help because it's complicated and mistakes can be expensive.
* You'll die many times before you figure it out.

## What to do if you accidentally summon a tax inspector

This can happen if you make substantial revenue but don't declare much VAT. Which means you're either doing something illegal, or you're using a merchant of record. Ask me how I know.

First of all, don't panic! Tax officers may turn out surprisingly friendly, and in Germany we have the rule of: innocent until proven guilty. Rather than ending up in jail, you probably just have to explain your business. Have these ready:
* The last 4 years of bank statements
* Sample invoices from different customer types (B2B, B2C, EU, non-EU)
* Your contracts with payment providers
* Documentation of your pricing and tax handling

The inspector wants to trace VAT through your so-called "value chain." See, it's called value added tax for a reason. The idea is that somewhere along the life of a product, tax should be paid exactly once, ideally by the final consumer. If you can show, like in my case, that Paddle collects and remits the tax before it hits my bank account, then the "taxed exactly once" condition is satisfied and the inspector will be happy.

---

**Series:** The Solopreneur's German Bureaucracy Handbook – Part 2

**Next in this series:** Part 3 – In Progress...

<!-- **More from this series:** [The Solopreneur's German Bureaucracy Handbook](/series/german-bureaucracy-handbook) -->

[^1]: There's also capital gains tax which shows up when you pay yourself in dividends instead of a paycheck. But that's advanced stuff.

[^2]: Trade tax (Gewerbesteuer) goes to your city. But it's always a fixed percentage, 14% if you are not unlucky. The tax exemption at time of writing is at €24,500, see here: https://www.gesetze-im-internet.de/gewstg/__11.html

[^3]: Corporate Tax (Körperschaftsteuer) goes to the federal government and is flat at 15%.

[^4]: Income tax is progressive, the more you earn the higher the percentage. But 30% is a good approximation for it.

[^5]: I've calculated the real fees of about 2000 real Paddle purchases, see here: https://x.com/_lhermann/status/1701269370943533450

[^6]: The threshold is €10,000 combined for all EU sales. Once exceeded, you need to charge each country's local VAT rate.

[^7]: https://europa.eu/youreurope/business/taxation/vat/vat-digital-services-moss-scheme/index_en.htm
