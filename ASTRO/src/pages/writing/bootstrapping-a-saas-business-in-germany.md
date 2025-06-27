---
title: "Bootstrapping a SaaS Business in Germany: How I did it"
created: 2023-10-15
description: "Lukas Hermann, founder of Stagetimer, delves into the nitty-gritty of bootstrapping a SaaS business in Germany. Learn about navigating bureaucracy, tax management, pricing, product development, tech stack, marketing, and more. A must-read for aspiring German entrepreneurs."
tags: Bootstrapping, Germany
cover_image: /img/writing/covers/bootstrapped-saas-germany.jpg
lang: en
---

If you're reading this, you're probably interested in starting a SaaS business in Germany. You're also likely overwhelmed with questions about taxes, regulations and all the rest. Trust me, I've been there. When I started, I had zero clue about what I needed to get off the ground. This article is a deep dive into all those nitty-gritty details, sprinkled with my personal experiences and mistakes.

Hi, I'm Lukas, and I launched and grew Stagetimer from €0 to €10,000+ in recurring revenue in Germany. And here is how you can do it, too.

## Outline
1. [My Journey and Why You Should Read This](#1-my-journey-and-why-you-should-read-this)
2. [What is Bootstrapping?](#2-what-is-bootstrapping)
3. [Software-as-a-Service and Pricing](#3-software-as-a-service-and-pricing)
4. [Navigating German Bureaucracy](#4-navigating-german-bureaucracy)
5. [Handling Taxes](#5-handling-taxes)
6. [Do I Need a Tax Advisor?](#6-do-i-need-a-tax-advisor)
7. [How to Develop a Product](#7-how-to-develop-a-product)
8. [The SaaS Tech Stack](#8-the-saas-tech-stack)
9. [How to Start With Marketing](#9-how-to-start-with-marketing)
10. [Final Thoughts and Resources](#10-final-thoughts-and-resources)

---

## 1. My Journey and Why You Should Read This

### Timeline and Growth

On November 1, 2020, I made my first commit for what would become Stagetimer. About three weeks later, I made a Reddit post that led to my first user. Fast forward to February 2021 and I officially founded a German Einzelunternehmen, a sole proprietorship company. I got my first paying customer in June 2021. As of September 2023 I reached a €10,000 Monthly Recurring Revenue (MRR).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Stagetimer crossed €10k MRR 🎉<br><br>Free → Paid: 8 months<br>0 → 1k: 10 month<br>1k → 5k: 8 months<br>5k → 10k: 10 months<br><br>We&#39;re starting to understand positioning, pricing and marketing in our niche. <a href="https://t.co/uxagMDo5dV">pic.twitter.com/uxagMDo5dV</a></p>&mdash; Lukas Hermann (@_lhermann) <a href="https://twitter.com/_lhermann/status/1697951410371908005?ref_src=twsrc%5Etfw">September 2, 2023</a></blockquote>

### How I Came Up with the Idea

One day, I visited a friend who owned a studio. They used an outdated Flash app on an old laptop to time speakers. To even start the timer, my friend had to run into the recording room, hit 'Start,' and then dash back to the video mixer. I thought, "There must be a more efficient solution." After some research, I realized there weren't any browser-based solutions, just a few native apps. So, I built the first version of Stagetimer in one weekend. [^1]

### Question I Had at the Start

The biggest roadblock I hit was how to handle payments. Stripe was the de facto solution, but it had gaps when it came to automating taxes. Here were my concerns:

- Do I need to collect taxes on every sale?
- How do I return taxes collected from international sales?
- What if I don't collect any sales tax? (Many US startups ignore this, but it's tricky for German companies)
- Do I need to set sales tax rates manually for each country?
- What about invoices for each sale, and how do I generate those correctly?
- Do I need to account for every sale? Do I need an accountant for that?

Another pressing question was about health insurance, which is mandatory in Germany. When you're an employee, it's simple; the cost is deducted from your paycheck. But what about when you're starting your own business? What if the income is minimal? What if you're running a side business? Is that even allowed?

So why should you read this? Because I've navigated through all these issues. I've been where you are, and I can offer you a roadmap to steer clear of the potholes I hit. We're going to discuss all these aspects and more, to provide you with a comprehensive guide to bootstrapping a SaaS business in Germany.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/stagetimer-at-toitoitoi.jpg"
    alt="Stage with performer and Stagetimer on a screen"
  >
  <figcaption>Stagetimer used to stay in touch with the performer on stage (<a href="https://toitoitoi.coffee/" rel="noopener">ToiToiToi Coffee x Culture</a>)</figcaption>
</figure>

## 2. What is Bootstrapping?

### Definition

Bootstrapping in the business context refers to starting and growing a company without external funding. In essence, you're pulling your business up by its own bootstraps, using solely your own resources to fuel its growth.

### Bootstrapping vs. Traditional Startup Funding

Traditional startups often go through multiple funding rounds, including Angel Rounds, Seed Rounds, Series A, Series B, and so on. But it's crucial to note that investor money never comes free. You cede a portion of your business, and investors generally expect a significant return within a 5-year timeframe. This pushes you to achieve roughly 300% Year-over-Year growth and then to exit, either by selling your company or going public. By this point, founders usually own less than half of their business and are under immense stress.

### Advantages of Bootstrapping

Bootstrapping is tough, especially in the beginning. However, the upside is significant. You retain 100% ownership of your business. This means you have the freedom to take a week off without answering to anyone. You also have the option of never exiting; you can either sell or let it run on low commitment while working on your next project.


### My Experience with Stagetimer

I began Stagetimer as a side project while keeping my day job. Working on weeknights and weekends, progress was slow, but it was steady. About 1.5 years in, I took the plunge and went full-time when Stagetimer was making roughly €3,000 per month. My wife and I then decided to travel in Asia for 6 months. When we returned, Stagetimer was generating enough income to cover all our living expenses in Germany. Fun fact: the cost of living while traveling in budget-friendly Asian countries turned out to be less than living in most German cities.

### Operating Costs

One of the benefits of running a SaaS business is the low operational costs. For Stagetimer, I spent barely €150 per month on tech infrastructure. Many tools and services offer generous free tiers, which can keep your costs down significantly.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/pexels-tobi-631986.jpg"
    alt="Closeup of person's shoes while walking"
  >
  <figcaption>Bootstrapping might not be the easiest path, but it does offer unparalleled control and freedom.</figcaption>
</figure>

## 3. Software-as-a-Service and Pricing

When you hear SaaS, or Software as a Service, think of software that's running on a remote server and accessed through a browser. This is fundamentally different from the older model where you'd package software for local installation. Two major perks come with this model:

1. **Recurring Revenue**: Because you host and maintain the server, you can charge customers on a recurring basis. This is great for cash flow and for steadily growing your revenue over time.
  
2. **Simplified Updates**: Updates roll out automatically to all users since they're accessing the current version of your software through a browser. You only need to update it in one place, saving you time and effort.

Utilizing cloud computing services like Firebase can further reduce your operational complexities and costs. It's not uncommon for bootstrapped SaaS businesses to have over a 90% profit margin, if you don't factor in your own time as a cost. This incredible profit margin can quickly cover your living expenses, leading you to what we bootstrappers call "Ramen Profitability"—the bare minimum you need to sustain yourself. For Stagetimer, it took about two years to reach this point, which is fairly standard.

If you're considering going full-time right away, make sure you've got enough savings to last at least 1.5 years. Keep in mind that subscription models come with customer friction. People generally don't like subscriptions, so your service needs to be compelling enough for them to want to use it regularly.

### Choosing a Price

Pricing is a huge challenge in the SaaS space, because there's no real additional cost for each user you add. Should you charge €5/month or €69/month? Your price is essentially just made up by you. Here are some factors to consider:

1. **Target Customer**: If you're aiming at individual consumers (B2C), your pricing will typically be lower, between €5 and €20/month. Businesses (B2B), however, are willing to shell out more, potentially hundreds per month, if your solution solves a significant problem for them.

2. **Revenue Goals**: Your price point directly impacts your revenue and the level of customer service required. For instance, at €5/month, you'll need 2,000 customers to hit €10,000/month, not even accounting for transaction fees. At €50/month, you'd only need 200 customers. Choose wisely. 

So, in summary, SaaS offers a lucrative model with its recurring revenue and low overhead. However, the challenges lie in convincing your customers of the value you provide and nailing the right price point.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/pexels-taryn-elliott-4098989.jpg"
    alt="Man Eating Instant Noodles"
  >
  <figcaption>The first milestone is "Ramen Profitability" – a.k.a. the beginning of freedom!</figcaption>
</figure>

## 4. Navigating German Bureaucracy

### Getting Started: Ignore the Bureaucracy (At First)

Honestly, this was a big unknown for me at first, and that's partly why I wrote this article. My advice? Just get started. When you're building your first product, you'll have plenty of challenges that demand your focus. Technically, you can operate as a private person until you reach €100 - €200 per month in revenue. It's a legal gray area, but these amounts are unlikely to raise any eyebrows [^2]. Once you reach that point, then it makes sense to register a company.

### Choosing the Right Legal Structure

Don't get entangled in setting up a UG or GmbH (limited liability companies) right off the bat. The overhead in paperwork and legal responsibilities can drain you. Sure, these structures limit personal liability, but let's be realistic: SaaS businesses are generally low-risk in that department. What you can't escape is tax liability. The best approach is to start as an "Einzelunternehmer" (sole proprietor). You can register this at your local town hall for a nominal fee, and you'll typically receive confirmation within a few days. Next, it's mandatory to contact the tax office (Finanzamt). They might send you a letter, but don't rely on that; you should reach out proactively. Fill out the "Fragebogen zur steuerlichen Erfassung für Einzelunternehmen," which you can do either online via the surprisingly decent Elster website or with a paper form. A tax consultant can guide you, but doing it yourself is completely feasible.

### Certificates and Regulations

Good news: in Germany, you don't need any special certifications to build and operate a SaaS business. That barrier simply doesn't exist.

### When to Consider a GmbH

Once your revenue crosses the €100,000/year mark, switching to a GmbH starts to make sense. By then, you'll be financially comfortable enough to consult tax advisors to navigate the intricacies, and their fees will be a justifiable business expense.

### Get Help From the IHK or Local Officials

The IHK (Chamber of Industry and Commerce) is a resource that can prove valuable. The IHK isn't liked very much because every business has to pay a mandatory fee to them. A bit like the GEZ, but for businesses. But other than the GEZ, you can actually call or email the IHK and ask them questions. I've personally had detailed questions answered by their legal team at no extra cost. They even responded to follow-up questions.

Your local city officials may not be business experts, but they can connect you to someone who is. There are people in the system who are knowledgeable and genuinely interested in helping new entrepreneurs.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/pexels-cottonbro-studio-8468119.jpg"
    alt="Free Man in White Dress Shirt Reading Books Stock Photo"
  >
  <figcaption>Navigate German bureaucracy in the simplest way possible.</figcaption>
</figure>

## 5. Handling Taxes

### Understand Them!

Taxes aren't something you can afford to wing. Unlike other aspects of your startup, the tax office is exacting and, legally speaking, it's on you to reach out to them. Ignorance is not a defense; you'll accrue late fees if you're not proactive. Also, be aware that you're personally liable for any tax debt, irrespective of your company's legal structure.

### Types of Taxes

Every business, big or small, needs to handle three types of taxes:

- **VAT (Mehrwertsteuer)**
- **Business Tax (Gewerbesteuer)**
- **Corporate Tax (Körperschaftsteuer)**

### Business Tax vs Corporate Tax

Let's clear up a common point of confusion. Business tax goes to the city, while corporate tax goes to the country. As a Kapitalgesellschaft, you'll pay yourself a salary and, on that, pay income tax. If you opt for an Einzelunternehmer, you won't be dealing with corporate tax; all your profit is considered income, and you pay income tax on that. Is one option more tax-efficient than the other? A tax consultant can answer that, but honestly, the difference is negligible when you're starting out, and simpler bureaucracy will probably save you more money. Remember to lay aside some money to pay these taxes at the end of year one. I put aside 30% of revenue.

### VAT: The Complicated One

VAT is complicated. I've written a detailed article on this: [European VAT Basics for SaaS Founders](https://lukashermann.dev/writing/european-vat-basics-for-saas-founders/). But let me give you the essentials.

1. **Kleinunternehmerregelung**: If you're operating as an Einzelunternehmer and apply the small business rule (i.e., "I promise not to make more than €22,000/year"), you can make sales up to €10,000 within the EU without needing to collect any VAT. For sales outside the EU, you also apply zero sales tax.
  
2. **Merchant of Record**: I can't stress this enough, use a Merchant of Record like Apple App Store, [Paddle](https://www.paddle.com/), or [Lemon Squeezy](https://www.lemonsqueezy.com/). These services essentially license your software, handle VAT and sales tax collection, return these taxes appropriately, and then pay you. This frees you from a mountain of bureaucratic work and financial risk.

Tax matters are complex, but they're manageable. At the end of the day, the important thing is to not ignore them and get professional help when needed. The initial investment in understanding and managing your taxes will pay off in the long run, believe me.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/pexels-mikhail-nilov-8297240.jpg"
    alt="An Exhausted Woman Reading Documents"
  >
  <figcaption>Taxes are the one thing you cannot ignore in the beginning.</figcaption>
</figure>

## 6. Do I Need a Tax Advisor?

### The Cost of Professional Help

Hiring a tax advisor isn't cheap; you're looking at a minimum of €1,200 per year, often more. When you're bootstrapping with zero revenue, that's a significant expense. Now, why do I suggest you can start without one? Germany has favorable conditions for small businesses (Kleinunternehmerregelung), making the accounting process manageable for solo entrepreneurs. Until you hit the small business thresholds, you can go solo. Once your revenue hits the €22,000 mark, affording a tax advisor becomes more reasonable.

### Going Solo: What You Need

If you're opting to handle taxes yourself, start by learning how to fill out the "Fragebogen zur steuerlichen Erfassung für Einzelunternehmen". There are good online guides for that. Next, get accounting software that can generate an Einnahmeüberschussrechnung (EUR, or simple accounting document) for your annual income tax declaration. Unlike in the US, filing income tax isn't mandatory for employees in Germany, but it is when you have a business. I use Lexware Office. Here's my [affiliate link for Lexware Office](https://app.lexoffice.de/buy/direct-purchase-select.html?pid=TVvGrszacL&pdata=qwKeyHkkT3&cid=1777&utm_medium=affiliate&utm_source=recommend-TVvGrszacL&utm_campaign=kunden-werben-kunden&couponCode=LXOK4YWK) if you want to try it out.

### With an Advisor: Points to Note

Make sure they know what SaaS is; not all do. And importantly, clarify if you can use your own accounting software and then export the data to their DATEV system. Why? Because if they're not okay with that, they'll manually re-enter your receipts and double-check your bank transactions, and those hours add up, making it even more expensive.

### Tax Advisor in the Family

If you've got a tax advisor in the family, you've essentially won the German lottery. I'm not kidding, congratulations! You can skip all this and avoid learning things the hard way. For the rest of us, mistakes are a given. I've shelled out over €6,000 in fees due to errors. I consider that my tuition fee for the school of entrepreneurship.

<figure class="max-w-2xl">
  <img
    src="/img/writing/german-bootstrapped-saas/lexoffice-laptop.jpg"
    alt="Person working on laptop with Lexoffice"
  >
  <figcaption>A tax advisor is not a strict necessity when starting but becomes more viable as you scale (<a href="https://www.lexoffice.de/" rel="noopener">Lexoffice</a>).</figcaption>
</figure>

## 7. How to Develop a Product

### Where to Look for Ideas

The notion that your first product version is going to be a hit is, frankly, unlikely. It often takes 2-3 years of tweaking and reiterations to achieve a good Product-Market Fit (PMF)—a stage where your product is what the market both wants and needs. Your best bet for finding ideas? Everyday life. While some advise "scratching your own itch," I suggest going through life observantly. Listen when people complain about a problem; chances are, you've got a product idea in front of you. My approach involves watching how people interact with their environment and thinking, "This could be simplified."

### The Bootstrapped Approach vs Traditional Startups

Traditional Startups have investor money and do product development different than bootstrapped businesses. Startups hire a team, whiteboard a product experience, spend money on the brand, design, marketing and all that. They solve every problem by (1) hiring and (2) throwing money at it.

Bootstrapped businesses take a different route. You have €0 to start with. So, skip worrying about your name, logo, or brand initially. Focus on building a Minimal Viable Product (MVP)—the simplest version of your product that solves the problem at hand.

### Naming Your Product

When it comes to naming your product, stick to these rules: 

- You should like it
- Others should remember it the next day
- It should be easy to spell

Forget about a free .com domain or a name that explicitly describes your product. Instead, choose a name you like and one that is memorable. So, no need to name your to-do list app "listify.com"; you could just as well call it "llamalife.co"[^3].

### Product Validation

Next up, validate your product idea. I put Stagetimer online for free initially. Yes, opinions vary on this, but my take is that pricing is irrelevant at this stage. [^4] Label it as "early access" and see if people come back after trying it out. That's your first validation step. Post your product in places like Reddit and gauge user engagement.

### First Earnings and Customer Feedback

It took me 6 months to make my first Euro with Stagetimer. Balancing a full-time job while developing a product that justified a premium plan was a time-consuming process. But the day I released the update, I got my first paying customer, thanks to a Reddit post I made months ago. That was a strong sign the product had value.

I reached out to these early customers to find out why they used my product and what features they needed. This feedback helped me tailor Stagetimer to my target audience. Make sure that people can find your product on Google by using the terms they would use to describe it.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/pexels-senne-hoekman-1178498.jpg"
    alt="White Diagram Paper Under Pliers"
  >
  <figcaption>Find a need, build an MVP, and iterate based on market feedback.</figcaption>
</figure>

## 8. The SaaS Tech Stack

### Choosing Your Tech Stack

My stack consists of Vue, Node.js, Express, MongoDB, and Firebase. I already had experience with Vue, Node, and Express. Firebase was new to me, but it turned out to be a good addition. Your stack doesn't have to be the same as mine. Some people I know didn't even know how to code and still managed to build an app after learning JavaScript for a few months. Whether you're aiming for a web app, a desktop app with Electron, or native mobile apps, the key is to stick with one platform.

### Shiny Object Syndrome

Learning to code is smoother when you work on a single, simple project. There's this tendency among developers, a sort of "shiny object syndrome," where you start multiple side projects and never finish any. The antidote is simple: focus on one project and see it through to completion.

### Some Unknowns Are Okay

I wasn't familiar with user authentication, which led me to Firebase as an out-of-the-box solution. I also didn't know how web sockets worked but needed them for real-time updates in my app. Here, an open-source tool like socket.io was invaluable. For most tech challenges, chances are someone has already solved it. Whether it's through open-source tools or paid solutions, a little research upfront goes a long way.

### Don't Get Intimidated

If what I just explained sounded like gibberish, that's alright. You can find a tech co-founder, or if you're willing, start learning how to code yourself. A good starting point is [FreeCodeCamp](https://www.freecodecamp.org/learn), beginning with their "Responsive Web Design" course. In less than six months, you'll be building stuff that once seemed like a pipe dream.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/pexels-dan-cristian-paduret-1476321.jpg"
    alt="Blue and Yellow Phone Modules"
  >
  <figcaption>Choose a stack and stick to it. Don't be afraid to learn coding from scratch.</figcaption>
</figure>

## 9. How to Start With Marketing

### Navigating the Marketing Maze

Marketing can seem intimidating, especially if it's not your forte. The truth is, bootstrappers usually throw a bunch of tactics at the wall and see what sticks. In my experience, SEO, Google Ads, and word-of-mouth have proven effective. On the flip side, Facebook Ads, social media posts, and cold emails didn't do much for us.

### Low-Hanging Fruits: Easy First Steps

Here are four low-effort, high-reward tactics that you can start with:

1. **Good Landing Page**: Your landing page should clearly articulate what your product does. Use simple language and include images. The simpler it is, the better. For actionable advice and examples on this, check out [this guide](https://www.demandcurve.com/playbooks/above-the-fold). [^5]
2. **Compare to / Alternative to Pages**: Create pages that compare your product to popular competitors in your space. These pages can rank well and drive targeted traffic.
3. **Freebies**: Offer articles, PDF guides, spreadsheets, or templates that people can download. Free resources add value and people love them!
4. **Post in a Relevant Subreddit**: Particularly effective if you have a free tool. Reddit users generally dislike overt advertising, so an authentic, value-adding post can go a long way.

### Use Your Bootstrapper Advantage

As a bootstrapper, your advantages over large companies boil down to two things: speed and customer service. You can launch and iterate quickly. Customer issues? Be proactive, jump on a call, and resolve the problems immediately. For instance, products built on top of ChatGPT by bootstrappers hit the market in weeks, while larger companies took months or even years.

Never underestimate the power of a satisfied customer. They are your best ads. People are used to subpar customer service, so when you go above and beyond, you stand out. Errors are fine as long as you acknowledge and fix them quickly. Errors are a problem if the user gets ignored and the error never solved, think about how often you experienced that yourself.

### Long-Term Marketing: SEO

In the long run SEO is one of your most powerful weapons. Even now there are search queries for exactly your solution with no good answers. The volume may be low, but over time those clicks add up. For instance, we rank for "timer for presentations," a query with only 134 impressions per month, yet we get 43 clicks, and a good portion of these convert into paying customers.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/pexels-photomix-company-218717.jpg"
    alt="Black Samsung Tablet Display Google Browser on Screen"
  >
  <figcaption>Simple strategies like a well-crafted landing page, comparison pages, free resources, and targeted community engagement can provide early wins.</figcaption>
</figure>

## 10. Final Thoughts and Resources

### Community is Key

One thing I can't stress enough is the importance of community. Especially when you make the leap to go full-time, it can get pretty isolating. Whether it's on Twitter, specialized forums, or local coworking spaces, surround yourself with like-minded founders. There are countless indie hacker communities available. The goal is to fend off the loneliness that can quickly spiral into depression or burnout.

### Podcast Recommendations

Whether you prefer listening in German or English, there are podcasts that can guide, inspire, and provide practical advice.

- **German Podcasts**
    - [Happy Bootstrapping](https://happy-bootstrapping.podigee.io/) – Andreas Lehr interviews Bootstrappers, Solopreneurs and Indie-Hackers.
    - [Minimal Empires](https://minimalempires.de) – Build your own small empire that won't change the world, but your life.

- **English Podcasts**
    - [My First Million](https://www.mfmpod.com/) – There's no better prodcast to get pumped up for entrepreneurship!
    - [Indie Hackers](https://www.indiehackers.com/podcasts) [^6] – Interviews with other solo and bootstrapped founders.
    - [How I Built This by Wondery](https://wondery.com/shows/how-i-built-this/) – Listen to the story of successful startup founders.

### A Note to German Bootstrappers

For those of you in Germany, don't be discouraged. Entrepreneurship, let alone bootstrapping, is often not fully understood or appreciated here. But know that there is a community, and it's absolutely possible to succeed.

### Let's Connect

If you're a German SaaS founder or aspiring to be one, I'm always open for a chat. Don't hesitate to reach out to me on Twitter [@_lhermann](https://twitter.com/_lhermann) or via email. I love getting to know people who are navigating the same waters.



[^1]: Read the full story of [how I started Stagetimer](https://stagetimer.io/blog/building-stagetimerio/)
[^2]: Starting in a gray area may sound crazy to some. We Germans love our rules. But as entrepreneur you will constantly step on unchartered ground. There will be many areas where you just have to wing it at first, like GDPR, terms of service or revenue forcasts. And that's okay. You can never start a solo business if everything has to be perfect from the outset. Of course, you can also register your company from the outset, the fees are minimal.
[^3]: Shoutout to one of my favorite founders [Marie Ng](https://twitter.com/threehourcoffee)
[^4]: Others, like [Pieter Levels](https://twitter.com/levelsio), put a fake checkout on their landing page before the product is even done. Customers are forwarded to a newsletter signup. That's also a way to validate an idea.
[^5]: I have a humble thread on Twitter about building my landing page: https://twitter.com/_lhermann/status/1428025421199720455?s=20
[^6]: There's an Indie Hackers episode with my wive and I (https://share.transistor.fm/s/f614549b)
