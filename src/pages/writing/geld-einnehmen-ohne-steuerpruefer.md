---
layout: ../../layouts/Article.astro
title: "Wie du Geld einnimmst, ohne versehentlich einen Steuerprüfer heraufzubeschwören"
created: 2025-06-27
description: "Ein Leitfaden für deutsche Solo-Gründer: Zahlungen einnehmen ohne Steuerkopfschmerzen. Von PayPal bis Paddle, und was zu tun ist, wenn der Prüfer klingelt."
tags: Bootstrapping, Deutschland, Steuern
cover_image: /img/writing/covers/bureaucracy-handbook-part-2.jpg
lang: de
translation: /writing/2-how-to-collect-money-without-accidentally-summoning-a-tax-inspector/
---

Ich hatte tatsächlich 2023 eine Steuerprüfung!

Ein Finanzbeamter kündigte an, er wolle vorbeikommen, um „zu sehen, was ich eigentlich mache“ (denn Software im Internet zu verkaufen ist 2023 offenbar immer noch Hexerei). Natürlich habe ich den Termin komplett vermasselt: Ich habe an meiner Wohnadresse gewartet, während er an meiner offiziellen Geschäftsadresse auftauchte (bei meinen Eltern). Anfängerfehler. Ich sah meine Glaubwürdigkeit zerstört und mein Unternehmen schon in der Zwangsvollstreckung.

Nach einem neuen Termin und einer schlaflosen Nacht, in der ich mich fragte, ob es überhaupt legal ist, Pixel gegen Geld zu verkaufen, haben wir uns endlich getroffen. Zwei Stunden lang musste ich den Weg eines einzelnen Euros nachzeichnen: aus dem Portemonnaie meines Kunden, über seine Kreditkarte, meinen Zahlungsanbieter Paddle, vorbei an diversen Steuerbehörden und schließlich auf mein Bankkonto. Das war, als würde man die Handlung von Inception mit Tabellenkalkulationen erklären. Die gute Nachricht? Er war eigentlich ganz nett (die Fiesen hebt man sich angeblich für Betrugsverdachtsfälle auf, meinte er) und hatte sogar Verständnis dafür, wie schwer es ist, sich als Internetunternehmen im deutschen Steuerrecht zurechtzufinden. Er gab mir grünes Licht, einfach weiterzumachen. Puh! In diesen zwei Stunden bin ich vermutlich fünf Jahre gealtert.

Aus dieser Erfahrung habe ich das eigentliche Geheimnis gelernt: Das Finanzamt will dich nicht bei etwas Falschem erwischen, es will nur verstehen, was du eigentlich machst. Also lass mich erklären, wie Steuern für dein Internetunternehmen tatsächlich funktionieren.

## Das Minimum, das du über Steuern wissen musst

Steuern sind wie eine Zwiebel: Sie bringen dich zum Weinen. Aber du kannst dich nicht einfach vor dem Schneiden drücken. Du musst Schicht für Schicht abtragen, auch wenn dir die Augen tränen. Wenn du aber erst mal durch die äußeren Schichten durch bist, wird es machbar.

Es gibt vier Steuerarten, die für dein Unternehmen wichtig sind:
- Einkommensteuer
- Körperschaftsteuer
- Gewerbesteuer
- Mehrwertsteuer

Welche Kombination du zahlst, hängt von deiner Rechtsform ab.[^1]

**Einzelunternehmen:** Dein Gewinn ist dein persönliches Einkommen, also zahlst du auf alles, was du verdienst, Einkommensteuer. Außerdem zahlst du an deine Gemeinde Gewerbesteuer auf den Gewinn oberhalb von 24.500 €.[^2]

**Kapitalgesellschaft (GmbH/UG):** Die Firma zahlt Körperschaftsteuer[^3] und Gewerbesteuer auf den Gewinn, den sie behält. Geld, das du dir als Gehalt auszahlst, wird stattdessen mit Einkommensteuer[^4] belegt (und zählt nicht als Gewinn der Firma).

**Mehrwertsteuer (die knifflige):** Sie gilt unabhängig von deiner Rechtsform. In jedem Verkauf stecken 19 % Mehrwertsteuer (7 % für bestimmte Waren), die du für das Finanzamt einnimmst. Das ist nicht dein Geld, du bist nur der Mittelsmann. DU musst ausrechnen, wie viel es ist, DU musst sie auf den Verkaufspreis aufschlagen, und DU musst sie auf deinem Bankkonto einsammeln. Aber es ist nicht dein Geld: Das Finanzamt holt es sich, und dabei ist es erstaunlich motiviert. Mir wurde einmal vorübergehend ein Bankkonto gepfändet und mit persönlicher Haftung gedroht, weil ich nicht pünktlich gezahlt hatte. Nimm das als Warnung.

Kompliziert wird es, weil die Mehrwertsteuersätze je nach Kundentyp und Standort variieren. B2B-Verkäufe innerhalb der EU sind in der Regel mehrwertsteuerfrei, bei B2C-Verkäufen gilt der Satz im Land deines Kunden. Alle Details stehen in [meinem ausführlichen Leitfaden](https://lukashermann.dev/writing/european-vat-basics-for-saas-founders/).

## Geld einnehmen: Wähle deinen Schwierigkeitsgrad

Ich rede hier speziell vom Verkauf digitaler Güter (wie Onlinekurse) oder digitaler Dienstleistungen (wie SaaS) an jeden auf der Welt.

Es gibt drei Schwierigkeitsgrade, um Geld einzunehmen:

### Leicht (mit Haken)

PayPal oder Stripe sind leicht. Du schickst einen Zahlungslink, der Kunde öffnet ihn und bezahlt, das Geld landet irgendwann auf deinem Bankkonto. Dein Dingsbums kostet 8 €, alle zahlen 8 €. Keine Sales Tax, keine Mehrwertsteuer. Leicht.
- So machen es die meisten Solo-Gründer, die du auf Twitter siehst. Oft kommen sie aus den USA oder anderen „unternehmensfreundlichen“ Ländern.
- In Deutschland geht das nur, wenn du ein Einzelunternehmen hast und die Kleinunternehmerregelung nutzt. Die begrenzt dich aber auf 22.000 € Umsatz pro Jahr und skaliert nicht.
- In den meisten Ländern ist es technisch möglich, wenn du „den Kopf unten hältst“, aber die Mehrwertsteuerpflichten zu ignorieren ist ein echtes Haftungsrisiko. Finanzämter haben ein langes Gedächtnis, und Nachzahlungen plus Strafen können dein Unternehmen versenken.

### Mittel

Du nutzt einen Merchant of Record (MoR) wie den Apple App Store oder Paddle. Sie nehmen das Geld ein und kümmern sich um alles, was mit Steuern zu tun hat: Einzug, Berechnung, Registrierungen und Meldungen. Du bekommst saubere Umsätze ohne Mehrwertsteuer-Kopfschmerzen. Der Nachteil ist die höhere Provision: rund 5,5 % bei Paddle[^5] und satte 30 % beim App Store. Betrachte das als „Ruhig schlafen“-Steuer.
- Manche Solo-Gründer mögen diese Option nicht, weil die Gebühren so hoch sind und man gezwungen ist, Mehrwertsteuer zu berechnen. Meistens halten sie die Mehrwertsteuer für eine weitere Gebühr, wie ein Trinkgeld, das man auch weglassen kann.
- In Deutschland kannst du einen MoR mit jeder Rechtsform nutzen, solange du digitale Güter und Dienstleistungen verkaufst. Es kann sein, dass das Finanzamt Fragen stellt, aber die lassen sich zufriedenstellend beantworten.

### Schwer

Das ist nicht Super-Mario-schwer, das ist Dark-Souls-schwer. Du nutzt PayPal oder Stripe und kümmerst dich selbst um die Steuern. Selbst wenn Stripe Tax bei der Berechnung hilft, musst du immer noch:
* dich in der EU für die Mehrwertsteuer registrieren, sobald du die jeweilige Schwelle überschreitest (in der Regel 10.000 € pro Jahr)[^6] (oder, und das wissen viele nicht, sofort, wenn dein Unternehmen nicht in der EU sitzt).
* deine Erklärungen über das EU-Mehrwertsteuersystem One Stop Shop (OSS)[^7] abgeben.
* deine Buchhaltungsunterlagen mindestens 10 Jahre aufbewahren.
* dir wahrscheinlich professionelle Hilfe holen, weil es kompliziert ist und Fehler teuer werden können.
* viele Male sterben, bevor du es raushast.

## Was tun, wenn du versehentlich einen Steuerprüfer heraufbeschworen hast?

Das kann passieren, wenn du ordentlich Umsatz machst, aber kaum Mehrwertsteuer anmeldest. Das heißt dann: Entweder du machst etwas Illegales, oder du nutzt einen Merchant of Record. Frag mich, woher ich das weiß.

Zuallererst: keine Panik! Finanzbeamte können sich als überraschend freundlich herausstellen, und in Deutschland gilt: unschuldig, bis die Schuld bewiesen ist. Statt im Gefängnis zu landen, musst du wahrscheinlich nur dein Geschäft erklären. Halte das hier bereit:
* Kontoauszüge der letzten 4 Jahre
* Beispielrechnungen für verschiedene Kundentypen (B2B, B2C, EU, Nicht-EU)
* deine Verträge mit Zahlungsanbietern
* Unterlagen zu deiner Preisgestaltung und deinem Umgang mit Steuern

Der Prüfer will die Mehrwertsteuer durch deine sogenannte „Wertschöpfungskette“ verfolgen. Sie heißt ja nicht umsonst Mehr-Wert-Steuer. Die Idee ist, dass irgendwo im Leben eines Produkts genau einmal Steuer gezahlt wird, idealerweise vom Endverbraucher. Wenn du zeigen kannst, dass, wie in meinem Fall, Paddle die Steuer einnimmt und abführt, bevor das Geld auf meinem Bankkonto landet, ist die Bedingung „genau einmal besteuert“ erfüllt und der Prüfer ist zufrieden.



[^1]: Es gibt auch noch die Kapitalertragsteuer, die anfällt, wenn du dir statt eines Gehalts Dividenden auszahlst. Aber das ist was für Fortgeschrittene.

[^2]: Die Gewerbesteuer geht an deine Gemeinde. Es ist aber immer ein fester Prozentsatz, 14 %, wenn du kein Pech hast. Der Freibetrag liegt zum Zeitpunkt des Schreibens bei 24.500 €, siehe hier: https://www.gesetze-im-internet.de/gewstg/__11.html

[^3]: Die Körperschaftsteuer geht an den Bund und beträgt pauschal 15 %.

[^4]: Die Einkommensteuer ist progressiv: Je mehr du verdienst, desto höher der Prozentsatz. 30 % sind aber eine gute Näherung.

[^5]: Ich habe die echten Gebühren von etwa 2000 echten Paddle-Käufen ausgerechnet, siehe hier: https://x.com/_lhermann/status/1701269370943533450

[^6]: Die Schwelle liegt bei 10.000 € für alle EU-Verkäufe zusammen. Sobald sie überschritten ist, musst du den jeweiligen Mehrwertsteuersatz des Landes berechnen.

[^7]: https://europa.eu/youreurope/business/taxation/vat/vat-digital-services-moss-scheme/index_en.htm
