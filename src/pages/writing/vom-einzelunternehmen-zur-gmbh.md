---
layout: ../../layouts/Article.astro
title: "Vom Einzelunternehmen zur GmbH – jeder Schritt, jeder Brief"
created: 2026-10-20
description: "Wie ich ein deutsches Einzelunternehmen mit einem profitablen SaaS in eine GmbH samt Holding umgewandelt habe. Der echte Zeitplan, die echten Kosten, die echten Briefe und die Fallen, von denen dir keiner erzählt."
tags: Bootstrapping, Deutschland, Steuern
cover_image: /img/writing/covers/from-einzelunternehmen-to-gmbh.jpg
lang: de
translation: /writing/from-einzelunternehmen-to-gmbh/
---

<div class="text-sm text-neutral-600 border-t border-b border-neutral-200 pt-4 my-6">

**Stand:** Das ist ein lebendes Dokument. Ich schreibe es, während der Prozess noch läuft, und aktualisiere es, sobald die offenen Punkte erledigt sind.

</div>

Da stehe ich nun mit meinem Einzelunternehmen und einem SaaS-Produkt.

Das Produkt ist [Stagetimer](https://stagetimer.io), ein ferngesteuerter Countdown-Timer für Live-Events. Das Einzelunternehmen habe ich 2021 unter der Adresse meiner Eltern angemeldet. Es ist profitabel und seiner Rechtsform entwachsen.

Das ist die Anleitung zur GmbH-Gründung in Deutschland, die ich mir am Anfang gewünscht hätte: jeder Schritt in der richtigen Reihenfolge, wie lange er gedauert hat, was er gekostet hat, welche Briefe kamen (auch der, den ich für Betrug hielt), und die Fallen, die mich meine Wochenenden gekostet haben. Vertrauliches ist geschwärzt, alles andere steht hier drin.

## TL;DR

Ich habe mein Einzelunternehmen, ein SaaS-Produkt mit über 200.000 € Jahresumsatz, in die Stagetimer GmbH überführt, die einer Holding-GmbH gehört. Der Hauptgrund sind Steuern: Die GmbH zahlt rund 30 % auf den Gewinn statt meines persönlichen Spitzensteuersatzes.

Die GmbH war eine normale Bargründung, bei der zusätzlich das ganze Einzelunternehmen zu Buchwerten eingebracht wurde (§20 UmwStG, Stichtag 31.12.).

Die Vorbereitung hat etwa 4 Monate gedauert, vor allem wegen des Wartens auf die Schlussbilanz. Vom Notartermin bis zur USt-IdNr. und laufenden Lohnabrechnung vergingen weitere 14 Wochen.

Die Gründung hat 2.263 € an Notar- und Gerichtskosten gekostet, plus Steuerberater. Laufend sind es über 2.500 € im Jahr für den Steuerberater und ein paar hundert Euro für alles andere.

<!-- Die wichtigste Lektion: Die Behörden sind nicht langsam, sie sind *stumm*. Wenn etwas überfällig ist, ruf an. -->

## Inhalt

**Entscheidungen**

- [Warum mit einem Einzelunternehmen anfangen?](#warum-mit-einem-einzelunternehmen-anfangen)
- [Wann zur GmbH wechseln?](#wann-zur-gmbh-wechseln)
- [Warum nicht im Ausland gründen?](#warum-nicht-im-ausland-gründen)
- [GmbH oder UG?](#gmbh-oder-ug)
- [Wie sollte die Struktur aussehen?](#wie-sollte-die-struktur-aussehen)

**Der Ablauf**

- [Zeitplan](#zeitplan)
- [Phase 0: Vorbereitung (4 Monate vorher)](#phase-0-vorbereitung-4-monate-vorher)
- [Phase 1: Notartermin (Tag 0)](#phase-1-notartermin-tag-0)
- [Phase 2: Bankkonto und Stammkapital (Tag 5)](#phase-2-bankkonto-und-stammkapital-tag-5)
- [Phase 3: Eintragung ins Handelsregister (Tag 29)](#phase-3-eintragung-ins-handelsregister-tag-29)
- [Phase 4: Anmeldungen und Verträge (Tag 35)](#phase-4-anmeldungen-und-verträge-tag-35)
- [Phase 5: Steuernummer, USt-IdNr. und Lohnabrechnung (ab Tag 54)](#phase-5-steuernummer-ust-idnr-und-lohnabrechnung-ab-tag-54)
- [Die Holding](#die-holding)

**Nach der Gründung**

- [Fake-Rechnungen](#fake-rechnungen)
- [Stolperfallen beim Wechsel](#stolperfallen-beim-wechsel)
- [Hat es sich gelohnt?](#hat-es-sich-gelohnt)

## Warum mit einem Einzelunternehmen anfangen?

In Deutschland kannst du ein Unternehmen mit einem einzigen Formular gründen: der Gewerbeanmeldung im Rathaus (oder auf dessen Website). Du zahlst eine kleine Gebühr, ein paar Tage später hast du einen Gewerbeschein und kannst Rechnungen schreiben.

Eine GmbH bedeutet, wie die nächsten 400 Zeilen zeigen, deutlich mehr Unsinn, bevor du deinen ersten Euro verdienst.

Ohne Umsatz und mit einer unbestätigten Idee ist die Wahl einfach. Das Einzelunternehmen ist günstig zu gründen, günstig zu führen (einfache Buchhaltung, keine Bilanz, keine Lohnabrechnung für dich selbst) und günstig zu schließen. Eine GmbH zu schließen dauert über ein Jahr und kostet ein paar tausend Euro, wie ich in [Ein SaaS-Unternehmen in Deutschland bootstrappen](/writing/saas-unternehmen-in-deutschland-bootstrappen/) geschrieben habe.

### Und die Haftung?

Meistens kommt das Argument: „Aber eine GmbH beschränkt doch die Haftung!“ Ja. Aber wofür eigentlich?

Du verkaufst ein SaaS-Abo für 8 $ im Monat. Du unterschreibst keine mehrjährigen SLAs, und deine AGB begrenzen deine Haftung. Fällt der Dienst einen Nachmittag lang aus, kann ein Kunde ungefähr 8 $ verlangen.[^1] Solange du nichts Kritisches betreibst (Gesundheitsdaten, Zahlungsinfrastruktur), verklagt dich kein Kunde in die Privatinsolvenz.

Die Haftung, die du *nicht* beschränken kannst, ist die gegenüber dem Finanzamt. Steuerschulden greifen durch jede GmbH hindurch auf den Geschäftsführer,[^69ao] und das Finanzamt ist der eine Gläubiger, der dir tatsächlich nachstellt. Verklagt wurde ich noch nie. Ein gepfändetes Bankkonto wegen einer (sehr) verspäteten Umsatzsteuerzahlung hatte ich dagegen *schon*. Eine GmbH hätte da nicht geholfen.

Die Haftung stand also nicht auf meiner Liste der Gründe.

## Wann zur GmbH wechseln?

2023 habe ich geschrieben, dass sich eine GmbH irgendwo ab 100.000 € Jahresumsatz lohnt. Gemacht habe ich es, nachdem ich die **200.000 €** überschritten hatte.

Meine Gründe, der Reihe nach:

1. **Steuern auf einbehaltene Gewinne.** Als Einzelunternehmer ist der gesamte Gewinn persönliches Einkommen zu deinem Spitzensteuersatz. Eine GmbH zahlt rund 30 % (Körperschaftsteuer, Solidaritätszuschlag, Gewerbesteuer) auf den Gewinn, den sie *behält*. Ich zahle mir ein Gehalt und investiere den Rest. Bei meinem Umsatz bezahlt der Unterschied die Bürokratie um ein Vielfaches.
2. **Eine Holding-Struktur**, um Gewinne (fast) steuerfrei in zukünftige Projekte zu investieren.
3. **Der Name des Produkts, nicht meiner.** Eine Firma mit meinem Namen wirkt wie eine One-Man-Show (was sie ist) und liest sich auf einer Rechnung an einen Konzern seltsam. „Stagetimer GmbH“ wirkt wie eine Firma, und ich habe sogar Briefpapier.

## Warum nicht im Ausland gründen?

Gefühlt jeder hat eine UK Limited, eine Firma in Singapur oder eine Delaware LLC über Stripe Atlas. Warum sich überhaupt die deutsche Bürokratie antun?

Das dachte ich auch. 2019 habe ich mir die estnische e-Residency geholt und eine glänzende estnische OÜ gegründet. Es fühlte sich an wie die Zukunft: echte elektronische Signaturen mit Kartenlesegerät statt krakeliger Pixel-Unterschriften im PDF. Mein Dienstleister xolo.io (damals „Leap In“) hatte das Unternehmen in wenigen Tagen am Laufen.

Du ahnst schon, dass diese Geschichte nicht gut ausging.

Die Regel lautet: Du wirst dort besteuert, wo du arbeitest, und ein Unternehmen dort, wo es seine Entscheidungen trifft (am Ort der Geschäftsleitung). Damit blieben mir vier Möglichkeiten:

1. Für jede unternehmerische Entscheidung nach Tallinn fliegen.
2. Lügen, dass ich nach Tallinn fliege.
3. Von Land zu Land ziehen, jeweils weniger als 180 Tage, und zum schwer greifbaren „Perpetual Traveler“ werden.
4. In den sauren Apfel beißen und mit meiner estnischen Firma in Deutschland Steuern zahlen.

Möglichkeit 3 funktioniert für digitale Nomaden, bis sie das Reisen satthaben. Ich habe mich für Möglichkeit 4 entschieden. Ich hatte dieselbe teure Buchhaltung wie bei einer deutschen GmbH, *plus* die ganze Compliance in Estland. 2021 habe ich die Firma geschlossen und gerade die (hoffentlich) letzte Steuerberaterrechnung für die Schließung bezahlt. Schöne Zeiten.

Dasselbe gilt für die UK Limited, die Firma in Singapur und die LLC. Wenn du sie von deinem Schreibtisch in Deutschland aus führst, wird sie in Deutschland besteuert, und du bekommst die ausländische Bürokratie *zusätzlich* zur deutschen. Die US-LLC bringt noch jährliche Meldungen mit, bei denen ein vergessenes Formular fünfstellig kostet.

## GmbH oder UG?

Wahrscheinlich hat dir schon jemand zur UG geraten.

Die UG (haftungsbeschränkt) ist die „Mini-GmbH“, die du mit 1 € Kapital gründen kannst. Jedes deutsche Gründerforum empfiehlt sie. Darum habe ich es nicht gemacht:

- **Das Kapital ist nicht die Hürde.** Eine GmbH braucht 25.000 € Stammkapital, aber nur **12.500 € müssen eingezahlt werden**. Das ist keine Gebühr: Die Firma kann das Geld vom ersten Tag an für Betriebsausgaben verwenden.
- **Gleicher Aufwand.** Eine UG hat dieselbe Buchhaltung, dieselben Bilanzen, dieselbe Lohnabrechnung und dieselben Meldungen wie eine GmbH, und dieselbe Steuerberaterrechnung.
- **Wirkung.** „UG (haftungsbeschränkt)“ auf deiner Rechnung sagt jeder Bank, jedem Lieferanten und jedem Kunden, dass du mit weniger als 25.000 € angefangen hast.
- **Kein Schutz vor Steuerschulden**, der [Haftung, die dich tatsächlich bedroht](#und-die-haftung).

Dann gibt es noch die **UG & Co. KG**, die Solo-Gründern allen Ernstes empfohlen wird. Zwei juristische Personen, zwei Buchhaltungen, obendrauf die Besteuerung als Personengesellschaft. [Carmine Paolino ist diesen Weg gegangen](https://paolino.me/founding-a-company-in-germany/) und hat 11.800 € und 203 Tage gebraucht, bis er seine erste Rechnung schreiben konnte. Lass es.

Ganz am Anfang: Einzelunternehmen. Wenn echtes Geld reinkommt: GmbH. Die UG beantwortet eine Frage, die sich in unserer Situation fast niemand stellt.

## Wie sollte die Struktur aussehen?

<svg viewBox="0 0 360 246" width="360" class="block mx-auto my-8 max-w-full" role="img" aria-label="Beteiligungsstruktur: Mir gehören 100 % einer Holding-GmbH, der 100 % der Stagetimer GmbH gehören">
  <defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#a3a3a3"/></marker></defs>
  <g fill="none" stroke="#d4d4d4" stroke-width="1.5">
    <rect x="130" y="1" width="100" height="40" rx="6"/>
    <rect x="60" y="88" width="240" height="56" rx="6"/>
    <rect x="60" y="189" width="240" height="56" rx="6"/>
  </g>
  <g stroke="#a3a3a3" stroke-width="1.5" marker-end="url(#arrow)">
    <line x1="180" y1="41" x2="180" y2="86"/>
    <line x1="180" y1="144" x2="180" y2="187"/>
  </g>
  <g fill="currentColor" font-family="inherit" text-anchor="middle">
    <text x="180" y="27" font-size="15" font-weight="600">Ich</text>
    <text x="180" y="112" font-size="15" font-weight="600">Holding GmbH</text>
    <text x="180" y="132" font-size="13" fill="#737373">hält Anteile, sonst nichts</text>
    <text x="180" y="213" font-size="15" font-weight="600">Stagetimer GmbH</text>
    <text x="180" y="233" font-size="13" fill="#737373">das eigentliche Geschäft</text>
  </g>
  <g fill="#737373" font-family="inherit" font-size="12">
    <text x="190" y="69">100 %</text>
    <text x="190" y="171">100 %</text>
  </g>
</svg>

So kommt man vom Einzelunternehmen dorthin:

1. **Stagetimer GmbH gründen**, als Bargründung mit 25.000 € Stammkapital, zur Hälfte eingezahlt.
2. **Das gesamte Einzelunternehmen einbringen**, zusätzlich zum Stammkapital (als Sachagio). Steuerlich ist das eine Einbringung nach [§20 UmwStG](https://www.gesetze-im-internet.de/umwstg_2006/__20.html) zu Buchwerten. Kein steuerpflichtiger Vorgang: Die GmbH übernimmt einfach das Geschäft, mit Kunden, Verträgen, Kontostand und allem.
3. **Die Holding-GmbH gründen** und die Anteile an der Stagetimer GmbH einbringen ([§21 UmwStG](https://www.gesetze-im-internet.de/umwstg_2006/__21.html), wieder zu Buchwerten).

Warum nicht einfach eine neue GmbH neben dem alten Geschäft gründen? Weil der Wert im Produkt steckt: Code, Marke, Kunden. Jeder andere Weg, das zu übertragen, heißt, es dir selbst zum Marktwert zu *verkaufen*: Du bezahlst einen Sachverständigen für die Bewertung und dann Einkommensteuer darauf. Die Einbringung vermeidet beides. Der Haken ist eine [Sperrfrist von 7 Jahren](#stolperfallen-beim-wechsel): Verkaufst du die Anteile vorher, kommt die Steuer zurück. Ich habe nicht vor zu verkaufen, aber wenn du das planst, kann das ein K.-o.-Kriterium sein.

Das habe ich etwa vier Monate vor dem Notartermin mit meinem Steuerberater ausgearbeitet.

## Zeitplan

| Tag | Schritt |
|---|---|
| Vorher | Vorbereitung: Steuerberater, IHK, Notar, Schlussbilanz (~4 Monate) |
| 0 | Notartermin (1,5 Stunden) |
| 5 | Geschäftskonto eröffnet, Stammkapital eingezahlt |
| 29 | Eintragung ins Handelsregister |
| 35 | Transparenzregister, selbst erledigt |
| 39 | Gewerbeanmeldung, Fragebogen zur steuerlichen Erfassung, Berufsgenossenschaft |
| 40 | Betriebsnummer für die Lohnabrechnung |
| 54 | Steuernummer |
| 61 | Lohnsteuersignal fehlt beim Finanzamt, mit einem Anruf behoben |
| 67 | ELSTER-Konto der GmbH mit der Steuernummer erweitert, nach einer Woche Warten auf den Aktivierungscode per Post |
| 69 | Minijob-Anmeldung, wieder Aktivierungscode per Post |
| 89 | USt-IdNr. fehlt immer noch, Umsatzsteuersignal nie gesetzt. Mit einem Anruf behoben |
| 99 | USt-IdNr. im Briefkasten |
| 104 | BZSt fordert Zusammenfassende Meldungen und droht mit Zwangsgeld. Innerhalb von 10 Tagen abgegeben |

**Vom Notar bis voll arbeitsfähig: ~14 Wochen.** Jetzt die lange Version.

## Phase 0: Vorbereitung (4 Monate vorher)

Die Gründung selbst geht schnell. Die Vorbereitung darauf hat vier Monate gedauert.

**Ich habe mit einem Steuerberater angefangen.** Nicht mit einem Anwalt, nicht mit einem Notar. Die rechtliche Seite einer GmbH-Gründung ist standardisiert. Auf der steuerlichen Seite (das Einzelunternehmen übertragen, ohne Steuern auszulösen, der Stichtag) wird Geld gewonnen oder verloren. Meiner hat den ganzen Ablauf in einem Termin skizziert: GmbH gründen, Einzelunternehmen einbringen, Holding darüber setzen, Anträge auf Buchwertfortführung stellen.

**Die IHK hat meinen Firmennamen geprüft.** Mehr habe ich von ihr nicht gebraucht. Immerhin war es kostenlos.

**Den Notar habe ich etwa 100 Tage vor dem Termin kontaktiert.** Der Notar erstellt die Dokumente aus Standardvorlagen, und ich habe sie von meinem Steuerberater prüfen lassen. Der Termin musste auf die Schlussbilanz warten.

**Die Schlussbilanz war der Engpass.** Die Notarurkunde braucht die Bilanz des Einzelunternehmens zum Stichtag (31. Dezember 2025). Mein Steuerberater musste also die alten Bücher *vor* dem Termin abschließen, mitten in seiner stressigsten Zeit. Sie kam eine Woche vorher.

**Geld vor dem Stichtag entnehmen** ist der Tipp, den ich gern gehabt hätte. Bei einer Einbringung geht auch der Kontostand in die GmbH über. Alles, was vor dem 31. Dezember entnommen wird, ist einfach Privatgeld. Alles, was danach rausgenommen wird, muss in der Buchhaltung entwirrt werden, und das kostet Steuerberaterzeit.

## Phase 1: Notartermin (Tag 0)

Der Termin hat etwa 1,5 Stunden gedauert. Der Notar muss gesetzlich jedes Dokument Wort für Wort vorlesen.

Was ich unterschrieben habe:

- **Gesellschaftsvertrag**: Firma, Sitz, Gegenstand, Stammkapital.
- **Einbringungsvertrag**: Das Einzelunternehmen geht als Agio hinein, die Schlussbilanz liegt bei.
- **Gesellschafterbeschluss**: bestellt mich zum Geschäftsführer. Der Gesellschaftsvertrag befreit mich von §181 BGB, damit ich Verträge zwischen mir und der Firma schließen kann.
- **Anmeldung zum Handelsregister**, vom Notar elektronisch eingereicht.

Kosten:

- 1.771,23 € für Gründung und Einbringung
- 191,93 € für die Registeranmeldung
- **1.963,16 €** insgesamt

Bis zur Eintragung war meine Firma eine „GmbH in Gründung“ (i.G.). Sie konnte ein Bankkonto eröffnen, war aber noch keine richtige Firma.

## Phase 2: Bankkonto und Stammkapital (Tag 5)

Der Notar reicht die Registeranmeldung erst ein, wenn das Stammkapital auf ein Bankkonto eingezahlt ist. Obwohl die GmbH mein Einzelunternehmen übernimmt, habe ich ein eigenes Konto für die GmbH i.G. eröffnet, 12.500 € eingezahlt und die Bankbestätigung an den Notar geschickt.

Ich habe mich für [**Qonto**](https://qonto.com/r/xp3mdc) (Empfehlungslink) entschieden: gute Bewertungen für den Support, eine eigene Banklizenz statt einer Schicht über der Solarisbank, native Integration mit Lexware Office und eine kostenlose Debit-Mastercard. Fünf Tage nach dem Notartermin war das Konto eröffnet und das Kapital eingezahlt.

## Phase 3: Eintragung ins Handelsregister (Tag 29)

Vier Wochen nach dem Notartermin war die Eintragung im Handelsregister erledigt, schneller als die Horrorgeschichten, die ich gehört hatte. Erfahren habe ich es über das [Onlineportal](https://www.handelsregister.de/rp_web/normalesuche/welcome.xhtml), das kostenlos ist, anders als andere Websites, die dir diese Daten verkaufen wollen. Die offizielle Mitteilung des Gerichts kam weitere 24 Tage später per Post.

Mit der Mitteilung kam ein Merkblatt zu meinen neuen Pflichten und eine große Warnung vor [betrügerischen Rechnungen](#fake-rechnungen).

<div class="letters">
<figure><a href="/img/writing/gmbh/hr-eintragungsnachricht.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/hr-eintragungsnachricht.jpg" alt="Eintragungsnachricht des Amtsgerichts Stuttgart für die Stagetimer GmbH, mit dem Hinweis, dass Registerkosten nur von der Landesoberkasse abgerechnet werden" loading="lazy"></a><figcaption>Die Eintragungsnachricht. Achte auf die Warnung: Registerkosten kommen nur von der Landesoberkasse.</figcaption></figure>
</div>

Die Registergebühren wurden separat abgerechnet: **300 €** (225 € für die Eintragung, 75 € für die Bereitstellung der Registerdaten). Ich habe [die echte Rechnung für Betrug gehalten](#die-echte-rechnung-die-ich-für-betrug-hielt).

Die Eintragung hat alles Weitere ins Rollen gebracht.

## Phase 4: Anmeldungen und Verträge (Tag 35)

**Transparenzregister.** Jede GmbH muss ihre wirtschaftlich Berechtigten an noch ein weiteres Register melden, von Hand. Und das kostet natürlich noch eine weitere kleine Jahresgebühr. Der Notar soll dich darauf hinweisen. Meiner hat dabei die Augen verdreht.

**Gewerbeanmeldung.** Warum auch immer braucht auch eine GmbH eine, getrennt vom Handelsregister. Ich habe sie an Tag 39 online über das Landesportal (Service-BW) eingereicht. Fünf Monate später: keine Bestätigung, keine Gebührenrechnung. Auf Nachfrage hieß es beim Gewerbeamt, man sei „zu beschäftigt“, schriftliche Anmeldungen dauerten *Monate*, persönlich vor Ort werde aber am selben Tag bearbeitet. Ich habe es liegen lassen: Die Handelsregistereintragung deckt ab, was ich brauche, und die IHK hat meine Firma trotzdem gefunden.

**Fragebogen zur steuerlichen Erfassung.** Der erste Zwischenboss des deutschen Unternehmertums. Ich habe ihn an Tag 39 über ELSTER abgegeben, inklusive Antrag auf eine USt-IdNr. [Die komplette FsE-Anleitung](/writing/fragebogen-zur-steuerlichen-erfassung-gmbh-ausfuellen/) habe ich in einen eigenen Beitrag gepackt, Zeile für Zeile, mit allem, was danach passiert ist.

**Berufsgenossenschaft.** Sobald die GmbH Angestellte hat, muss sie sich bei ihrer Berufsgenossenschaft anmelden. Bei mir war das der Minijob: Als Mehrheitsgesellschafter und Geschäftsführer bin ich nicht automatisch versichert. Für Softwarefirmen ist das die VBG. Ein Onlineformular.

**Betriebsnummer.** Und wer dachte, das reicht, liegt falsch. Für die Lohnabrechnung braucht es noch eine weitere Nummer. Ich habe sie an Tag 40 von der Bundesagentur für Arbeit bekommen, einen Tag nach der Anmeldung bei der Berufsgenossenschaft. Die Reihenfolge muss so sein.

<div class="letters">
<figure><a href="/img/writing/gmbh/transparenzregister.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/transparenzregister.jpg" alt="Eingangsbestätigung des Transparenzregisters für die Stagetimer GmbH" loading="lazy"></a><figcaption>Transparenzregister: die Eingangsbestätigung.</figcaption></figure>
<figure><a href="/img/writing/gmbh/betriebsnummer.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/betriebsnummer.jpg" alt="Zusammenfassung des Onlineantrags auf eine Betriebsnummer bei der Bundesagentur für Arbeit" loading="lazy"></a><figcaption>Der Onlineantrag für die Betriebsnummer.</figcaption></figure>
</div>

**Geschäftsführervertrag (Tag 48).** Als Geschäftsführer bin ich Angestellter meiner eigenen Firma. Dafür braucht es einen schriftlichen Vertrag, auf Briefpapier, datiert, zwischen mir und mir selbst als Gesellschafter beschlossen, ausgedruckt und unterschrieben. Das Gehalt muss den Fremdvergleich bestehen: Würde die Firma einem Fremden so viel zahlen? Wenn nicht, zählt der Überschuss als verdeckte Gewinnausschüttung. Jede spätere Gehaltsänderung braucht eine neue schriftliche Vereinbarung, *bevor* sie gilt.

<div class="letters">
<figure><a href="/files/gmbh/gesellschafterbeschluss-anstellungsvertrag.pdf" target="_blank" rel="noopener"><img src="/img/writing/gmbh/gesellschafterbeschluss-anstellungsvertrag.jpg" alt="Gesellschafterbeschluss zur Genehmigung des Anstellungsvertrags des Geschäftsführers, mit den wichtigsten Eckpunkten: Gehalt, Dienstwagen, Zuschuss zur Krankenversicherung, Urlaub, Kündigungsfrist" loading="lazy"></a><figcaption>Der Gesellschafterbeschluss zu meinem Vertrag (PDF). <a href="/files/gmbh/gesellschafterbeschluss-anstellungsvertrag-vorlage.md" download>Als Vorlage herunterladen</a> (Markdown, Deutsch).</figcaption></figure>
</div>

**Weitere Gesellschafterbeschlüsse (Tag 78).** Kindergartenzuschuss, Erholungsbeihilfe, steuerfreie Sachbezüge: Das alles funktioniert nur, wenn ich es als Gesellschafter schriftlich beschließe. Ich habe alles in einen Sammelbeschluss gepackt. „Warum braucht alles einen Gesellschafterbeschluss?“ Darum. Jedes To-do auf der Liste zieht einen Rattenschwanz hinter sich her.

## Phase 5: Steuernummer, USt-IdNr. und Lohnabrechnung (ab Tag 54)

**Steuernummer (Tag 54).** Sie kam zwei Wochen nach dem Fragebogen (siehe [FsE-Anleitung](/writing/fragebogen-zur-steuerlichen-erfassung-gmbh-ausfuellen/)). Bis dahin geht steuerlich nichts: keine Umsatzsteuer-Voranmeldungen, keine Lohnabrechnung, kein ELSTER-Konto.

**Fehlendes Lohnsteuersignal (Tag 61).** Meine Lohnsoftware wollte die erste Lohnsteuer-Anmeldung nicht übermitteln: Beim Finanzamt war das Lohnsteuersignal nicht gesetzt. Also musste ich anrufen und mit einem echten Menschen sprechen, um das zu klären.

**ELSTER-Zugang (Tag 67).** Ich habe das ELSTER-Konto der GmbH mit der Steuernummer erweitert. Der Aktivierungscode kam per Post, eine Woche nach dem Antrag.

**Vorauszahlungsbescheide (Tag 69).** Vorauszahlungen für Körperschaft- und Gewerbesteuer, auf Basis der Gewinnschätzung aus dem Fragebogen. Vierteljährlich, ab dem dritten Quartal.

**Minijob-Anmeldung (Tag 69).** Die Minijob-Zentrale hat ihren eigenen Willkommensbrief geschickt, mit ihrem eigenen Aktivierungscode, per Post.

**Die Saga um die USt-IdNr. (Tag 89–99).** Die USt-IdNr. hatte ich an Tag 39 im Fragebogen beantragt. Sieben Wochen später: nichts. Das Onlineformular des Bundeszentralamts für Steuern (BZSt), das USt-IdNrn. vergeben kann, meldete „Vergabe nicht möglich“. Also habe ich (schon wieder) beim Finanzamt angerufen: Das Umsatzsteuersignal war nie gesetzt worden. Das hieß auch, dass die Umsatzsteuer-Voranmeldungen, die ich für Januar bis April abgegeben hatte, nie verarbeitet worden waren. Der Sachbearbeiter hat es während des zehnminütigen Telefonats gesetzt. Das BZSt hat die USt-IdNr. drei Tage später vergeben, der Brief kam eine Woche danach.

**Die Lektion: anrufen.** Das Finanzamt sagt dir nicht, wenn etwas fehlt. Wenn heute etwas überfällig ist, greife ich zum Telefon. Fühlt sich sehr nach 1995 an. Funktioniert.

**Die Lücke bei der USt-IdNr. hatte Folgen.** Rechnungen an B2B-Kunden in der EU brauchen eine USt-IdNr. (Reverse Charge), und von Januar bis Juni hatte die GmbH keine. Mit dem Segen meines Steuerberaters („der hässliche, aber notwendige Mittelweg“) habe ich die alte USt-IdNr. des Einzelunternehmens als Brücke genutzt. Dann folgte der Papierkram:

- Tag 103: Das Finanzamt fragt, warum ich innergemeinschaftliche B2B-Umsätze ohne USt-IdNr. gemeldet habe.
- Tag 104: Das BZSt fordert die Zusammenfassende Meldung für das erste Quartal und droht mit 250 € Zwangsgeld. Zwölf Tage, nachdem das BZSt selbst meine USt-IdNr. vergeben hatte.

Ich habe Q1 und Q2 innerhalb von zehn Tagen abgegeben, ohne Zwangsgeld. Wenn du B2B-Kunden in der EU hast, fang an Tag eins mit der Jagd nach der USt-IdNr. an.

<div class="letters">
<figure><a href="/img/writing/gmbh/steuernummer.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/steuernummer.jpg" alt="Brief mit der Steuernummer, gültig für Körperschaftsteuer, Gewerbesteuermessbetrag, Bilanz und Kapitalertragsteuer" loading="lazy"></a><figcaption>Tag 54: die Steuernummer. Keine Lohnsteuer, keine Umsatzsteuer auf der Liste.</figcaption></figure>
<figure><a href="/img/writing/gmbh/lohnsteuer.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/lohnsteuer.jpg" alt="Brief: Die Steuernummer gilt jetzt auch für die Lohnsteuer" loading="lazy"></a><figcaption>Tag 64: Lohnsteuer ergänzt, nach einem Anruf.</figcaption></figure>
<figure><a href="/img/writing/gmbh/ust-idnr.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/ust-idnr.jpg" alt="Mitteilung des BZSt über die USt-IdNr." loading="lazy"></a><figcaption>Tag 99: endlich die USt-IdNr.</figcaption></figure>
<figure><a href="/img/writing/gmbh/zm-zwangsgeld.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/zm-zwangsgeld.jpg" alt="Aufforderung des BZSt zur Abgabe der Zusammenfassenden Meldung für Q1 2026, mit Androhung von 250 € Zwangsgeld" loading="lazy"></a><figcaption>Tag 104: Zusammenfassende Meldung abgeben oder 250 € zahlen.</figcaption></figure>
</div>

Alle Briefe vom Finanzamt, und wie du ein fehlendes Signal früh erkennst, stehen in der [FsE-Anleitung](/writing/fragebogen-zur-steuerlichen-erfassung-gmbh-ausfuellen/#was-danach-passierte).

**Antrag auf Buchwertfortführung (Tag 217).** Die Einbringung ist nur steuerneutral, wenn die GmbH die Fortführung der Buchwerte *beantragt* ([§20 Abs. 2 UmwStG](https://www.gesetze-im-internet.de/umwstg_2006/__20.html)). Der Antrag geht an das Finanzamt der GmbH, spätestens mit der ersten Steuerbilanz der GmbH. Verpasst du ihn, werden die stillen Reserven besteuert. Niemand erinnert dich daran. Ich habe ihn selbst als formlose Nachricht über ELSTER geschickt. Die Holding braucht dasselbe für ihre Einbringung nach §21.

<div class="letters">
<figure><a href="/img/writing/gmbh/antrag-buchwertfortfuehrung.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/antrag-buchwertfortfuehrung.jpg" alt="ELSTER-Übertragungsprotokoll einer Nachricht an das Finanzamt: Antrag auf Fortführung der Buchwerte nach §20 Abs. 2 S. 2 UmwStG für das eingebrachte Einzelunternehmen" loading="lazy"></a><figcaption>Der Antrag auf Buchwertfortführung, per ELSTER verschickt. <a href="/files/gmbh/antrag-buchwertfortfuehrung-vorlage.md" download>Als Vorlage herunterladen</a> (Markdown, Deutsch).</figcaption></figure>
</div>

## Die Holding

Die zweite GmbH, gegründet, sobald die operative Gesellschaft im Register stand.

**Wozu der Aufwand?** Dividenden der Stagetimer GmbH an eine Holding-GmbH sind zu 95 % steuerfrei (§8b KStG). An mich persönlich ausgezahlt, werden sie sofort besteuert. Die Holding kann das Geld behalten und in das nächste Projekt investieren, und ich zahle erst persönlich Steuern, wenn ich es entnehme. Zukünftige Projekte kommen auch dorthin, nicht in die Stagetimer GmbH.

Der Aufbau ist bewusst minimal:

- Derselbe Notar. Der Termin lief „wie geschmiert“: Für die Einbringung von Anteilen braucht es keine Schlussbilanz.
- 25.000 € Stammkapital, zur Hälfte eingezahlt. Das Geld muss *vor* der Eintragung auf dem Konto sein. Ich habe es vergessen, bis der Notar ein paar Wochen später nachgefragt hat.
- Die Anteile an der Stagetimer GmbH gehen als Agio hinein, zu Buchwerten nach [§21 UmwStG](https://www.gesetze-im-internet.de/umwstg_2006/__21.html).
- Angemeldet an einer Familienadresse, Bankkonto bei FYRST, keine Buchhaltungssoftware.
- Kein Gewerbeschein, keine Lohnabrechnung, keine USt-IdNr. nötig, diesmal also viel einfacher.

## Fake-Rechnungen

Sobald die Firma im Handelsregister steht, sind Name und Adresse öffentlich. Innerhalb weniger Tage kommen Briefe, die wie amtliche Rechnungen aussehen: Wappen, Paragrafen, ein Aktenzeichen, eine kurze Frist. Das ist Betrug, oder es sind „Angebote“ für wertlose Verzeichniseinträge, die wie eine Gebühr formuliert sind.

Das Gericht warnt davor. Meiner Eintragungsnachricht lag ein Blatt mit dem Titel **„Achtung! Betrügerische Rechnungen“** bei: Registerkosten kommen *nur* von der Landeskasse, in Baden-Württemberg von der Landesoberkasse.

### Beispiel für eine Fake-Rechnung

Sie kam für meine Holding, datiert auf den Tag ihrer Eintragung. Betrüger lesen neue Eintragungen automatisch aus.

<div class="letters">
<figure><a href="/img/writing/gmbh/fake-amtsgericht-invoice.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/fake-amtsgericht-invoice.jpg" alt="Eine gefälschte „Amtsgericht“-Rechnung über 1.909,10 € mit spanischer IBAN (vertrauliche Angaben geschwärzt)" loading="lazy"></a><figcaption>Die Fälschung: eine „Amtsgericht“-Rechnung über 1.909,10 €</figcaption></figure>
</div>

Woran man sie erkennt:

- **Falsches Wappen.** Nordrhein-Westfalen, aber meine Firma ist in Stuttgart eingetragen, in Baden-Württemberg.
- **Falscher Rechnungssteller.** Eine „Zentrale Zahlstelle, Frankfurt am Main“, nicht die Landesoberkasse.
- **Eine spanische IBAN**, zahlbar an ein „Unternehmensclusterregister“. Behörden veröffentlichen ihre Bankverbindung. Prüf die, nicht das Logo.
- **Zahlung innerhalb von 3 Werktagen.** Echte Rechnungen geben zwei Wochen oder mehr.
- **1.909,10 €** für eine „Handelsregisterbekanntmachung“. Die echte Eintragung hat 300 € gekostet, Veröffentlichung inklusive.
- **Unterschrieben von einem „Richter“**, mit Gesetzeszitaten als Deko. Richter verschicken keine Rechnungen.

### Die echte Rechnung, die ich für Betrug hielt

Ich habe die Warnung des Gerichts etwas zu ernst genommen.

An Tag 34 hat die Landesoberkasse die echte Rechnung geschickt: 300 €, fällig in zwei Wochen. Ich habe sie unter „Betrug“ abgelegt. Sechs Wochen später kam die Mahnung, und meine erste Reaktion war: „Das kommt mir komisch vor.“

Diesmal habe ich Absenderadresse und Domain mit offiziellen Quellen abgeglichen und das Original wieder ausgegraben. Gleiches Aktenzeichen, gleicher Betrag. Die echte.

<div class="letters">
<figure><a href="/img/writing/gmbh/kostenrechnung-300.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/kostenrechnung-300.jpg" alt="Echte Kostenrechnung der Landesoberkasse Baden-Württemberg über 300 €: 225 € für die Eintragung und 75 € für Registerdaten" loading="lazy"></a><figcaption>Die echte Rechnung: 300 € von der Landesoberkasse.</figcaption></figure>
<figure><a href="/img/writing/gmbh/mahnung.jpg" target="_blank" rel="noopener"><img src="/img/writing/gmbh/mahnung.jpg" alt="Mahnung der Landesoberkasse Baden-Württemberg über 300 €" loading="lazy"></a><figcaption>Sechs Wochen später: die Mahnung.</figcaption></figure>
</div>

Am nächsten Tag bezahlt, ohne Mahngebühr.

Bei einer Gründung schicken dir nur diese Stellen Rechnungen: der Notar, die Landeskasse, das Finanzamt, die Stadt (Gewerbesteuer), die IHK, die Berufsgenossenschaft und der Beitragsservice. Alles andere prüfe ich, bevor ich zahle. Und was ich nicht zuordnen kann, kommt auf einen Stapel, nicht in den Müll.

## Stolperfallen beim Wechsel

Dinge, die mich jeweils einen Nachmittag gekostet haben.

- **Das Einzelunternehmen abwickeln.** Die Gemeinde des Einzelunternehmens hat für 2026 weiter Gewerbesteuer-Vorauszahlungen verlangt. Ich habe ihr mitgeteilt, dass es das Geschäft nicht mehr gibt, daraufhin wurden sie auf null gesetzt und das Gezahlte erstattet. Dasselbe bei meinen privaten Einkommensteuer-Vorauszahlungen, die noch auf dem alten Gewinn beruhten. Außerdem tröpfeln weiter kleine Gebühren auf das alte Konto. Die habe ich über das Verrechnungskonto Gesellschafter gebucht und aus den Umsatzsteuer-Voranmeldungen der GmbH herausgehalten.
- **Januar-Rechnungen richtig behandeln.** Lieferantenrechnungen aus 2025, die im Januar bezahlt wurden, sind Verbindlichkeiten, die die GmbH übernommen hat, keine neuen Einkäufe. Buchst du sie als Einkäufe, ziehst du die Vorsteuer doppelt.
- **Die Anteile 7 Jahre halten.** Beide Einbringungen (§20 und §21 UmwStG) haben eine Sperrfrist von 7 Jahren. Jedes Jahr muss ich dem Finanzamt nachweisen, dass mir die Anteile noch gehören. Sie könnten es nachschauen, verlangen aber eine ausdrückliche Mitteilung.
- **Alle Verträge umziehen.** Bei etwa 17 Diensten brauchte es eine neue Firma, Adresse, USt-IdNr. oder Bankverbindung. Bankkonten und Versicherungen bleiben beim Einzelunternehmen, also prüf, was die GmbH abdeckt. Apple will für einen Entwickler-Account als Firma eine D-U-N-S-Nummer. Und [§35a GmbHG](https://www.gesetze-im-internet.de/gmbhg/__35a.html) verlangt eine Signatur wie diese auf jeder E-Mail und jedem Brief:

<svg viewBox="0 0 580 64" width="580" class="block my-6 max-w-full" role="img" aria-label="Beispiel für eine E-Mail-Signatur: Mustermann GmbH, Musterstraße 1, 12345 Musterstadt, Deutschland. Handelsregister: Amtsgericht Musterstadt HRB 123456. Geschäftsführer: Max Mustermann">
  <rect x="0.75" y="0.75" width="578.5" height="62.5" rx="6" fill="none" stroke="#d4d4d4" stroke-width="1.5"/>
  <g fill="currentColor" font-family="inherit" font-size="13">
    <text x="18" y="27">Mustermann GmbH · Musterstraße 1, 12345 Musterstadt, Deutschland</text>
    <text x="18" y="47" fill="#737373">Handelsregister: Amtsgericht Musterstadt HRB 123456 · Geschäftsführer: Max Mustermann</text>
  </g>
</svg>

## Hat es sich gelohnt?

Ja, bei über 200.000 € Umsatz. Der Wechsel bei den 100.000 €, die ich 2023 empfohlen habe, wäre auch in Ordnung gewesen. Deutlich früher nicht: Solange das Geschäft klein ist, ist ein Einzelunternehmen günstiger und lässt mehr Zeit fürs Produkt.

Die Kunden haben nur einen neuen Namen auf ihren Rechnungen bemerkt. Kein einzelner Schritt war schwer: Der Notar lief glatt, das Gericht war schnell, und beide Probleme mit dem Finanzamt hat ein zehnminütiges Telefonat gelöst. Die Arbeit liegt in der Menge kleiner Aufgaben, von denen viele auf einen Brief warten, verteilt über ein halbes Jahr. Ich habe ein paar Stunden pro Woche darin gesteckt.

Einige Schritte laufen noch, etwa der Antrag auf Buchwertfortführung der Holding und der erste Jahresabschluss. Ich aktualisiere diesen Beitrag, sobald sie erledigt sind.

[^69ao]: Genau genommen nur, wenn der Geschäftsführer seine Pflichten vorsätzlich oder grob fahrlässig verletzt ([§69 AO](https://www.gesetze-im-internet.de/ao_1977/__69.html)). Zum Beispiel, indem er andere Rechnungen bezahlt, während das Finanzamt wartet, oder die Lohnsteuer nicht abführt.

[^1]: Eine Klage funktioniert über Schadensersatz. Wenn dein Schaden 8 $ beträgt, schickt dich der Anwalt mit einem mitleidigen Lächeln wieder nach Hause.
