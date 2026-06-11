---
title: "Keeping Time with StageTimer | Multithreaded Income Episode 34"
date: "2024-03-19"
host: "Multithreaded Income"
language: "en"
source: "https://www.youtube.com/watch?v=9b_XGC5nCSk"
---

[00:00]

**Kevin:** Welcome back to the show, everyone. I'm joined by a very special guest today, Lukas Hermann. How are you today, Lukas?

**Lukas:** Hey, hey there. Good, fine, fine. I'm doing good.

**Kevin:** Lukas, you're joining us from the other side of the world. You're over in Deutschland, correct?

**Lukas:** Correct, the southern parts.

**Kevin:** I was telling you a little bit before we jumped on — I took three years of German in high school and it's the only language I feel somewhat comfortable speaking. Like, I know enough of the mannerisms and how to pronounce certain words that I feel — I'm not fluent, not fluent at all — but I'm pretty sure I could go to Germany, ask for a beer and the bathroom, and be perfectly happy.

**Lukas:** I mean, your pronunciation sounds good, so you retained it, you retained it.

**Kevin:** So this is a random aside — when I was in high school my German teacher was directly from Germany. She was an immigrant and she was teaching high school German, and she was a stickler for pronunciation. When we were in German class we always had to speak in German 100% of the time. If you didn't know how to say it you had to look it up, and this is before we had computers in our pockets, so I had a dictionary and I was looking up words. And if you mispronounced it she made you repeat yourself a couple dozen times before you got it right.

**Lukas:** My wife is from Brazil and we moved here seven years ago, and she still has a bit of difficulty pronouncing — because for some reason Germans are really particular. If you don't pronounce it right they sometimes don't make the effort to understand you. A bit sad for my culture, but that's how it is. She always had trouble with the R in the

[02:00]

beginning, right. We have a very distinct R sound — like "Rest," "Ratte," "Rathaus" — and if you don't do it right Germans can get a bit confused and not wanting to understand what you say.

**Kevin:** I can understand — from being a native English speaker — someone trying to speak English as their second or third language, sometimes it's like, I'm pretty sure you didn't say that word the correct way, but we're usually polite enough to go, "Oh, I understand what you're saying." If you understand what someone's trying to get through, it's easy. But funny story — I had a friend and he sent me a Medium article, and we're going to put this in the show notes. The article was titled "How a Simple Countdown Timer Website Makes $10,000 per Month." I read this and I was just getting the excited feelings, because this is what folks who listen to the podcast are really kind of striving for. They would love to have a product that's producing income and the glorious monthly recurring revenue for something that you've built. I knew this is the type of talk that I want to have on the podcast. So I reached out to a mutual friend — or acquaintance of ours — Justin Jackson, and he said, "I can hook you up, Kevin," and he made all the connections. And so Lukas is here and he's chatting with us. Lukas, before we jump in, just tell us a little bit about yourself and then we'll dive into Stagetimer.

**Lukas:** Yeah, you said my name, you said where I come from — I'm 34 years of age. We've been nicely settled here. Married to a Brazilian as I already mentioned, and really a developer at heart, right. Kind of the typical German engineer mindset mixed with somebody who is excited about software and computers — I would say that's

[04:01]

probably describing me.

**Kevin:** Your current gig, as I'm aware, is Stagetimer. Tell us a little bit about what Stagetimer's function is.

**Lukas:** Correct, so I'm the founder. We started three years ago with this. And what it does is — if you think of a TED talk, right, the person standing on stage has this screen in front of them with a red countdown number. Now we're not building that exact product that they use, but we're building a product like this. And it is used by many, many people that do video production or event organization. They would have their kind of overview of the event with them on their computer — they're sitting, you know, backstage or with the technical staff — and when they click a button, somewhere at the stage a countdown timer starts counting. It says what's currently happening, they can send some messages — if you want them to hold the microphone a bit closer to their mouth, or they need to step a little bit more into the light — then they can kind of flash this on the screen. That's the kind of software that we are building.

**Kevin:** Gotcha. Now where did the idea for Stagetimer come from?

**Lukas:** So this is a really interesting story. I was always fascinated as a developer of building my own product, especially when I became employed in a startup — you kind of get this product feeling a little bit. And I saw on Twitter many other people building — not in a traditional Silicon Valley, venture-funded way that you had known until then — but bootstrapping it, just starting it, launching it themselves, earning their first revenue. And it was really attractive to me. So I was looking for ideas. I had this long list on my cell phone; whenever I came

[06:02]

across an idea I just wrote it down — "Oh, I could build this, I could build that," right. And one day I was at a friend's — he has a studio setup — there's one person in one room standing in front of a green screen and talking into the camera, and he's sitting in the other room doing the recording, switching the video. And before the recording started he would get up — I was there, unrelated, he'd asked me something about servers and networking — and he would jump up, run into this other room, click on an old computer that he had sitting there with a timer software, click start, ran back into his side room, and everything else was remote controlled. And I thought, "Surely there must be a better solution," right. As a web developer I thought, "This is such an easy problem to solve. Surely if I search on Google immediately I will find something where I can remote control a timer through my browser interface." And I didn't. I didn't find anything that can do that. I only found old software that you download and it looks like it's written in Windows 98.

**Kevin:** So it was a good opportunity.

**Lukas:** Yeah, it was. So I put it on my list, and then I revisited this idea — I want to build my own product — and I literally went through that list. And here's an amazing thing: this could all be great, but I thought, you know, let me turn this around. I'm a developer, I know how to develop software. But I've never dealt with customers, I've never integrated payment solutions, I've never even built my own user authentication flow. There's all these unknowns that I have if I want to build my first product. Let me just pick the simplest idea on this list as a training ground. So that's the

[08:03]

one I picked. I thought, a timer synchronized through the browser — how hard can it be? That's where the idea came from. And I coded it up right in basically a weekend, as one does when you're employed — you do your own side project in the weekend. I put it online on some kind of free hosting, a Netlify site, and I shared it. I was like, "Okay, but now what do I do with it?" I went back to my friend, but his computer was too old so it literally didn't run on this computer, because whatever version of Firefox — doesn't run any modern JavaScript. So I was like, okay, give up on that. Where do I put this so that people know about it?

So I go to Reddit and I'm looking for subreddits. It's so — like, you go on Reddit and you find all these communities. It's crazy what communities exist, but if you need to find a specific subgroup it's ridiculously hard. So I think, where do people live that need this kind of thing? I found this Reddit search engine almost — that somebody built — that gave me a network of which subreddits are connected. And I found one called — um, something broadcasting — I forgot the name.

**Kevin:** Commercial AV? Okay, sounds good.

**Lukas:** Yeah. Posted there, said, "Hey, I built this tool, put it online, what do you think?" People visited it and gave me surprisingly good feedback for Reddit. Right — Reddit, you feel like it's just kind of toxic, you know, everybody's trolling you, everybody is just ripping you apart. But they didn't. They were super helpful. Like, "Ah, I've been looking for this for ages, this is exactly what I need — can you add this feature, that feature, this feature?" And that was really the

[10:04]

moment when I thought, wait, there may be more here than I thought at first.

**Kevin:** I think that's really important — finding those watering holes for where different customers might exist. And yeah, you're right, a lot of Reddit is really toxic. The moment you drop anything that's self-promotion or "here's a thing I built, go take a look at it," Reddit will just attack you. I'm thankful that you found a group that was willing to give you constructive feedback.

**Lukas:** I mean, specifically subreddits like small business, entrepreneurship, startups — there's so many people just self-promoting themselves, they immediately kick you and they immediately block you. And I immediately made a big boundary and said, "I want to go to the people that would use my tool, not people that would be excited about making money on the internet." I think this was kind of the saving grace, because what I found out is that if you make a tool that is not for the core developer community — to be very fair, most people build tools for other developers — if you don't build a tool for other developers you find that they're really underserved. We as developers — there's a solution for everything, there's two solutions, three solutions — but then you go to an area like audiovisual, live video production, which is much more commercial, and suddenly they really appreciate any solution that you built for them.

**Kevin:** And it seems like you just happened to be at the right place at the right time. Someone had the problem that you were

[12:05]

thinking about solving and you were able to solve it for that one person. And then if one person has that problem, it's very likely that hundreds or thousands of people have that exact same problem. That is really cool. Were you working a regular full-time job while you were kicking off Stagetimer?

**Lukas:** I was full-time a front-end developer in a startup.

**Kevin:** So you kick off Stagetimer, you start getting some feedback — what does it look like to monetize Stagetimer? Was that something you did right from the beginning, or did you have sort of a free period and then start charging for it later?

**Lukas:** Right. I think — again, different to many people that kind of set off and just thought, "I'm going to make money on the internet" — I told myself, "I'm going to figure out how to build a product first." So it was free, was online, it was ugly. It was used, which was probably the most important thing. I saw that people came back, and I started really building the features people asked for. I didn't primarily think of monetization — I wanted to build something that's useful, with the thought, "Eventually I'm going to get to that." So I'm building a user sign-up flow so people can save their work, I'm building different features. And then — maybe I have to clarify — I never thought this would make money. Like, a timer — come on, who pays for a timer? Every iPhone has a timer. But I implemented a payment method, not so much because I thought people would pay money, but because I wanted to

[14:05]

understand how it works. What are the options out there? How do you integrate it into your system? How does this look? And then for the next project I thought it'd be easier. So I did this. I thought of some pro features that I could include at the same time so it would make sense — you know, you want to have free and then put on the website, "Hey, here's a premium feature and you can pay for it."

And then the funny thing is, the night I deployed this payment integration — which was eight months after that first free, ugly version — I posted on Twitter to my, what, 300 followers, and I get a purchase right away. I couldn't believe it. I couldn't believe my eyes. Like, who would pay money for this? And I reached out to the person. He'd seen it on that original Reddit post, had been using it ever since, loves engaging with new software, and he half purchased it because he found it useful and the other half because he wanted to encourage me building it. So the classic early adopter.

I think this — making your first dollar online with a product, somebody coming to your website and giving you money — it's such a motivational boost to keep going. It's incredible.

**Kevin:** I've been through a couple of startups and that first dollar, that first notification from Stripe or whatever payment processor you're using — it says you've made however much money — that is the most exciting feeling in the world, even if it's the only dollar you've made in the entire month. You said something and I want to come back and reiterate — you said you only had about 300 followers at the time that you launched Stagetimer. And I think there's this conception out there

[16:06]

that a lot of these successful companies are built by people who have tens of thousands of followers, they have these big bases that they promote to and then the money comes in. But you didn't have that. You're probably where a lot of people are. You're proving the point that you don't need a massive social following to launch a product and be successful with it.

**Lukas:** I think it is a common misconception. People think that they need a lot of Twitter followers and then they can launch something and it gets number one on Product Hunt and that's when they get their customers. But that's wrong. You want to build something that's useful — and specifically these followers, who are they? Other developers, marketers, hustlers. And as I said before, they already have every problem mostly solved. It's hard to get a standout problem for them. But if you look in other industries — in these people that are not on Twitter, that maybe only find their stuff on Google — if you find a problem that they are looking for, it's this blue ocean. It may be a small group, but the group is big enough to support one developer easily.

**Kevin:** Did most of your initial customers come from that Reddit group or from your personal Twitter? Where did those initial customers come from that eventually grew you to a decent MRR?

**Lukas:** Yeah, so Reddit — you cannot stress it too much, you cannot post every week; I posted once more six months later as a kind of follow-up post but then no more. In fact, most of the people came through Google and through word of mouth. It was basically a 50/50 split, or was, as of last year. And just last week I talked to a customer that uses our tool every

[18:07]

day and I asked them, "If you look for a tool like mine, where do you even go? What do you do?" And they told me, "Yeah, I'm sometimes on Facebook, sometimes on LinkedIn, I sometimes go to trade shows, but really if I have a specific technical problem I go and Google until I find a solution." And that's all I needed to know.

**Kevin:** So how does that shape your strategy for marketing Stagetimer? Are you devoting a lot of time to SEO and trying to get those Google hits?

**Lukas:** Yes. From the beginning we said we do SEO marketing. We write articles. And I also thought I'd write really good documentation. And I believe that because my customers are very technical people — not technical in the sense of developers, but technical like they use hardware, they use cameras, they use video mixers, they do speak a technical language. If I can write articles that are not like the typical SEO fluff — you know, "how do you get your page on Product Hunt" — but I'm actually writing articles like, "How do you use a timer software together with your hardware video mixer?" Step by step, explaining what are the possibilities, how to use HTTP requests, how to use browser embeds. Even though these articles get comparatively few hits — we have search volumes of maybe 100 people per month because these are so technically specific — almost all of the people that come to these pages have such a high intent. They really want to solve this particular problem and often end up

[20:07]

staying and purchasing.

**Kevin:** How has the product changed or adapted since your original version to where you are today? Because I imagine with audiovisual people they're used to a very specific way of doing things, and as a developer coming into these different environments and situations we often have to learn how the job is done and then adapt the software to help.

**Lukas:** Yeah. Honestly, I think it is a blessing that I was not part of the video production industry and came in as an outsider essentially — which I also think is encouraging to your listeners. You don't have to be an expert in the domain. I know people say that, but I don't believe it. What I believe is, what you need to do is listen to the people, listen to your customers, listen to your users. And they gave us plenty of feedback. Of course we had to separate the noise from the signal, but once we decided on our scope and understood more and more how people actually use our software — what kind of problem specifically they use it for — that's when we started to really focus on the right features, implemented in the right way. And I think that made all the difference. Coming back to that same customer we talked to — it was such an enlightening moment. I asked them, "What kind of feature are you missing? What is bad about our software? What do I need to change?" And they said,

[22:08]

"You know, I actually asked that question to our director yesterday, because he apparently also uses our software on a regular basis." And he gave me this answer: "I really have some requests, but I'm almost afraid of saying them because your software is so easy and intuitive. I don't want to change it." And of course they gave me some requests, but I found it so interesting because the whole time that I built the software I thought, "I don't want to be another Excel, I don't want to be another piece of software that has buttons everywhere just to get the job done. I want to get the job done, but in a way that is easy to pick up for the first customer as it is for the one that uses it for two years already." And by him saying this, it was kind of confirmed — man, I've worked two, three years on this tool with this intent of making it easy to use, and here he is confirming that to me without knowing that I wanted it all along. I think if you really listen to your customers and you have a good hand for building a good product, you can come as an outsider, come without any community following, and get into a niche.

**Kevin:** How long did it take from the moment you started monetizing Stagetimer to eventually quitting your full-time job? Because you're working full-time as a web developer — assuming you're not doing that anymore and you're all in on Stagetimer — when did you hit that goal of not needing the full-time job anymore?

**Lukas:** Correct. So as I said already, it took eight months because I worked in the evening, worked in the weekend, to even implement a payment system. It took another eight months to grow it to €1,000 per month in

[24:08]

revenue. And then it went a little bit faster. But it took me — I think we reached 3 to 4K of revenue per month when I kind of got a bit bored in my old job. I mean, you know — you sit in a company, you kind of know in your heart of hearts that you are basically producing three times the value of what you're actually paid. And I was a bit disillusioned with that. I didn't like the kind of task-treadmill style that we had going at that time. I looked around for another job. Another job came, but then they discontinued their product after three months. And then my wife encouraged me and said, "Hey, you know what, you do such a great job with this project of yours. Why don't you try it full-time?" So we took a little bit of a leap of faith at — I think it was €4,000 per month, which was not quite enough to sustain our lifestyle. But with a bit of savings and a bit of grit and "let's spend some months in Asia and save some money," it worked out.

**Kevin:** Oh, so change your location so you lower your cost of living. I've heard that from a lot of folks. That's a difficult thing to do in the States — taking that leap of faith — because there are so many little things like healthcare. So many people rely on their full-time job for healthcare that taking that leap of faith, you just have to give all that up, you have an added expense. It's just overall more difficult unless you have a spouse or a partner who

[26:10]

is able to cover all those details. So it's really exciting to hear that. And it sounds like when you were able to go full-time on Stagetimer — was that really just 100% of your day, just Stagetimer all the time?

**Lukas:** Yeah. I think something that's a bit underrated is that when you go full-time you lose this structure that an office — even if you're remote — that an office job gives you. Having freelanced before, I knew it's going to be hard. This aspect of being alone, being just by yourself, having to do your own schedule, is not easy. So I immediately actively tried — you know, where do I know people, where can I get in contact with people, where can I have some kind of structure, even if it's not people that work directly with me? Just some support structure around working as a developer. And I was really fortunate because in this industry of video professionals I found a Discord server. They invited me in, I made friends with the owner — who was also building a tool at that time — and we ended up having regular talks over Discord, having regular Zoom calls to exchange what we were doing. And nowadays he's even my co-founder in another project that we are building together. Something like this, I would say, is really pivotal when you make that step.

**Kevin:** And that's a good point. Something I wanted to pivot to was just the work-life balance. And I think you already covered it — when you're by yourself it's really difficult to maintain that structure that a full-time

[28:12]

job gives you. You have certain expectations you have to hit, you have a team holding you accountable. And when it's just you, you have to hold yourself accountable or find someone to hold you accountable. What happens a lot is that people get into burnout, right? They go work for themselves, they work a lot. What you used at your job — and then in the evening you still hustle for yourself — now you hustle for yourself the whole time, until late at night, even on the weekends. Don't take a break. It goes well for two years, but after two years your body will eventually say, "I can't do it anymore."

**Lukas:** And what you don't realize is that at your job you have these water-cooler moments. You get up from your chair, you go talk to your colleagues — even in Slack you can get these lazy moments, you talk. When you work by yourself you don't have that. You're full concentration all the time. Either you learn very quickly, "Okay, I have to specifically take breaks" — your mind cannot do much more than six hours of concentration, it's just not in it — and if you do that three or four days in a row you need a longer break. But what do we do? We are developers. We code on our free time. It's terrible. So you have to learn how to balance that out. Funnily enough, what I do nowadays is I play with Lego. I buy myself a Lego set, I construct it over three evenings — it's awesome. And then I found this website called Rebrickable and they give you alternative instructions for the same parts that come in the Lego set, so you can just disassemble it and then build the next thing.

**Kevin:** That's such a

[30:12]

great way to use your time and to reset. There are a lot of worse ways to reset. Lukas, how big is the Stagetimer team? Is it still just yourself or do you have employees or contractors?

**Lukas:** Yeah, pretty soon my wife joined me. She was dissatisfied with her job and I said, "Why don't you help me? I need somebody for customer service and marketing. If you're willing to learn that, let's do it together." And she was happy to join me. She doesn't do it full-time anymore — she has her own web store on the side — but she does all of the customer service and most of the marketing that we do.

**Kevin:** That's good to have. And you get to work with your partner, that's always nice.

**Lukas:** Super helpful, super nice. I'm really blessed to have such an arrangement. And then we've worked with contractors on and off. "There's a project, let's invest some money, let's bring somebody in." But just now I would say we have reached the finances that allow us to hire — in quotes, because I can't easily hire because I don't have the legal team set up yet — but I can at least get a contractor.

**Kevin:** What's the next position that you would want to bring on? A developer?

**Lukas:** I'm looking for another developer. Partly because I don't want to be the only one there if the server goes down. And also the backlog gets longer and longer. The project is three years old, so you need upkeep — housekeeping, updates, bug fixing. You need to scale the infrastructure. Obviously I'm not a super senior engineer who has done all of these things before. I really need help there. And then you're the founder — there are just other things that steal your time. Incoming emails: "Oh, let's make a partnership here,

[32:13]

let's do this." Answer emails, talk to your customers, understand where the product needs to go in one year. You get the point.

**Kevin:** Well, I guess anyone listening to the podcast — we're pushing for freelancer side gigs. If someone in our community wants to reach out, what's the Stagetimer stack?

**Lukas:** I'm doing Vue.js, then a Node back end, and then Firebase with some user authentication stuff.

**Kevin:** So anyone out there listening, if you're looking for something on the side, let's go talk to Lukas and get him some help. Maybe someone out there is listening and this is right up their alley.

**Lukas:** Yeah, could be.

**Kevin:** We've been talking about Stagetimer for quite a bit. Let's talk about just a couple other things. What did you do before Stagetimer? Were there any projects that you were working on that just didn't take off — I hate to use the word "failure" but just failed completely?

**Lukas:** Yeah, so it's kind of the myth, right — the overnight success myth. I did do stuff before. I started when I was young doing websites; the typical WordPress — everybody was a WordPress developer one time in their life. I did plenty of freelancing when I was studying. And then I even had the plan of building a startup together with two friends from Germany, the classic way — we looked for funding, we had a gigantic vision of computer-aided translation services. However, the relationship between us founders turned sour. And I think there was also a

[34:13]

significant lack of understanding of how to actually get a product to market. Both of these combined, I would say, led to some very bitter experiences. It turned out that one of the co-founders was kind of kicked out — I don't want to say I'm completely guiltless there — and then the other one left for the US and I was left holding the bill for the entire thing and had to figure it out. And it was not a nice experience. It taught me a lot about what it means, how to trust people and in what capacity, and how to be careful with the team you choose and the partners you choose. So it was a very painful failure, actually. Also very costly.

However, as every failure goes, you look back and say, "Okay, what went wrong, what did I do wrong?" and you learn from it. And a very practical example — one thing that I decided to do with my Stagetimer project was, I literally just rejected almost all processes. I said, "Let me do everything as messy as possible for as long as possible, because the more structure I introduce in the beginning, the more I'll just be slow and slow and slow." So if I can just do the bare minimum to just get it done — and I force myself, because I'm like a German engineer, we want to do everything perfect — I forced myself: "No, I have to get it done and then later make it better when I have the time and the resources." It helped me immensely to get this off the ground. It didn't always work perfectly, but more often than not it really helped me to move things forward.

**Kevin:** That's a good point. We talk a lot about the minimum viable product, and

[36:15]

sometimes that's not going to be pretty. It needs to be good enough to do what it needs to do and see if you get those initial customers. And assuming you didn't make the classic developer blunder where you say, "I'll go back and fix this later" and never go back and fix it — did you go back and fix your processes? Did you clean up your code, did you make it prettier?

**Lukas:** Oh yeah. I mean, I've worked long enough in startups to know that some degree of budget has to go into refactoring, into cleaning up old messes.

**Kevin:** Yeah, definitely. What's next? Is Stagetimer the thing you're going to concentrate most on for the next couple of years, or do you have other things you'd like to start doing?

**Lukas:** Well, in the spirit of the name of the podcast — multithreaded — I did start a second tool together with this friend I mentioned before, co-founder, which is in the same space, the event video production space. A very similar product in fact, but a bit different in focus. My thought was always, I want some kind of second source of income. Also I have no clue how big the total addressable market of Stagetimer is. It could be that we kind of plateau around a million dollars in revenue per year, and it could be that we go all the way to 10 or even higher. We don't quite know, and it's very hard to estimate because there's no comparable product. So that's one thing.

And then in the back of my mind I always had this kind of master plan. My first product is going to help me just to have enough to sustain my lifestyle, and then from that money —

[38:15]

that comes in as, quote, "passive income," passive enough that I can kind of choose my own time — I can build the next product that will hopefully get me to a 10-million valuation, and then with that maybe I can do something bigger, something that needs a serious amount of money and investment. You know, the dream of really developing nice, cool products. I'm at the first step still. I'm still working on Stagetimer now more than ever, because it has grown much more than I ever expected.

**Kevin:** What recommendation would you have for someone who's out there listening, who has the notebook full of ideas and they want to start executing on something? What would you recommend to that person?

**Lukas:** Yeah, right. The question is, what product, what tool, what solution do you choose? And I think it's not a bad idea to just choose the simplest one. Complex ones are complex to explain and may not be understood, and in the end they may be a failure anyway — you need a bit of luck. So if you just pick the simplest one, it's easy to explain, so you already have that out of the way. And then it's easy for you to build because you probably have only five or six unknowns instead of twenty. That will help you. And the first product will teach you so much — just trying to market your first product as a developer will teach you so much about the market, about products, about startups, that it's much easier to make a better-educated guess for your second one.

**Kevin:** Hey, that's great advice. And I kind of want to go back to what you were saying earlier — find the watering holes. Try to find those niche Reddit groups where people hang out, and don't try to market to developers. I've talked about this numerous times —

[40:15]

developers are a horrible market. Not just for the reason that there are so many tools that solve so many different problems — developers in particular are just allergic to any sort of cold marketing, and in order to get your product across to them you have to think outside the box, you have to be creative about it. Not saying it's impossible, it's just hard to do.

**Lukas:** And there's another funny mental block we have as developers. We work as freelancers or in another startup, we see their problems but we find them boring because they're "other industry" problems. We look at our own problems, we find them interesting — they're all solved, nobody wants to pay money for them. That's what we build. Instead, if we would just open our eyes in the startup that we're in and in the freelancing job that we're in — like, "Hey, what does this person who is not a developer do? Why do they spend five hours on this one task? Why the heck can't I make it easier?" And then make it easier. And then find out that there are B2B customers who are literally happy to find your tool and use it. And then you think your tool — "If I would show this to another developer they would criticize it, or to a designer" — and then you show it to this person and they're like, "This is so much easier than anything else I've ever used and I'm so thankful." That kind of customer is out there and they're everywhere. You just have to find their problems and solve them for them.

**Kevin:** Lukas, anything that we haven't talked about that we should probably bring up before the podcast wraps up?

**Lukas:** I think we got it covered. If you want to check out — I have a blog called lukashermann.dev where I sometimes post long-form about what I'm doing. I'm on Twitter, I'm quite active, I try to share really authentic stuff that is happening — @lhermann. Yeah, to plug my stuff.

**Kevin:** We'll put links to all that in the show notes. But Lukas, I really appreciate you coming on the show with me. It's been a pleasure chatting with you about Stagetimer. It's a true success story of just taking an idea and running with it and finding some success. I hope this is inspirational to anyone out there that's listening. Thank you again, Lukas, for hanging out with us.

**Lukas:** Thanks so much for having me.

**Kevin:** And everyone else — thank you for listening to the Multithreaded Income Podcast. We'll see you again next week. You've been listening to the Multithreaded Income Podcast. I really hope that this podcast has been useful for you. If it has, please take a moment to leave a review wherever you get your podcasts from. And don't forget, the conversation doesn't stop here — join us on our Discord at mtpod.dev/discord. I've been your host Kevin Griffin, and we'll see you next week.
