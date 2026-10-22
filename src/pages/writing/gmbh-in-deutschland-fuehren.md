---
layout: ../../layouts/Article.astro
title: "Eine GmbH in Deutschland führen: Buchhaltung, Kosten und Bürokratie"
created: 2026-10-21
description: "Was eine kleine deutsche GmbH nach der Gründung braucht: das Buchhaltungs-Setup, die monatlichen, quartalsweisen und jährlichen Pflichten, was das kostet und welche Bürokratie dazugehört."
tags: Bootstrapping, Deutschland, Steuern
cover_image: /img/writing/covers/running-a-gmbh-in-germany.jpg
lang: de
translation: /writing/running-a-gmbh-in-germany/
---

Ich betreibe [Stagetimer](https://stagetimer.io), ein gebootstrapptes SaaS, als kleine deutsche GmbH. Hier steht, was das nach der Gründung bedeutet: das Buchhaltungs-Setup, die steuerlichen Pflichten von monatlich bis jährlich, die Gebühren und die Bürokratie drumherum. Wie die Gründung selbst lief, steht in [Vom Einzelunternehmen zur GmbH](/writing/vom-einzelunternehmen-zur-gmbh/).

## Buchhaltungs-Setup

**Buchhaltung: [Lexware Office](https://www.lexware.de/preise?pid=kC1hh07bGA&pdata=AIZvBWomhS&cid=1777&utm_medium=affiliate&utm_source=recommend-kC1hh07bGA&utm_campaign=kunden-werben-kunden&couponCode=LXOK4YWK)** (Empfehlungslink). Ich hatte es schon für das Einzelunternehmen genutzt. Die GmbH bekam einen neuen Account, und ich habe 111 Rechnungen von Januar bis April rübergezogen.

Alles Steuerliche (Umsatzsteuervoranmeldungen, Zusammenfassende Meldungen) läuft darüber. Ich habe den größten Tarif genommen, weil der API-Zugang enthält, und ihn an meinen KI-Agenten angebunden.

**Lohnabrechnung:** das Zusatzmodul Lexware Lohn & Gehalt, im selben Tool.

**Steuerberater:** macht den Jahresabschluss und die Eröffnungsbilanz. Alles andere mache ich selbst.

**Einen Steuerberater finden.** Das eigentliche Hindernis für Gründer in Deutschland. Viele Steuerberater nehmen keine kleinen Neukunden an, und du solltest einen haben, *bevor* du deinen ersten Euro verdienst. Frag andere Gründer nach Empfehlungen und fang früh mit der Suche an. Bei einer GmbH geht es nicht ohne.

**Bank: [Qonto](https://qonto.com/r/xp3mdc)** (Empfehlungslink).

**Zahlungen:** [Paddle](https://paddle.com) als Merchant of Record für alle Self-Service-Abos, wie in [Geld einnehmen, ohne versehentlich einen Steuerprüfer heraufzubeschwören](/writing/geld-einnehmen-ohne-steuerpruefer/) beschrieben. Für Enterprise-Rechnungen bin ich auf Stripe Invoicing umgestiegen, weil Lexware keine lokalisierten Zahlenformate, keine anderen Währungen als EUR und keinen Zahlungslink für Kartenzahlung kann. Die Buchhaltung läuft trotzdem über Lexware.

## Wiederkehrende Pflichten

**Monatlich:** Umsatzsteuervoranmeldung, Lohnsteueranmeldung, Lohnabrechnung.

**Quartalsweise:** Zusammenfassende Meldung (für B2B-Kunden in der EU), Körperschaftsteuervorauszahlung (Finanzamt), Gewerbesteuervorauszahlung (Stadt).

**Jährlich:** Jahresabschluss und dessen Offenlegung im Unternehmensregister, Körperschaftsteuer-, Gewerbesteuer- und Umsatzsteuererklärung, der Lohnnachweis an die Berufsgenossenschaft, der IHK-Beitrag, die Gebühr fürs Transparenzregister und 7 Jahre lang der Nachweis nach [§22 UmwStG](https://www.gesetze-im-internet.de/umwstg_2006/__22.html), wem die Anteile gehören.

## Laufende Kosten

Pro Jahr, ohne die Steuern selbst:

| Posten | Pro Jahr |
|---|---|
| Steuerberater (Jahresabschluss, Steuererklärungen) | 2.500 €+ |
| Lexware Office XL (32,90 € pro Monat, netto) | 394,80 € |
| Lexware Office Zusatzmodul Lohn & Gehalt (12,90 € pro Monat, netto) | 154,80 € |
| Qonto Geschäftskonto (23 € pro Monat) | 276 € |
| Rundfunkbeitrag: Stufe 1 (36,72 € pro Quartal) | 146,88 € |
| IHK-Beitrag (vorläufig) | 114 € |
| [Transparenzregister](https://www.transparenzregister.de) | 19,80 € |
| Unternehmensregister: Offenlegung des Jahresabschlusses ([Schätzung eines Drittanbieters](https://onlinebilanz.de/?p=19098)) | ~50 € |
| Berufsgenossenschaft | Nach Lohnsumme, Abrechnung nach Jahresende |
| Kranken- und Pflegeversicherung<br>(selbst bezahlt; Pflicht; Höchstbeitrag) | ~14.300 € |

Zum Vergleich: Mein vorheriger Steuerberater hat für das Einzelunternehmen etwa 3.000 € netto pro Jahr berechnet (EÜR plus Einkommensteuer-, Gewerbesteuer- und Umsatzsteuererklärung). Steuerberatergebühren richten sich nach einer gesetzlichen Gebührenordnung ([StBVV](https://www.gesetze-im-internet.de/stbgebv/)) und steigen mit Gewinn und Umsatz.

**IHK-Beitrag.** Jede GmbH ist Pflichtmitglied ihrer Industrie- und Handelskammer. Meine hat mir einen vorläufigen Beitragsbescheid über 114 € für 2026 geschickt, die endgültige Berechnung folgt, sobald der Gewinn feststeht. Gefunden hat sie die GmbH über das Handelsregister, noch bevor das Gewerbeamt meine Gewerbeanmeldung bearbeitet hatte.

**Rundfunkbeitrag.** Er fällt pro Wohnung *und* pro Betriebsstätte an, die Firma zahlt also getrennt von meinem privaten Haushalt. Bei mir wird außerdem der Firmenwagen mitgezählt, der meines Wissens nichts extra kosten sollte. Ein Antrag auf Korrektur läuft.

<div class="letters">
<figure><a href="/img/writing/gmbh/rundfunkbeitrag.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/rundfunkbeitrag.jpg" alt="Schreiben des Beitragsservice: keine Angabe zur Zahl der Beschäftigten, daher gilt Stufe 1 (bis 8 Beschäftigte)" loading="lazy"></a><figcaption>Der Rundfunkbeitrag: Stufe 1, bis 8 Beschäftigte.</figcaption></figure>
</div>

**Krankenversicherung.** Als beherrschender Gesellschafter-Geschäftsführer meiner eigenen GmbH gelte ich in der Sozialversicherung als selbstständig, also zahle ich meine Krankenversicherung zu 100 % selbst. Ich bin gesetzlich versichert. Dort zahlt man einen Prozentsatz vom Einkommen bis zur Beitragsbemessungsgrenze (2026: 5.812,50 € pro Monat).

Ich zahle den Höchstbeitrag: etwa 17 % für die Kranken- und 3,6 % für die Pflegeversicherung, rund 1.190 € pro Monat. Auch mit wenig Einkommen zahlst du ein paar hundert Euro im Monat, weil die gesetzliche Versicherung bei Selbstständigen ein [Mindesteinkommen](https://www.gesetze-im-internet.de/sgb_5/__240.html) ansetzt.

Die private Versicherung wirkt günstiger, solange du jung und single bist, und wird mit Familie und Alter teuer. Zurückwechseln ist schwer.
