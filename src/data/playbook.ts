// The German Solopreneur's Playbook: posts in reading order, in English and German.
// Article.astro adds the series line and previous/next links to every post listed here.

export interface PlaybookPart {
  url: string
  title: string
  summary: string
}

export interface Playbook {
  lang: 'en' | 'de'
  title: string
  url: string
  description: string
  image: string
  hero: string
  parts: PlaybookPart[]
}

export const playbook: Playbook = {
  lang: 'en',
  title: "The German Solopreneur's Playbook",
  url: '/german-solopreneur-playbook/',
  description: 'How I run a bootstrapped SaaS business from Germany: the legal and tax side, from the first invoice to a GmbH with a holding.',
  image: '/img/writing/covers/german-solopreneur-playbook.jpg',
  hero: '/img/writing/covers/german-solopreneur-playbook-hero.jpg',
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
  ],
}

export const playbookDe: Playbook = {
  lang: 'de',
  title: 'Solo gründen in Deutschland',
  url: '/solo-gruenden-in-deutschland/',
  description: 'Wie ich ein eigenfinanziertes SaaS-Unternehmen in Deutschland führe: die rechtliche und steuerliche Seite, von der ersten Rechnung bis zur GmbH mit Holding.',
  image: '/img/writing/covers/solo-gruenden-in-deutschland.jpg',
  hero: '/img/writing/covers/solo-gruenden-in-deutschland-hero.jpg',
  parts: [
    {
      url: '/writing/saas-unternehmen-in-deutschland-bootstrappen/',
      title: "Ein SaaS-Unternehmen in Deutschland bootstrappen: So habe ich's gemacht",
      summary: 'Der ganze Weg von der Idee zum Einkommen: Bootstrapping, Preise, Bürokratie, Steuern, Produkt und Marketing.',
    },
    {
      url: '/writing/geld-einnehmen-ohne-steuerpruefer/',
      title: 'Wie du Geld einnimmst, ohne versehentlich einen Steuerprüfer heraufzubeschwören',
      summary: 'Die Steuergrundlagen, Zahlungsanbieter von PayPal bis Paddle, und was tun, wenn der Steuerprüfer kommt.',
    },
    {
      url: '/writing/vom-einzelunternehmen-zur-gmbh/',
      title: 'Vom Einzelunternehmen zur GmbH – jeder Schritt, jeder Brief',
      summary: 'Der Wechsel zur GmbH mit Holding darüber: die Entscheidungen, der Zeitplan, die Kosten und die Briefe.',
    },
    {
      url: '/writing/fragebogen-zur-steuerlichen-erfassung-gmbh-ausfuellen/',
      title: 'Der Fragebogen zur steuerlichen Erfassung für eine neue GmbH, Zeile für Zeile',
      summary: 'Der Fragebogen zur steuerlichen Erfassung für eine neue GmbH, und die Briefe und Telefonate danach.',
    },
    {
      url: '/writing/gmbh-in-deutschland-fuehren/',
      title: 'Eine GmbH in Deutschland führen: Buchhaltung, Kosten und Bürokratie',
      summary: 'Das Buchhaltungs-Setup, die wiederkehrenden Pflichten und was eine kleine GmbH pro Jahr kostet.',
    },
  ],
}

export const playbooks = [playbook, playbookDe]
