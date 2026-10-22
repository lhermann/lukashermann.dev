# Style Guide

Voice and content conventions for articles on lukashermann.dev. Adapted from the Stagetimer style guide for a personal blog.

## Voice

- **Personal and direct.** A founder telling another founder how it went.
- **First person for experience.** Process sections say what I did, not what you should do. "You" belongs in opinions and the occasional direct tip.
- **Humor belongs in the opinion parts.** Decisions, rants and stories keep their jokes. Process sections (steps, dates, costs) are for looking things up: no jokes there.
- **Short sentences, short paragraphs.** 2–3 sentences per paragraph. Split anything longer.
- **Answer first.** Lead with the fact, then the story if it adds something.

## Cutting

- **Say a thing once.** Keep it where the reader needs it, link to it from everywhere else.
- **No meta.** Cut "More on that below", "Now the long version", "As established above", "Here's what I set out to build", "which I'll get to".
- **End the sentence at the fact.** Drop tails like "Plan for this", "Fair enough", "Lesson learned".
- **One example, then stop.**
- **No reassurance, no filler.** If a sentence doesn't tell the reader anything, delete it.
- **No SEO padding.** A short section is fine. Length is not a goal.

## Facts

- **Exact numbers** where they exist: €1,963.16, 14 weeks.
- **Dates at month level** (mid-March) or as a day counter (day 29). No exact days from letters, filenames or captions: they help impersonators.
- **Don't overstate.** If something "can" happen, don't write that it does.
- **Link sources on the noun:** [§20 UmwStG](https://www.gesetze-im-internet.de/umwstg_2006/__20.html), [Carmine Paolino went that route](https://paolino.me/founding-a-company-in-germany/). Never "See [link]" as its own sentence.
- **Laws** link to gesetze-im-internet.de.

## German terms

- English first, German in parentheses on first mention: "trade registration (Gewerbeanmeldung)". After that, use whichever is shorter or more common.
- German legal terms without a good English equivalent stay German and go in italics: *Einbringung*, *Sachagio*.
- English grammar for German abbreviations: "a UG" (you-gee), "a GmbH".

## Structure

- **Headings say what the section answers.** Decision sections are questions: "When to switch to a GmbH?"
- **TL;DR as short paragraphs.** No table, no bold-label list.
- **Avoid bullet lists with bold lead-ins** unless the items really are parallel and scannable (pros/cons, a checklist). Otherwise write prose.
- **Tables only for real tabular data**, like a timeline with date, step and wait.
- **Diagrams as inline SVG** using `currentColor` and the page font, not ASCII art in code blocks.
- **Never open a section by repeating its heading in bold.**

## Typography

- Curly quotes. Write them directly (“…”) where the Markdown pipeline gets them wrong, such as at the start of a table cell.
- Euro amounts as €2,500 (symbol first, comma thousands separator).

## German articles

German versions are separate posts (`lang: de`), linked to their English twin with `translation:` in the frontmatter. The rules above apply, with these changes:

- **Du, not Sie.** First person for experience stays first person.
- **German terms are the terms.** No English in parentheses, no italics for *Einbringung* and friends. Keep English only where Germans use it too (SaaS, Merchant of Record, Bootstrapping).
- **Natural German, not translated English.** Rewrite sentences that read like a translation. Keep the short paragraphs and the dry tone.
- **Numbers the German way:** 1.909,10 €, 25.000 €, 14 Wochen. Percent with a space: 17 %.
- **Typographic quotes:** „…“ and ‚…‘.
- **Headings in German**, so anchors change. Update in-page `#anchor` links to the new heading slugs.
- **Link the German twin** wherever a German version of a linked post exists.
