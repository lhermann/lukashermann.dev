---
layout: ../../layouts/Article.astro
title: "Ein SaaS-Unternehmen in Deutschland bootstrappen: So habe ich's gemacht"
created: 2023-10-15
description: "Lukas Hermann, Gründer von Stagetimer, zeigt wie er ein SaaS-Unternehmen in Deutschland eigenfinanziert aufgebaut hat. Erfahre Details zu Bürokratie, Steuermanagement, Preisgestaltung, Produktentwicklung, Tech, Marketing und vieles mehr. Ein Muss für angehende deutsche Unternehmer."
tags: Bootstrapping, Deutschland
cover_image: /img/writing/covers/bootstrapped-saas-germany.jpg
lang: de
translation: /writing/bootstrapping-a-saas-business-in-germany/
---

Wenn du das hier liest, bist du wahrscheinlich daran interessiert, ein SaaS-Unternehmen in Deutschland zu starten. Du bist auch wahrscheinlich überfordert mit Fragen zu Steuern, Vorschriften und allem, was dazugehört. Als ich anfing, hatte ich keine Ahnung was ich zu starten brauchte. Dieser Artikel ist ein tiefer Einblick in all diese Feinheiten, gespickt mit meinen persönlichen Erfahrungen und Fehlern.

Hallo, ich bin Lukas, und ich habe Stagetimer von 0 € auf über 10.000 € in monatlichem Umsatz eigenfinanziert in Deutschland aufgebaut. Und du kannst das auch tun.

## Gliederung
1. [Mein Werdegang und warum ich das hier schreibe](#1-mein-werdegang-und-warum-ich-das-hier-schreibe)
2. [Was ist eigentlich Bootstrapping?](#2-was-ist-eigentlich-bootstrapping)
3. [Software-as-a-Service und Preisgestaltung](#3-software-as-a-service-und-preisgestaltung)
4. [Durch die deutsche Bürokratie navigieren](#4-durch-die-deutsche-bürokratie-navigieren)
5. [Der Umgang mit Steuern](#5-der-umgang-mit-steuern)
6. [Brauche ich einen Steuerberater?](#6-brauche-ich-einen-steuerberater)
7. [Wie entwickle ich ein Produkt?](#7-wie-entwickle-ich-ein-produkt)
8. [Der SaaS-Technologie-Stack](#8-der-saas-technologie-stack)
9. [Wie du mit Marketing anfängst](#9-wie-du-mit-marketing-anfängst)
10. [Abschließende Gedanken und Ressourcen](#10-abschließende-gedanken-und-ressourcen)

---

## 1. Mein Werdegang und warum ich das hier schreibe

### Zeitachse und Wachstum

Am 1. November 2020 habe ich meinen ersten Commit für das gemacht, was Stagetimer werden sollte. Etwa drei Wochen später führte ein Reddit-Post zu meinem ersten Benutzer. Im Februar 2021 habe ich dann ein deutsches Einzelunternehmen gegründet. Meinen ersten zahlenden Kunden habe ich im Juni 2021 bekommen. Im September 2023 hatte ich ein monatliches wiederkehrendes Einkommen (MRR) von 10.000 €.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Stagetimer crossed €10k MRR 🎉<br><br>Free → Paid: 8 months<br>0 → 1k: 10 month<br>1k → 5k: 8 months<br>5k → 10k: 10 months<br><br>We&#39;re starting to understand positioning, pricing and marketing in our niche. <a href="https://t.co/uxagMDo5dV">pic.twitter.com/uxagMDo5dV</a></p>&mdash; Lukas Hermann (@_lhermann) <a href="https://twitter.com/_lhermann/status/1697951410371908005?ref_src=twsrc%5Etfw">September 2, 2023</a></blockquote>

### Wie ich auf die Idee kam

Eines Tages besuchte ich einen Freund in seinem Studio. Er verwendete eine veraltete Flash-App auf einem alten Laptop als Countdown Timer. Um den Timer überhaupt zu starten, musste mein Freund ins Aufnahmestudio rennen, auf "Start" klicken und dann zurück zum Videomischer eilen. Ich dachte, "Es muss doch eine effizientere Lösung geben." Nach einiger Recherche stellte ich fest, dass es keine browserbasierten Lösungen gab, nur einige Desktop Apps. Also habe ich die erste Version von Stagetimer an dem folgenden Wochenende selbst gebaut.

### Fragen, die ich am Anfang hatte

Das größte Hindernis war die Handhabung der Zahlungen. Stripe war die Standardlösung, hatte jedoch Lücken bei der Automatisierung der Steuern. Hier waren meine Bedenken:

- Muss ich bei jedem Verkauf Steuern erheben?
- Wie gebe ich gesammelte Steuern aus internationalen Verkäufen zurück?
- Was ist, wenn ich keine Umsatzsteuer erhebe? (Viele US-Startups ignorieren dies, aber es ist komplizierter für deutsche Unternehmen)
- Muss ich manuell Umsatzsteuersätze für jedes Land festlegen?
- Wie sieht es mit Rechnungen für jeden Verkauf aus, und wie generiere ich diese korrekt?
- Muss ich jeden Verkauf verbuchen? Brauche ich dafür einen Buchhalter?

Eine weitere dringende Frage war die Krankenversicherung, die in Deutschland pflicht ist. Als Angestellter ist es einfach; die Kosten werden vom Gehalt abgezogen. Aber was ist, wenn man sein eigenes Unternehmen gründet? Was ist, wenn das Einkommen minimal ist? Was ist, wenn man ein Nebengeschäft betreibt? Ist das überhaupt erlaubt?

Also, warum solltest du das lesen? Weil ich all diese Fragen geklärt habe. Ich war da, wo du jetzt bist, und ich kann dir eine Anleitung bieten, um die Fallstricke zu vermeiden, in die ich getreten bin. Wir werden all diese Aspekte und mehr diskutieren, um dir einen umfassenden Leitfaden für den Aufbau eines eigenfinanzierten SaaS-Unternehmens in Deutschland zu bieten.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/stagetimer-at-toitoitoi.jpg"
    alt="Bühne mit Performer und Stagetimer auf einem Bildschirm"
  >
  <figcaption>Stagetimer in verwendung, um mit dem Performer auf der Bühne in Kontakt zu bleiben (<a href="https://toitoitoi.coffee/" rel="noopener">ToiToiToi Coffee x Culture</a>)</figcaption>
</figure>


## 2. Was ist eigentlich Bootstrapping?

### Definition

Bootstrapping bezieht sich im Geschäftskontext darauf, ein Unternehmen ohne externe Finanzierung zu starten. Im Grunde ziehst du dein Business an seinen eigenen Schnürsenkeln hoch und nutzt nur deine eigenen Ressourcen, um es wachsen zu lassen.

### Bootstrapping vs. Traditionelle Startup-Finanzierung

Traditionelle Startups durchlaufen oft mehrere Finanzierungsrunden, einschließlich Angel-Runden, Seed-Runden, Serie A, Serie B und so weiter. Aber Investorengelder kommen nicht für umsonst. Du gibst einen Anteil deines Unternehmens ab, und Investoren erwarten eine signifikante Rendite innerhalb eines Zeitraums von normalerweise 5 Jahren. Das setzt dich unter Druck, ungefähr 300% Wachstum pro Jahr zu erreichen und dann einen Exit zu machen, sei es durch den Verkauf deines Unternehmens oder den Börsengang. Zu diesem Zeitpunkt besitzen Gründer normalerweise weniger als die Hälfte ihres Unternehmens und stehen unter immensem Stress.

### Vorteile des Bootstrappings

Bootstrapping ist gerade am Anfang hart. Die Vorteile sind jedoch erheblich. Du behältst 100% Eigentum an deinem Business. Das bedeutet, du hast die Freiheit, z.B. eine Woche frei zu nehmen, ohne jemandem Rechenschaft ablegen zu müssen. Ein Exit ist auch keine Pflicht; du kannst entweder verkaufen oder es mit geringem Aufwand laufen lassen, während du an deinem nächsten Projekt arbeitest.

### Meine Erfahrung mit Stagetimer

Stagetimer habe ich als Nebenprojekt gestartet, während ich meinen regulären Job behalten habe. Ich arbeitete an Wochenenden und unter der Woche nach Feierabend. Der Fortschritt war langsam, aber stetig. Ungefähr 1,5 Jahre später habe ich den Sprung gewagt und bin Vollzeit eingestiegen, als Stagetimer etwa €3.000 im Monat erwirtschaftete. Meine Frau und ich beschlossen dann, für 6 Monate in Asien zu reisen. Bei unserer Rückkehr deckte Stagetimer alle unsere Lebenshaltungskosten in Deutschland ab. Nebenbei: Die Lebenshaltungskosten in budgetfreundlichen asiatischen Ländern waren niedriger als in den meisten deutschen Städten.

### Betriebskosten

Einer der Vorteile von SaaS sind die geringen Betriebskosten. Für Stagetimer habe ich kaum €150 pro Monat für die technische Infrastruktur ausgegeben. Viele Tools und Dienste bieten großzügige kostenlose Pakete an, die deine Kosten erheblich senken können.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/pexels-tobi-631986.jpg"
    alt="Nahaufnahme der Schuhe einer Person beim Gehen"
  >
  <figcaption>Bootstrapping ist vielleicht nicht der einfachste Weg, bietet jedoch unvergleichliche Kontrolle und Freiheit.</figcaption>
</figure>

## 3. Software-as-a-Service und Preisgestaltung

Wenn du SaaS oder Software-as-a-Service hörst, denk an Software, die auf einem entfernten Server läuft und über einen Browser zugänglich ist. Das ist grundlegend anders als das alte Modell, bei dem du die Software lokal installierst. Zwei große Vorteile bietet dieses Modell:

1. **Wiederkehrende Einnahmen**: Da du den Server hostest und wartest, kannst du deinen Kunden regelmäßig Gebühren berechnen. Das ist super für den Cashflow und für stetiges Umsatzwachstum.

2. **Einfache Updates**: Alle Nutzer erhalten automatisch Updates, weil sie die aktuelle Version deiner Software über einen Browser nutzen. Du musst nur an einer Stelle aktualisieren, das spart dir Zeit und Mühe.

Mit Cloud-Computing-Diensten wie Firebase kannst du deine betrieblichen Komplexitäten und Kosten weiter senken. Es ist nicht ungewöhnlich, dass bootstrapped SaaS-Unternehmen eine Gewinnmarge von über 90% haben, wenn du deine eigene Zeit nicht als Kostenfaktor einrechnest. Diese unglaubliche Gewinnmarge kann schnell deine Lebenshaltungskosten decken, und du erreichst, was wir Bootstrapper als "Ramen Profitabilität" bezeichnen – das absolute Minimum, um dich selbst zu erhalten. Für Stagetimer hat es ungefähr zwei Jahre gedauert, diesen Punkt zu erreichen, was ziemlich standard ist.

Wenn du überlegst, sofort Vollzeit einzusteigen, stell sicher, dass du genug Ersparnisse für mindestens 1,5 Jahre hast. Denk dran, dass Abo-Modelle bei Kunden Reibung verursachen. Abos sind generell nicht beliebt, also muss dein Service überzeugend genug sein, damit die Leute ihn regelmäßig nutzen wollen.

### Einen Preis wählen

Die Preisfindung ist eine riesige Herausforderung im SaaS-Bereich, da keine echten Zusatzkosten für jeden weiteren Benutzer anfallen. Du könntest 5 €/Monat oder 69 €/Monat verlangen, und die Kosten für dich wären im Wesentlichen die gleichen. Der Preis wird letztlich von dir frei erfunden. Hier sind einige Faktoren, die du berücksichtigen solltest:

1. **Zielkunde**: Zielt dein Angebot auf Endverbraucher (B2C), liegt der Preis meist zwischen 5 und 20 €/Monat. Unternehmen (B2B) sind bereit, mehr zu zahlen, eventuell sogar hunderte pro Monat, wenn deine Lösung für sie ein bedeutendes Problem löst.

2. **Umsatzziele**: Dein Preis beeinflusst direkt deinen Umsatz und den erforderlichen Kundenservice. Zum Beispiel brauchst du bei 5 €/Monat 2.000 Kunden, um 10.000 €/Monat zu erreichen, ohne Transaktionsgebühren zu berücksichtigen. Bei 50 €/Monat bräuchtest du nur 200 Kunden. Wähle weise.

Zusammengefasst bietet SaaS ein lukratives Modell mit wiederkehrenden Einnahmen und geringen Fixkosten. Die Herausforderungen liegen jedoch darin, deine Kunden vom Wert deines Angebots zu überzeugen und den richtigen Preis zu finden.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/pexels-taryn-elliott-4098989.jpg"
    alt="Mann isst Instant-Nudeln"
  >
  <figcaption>Die erste Etappe ist die "Ramen Profitabilität" – der Anfang der Freiheit!</figcaption>
</figure>

## 4. Durch die deutsche Bürokratie navigieren

### Erste Schritte: Ignoriere die Bürokratie (vorerst)

Ehrlich gesagt war das anfangs ein großes Fragezeichen für mich, und deshalb habe ich diesen Artikel geschrieben. Mein Rat? Leg einfach los. Wenn du dein erstes Produkt entwickelst, gibt es genug andere Herausforderungen, die deine Aufmerksamkeit benötigen. Technisch gesehen kannst du als Privatperson arbeiten, bis du Einnahmen von €100 - €200 pro Monat erzielst. Es ist eine rechtliche Grauzone, aber bei diesen Beträgen wird wahrscheinlich niemand nachfragen [^2]. Erst wenn du diesen Punkt erreichst, macht es Sinn, ein Unternehmen anzumelden.

### Die richtige Rechtsform wählen

Verstrick dich nicht gleich in die Gründung einer UG oder GmbH. Der Aufwand an Papierkram und rechtlichen Verpflichtungen kann zermürbend sein. Sicher, diese Rechtsformen begrenzen die persönliche Haftung, aber seien wir realistisch: SaaS-Unternehmen sind in dieser Hinsicht generell eher risikoarm. Steuerliche Haftung kannst du jedoch nicht vermeiden. Am besten startest du als "Einzelunternehmer". Dies kannst du für eine geringe Gebühr im Rathaus deiner Stadt anmelden, und die Bestätigung erhältst du meist innerhalb weniger Tage. Dann ist es Pflicht, das Finanzamt zu kontaktieren. Manchmal schicken Sie dir einen Brief, aber verlass dich nicht darauf; nimm selbst Kontakt auf. Füll den "Fragebogen zur steuerlichen Erfassung für Einzelunternehmen" aus, was du entweder online über die erstaunlich gute Elster-Website oder per Papierformular tun kannst. Ein Steuerberater kann dir dabei helfen, aber es ist auch selbst machbar.

### Zertifikate und Vorschriften

Gute Nachrichten: In Deutschland brauchst du keine speziellen Zertifikate oder Genehmigungen, um ein SaaS-Unternehmen zu betreiben. Diese Hürde existiert schlichtweg nicht.

### Wann eine GmbH in Betracht ziehen

Sobald deine Einnahmen die Marke von €100.000 pro Jahr überschreiten, macht der Wechsel zu einer GmbH Sinn. Zu diesem Zeitpunkt kannst du dir dann einen Steuerberater leisten um die Feinheiten zu klären, und dessen Gebühren sind dann eine gerechtfertigte Geschäftsausgabe.

### Hole dir Hilfe von der IHK oder lokalen Behörden

Die IHK (Industrie- und Handelskammer) kann eine wertvolle Ressource sein. Sie ist zwar nicht besonders beliebt, da jedes Unternehmen eine Pflichtgebühr zahlen muss, ähnlich wie bei der GEZ. Aber im Gegensatz zur GEZ kannst du die IHK tatsächlich anrufen oder ihnen eine E-Mail schicken und Fragen stellen. Ich habe persönlich detaillierte Fragen von ihrem Rechtsteam kostenlos beantwortet bekommen. Sie haben sogar auf Folgefragen geantwortet.

Deine lokalen Stadtbeamten sind vielleicht keine Business-Experten, können dich aber mit jemandem in Kontakt bringen, der es ist. Es gibt Leute im System, die kompetent sind und echtes Interesse daran haben, neuen Unternehmern zu helfen.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/pexels-cottonbro-studio-8468119.jpg"
    alt="Junger Mann im weißen Hemd mit Ordnern"
  >
  <figcaption>Durch die deutsche Bürokratie so einfach wie möglich navigieren.</figcaption>
</figure>

## 5. Der Umgang mit Steuern

### Wichtig: Verstehen

Mit Steuern ist nicht zu spaßen. Anders als bei anderen Aspekten deines Startups ist das Finanzamt penibel und rechtlich gesehen musst du von dir aus auf sie zugehen. Unwissenheit schützt nicht vor Strafe; es fallen Versäumnisgebühren an, wenn du nicht aktiv wirst. Sei dir außerdem bewusst, dass du persönlich für Steuerschulden haftest, unabhängig von der Rechtsform deines Unternehmens.

### Arten von Steuern

Jedes Unternehmen, ob groß oder klein, muss sich um drei Arten von Steuern kümmern:

- **Mehrwertsteuer**
- **Gewerbesteuer**
- **Körperschaftsteuer**

### Gewerbesteuer vs. Körperschaftsteuer

Klären wir einen oft missverstandenen Punkt: Die Gewerbesteuer geht an die Stadt, die Körperschaftsteuer an den Staat. Als Kapitalgesellschaft zahlst du dir ein Gehalt und darauf Einkommensteuer. Wenn du dich für einen Einzelunternehmer entscheidest, hast du nichts mit Körperschaftsteuer zu tun; dein gesamter Gewinn gilt als Einkommen, und darauf zahlst du Einkommensteuer. Ist eine Option steuereffizienter als die andere? Ein Steuerberater kann das beantworten, aber ehrlich gesagt ist der Unterschied am Anfang vernachlässigbar, und weniger Bürokratie wird dich wahrscheinlich mehr Geld sparen. Vergiss nicht Geld auf die Seite zu legen für diese Steuern nach dem ersten Jahr. Ich lege ca. 30% des Gewinns zurück.

### Mehrwertsteuer

Mehrwertsteuer ist komplex. Ich habe dazu einen ausführlichen Artikel geschrieben: [Europäische Mehrwertsteuer-Grundlagen für SaaS-Gründer](https://lukashermann.dev/writing/european-vat-basics-for-saas-founders/). Aber hier die Basics:

1. **Kleinunternehmerregelung**: Wenn du als Einzelunternehmer arbeitest und die Kleinunternehmerregelung anwendest (also "Ich verspreche, nicht mehr als €22.000/Jahr zu verdienen"), kannst du innerhalb der EU Umsätze bis zu €10.000 erzielen, ohne Mehrwertsteuer erheben zu müssen. Für Verkäufe außerhalb der EU gilt ebenfalls keine Mehrwertsteuer.
  
2. **Merchant of Record**: Das kann ich nicht oft genug betonen: Nutze einen Merchant of Record wie den Apple App Store, [Paddle](https://www.paddle.com/) oder [Lemon Squeezy](https://www.lemonsqueezy.com/). Diese Dienste lizenzieren im Grunde deine Software, kümmern sich um die Mehrwertsteuer und andere Verkaufssteuern, führen diese Steuern ordnungsgemäß ab und zahlen dir dann dein Geld aus. Das erspart dir einen Berg an bürokratischer Arbeit und finanziellen Risiken.

Steuern sind komplex, aber handhabbar. Am Ende des Tages ist es wichtig, sie nicht zu ignorieren und bei Bedarf professionelle Hilfe in Anspruch zu nehmen. Die anfängliche Investition in das Verständnis und die Verwaltung deiner Steuern wird sich langfristig auszahlen, glaub mir.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/pexels-mikhail-nilov-8297240.jpg"
    alt="Erschöpfte Frau liest Dokumente"
  >
  <figcaption>Steuern sind ein Thema, dass du am Anfang nicht ignorieren darfst.</figcaption>
</figure>

## 6. Brauche ich einen Steuerberater?

### Die Kosten für professionelle Hilfe

Ein Steuerberater ist nicht billig; rechne mindestens mit €1.200 pro Jahr, oft sogar mehr. Wenn du ein eigenfinanziertes Unternehmen ohne Umsatz führst, ist das eine beträchtliche Ausgabe. Ich denke, du kannst ohne starten. Deutschland hat gute Regelungen für Kleinunternehmer (Kleinunternehmerregelung), was die Buchführung für Solo-Unternehmer überschaubar macht. Bis du die Grenzen für Kleinunternehmen erreichst, kannst du alleine klarkommen. Sobald dein Umsatz die €22.000-Marke knackt, wird ein Steuerberater erschwinglicher.

### Alleine klarkommen: Was du brauchst

Wenn du dich entscheidest, die Steuern selbst zu machen, lerne zuerst, wie man den "Fragebogen zur steuerlichen Erfassung für Einzelunternehmen" ausfüllt. Es gibt gute Online-Anleitungen dafür. Als nächstes besorge dir eine Buchhaltungssoftware, die eine Einnahmeüberschussrechnung (EUR) für deine jährliche Einkommensteuererklärung erstellen kann. Im Gegensatz zu den USA ist es für Angestellte in Deutschland nicht obligatorisch, eine Einkommensteuererklärung abzugeben. Aber mit einem Unternehmen wird es Pflicht. Ich nutze Lexoffice. Hier ist mein [Affiliate-Link](https://app.lexoffice.de/buy/direct-purchase-select.html?pid=TVvGrszacL&pdata=qwKeyHkkT3&cid=1777&utm_medium=affiliate&utm_source=recommend-TVvGrszacL&utm_campaign=kunden-werben-kunden&couponCode=LXOK4YWK), falls du es ausprobieren möchtest.

### Mit einem Berater: Darauf solltest du achten

Stelle sicher, dass sie wissen, was SaaS ist; nicht alle tun das. Und kläre unbedingt, ob du deine eigene Buchhaltungssoftware (wie Lexoffice) verwenden und die Daten dann in ihr DATEV-System exportieren kannst. Warum? Wenn sie das nicht akzeptieren, werden sie deine Belege manuell neu eingeben und deine Banktransaktionen doppelt prüfen. Das dauert und macht alles noch teurer.

### Steuerberater in der Familie

Hast du einen Steuerberater in der Familie, dann hast du im Grunde den deutschen Jackpot geknackt. Kein Witz, herzlichen Glückwunsch! Du kannst all das überspringen und musst nicht den harten Weg gehen. Für alle anderen sind Fehler vorprogrammiert. Ich habe über €6.000 an Gebühren wegen Fehlern ausgegeben. Das sehe ich als meine Studiengebühren für die Unternehmerschule an.

<figure class="max-w-2xl">
  <img
    src="/img/writing/german-bootstrapped-saas/lexoffice-laptop.jpg"
    alt="Person arbeitet am Laptop mit Lexoffice"
  >
  <figcaption>Ein Steuerberater ist beim Start nicht strikt notwendig, wird aber sinnvoller, je mehr du wächst (<a href="https://www.lexoffice.de/" rel="noopener">Lexoffice</a>).</figcaption>
</figure>

## 7. Wie entwickle ich ein Produkt?

### Wo Ideen finden?

Die Vorstellung, dass die erste Version deines Produkts sofort ein Hit wird, ist, ehrlich gesagt, unwahrscheinlich. Oft dauert es 2-3 Jahre des Feinjustierens und Überarbeitens, bis eine guter Product-Market-Fit (PMF) erreicht ist. Wo du am besten nach Ideen suchst? Im Alltag. Manche raten dazu, "den eigenen Juckreiz zu lindern", aber ich schlage vor, einfach aufmerksam durchs Leben zu gehen. Höre hin, wenn Leute sich über ein Problem beschweren; die Chancen stehen gut, dass du bereits eine Produktidee vor dir hast. Meine Methode besteht darin, zu beobachten, wie Menschen mit ihrer Umgebung interagieren, und zu denken: "Das könnte vereinfacht werden."

### Der Bootstrapping Ansatz vs. Traditionelle Startups

Traditionelle Startups haben Investorengelder und gehen die Produktentwicklung anders an als eigenfinanzierte Unternehmen. Startups stellen ein Team ein, skizzieren eine Produkterfahrung, investieren in die Marke, das Design, das Marketing usw. Sie lösen jedes Problem, indem sie (1) einstellen und (2) Geld reinstecken.

Gebootstraptete Unternehmen gehen einen anderen Weg. Du fängst mit €0 an. Also vergiss erstmal deinen Namen, dein Logo oder deine Marke. Konzentriere dich darauf, ein Minimal Viable Product (MVP) zu bauen, die einfachste Version deines Produkts, die das aktuelle Problem löst.

### Deinem Produkt einen Namen geben

Beim Namen für dein Produkt solltest du diese Regeln befolgen:

- Er sollte dir gefallen
- Andere sollten ihn sich am nächsten Tag merken können
- Er sollte leicht zu buchstabieren sein

Vergiss freie .com-Domains oder einen Namen, der dein Produkt explizit beschreibt. Wähle stattdessen einen Namen, der dir gefällt und den man sich merkt. Deine To-Do-List-App muss also nicht unbedingt "listify.com" heißen; "llamalife.co" würde genauso gut passen.[^3]

### Produktvalidierung

Als nächstes, validiere deine Produktidee. Stagetimer habe ich zunächst kostenlos online gestellt. Ja, die Meinungen darüber gehen auseinander, aber meiner Ansicht nach ist der Preis in dieser Phase irrelevant. [^4] Kennzeichne es als "Early Access" und schaue, ob die Leute wiederkommen, nachdem sie es ausprobiert haben. Das ist dein erster Validierungsschritt. Poste dein Produkt auf Plattformen wie Reddit und beobachte das Nutzerengagement.

### Erste Einnahmen und Kundenfeedback

Es hat sechs Monate gedauert, bis ich mit Stagetimer meinen ersten Euro verdient habe. Ein Vollzeitjob und die Entwicklung eines Produkts, das einen Premium-Plan rechtfertigt, hat viel Zeit in Anspruch genommen. Aber am Tag der Veröffentlichung des Updates hatte ich meinen ersten zahlenden Kunden, dank eines Reddit-Posts, den ich vor Monaten gemacht hatte. Das war ein starkes Signal für den Wert des Produkts.

Ich habe mich an diese ersten Kunden gewandt, um herauszufinden, warum sie mein Produkt nutzen und welche Funktionen sie benötigen. Dieses Feedback half mir, Stagetimer auf meine Zielgruppe zuzuschneiden. Achte darauf, dass die Leute dein Produkt auf Google finden können wenn sie die Begriffe verwenden, mit denen sie es selbst beschreiben würden.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/pexels-senne-hoekman-1178498.jpg"
    alt="Weißes Diagrammpapier unter einer Zange"
  >
  <figcaption>Finde einen Bedarf, baue ein MVP und passe es basierend auf Marktrückmeldungen an.</figcaption>
</figure>

## 8. Der SaaS-Technologie-Stack

### Wahl des Tech Stacks

Mein Stack besteht aus Vue, Node.js, Express, MongoDB und Firebase. Mit Vue, Node und Express hatte ich bereits Erfahrung. Firebase war neu für mich, hat sich aber als gute Ergänzung erwiesen. Dein Stack muss nicht der gleiche wie meiner sein. Einige Leute, die ich kenne, konnten anfangs gar nicht programmieren und haben trotzdem nach ein paar Monaten JavaScript-Lernen eine App erstellt. Ob du nun eine Web-App, eine Desktop-App mit Electron oder native Mobile-Apps anstrebst: Wichtig ist, bei einer Plattform zu bleiben.

### Das "Shiny Object"-Syndrom

Das Programmieren lernen fällt leichter, wenn du an einem einzigen, einfachen Projekt arbeitest. Unter Entwicklern gibt es die Tendenz zum "Shiny Object"-Syndrom: Du startest mehrere Nebenprojekte und bringst keines zu Ende. Die Lösung ist einfach: Konzentriere dich auf ein Projekt und bring es zu Ende.

### Ein paar unbekannte Faktoren sind okay

Mit Benutzerauthentifizierung war ich nicht vertraut, weshalb ich Firebase als Komplettlösung gewählt habe. Auch Websockets waren mir unbekannt, ich brauchte sie aber für Echtzeit-Updates in meiner App. Hier war ein Open-Source-Tool wie socket.io sehr wertvoll. Für die meisten technischen Herausforderungen gibt es wahrscheinlich bereits eine Lösung. Es ist in Ordnung ein paar Unbekante Faktoren zu haben wenn man anfängt.

### Lass dich nicht einschüchtern

Falls das, was ich gerade erklärt habe, für dich wie Kauderwelsch klingt, ist das kein Problem. Du kannst einen technischen Mitgründer finden oder, wenn du willst, selbst das Programmieren lernen. Ein guter Startpunkt ist [FreeCodeCamp](https://www.freecodecamp.org/learn), beginnend mit dem Kurs "Responsive Web Design". In weniger als sechs Monaten wirst du Sachen bauen, die dir früher utopisch erschienen.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/pexels-dan-cristian-paduret-1476321.jpg"
    alt="Blaue und gelbe Telefonmodule"
  >
  <figcaption>Wähle einen Stack und bleibe dabei. Hab keine Angst, das Programmieren von Grund auf zu lernen.</figcaption>
</figure>

## 9. Wie du mit Marketing anfängst

### Das Marketing-Labyrinth navigieren

Marketing kann einschüchternd wirken, besonders wenn es nicht deine Stärke ist. Tatsächlich probieren Bootstrapper anfangs meistens viele Taktiken aus und schauen, was funktioniert. Bei mir haben sich SEO, Google Ads und Mundpropaganda als effektiv erwiesen. Facebook Ads, Social Media Posts und Kaltakquise brachten uns dagegen wenig.

### Low-Hanging Fruits: Einfache erste Schritte

Hier sind vier Taktiken, die mit wenig Aufwand viel bewirken können:

1. **Gute Landingpage**: Deine Startseite sollte klar vermitteln, was dein Produkt kann. Verwende einfache Sprache und Bilder. Je einfacher, desto besser. Für konkrete Tipps und Beispiele, schau dir [diesen Leitfaden](https://www.demandcurve.com/playbooks/above-the-fold) an. [^5]
2. **Vergleichs- / Alternativseiten**: Erstelle Seiten, die dein Produkt mit bekannten Konkurrenten vergleichen. Diese Seiten können gut ranken und gezielten Traffic bringen.
3. **Kostenlose Angebote**: Biete Artikel, PDF-Anleitungen, Tabellen oder Vorlagen zum Download an. Kostenlose Ressourcen schaffen Mehrwert und kommen gut an!
4. **Post in einem relevanten Subreddit**: Besonders effektiv, wenn du ein kostenloses Tool hast. Reddit-User mögen offensichtliche Werbung nicht, also kann es ein authentischer Post weit bringen.

### Nutze deine Vorteile als Bootstrapper

Deine Vorteile gegenüber großen Unternehmen sind Geschwindigkeit und Kundenservice. Du kannst schnell starten und iterieren. Kundenprobleme? Sei proaktiv, mach einen Anruf und löse das Problem sofort. Als ChatGPT heraus kam hatten Bootstrapper inheralb von wenigen Wochen ihre Produkte damit auf dem Makrt, während größere Unternehmen Monate oder sogar Jahre brauchten.

Unterschätze nie die Macht eines zufriedenen Kunden. Die sind die besten Werbeanzeigen. Menschen sind schlechten Kundenservice gewohnt, also wenn du mehr als das Übliche tust, stichst du hervor. Fehler sind okay, solange du sie schnell erkennst und behebst. Fehler werden zum Problem, wenn der Nutzer ignoriert wird und der Fehler nicht gelöst wird. Überlege, wie oft du das selbst schon erlebt hast.

### Langfristiges Marketing: SEO

Auf lange Sicht ist SEO eine deiner mächtigsten Waffen. Auch heute noch gibt es Suchanfragen, die genau deine Lösung suchen und keine guten Antworten finden. Das Volumen mag gering sein, aber mit der Zeit summieren sich diese Klicks. Ein Beispiel für Stagetimer is das Stichwort "Timer für Präsentationen", eine Anfrage mit nur 134 Impressionen pro Monat, erhalten aber 43 Klicks, von denen ein guter Teil zu zahlenden Kunden wird.

<figure class="max-w-xl">
  <img
    src="/img/writing/german-bootstrapped-saas/pexels-photomix-company-218717.jpg"
    alt="Schwarzes Samsung Tablet zeigt Google Browser auf dem Bildschirm"
  >
  <figcaption>Einfache Strategien wie eine gut gemachte Landingpage, Vergleichsseiten, kostenlose Ressourcen und gezieltes Community-Engagement können für schnelle Erfolge sorgen.</figcaption>
</figure>

## 10. Abschließende Gedanken und Ressourcen

### Community ist entscheidend

Ein Punkt, den ich nicht genug betonen kann, ist die Bedeutung der Community. Besonders wenn du den Sprung wagst, Vollzeit zu arbeiten, kann es schnell einsam werden. Ob auf Twitter, in spezialisierten Foren oder in lokalen Coworking-Spaces, umgib dich mit gleichgesinnten Gründern. Es gibt unzählige Indie-Hacker-Communitys. Ziel ist es, der Einsamkeit entgegenzuwirken, die schnell zu Depression oder Burnout führen kann.

### Podcast-Empfehlungen

Ob du lieber auf Deutsch oder Englisch hörst, es gibt Podcasts, die dich leiten, inspirieren und praktische Tipps geben können.

- **Deutsche Podcasts**
    - [Happy Bootstrapping](https://happy-bootstrapping.podigee.io/) – Andreas Lehr interviewt Bootstrapper, Solopreneure und Indie-Hacker.
    - [Minimal Empires](https://minimalempires.de) – Bau dein kleines Empire, das nicht die Welt, sondern dein Leben verändert.

- **Englische Podcasts**
    - [My First Million](https://www.mfmpod.com/) – Es gibt keinen besserern Podcast, um dich für Unternehmertum zu begeistern!
    - [Indie Hackers](https://www.indiehackers.com/podcasts) [^6] – Interviews mit anderen Solo- und Bootstrapping-Gründern.
    - [How I Built This by Wondery](https://wondery.com/shows/how-i-built-this/) – Erfolgsgeschichten von Startup-Gründern.

### Für deutsche Bootstrapper

Lass dich als deutscher Gründer nicht entmutigen. Unternehmertum und schon gar Bootstrapping werden hier oft nicht vollständig verstanden oder wertgeschätzt. Aber es gibt auch hier eine Community, und es ist absolut möglich, erfolgreich zu sein.

Wenn du ein deutscher SaaS-Gründer bist oder einer werden möchtest, ich bin immer für einen Plausch offen. Zögere nicht, mich auf Twitter [@_lhermann](https://twitter.com/_lhermann) zu kontaktieren oder mir eine E-Mail zu schreiben. Ich freue mich immer, Leute kennenzulernen, die sich in denselben Gewässern bewegen.



[^1]: Die ganze Geschichte, wie ich Stagetimer gestartet habe, [kannst du hier lesen](https://stagetimer.io/blog/building-stagetimerio/).
[^2]: In einer Grauzone zu starten, mag für manche verrückt klingen. Wir Deutschen lieben unsere Regeln. Aber als Unternehmer bewegst du dich ständig auf unbekanntem Terrain. Es gibt viele Bereiche, in denen du anfangs improvisieren musst, wie z.B. DSGVO, Geschäftsbedingungen oder Umsatzprognosen. Und das ist okay. Du kannst nie ein Solo-Business starten, wenn von Anfang an alles perfekt sein muss. Natürlich kannst du auch sofort deine Firma anmelden; die Gebühren dafür sind gring.
[^3]: Ein Shoutout an eine meiner Lieblingsgründerinnen, [Marie Ng](https://twitter.com/threehourcoffee).
[^4]: Andere, wie [Pieter Levels](https://twitter.com/levelsio), setzen auf ihrer Landing-Page eine Scheinkasse ein, bevor das Produkt überhaupt fertig ist. Kunden werden zur Newsletter-Anmeldung weitergeleitet. Auch das ist eine Möglichkeit, eine Idee zu validieren.
[^5]: Ich habe einen eigenen bescheidenen Twitter-Thread über den Aufbau meiner Landing-Page: https://twitter.com/_lhermann/status/1428025421199720455?s=20
[^6]: Es gibt eine Indie-Hackers-Episode mit meiner Frau und mir: https://share.transistor.fm/s/f614549b)
