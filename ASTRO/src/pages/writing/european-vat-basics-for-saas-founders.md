---
title: 'European VAT basics for SaaS founders: What you need to know about sales tax when starting'
created: 2021-04-15
description: I am creating a SaaS business from Germany. Here’s what I figured out so far about sales tax and value-added tax (VAT) when selling my subscriptions in Europe and globally. This guide assumes your business is in Germany or another European member state.
tags: SaaS, Business, Taxes
cover_image: /img/writing/covers/european-vat-basics-for-saas-founders.jpg
---

I am creating a SaaS business from Germany. Here's what I figured out so far about sales tax and value-added tax (VAT) when selling my subscriptions in Europe and globally. This guide assumes your business is in Germany or another European member state.

# TL;DR

:round_pushpin: Customer is in your country: 
- B2C: Charge the VAT rate of your country, that's 19% in Germany
- B2B: Same as B2C, just charge your country's tax rate

:eu: Customer is in another EU country: 
- B2C: Charge your country's tax rate if your revenue is ≤10k €, otherwise take advantage of [MOSS](#eu-the-mini-one-stop-shop-moss)[^1]
- B2B: Get your customer's VAT ID and address, then label the invoice as 'reverse charge' with 0% VAT[^2]

:earth_africa: Customer is outside the EU: 
- B2C: Simply label the invoice with 0% tax[^3]
- B2B: Same as B2C, simply label the invoice with 0% tax

# Company Basics

Countries generally have a rule for small private companies. If you are below a specified amount of yearly revenue you don't have to charge sales tax at all, no matter where your customer is. In Germany, this limit is about 22,000 EUR/year [^4].

If you are above that threshold you have to add a tax to your service. In Europe, this tax is called VAT (Value Added Tax). You need to collect the tax from your customers and then return it to the tax authorities.

The tax rate is based on your client's country and must be returned to that country. Meaning VAT and sales tax is calculated based on the location of the buyer, not your business. Essentially you'd need to know the particular tax law of every country and state you sell to. Since you want to sell internationally as a SaaS founder, this means you need to know every single country's tax law.

Fortunately, you don't need to worry about that when starting. There are rules in place to help you start and save you some paperwork. More strict requirements are introduced as your revenue grows. Meaning you only really need to worry about the specific laws when you have enough revenue to afford a professional who can worry for you.

# When and how to charge VAT

European VAT distinguishes between B2C (selling to individuals) and B2B (selling to businesses) and if your customer is in the same country, in another EU country, or outside the EU.

## :round_pushpin: Within your own country

If the customer is in your country you simply apply your country's VAT rate, if the customer is an individual or a business. You keep the tax on your bank account and send it to the tax authority when you file your taxes.

<div class="bg-gray-100 border border-gray-200 rounded px-4 py-2 mb-4" role="alert">

**Example**

Seller: Germany &middot; Customer: Germany

| My awesome thing | € 20.00 |
|:-----------------|--------:|
| VAT (19%)        |  € 3.80 |
| Total            | € 23.80 |

</div>

## :eu: Within the EU

Selling B2C inside the EU is a bit more complex. Fortunately, there are rules to make it simpler at the beginning.

If your revenue inside Europe is below 10,000 EUR/year, then you don't need to worry about where your customer is, you can just apply the tax rate of your country.

If I sell to France, for example, I just write Germany's 19% on my invoice even though their tax rate is 20%. The taxes are filed and returned to my local tax authority.

<div class="bg-gray-100 border border-gray-200 rounded px-4 py-2 mb-4" role="alert">

**Example**

B2C &middot; Seller: Germany &middot; Customer: France &middot; Revenue inside EU ≤10k €

| My awesome thing | € 20.00 |
|:-----------------|--------:|
| VAT (19%)        |  € 3.80 |
| Total            | € 23.80 |

</div>

## :eu: The Mini-One-Stop-Shop (MOSS)

If you are above 10,000 EUR yearly revenue inside the EU, excluding your won country, then you need to apply the tax rate of your customer's country and return those taxes to said country. In theory, you would have to register with all the tax authorities whose countries you do business with.

Fortunately, Europe realized that this is a bit wild and created the Mini-One-Stop-Shop (MOSS) rule which you can apply for. Under MOSS you still need to charge taxes based on customer location, but you can return all those taxes to your tax authorities and they figure out the rest. 

If I sell to France I put 20% VAT on my invoice. With MOSS I can return the money to the German authorities.

<div class="border rounded p-2 text-sm text-center max-w-prose mx-auto mt-16">
  👉 MOSS has been renamed to OSS (One Stop Shop) in July 2021 and simplified a bit. See: https://vat-one-stop-shop.ec.europa.eu/index_en
</div>

<div class="bg-gray-100 border border-gray-200 rounded px-4 py-2 mb-4" role="alert">

**Example**

B2C &middot; Seller: Germany &middot; Customer: France &middot; Revenue inside EU >10k €

| My awesome thing | € 20.00 |
|:-----------------|--------:|
| VAT (20%)        |  € 4.00 |
| Total            | € 24.00 |

</div>

## :eu: B2B inside Europe

Selling to businesses inside Europe is much simpler. All you need to do is to get your customer's VAT number and address, then label the invoice as 'reverse charge' with 0% VAT. Make sure the VAT number is valid! Here's a free service by the EU you can use to check: https://ec.europa.eu/taxation_customs/vies/vieshome.do?selectedLanguage=EN

Reverse charge means your customer is responsible to take care of VAT, but you still need to report those sales. You need the customer's VAT number for that.

<div class="bg-gray-100 border border-gray-200 rounded px-4 py-2 mb-4" role="alert">

**Example**

B2B &middot; Seller: Germany &middot; Customer: France &middot; Revenue inside EU >10k €

| My awesome thing        | € 20.00 |
|:------------------------|--------:|
| VAT (0%) reverse charge |  € 0.00 |
| Total                   | € 20.00 |

</div>

## :earth_africa: Internationally outside the EU

In a sense, this is the simplest of all cases. In the beginning, you can simply label your invoice with 0% sales tax and that's it.

Countries generally have a yearly revenue threshold here. In Canada, for example, this threshold is 30,000 CAD/year[^5]. Other countries have similar thresholds. Meaning you only have to worry about these regulations if you do a significant amount of business with a particular country. So keep that in mind and keep an eye on your customers.

<div class="bg-gray-100 border border-gray-200 rounded px-4 py-2 mb-4" role="alert">

**Example**

Seller: Germany &middot; Customer: Canada &middot; Yearly revenue ≤CAD $30k

| My awesome thing        | € 20.00 |
|:------------------------|--------:|
| VAT (0%)                |  € 0.00 |
| Total                   | € 20.00 |

</div>

There are probably a million more rules. And I'm no expert, so some info may be wrong here. But that's all I've learned so far and it should give you a good starting point also.


[^1]: This is the most complicated case, make sure to check the explanation.
[^2]: Reverse charge means your customer is responsible to take care of VAT, but you still need to report those sales. You need the customer's VAT ID for that.
[^3]: Usually countries have revenue thresholds after which you have to register with them, see [Internationally outside the EU](#earth_africa-internationally-outside-the-eu).
[^4]: https://www.existenzgruender.de/DE/Gruendung-vorbereiten/Gruendungswissen/Steuern/Kleinunternehmerregelung/inhalt.html
[^5]: If you do not exceed the $30,000 threshold over 4 consecutive calendar quarters you are considered a small supplier in Canada, see https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/when-register-charge.html
