// The German Bootstrapper's Playbook: posts in reading order.
// Article.astro adds the series line and previous/next links to every post listed here.

export interface PlaybookPart {
  url: string
  title: string
  summary: string
}

export const playbook = {
  title: "The German Bootstrapper's Playbook",
  url: '/german-bootstrappers-playbook/',
  parts: [
    {
      url: '/writing/bootstrapping-a-saas-business-in-germany/',
      title: 'Bootstrapping a SaaS Business in Germany: How I did it',
      summary: 'The whole path from idea to income: bootstrapping, pricing, bureaucracy, taxes, product and marketing.',
    },
    {
      url: '/writing/2-how-to-collect-money-without-accidentally-summoning-a-tax-inspector/',
      title: 'How to collect money without accidentally summoning a tax inspector',
      summary: 'The tax basics, payment providers from PayPal to Paddle, and what to do when a tax inspector visits.',
    },
    {
      url: '/writing/from-einzelunternehmen-to-gmbh/',
      title: 'From Einzelunternehmen to GmbH – every step, every letter',
      summary: 'Switching to a GmbH with a holding on top: the decisions, the timeline, the costs and the letters.',
    },
    {
      url: '/writing/fragebogen-zur-steuerlichen-erfassung-gmbh/',
      title: 'The Fragebogen zur steuerlichen Erfassung for a new GmbH, line by line',
      summary: 'The tax registration questionnaire for a new GmbH, and the letters and phone calls that followed.',
    },
    {
      url: '/writing/running-a-gmbh-in-germany/',
      title: 'Running a GmbH in Germany: accounting, costs and bureaucracy',
      summary: 'The accounting setup, the recurring duties and what a small GmbH costs per year.',
    },
  ] as PlaybookPart[],
}
