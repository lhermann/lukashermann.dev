---
title: "#25 mit Lukas Hermann von stagetimer.io"
date: "2023-06-01"
host: "Happy Bootstrapping Podcast"
language: "de"
source: "https://happy-bootstrapping.podigee.io/25-mit-lukas-hermann-von-stagetimerio"
---

[00:00]

**Andreas:** Hallo und herzlich willkommen zur Folge 25 von Happy Bootstrapping. In der aktuellen Folge 25 habe ich mit Lukas Hermann von stagetimer.io gesprochen. Lukas hat bei einem Studio-Besuch bei einem Kumpel gesehen, dass er die ganze Zeit zwischen Aufnahmestudio und Studio selbst hin und her rennt, um eine Art Aufnahme-Timer zu steuern. Und dann kam Lukas die Idee: hey, da könnte man ja eine Software draus machen. Gestartet hat er dann witzigerweise über einen Reddit-Post und hat mit dem Reddit-Feedback das Produkt gebaut, welches jetzt beispielsweise im französischen Premierministerium eingesetzt wird oder auch auf einem eSport-Event, den Lukas live besucht hat, um mal zu sehen wie sein Produkt in der Praxis überhaupt genutzt wird. Ja, wirklich eine coole Geschichte und ich bin gespannt wie es für ihn weitergeht. Viel Spaß mit der Folge, es geht jetzt direkt los — ab geht's!

**Andreas:** Hi Lukas!

**Lukas:** Hey, hey, grüß dich, Andreas.

**Andreas:** Wer bist du und was machst du so?

**Lukas:** Ich bin Lukas Hermann, ich bin aus der Region Stuttgart, nicht weit, und ich bastle gerade mein eigenes Unternehmen — ein Produkt, das heißt Stagetimer.

**Andreas:** Und Stagetimer — was kann ich damit machen?

**Lukas:** Stagetimer, das ist wenn du so in dieser Event-Produktion, Videoproduktions-Schiene unterwegs bist — hast du es ganz oft, dass du Leute hast, die auf der Bühne stehen oder vor der Kamera stehen, die brauchen Zeit-Infos. Nicht wahr: so viel Zeit hast du noch, 10 Sekunden bis zum Ende, oder da kommt jetzt ein Video das ist 30 Sekunden lang, oder nächstes Segment ist dann und dann. Und was wir bauen ist eine Software, die dann der Event-Produzent oder der Videoschnitt-Mensch vor sich hat, quasi einstellen kann was die Segmente sind und wie lange die brauchen, und das dann auf einen größeren Bildschirm werfen kann, der dann vor dem Talent steht.

[02:00]

**Lukas:** Und da kann dann der Talent quasi die Information von A nach B — von dem Kontrollraum auf die Live-Bühne — relativ einfach bekommen.

**Andreas:** Ja, okay, verrückt. Also ich habe jetzt auch schon diverse größere Veranstaltungen von der Bühne erlebt, da hatte ich sowas noch nicht gesehen, aber es ist natürlich total sinnvoll, jetzt wo du das sagst. Okay, verstanden. Und wie lange machst du das schon?

**Lukas:** Ich glaube die einfachste ist, wenn du die TED-Events schon mal gesehen hast — die haben immer so einen roten Zeitanzeiger vor sich. Und im Prinzip ist es genau das, aber die nutzen jetzt nicht Stagetimer.

**Andreas:** Ja, noch nicht.

**Lukas:** Ich weiß nicht, es kann sein, dass ein oder das andere Event schon nutzt.

**Andreas:** Okay, cool. Und wie alt ist Stagetimer, wie lange machst du das schon?

**Lukas:** Zweieinhalb Jahre jetzt. Vor zweieinhalb Jahren habe ich angefangen, und dann hat noch mal sechs Monate gedauert, bis die erste zahlbare Version dann draußen war, mit Pro-Features. Also zweieinhalb Jahre jetzt mit Payments, und dann ungefähr ein Jahr, bisschen länger als ein Jahr, Fulltime.

**Andreas:** Ah okay, machst du es auch schon Fulltime? Das wäre jetzt meine nächste Frage gewesen.

**Lukas:** Ja, sauber.

**Andreas:** Das ging verdammt schnell, cool. Das heißt — ja, wie viele Kunden hast du dann aktuell so?

**Lukas:** Wir haben momentan — ich habe erst letztens die Statistiken gemacht — ungefähr so 500 aktive Kunden und dann so 1.500 über die ganze Lebenszeit der Firma.

**Andreas:** Ja, sauber, echt cool. Ja, das ist ja in der Zeit auch schon beeindruckend. Bevor wir ein bisschen mehr zum Produkt kommen: jetzt ist ja auch schon eine spannende Produktidee an sich — wie bist du auf die Idee gekommen?

**Lukas:** Ja, ich war bei einem Freund in seinem Videostudio — der quasi einen Raum hat, wo er dann die Aufnahmen macht mit Kameras, und in einem anderen Raum sitzt er und hat sein Mischpult und seine Knöpfe und Drücker. Und er — also vor der Aufnahme — ist quasi kurz in den anderen Raum reingerannt, hat ein Knopf gedrückt, kam wieder zurück. Und ich war da, er hatte mich eingeladen, ich habe

[04:01]

dort gearbeitet, coworking-mäßig einfach mit dem Raum. Und ich dachte mir: Mensch, da muss es doch eine bessere Lösung für das Problem geben. Und habe dann online kurz gesucht, weil in meinem Kopf — nicht wahr — irgendjemand hat es schon mal programmiert, dass ich einen Countdown-Timer hier auf meinem Bildschirm starten kann und dann drüben im anderen Raum startet der auch, weil es synchronisiert ist. Habe gesucht, 15 Minuten später nichts gefunden, immer noch nichts Richtiges gefunden. Countdown-Timer, klar, aber so eine Synchronisation — da dachte ich mir, das baue ich doch in einem Wochenende. Da habe ich mich an dem Wochenende hingesetzt, kurz gebaut, online gestellt. Und dann kam dieser Reddit-Post — dachte mir, ja gut, das weiß ja niemand davon, jetzt stelle ich das mal bei Reddit rein und guck mal ob Leute das interessant und nützlich finden, vielleicht. Ich mein, für Frontpage Reddit natürlich relativ — da ist nicht so viel Verkehr, aber genug Antworten, wo ich mir gedacht habe: das ist interessant, da könnte was dran sein.

**Andreas:** Sehr verrückt. Aber das heißt, du bist selber nicht der Musiker gewesen, der jetzt in dem Raum war und den Aufnahme-Leiter durchs Studio hat Rennen sehen, sondern du warst einfach nur so da, wie Coworking-Space oder sowas?

**Lukas:** Ja, also es ist kein Coworking-Space, aber er hat mich einfach eingeladen da zu arbeiten. Und ja, ich bin — ich bin überhaupt nicht aus dieser Industrie, ich bin ein langweiliger Entwickler und habe auch als Entwickler gearbeitet, Frontend, und dann kam ich völlig von der Seite in diese rein, die ich jetzt sehr gut kennengelernt habe.

**Andreas:** Okay, und dann hast du vorher schon Softwareentwicklung gelernt — das heißt, du hast es nicht — wenn du das in dem Wochenende gebaut hast, logischerweise hast du schon eine Weile vorher entwickelt, dann angestellt wahrscheinlich?

**Lukas:** Ja, ja, genau, genau. Ich war zunächst angestellt, in einem Startup, und klar, schon fast 10 Jahre Erfahrung gehabt. Ich war jung angefangen mit HTML und kleinen Sachen und dann später professionell. Ich habe auch Softwareentwicklung studiert.

**Andreas:** Okay, und dann

[06:01]

sehr Wahnsinn. Und wie sieht dann heute dein Firmen-Setup aus, ist das eine GmbH?

**Lukas:** Ich habe momentan noch ein Einzelunternehmen. Ich hatte mal eine GmbH schon, in einer UG, in der Vergangenheit, hab dann auch gemerkt, dass es steuerlich einfach mehr Arbeit ist, mehr Aufwand. Und habe jetzt ein Einzelunternehmen gegründet. Mittlerweile kommen wir aber in die Region, wo uns der Steuerberater empfohlen hat, eine GmbH zu gründen. Habe ich auch schon von anderen gehört, was andere so machen. Und es gibt interessante Modelle mit Holding Companies und mehreren Ebenen von Firmen. Da muss ich mich noch entscheiden, was wir da machen. Aber die Firma sitzt dann aktuell in Deutschland, in Stuttgart.

**Andreas:** Genau, ne, bei deinen Eltern momentan, weil ihr unterwegs wart?

**Lukas:** Ach, ja, bei meinen Eltern — da kriegen die die ganze Fake-Gewerbepost sozusagen.

**Andreas:** Ja, ja, genau. Ja, cool. Und machst du das dann heute alleine?

**Lukas:** So — meine Frau hilft mir. Meine Frau macht Marketing, Customer Support, und ich mache so den ganzen Rest, nicht wahr — Entwicklung, Produkt — und ja.

**Andreas:** Und das heißt, ihr macht's zu zweit, aber ihr macht jetzt beide Vollzeit?

**Lukas:** Genau, ist ja auch schon ein cooler Erfolg.

**Andreas:** Wie lange dann schon Vollzeit, ungefähr?

**Lukas:** Ein Jahr so, plus/minus da, bisschen länger als ein Jahr.

**Andreas:** Ja, und dann auch zusammen ausgestiegen aus dem — ja, vorher Angestellten-Job?

**Lukas:** Genau. Ich war bei einem Startup in der Schweiz angestellt zu der Zeit — die haben quasi dieses Produkt, an dem ich gearbeitet habe, einstellen müssen, weil einfach der Markt das nicht hergegeben hat. Und dann habe ich halt überlegt: okay, nehme ich diesen Monat, den sie mir extra bezahlt haben, um einen neuen Job zu finden — nehme ich den jetzt um einen neuen Job zu finden, oder mache ich Volltime mein eigenes Projekt? Das hat ja schon ein bisschen Geld abgeworfen. Und meine Frau hat mich dann motiviert, sagt:

[08:02]

„Hey, wenn du dich jetzt noch mal anstellen lässt, dann bist du eh noch mal mindestens zwei Jahre angestellt — also mach doch jetzt den Sprung." Habe ich den Sprung gemacht. Und meine Frau hat dann — paar Monate später — ich habe ein paar Monate später — da hat sie als Lehrerin gearbeitet, Sprachlehrerin, und sie wollte das dann nicht mehr und war da frustriert mit der Arbeit. Da dachte ich: hey, wenn du Lust hast, was Neues zu lernen, mach doch Marketing, und dann machen wir das zusammen.

**Andreas:** Und hast du dann Startkapital gehabt von deinem Job vorher, oder hat es so mit dem schleichenden Übergang dann in dem einen Monat funktioniert?

**Lukas:** Ja, es hat funktioniert, weil als SaaS-Company hast du ja relativ wenig Kosten, wenn du deine Zeit reinsteckst. Bis heute — nicht wahr — als SaaS ist ganz typisch, dass man über 80, sogar fast 90% Marge hat auf seinen Preis.

**Andreas:** Von daher — funktioniert das echt beeindruckend. Ja, ich habe gesehen, es gibt drei verschiedene Preismodelle beziehungsweise auch Produkttiefen — kannst du mal ein bisschen... Und für alle, die es dann ausprobieren wollen: die können einfach auf die Seite gehen — ich habe gesehen, im Footer gibt's so einen Test-Timer und auch so ein Controller-Studio. Was genau kann ich denn alles damit machen, und wer sind dann die Zielgruppe?

**Lukas:** Ja, genau. Jeder der zuhört, kann es direkt ausprobieren — einfach mal auf die Seite stagetimer.io, „stage" wie die Bühne und dann „timer" wie Timer. Und da gibt's einen Button direkt, ganz groß, der heißt „Create your Timer". Klickst du da drauf, dann ist es ein Freemium-Modell — das heißt, man kann es einfach ausprobieren, sogar ohne sich anzumelden, einfach mal gucken, was es macht, wie es aussieht. Es ist ein bisschen überwältigend, wenn man das zum ersten Mal sieht, weil du ganz viele Knöpfe und so da siehst und denkst: Countdown müsste doch nicht so kompliziert sein. Aber es ist so gewachsen. Und wir hatten so den Gedanken — ja, wie preisen wir das? Pricing ist immer die große Frage bei — ich meine — jeder Firma, aber bei SaaS ist es

[10:02]

nicht einfach, weil du einfach nicht sagen kannst: ich produziere und es kostet mich so viel, und dann mache ich 10%, 20% oben drauf und dann verkaufe ich es. Sondern du musst sagen: ja, eigentlich kostet es mich 5 € im Monat, das Ding laufen zu lassen — zahle ich den also? Und dann musst du halt abschätzen, was ist es der Person wert. Dann haben wir angefangen mit so 7 € — so das typische Bootstrapper, Indie-Hacker: was kostet mein Tool, machen wir mal 7, 8 € — wird schon passen. Mittlerweile sind wir bei 19 € für das niedrigste Level. Und wir hatten den Fall, dass dann Leute das gekauft haben, der erste Monat ging alles gut, und dann nach ein paar Monaten hatten wir super hohe Churn-Rates — also Churn bedeutet, nicht wahr, wenn jemand dieses Abo kündigt. Und wir hatten schon bei 20% — da haben wir die angeschrieben, haben wir eine E-Mail verfasst: hey, wir haben gesehen, du hast dein Abo bei Stagetimer gekündigt — was ist passiert, ist was schiefgegangen, ist was kaputt? Wir geben dir auch gerne das Geld zurück, wenn es nicht funktioniert hat. Und die haben echt fast alle geantwortet und haben uns zurückgeschrieben: „Ja, nee, alles super, hat wunderbar funktioniert während unserer Show. Aber wir haben kein Event für die nächsten drei Monate, da haben wir es gekündigt." Da haben wir gelernt: ah, okay, unsere Industrie ist sehr saisonal — season, nicht wahr. Wir haben wirklich hohe Peaks: September ist der Wahnsinnsmonat, da geht's richtig ab. Und dann gibt's halt andere Monate wie so klassisch Dezember, wo fast gar nichts los ist. Und dann haben wir gedacht: hey, wenn Leute das für ein Event verwenden, warum machen wir nicht ein Paket, das dann für 10 Tage gültig ist? Ein bisschen länger als eine Woche — da kann man schön vorbereiten, vor allem wenn es so vom Wochenende zum Wochenende ist, kann man schön vorbereiten und kann es dann laufen lassen. Haben das gemacht — so eine 10-Tageslizenz, die 1 € billiger war. Und

[12:02]

dann festgestellt, dass manche Leute diese 10-Tageslizenz mehrmals pro Monat gekauft haben. Warum kaufen die sich mehrmals pro Monat — gibt's ein monatliches Abo, nicht wahr? Also wieder angefragt: hey, ich habe gesehen, schon zum dritten Mal jetzt diese Einmal-Lizenz gekauft — meinte so: ja, das ist super, diese Einmal-Lizenz, die lieb ich total, weil ich habe da einen Expense-Report, nicht wahr, den ich zu meinem Kunden gebe, und der zahlt mich, und ich gebe dem einfach eine Liste, was mich das gekostet hat, und ich nehme einfach eure Kosten und setze sie da drauf. Und bei 10 € oder 20 € da drückt gar niemand — weißt du, das juckt gar niemand in dieser Industrie. Da haben wir gesagt: ja, perfekt. Und deswegen haben wir dann gelernt: dieses Einmal-Paket passt richtig gut in unser Pricing rein.

**Andreas:** Okay, sehr spannend. Und wer sind dann die Kunden — sind es dann Event-On-site-Events, oder ist es auch viel Produktion, Film, Fernsehen, eher so Broadcasting?

**Lukas:** Broadcasting nicht so — also Fernsehen wäre Broadcasting, mehr so Livestream-Events. Klassisches — also ganz praxisnahes Beispiel: letzte Woche war ich bei einer Produktion von einer eSports-Firma, so eine Spielefirma, die quasi ihr eigenes eSports-Turnier hat. Und die haben Stagetimer verwendet — die haben uns eingeladen, dass wir mal gucken, wie die das so verwenden. Und die Produktionsfirma hat im Prinzip dann Stagetimer direkt angewendet. Sonst sind auch Konferenzen — also ganz viel Kongresse, Konferenzen. Wir haben — manche benutzen es im Unterrichtsraum, wir hatten einen Nachtclub, der es verwendet hat, wir hatten auch schon eine Gokart-Racing-Bar, die es verwendet hat. Also ganz kurios. Aber so der Standardanwendungsfall wäre die Event-Produktion, Video-Produktion.

**Andreas:** Ja. Und was war das für ein eSports-Event, wie groß war das?

**Lukas:** Es war Valorant — falls das den Zuhörern

[14:03]

was sagt. So ähnlich wie Counter-Strike, so eine neuere Variante. Und ich glaube, es war relativ groß — also die hatten Streams, die hatten eine türkische, spanische und französische Übersetzung mit dabei, und es waren Zuschauer im Raum, und die haben dann gelivestreamet. Ich weiß nicht genau wie viele, habe ich nicht so genau hingeguckt, weil ich mir eh die Produktionsabläufe angeguckt hab. Aber wir sprechen schon davon: es kostet schon mehrere Millionen, sowas aufzusetzen.

**Andreas:** Ja, und die haben dann wie viele Stagetimer-Subscriptions oder Seats gehabt?

**Lukas:** Eine Event-Lizenz.

**Andreas:** Eine — okay.

**Lukas:** Genau, eine, weil die im Prinzip brauchen die nur eine. Das ist ein bisschen ein Problem bei unserem Pricing auch, weil wir einfach noch gucken müssen, wo kriegen wir den Value raus. Aber momentan ist es so ein richtiger No-brainer-Preis, und die sagen ja: das schnapp ich mir einfach für meine Produktion, ist super.

**Andreas:** Das heißt, sie haben eine Bühne gehabt und haben damit die Bühne gesteuert — so die Abläufe auf der Bühne?

**Lukas:** Genau. Bei uns ist es so — wir sagen, du kannst ja einen Raum einrichten, du kannst den einfach mit mehreren Endgeräten teilen. Das heißt, die hatten dann — die hatten so eine Analyse-Bühne, ich war da, wo die Leute nach dem Spiel dann geredet haben, wie alles funktioniert. Da hatten sie die Hauptbühne, wo die Leute gespielt haben, und da hatten sie natürlich auch noch den Kontrollraum, und da hatten sie noch Pausenräume und verschiedene Aufwärmräume und so. Und die Casts — und die hatten alle im Prinzip einen Bildschirm vor sich, wo dann der Stage-Timer angezeigt wurde.

**Andreas:** Das heißt, die haben eine Stagetimer-Subscription, um eben zu steuern, was auf welchem Timer angezeigt wird — oder ist es dann immer der gleiche?

**Lukas:** Das ist immer der gleiche. Du hast einen Timer, der ist quasi sequenziell — wenn einer läuft, wenn der nächste läuft, dann ist der vorherige weg. Und der wird allen gleichzeitig gezeigt. Und da spielst du nur die Zeit ein als Regisseur — oder was kann ich dann noch alles machen?

**Lukas:** Genau, also du spielst die Zeit ein als — entweder Countdown oder einfach als Uhrzeit anzeigen — und du hast einen quasi Segment-Titel. Und

[16:05]

du kannst auch eine Nachricht anzeigen. Kannst sagen: irgendwie, „Mikrofon zu leise", nicht wahr, oder „unerwartetes Video", oder „der und der hat Geburtstag". Also kannst Sachen anzeigen. Nicht zu viel, aber — relativ stark genutzt, diese Message-Funktion.

**Andreas:** Okay. Was — hast du dann — ist das ja auch cool — war das erste Mal, dass du dann dein Produkt live im Einsatz vor Ort gesehen hast in der größten Ordnung?

**Lukas:** Ja, live. Also wir kriegen hin und wieder Bilder von Leuten. Also ganz am Anfang hat jemand gesagt: „Oh, wir benutzen gerade Stagetimer für den Premierminister von Frankreich." Sehr verrückt. Okay, das war schon cool. Oder hat mal jemand ein Bild geschickt: „Ah, hier, wir waren auf dem AI Summit in Amsterdam" und hat ein Bild gemacht von der Bühne und da ist Stagetimer angezeigt — das ist natürlich super geil.

**Andreas:** So, lass mal fragen — was hast du dann vor Ort übers Produkt gelernt?

**Lukas:** Vor allem, wie es verwendet wird. Weil — wie gesagt, ich bin Industrie-Outsider. Und du denkst ja halt, du hörst, was die Leute wollen, du hörst die E-Mails an, du versuchst das Beste umzusetzen. Und dann — wenn du aber jemanden siehst, der das tatsächlich verwendet, da lernst du so viele Details. So: ah, okay, das macht natürlich Sinn, und so verwendet er das, und hier — wenn ich das kleine Ding noch machen würde, dann wäre das natürlich viel hilfreicher für ihn. Ein ganz praktisches Beispiel wäre, dass die gerne einfach Farben verwenden — ich hatte das gar nicht so auf dem Schirm. Aber die haben im Prinzip ihre Show, und dann highlighten die Sachen in der Show, die sagen: oh, das ist speziell für Kamera, oder das ist speziell für Ton, oder das hier ist besonders wichtig. Und deswegen machen sie es rot, oder verwenden verschiedene Farben, um visuell für sich selber zu wissen: was ist wichtig, was ist wo, wie was gruppiert ist. Ich dachte mir: ja, wir haben nur Weiß, nicht wahr. Und wenn wir einfach den Leuten erlauben würden, hier die Segmente verschieden einzufärben, zu highlighten — ist relativ einfach zu

[18:06]

machen und wäre richtig viel Bonus. Auf der anderen Seite siehst du natürlich auch, wo du denkst: oh, ich hätte nie erwartet, dass jemand das so benutzt. Nicht wahr — ich habe so ein Notizfeld hinzugefügt, wo ich selber Notizen machen kann. Hat jemand das benutzt und hat da richtig einfach seine komplette Produktionsnotizen reingeschrieben — also hunderte von Zeilen pro Element. Dafür ist es gar nicht ausgelegt, aber ich sehe, dass er das so verwendet. Das macht Sinn, es gibt Bedarf sozusagen.

**Andreas:** Genau, genau. Sehr spannend. Kannst du ja eine Produktionssteuerungssoftware rausmachen dann vom Timer — also ist ja abgefahren.

**Lukas:** Ja, theoretisch schon.

**Andreas:** Komm mal kurz bisschen zurück zu deinem initialen Start — du hast den Reddit-Beitrag erwähnt, den verlinke ich auf jeden Fall auch. War das so dein erster Wurf? Ich finde es eine coole Geschichte — also, du hast überlegt: das könnte man brauchen, und dann: ja, schreibe ich das mal auf Reddit und guck, wer es noch brauchen kann. Hast du da eine Reddit-Historie? Du bist jetzt so der Erste, der sein Ding in public über Reddit macht — deswegen interessiert mich das jetzt schon ein bisschen.

**Lukas:** Ich bin überhaupt — also ich habe noch nie was auf Reddit gepostet zuvor, noch nie. Ich habe mich sogar — ich habe das irgendwo anders posten wollen, die hatten irgend so ein Reputation-Guard, und da konnte ich nicht, weil ich noch keine Reputation hatte. Da muss ich dann da posten. Überhaupt den Subreddit zu finden — das hat mich irgendwie drei Stunden gebraucht, bis ich überhaupt gefunden hab, wo die Leute, die ich jetzt ansprechen will, überhaupt abhängen. Ist gar nicht so einfach — weißt du, Frontpage ist einfach auf, aber dann diese Subkulturen zu finden, die diesen speziellen Bereich — gar nicht so ohne. Und hast du dann für Videoproduktion gefunden, oder für SaaS wird's ja nicht gewesen sein, da sind die Leute nicht drin, die das Problem haben?

**Lukas:** Nee, nee. Ich habe nach Videoproduktion gesucht — und eine Videoproduktion-Community gibt's natürlich nicht. Ich habe dann Commercial AV gefunden, aber das ist schon ein bisschen mehr in der Broadcasting-Ebene, also mehr so TV. Und da gibt's das andere, das heißt Visual Engineering, wo ich dann später gelernt habe: da hängen die alle ab, das ist so der Haupt-Subreddit.

[20:09]

**Andreas:** Und hat da dann viel Feedback drauf gegeben — oder einfach nur so qualifiziertes Feedback, das dich dann überzeugt hat, das Produkt rauszubauen?

**Lukas:** Ja, die haben einfach geschrieben: hey, wenn du das noch machst, dann wäre das super — oder: wir verwenden so und so, und das wäre cool. Und ich muss vielleicht kurz den Masterplan erwähnen: ich war Vollzeit angestellt, und ich war vorher schon mal Freelancer und hab es eigentlich auch genossen, dieses Freelancer-Leben. Und ich habe mir dann gedacht: ich möchte eigentlich mal mein eigenes Produkt entwickeln — nicht meine Zeit verkaufen, sondern etwas bauen, das auch Skalierungspotenzial hat. Ich wusste aber, dass ich es noch nie gemacht habe — ich habe zwar in einem Startup gearbeitet und weiß, wie man Produkt entwickelt, aber nie so das Komplette. Ich dachte mir: ich möchte eigentlich mal ausprobieren, wie das komplette Startup-Leben aussieht — also alles: von Payment-Integration, Marketing, Finances, was muss alles beachtet werden, was kommt da noch, was sind so die unerwarteten Faktoren, die ich gar nicht kenne als Entwickler, weil ich halt immer an der Tech-Seite arbeite. Und dann kam genau das Problem — ich dachte: hey, das probiere ich mal aus als SaaS. In meinem Kopf, nicht wahr, Countdown-Timer — also einfacher geht's ja gar nicht. Na los, bauen wir das. Und dann war ich am Anfang kostenlos, habe einfach dran rumgebastelt, überlegt: ja, wenn ich jetzt richtig SaaS machen will, dann brauche ich ja auch Subscription-Payments, Abos — also geguckt, welcher Provider funktioniert da, was kann ich da integrieren, welche Pro-Features kann ich mir überlegen, die auch Sinn machen, dass jemand dafür bezahlt. Wobei — ich bin stehen geblieben, habe den roten Faden verloren — wie du dann das Produkt daraus entwickelt hast aus dem Reddit-Thread sozusagen.

**Lukas:** Genau, und dann habe ich mir überlegt: ich mache jetzt da ein Produkt raus. Und dann, einfach als dieses Feedback kam, dachte ich mir: hey, Leute brauchen das, jetzt mache ich da ein Produkt raus und probiere mal, was passiert. Und das — so sechs Monate später, nicht wahr, habe ich dann die ersten Pro-Features online gestellt. Und dann, ich war ganz klassisch, habe

[22:11]

ich überlegt: und wie wissen jetzt Leute, dass ich das gemacht habe, wo muss ich das ja irgendwie — ich hatte noch nie Marketing gemacht vorher. Da habe ich es auf Twitter gepostet: hey, ich habe das und das, nicht wahr, und habe jetzt neues Update mit Payment-Integration, Pro-Features. Und dann zu meinem absoluten Erstaunen hat am selben Abend jemand das Ding gekauft! Also ich habe das nur — und der hat es halt — der hat es auf Reddit gesehen, bin dann auf Twitter gefolgt, hat es gesehen, hat es gekauft direkt. Und von da da habe ich mir gedacht: oh, das ist was dran, da können wir vielleicht ein bisschen mehr Zeit reininvestieren.

**Andreas:** Ja, ist was dran auf jeden Fall. Und dann hast du auch noch mal auf Reddit gepostet und hast dich glaube ich so bedankt: hier, danke für euer initiales Feedback, ich habe es jetzt mal gebaut. Ging das da dann noch weiter, oder kriegst du da heute noch Feedback?

**Lukas:** Ja, die Frage ist: wie postest du auf Reddit? Wenn du auf Reddit postest: hey, ich habe was gebaut, bitte bitte zahlt mir Geld — funktioniert gar nicht. Das heißt, du musst irgendwie einen guten Weg finden. Das Erste war halt: hey, ich habe hier was gebaut, helft mir mal, ich weiß gar nichts — und das war echt gut. Und dann habe ich mir gedacht: hey, wie kann ich das noch mal so vor die Leute bringen? Dachte mir: ich bedanke mich einfach dafür, erzähle ein bisschen die Geschichte, und was jetzt passiert ist und wo wir sind. Funktioniert. Und ansonsten machen wir andere Sachen — SEO, Google Ads und solche Sachen. Wir haben viel Mund-zu-Mund-Marketing, von daher ist Reddit immer noch die große Quelle.

**Andreas:** Bevor wir zum Thema Marketing kommen — du hast ja auch auf Product Hunt gelauncht und hast auch einen Artikel dazu geschrieben, wie das gelaufen ist. Das fand ich sehr interessant — so ein bisschen der Tag aus der Sicht eines Product-Hunt-Launches, und was man sich initial davon verspricht, und ob es dann doch klappt. Kannst du da mal noch ein bisschen zu erzählen? Ist ja eigentlich schon ein Nischenprodukt — wie passt das dann auf Product Hunt, und wie hat das funktioniert?

**Lukas:** Ja, lustiger Hintergrund zu

[24:12]

dem Artikel: ich hätte den eigentlich gar nicht geschrieben, außer dass GPT-3 rauskam zu der Zeit — also vor ChatGPT. Und ich dachte: ich muss mal ausprobieren. Und da habe ich irgendwie hingekriegt, dass es mir einen Artikel schreibt. Es war super limitiert am Anfang, weil du konntest, ich habe irgendwie ein paar Zeilen Output gekriegt — das war richtig schwierig, dann einen zusammenhängenden Artikel — also einen langen Artikel — rauszukriegen. Habe ich ein bisschen rumgebastelt, ein bisschen rumexperimentiert. Deswegen war der Artikel. Und Product Hunt — ich bin ja auf Twitter unterwegs, so als Startup und im Bootstrap- und Indie-Hacker-Bereich, wo die Leute dann selber ihre Firmen aufziehen. Da ist es ja ganz oft so, dass viele Sideprojects machen, ein neues Projekt launchen, das auf Product Hunt. Und dann ist eine ganze Kultur drum rum, dass man dann das hoch-hypt und alle helfen einander. Und ich habe das auf Product Hunt gelauncht, als ich das ganz am Anfang erstellt habe, dachte: oh, ja, mache ich jetzt. Und dann habe ich irgendwie sechs Upvotes gekriegt. Ich dachte: das ging jetzt in die Hose. Und dann beim nächsten Mal — als ich das schon mal gemacht hatte, wusste ich: okay, du musst die Leute aufwärmen, du musst ein bisschen Rummel drum rum machen. Habe ich dann also gemacht und auf Twitter einfach Leute angeschrieben vorher, gesagt: hey, ich launche in sechs Tagen, kann ich dich anschreiben, dass du mich unterstützt? Und das auch so gemacht. Als wir es gelauncht haben, haben uns ganz viele Leute von Twitter unterstützt, und dann ging es auch hoch. Und wir waren dann am Ende Platz 1 am Tag mit unserem Tool — was auch viel mit Glück zu tun hat, weil du musst einfach Glück haben, dass keine großen anderen Leute irgendwas launchen. Interessanterweise: Product Hunt an sich und Twitter ist gar nicht unser Marketing-Tool, weil die Leute, die wir jetzt erreichen wollen, gar nicht da sind. Das heißt, es ist eigentlich eher — sagen wir mal — fast zum Spaß, oder halt das einfach aus der Community her. Und mit anderen Foundern zusammen zu sein, was einfach den Wert bringt, dass man andere Founder kennenlernt.

**Andreas:** Ja, gut, ich habe dich auch auf Twitter gefunden — was wahrscheinlich — findest du die Event-Veranstalter und wüsstest jetzt gar nicht in welchem Netzwerk man die findet dann. Deswegen, ja, dieser — weil

[26:13]

du weißt ja gar nicht, wo du hin sollst.

**Andreas:** Ja, verstanden. Kannst du ein bisschen was zu deinem Technologie-Stack erzählen? Das ist auch was, was die Leute immer interessiert — wie hast du das gebaut? Wenn du es am Wochenende mal kurz gebaut hast, da die erste Version?

**Lukas:** Klar, wir sind auf Vue.js im Frontend, und dann im Backend haben wir Node.js mit Express, und dann mit einer MongoDB-Datenbank. Der Grund dafür: ich habe auch schon mit PHP gearbeitet und anderen Sachen. Der Grund, warum ich das auf dem JavaScript-Stack aufgebaut habe — komplett, auch kein TypeScript übrigens, viele werden wahrscheinlich die Haare zu Berge stehen. Aber der Grund ist einfach Speed: ich wollte das, was am schnellsten funktioniert, wo ich mich am ehesten mit auskenne. Nicht jetzt weil Vue irgendwie besser ist als React — einfach weil ich mich damit am besten ausgekannt habe und ich wusste am schnellsten, wie ich damit umgehe. Gleiche Sache mit TypeScript: TypeScript ist okay zu verwenden, ist ein bisschen Overhead, aber das einzurichten — ich habe es kurz probiert, und dann irgendwie nach 5 Stunden aufgegeben, weil hier der Compiler und das und da gab's die Error-Message und dann habe ich das nicht alles zusammengekriegt. Jetzt mache ich einfach JavaScript und halte mich einfach an gute Regeln — es funktioniert auch. Deswegen: einfach Technologien verwendet, die ich wirklich gut kannte, und ich habe es nicht bereut. Also ein guter Stack, der funktioniert — recht gut. Habe natürlich ein paar Probleme gehabt mit Scaling, aber das alles rausgehalten. Und ein ganz ein Kern von unserem Tech-Stack ist auch Socket.io — Socket.io ist quasi eine Abstraction-Layer über Sockets, WebSockets. Und dadurch, dass wir so eine richtige Realtime-Application sind — also wenn jemand einen Knopf drückt, dann muss es auf allen anderen Devices gleichzeitig angezeigt werden — da hat Socket.io uns richtig geholfen.

**Andreas:** Wenn ich jetzt Veranstalter bin und ich habe das auf mehreren Devices — diese Devices, das können dann Tablets, Handys, irgendwas sein, die sind einfach aber auch nur im Browser geöffnet, du hast keine App noch dazu, die sich dann zu der Instanz meines Timers connected?

**Lukas:** Ja, in erster Linie ist

[28:13]

es nur im Browser. Also Leute haben uns gefragt, oh HDMI-Output — aber damit habe ich mich nicht abgegeben. Wir haben allerdings eine Offline-Version mit Electron, weil uns einfach so viele Leute angefragt haben: hey, wir sind auf dem Event und wir wissen nicht, ob wir gutes Internet haben oder unstabiles Internet oder irgendwie Potato-Internet über unser Handy, und wir brauchen — das ist offline. Macht ja auch Sinn. Deswegen haben wir eine Electron-App gebaut, die einfach denselben Server lokal auf dem Computer startet, und dann kannst du das direkt — kannst du dann ja — dann startest wie?

**Andreas:** Wie kannst du dann die anderen fernsteuern, weil die dann im WLAN vor Ort auf dem Event sind zusammen?

**Lukas:** Genau. Du hast einfach — du startest einen Server auf dem Computer, wo du möchtest. Und dann geht der im Prinzip — öffnet sich so ein kleines Fenster, und dann gehst du mit dem Button direkt in den Browser, und dort hast du das identische Interface. Mit dem Unterschied, dass wenn du den Link mit jemandem anderen teilst, du kriegst halt eine IP-Adresse anstatt von der URL — also die IP-Adresse von dem Computer.

**Andreas:** Interessant. Ja, also ich habe einen Freund, der ist im Ticketing-Business, und der hat Starlink vor Ort, damit der Internet hat, damit die Tickets live validiert werden können. Und sowas ist auch schon spannend.

**Lukas:** Ja, okay, ja. Weil du hast dieses riesige Problem: wenn du offline gehst, wo kriegst du deine Daten her — richtest du irgendwie eine Datenbank lokal ein, oder hast du halt diese Herausforderung, dass du online gehen musst einfach nur, um auf deine Daten zuzugreifen und deine serverseitige Validierung zu machen.

**Andreas:** Ja, spannend. Jetzt machst du das ja auch schon zweieinhalb Jahre — wo geht's da dann hin? Also was kann man da noch für Features dann — du hast jetzt die Farben angesprochen, okay, das ist natürlich was, was auf der Hand liegt, aber kommt man wahrscheinlich selber nicht drauf. Wo kriegst du denn die Ideen dann her? Jetzt bist du vor Ort gewesen, das hilft — wie kommst du da weiter, wie

[30:13]

kriegst du da Innovation?

**Lukas:** Ja, wir kriegen die hauptsächlich als Anfragen: die Leute schreiben uns, hey ich brauche das, ich brauche das, ich brauche jenes. Und wir sortieren dann — je nachdem, wie viele Anfragen wir kriegen — die Priorität von den verschiedenen. Und was wir auch machen: wir haben einen Scope, und ich habe einen Scope für dieses Produkt, und ich möchte aus diesem Scope nicht raus. Also wir könnten z.B. expandieren in so eine Art Rundown-Software — da gibt's so einen Showflow, wo du dann mehr quasi fast schon Event-Abläufe definierst und mehr so Event-Organisation machst, anstatt nur Zeitmessung. Und ich habe mir überlegt: machen wir das, sollen wir das machen, macht das Sinn? Und ich habe mich entschieden: ich möchte eigentlich diesen Zeitmesser-Scope nicht überschreiten. Aus dem Grund, weil ich das Gefühl habe, viele Produkte — die fangen einfach an, haben den coolen USP, Leute benutzen das, dann kriegen sie lauter Feature-Requests, bauen das alles ein, werden so kompliziert, dass dann die nächste Generation von Usern nicht mehr genau weiß, wie man alles verwendet. Und es wird richtig komplex. So ein bisschen das Photoshop-Syndrom, nicht wahr: irgendwann weißt du gar nicht mehr, was für Features alles gibt, weil einfach ständig neue Features zugeführt werden — da bist du als neuer User komplett überwältigt. Und das wollte ich vermeiden. Ich habe einen Scope, und es gibt auch so eine Art „fertig" in meinem Kopf, wo ich sage: da werden jetzt nicht mehr viele Features kommen. Dann machen wir Support, wir gucken, dass das Scaling funktioniert, wir gucken, dass Marketing macht — aber wir machen da nicht immer viele neue große Features hinzu.

**Andreas:** Ah okay, ist auch interessant. Du hast vorhin kurz angesprochen, dass das Marketing eher speziell ist und jetzt auf Reddit nicht mehr funktioniert. Wo kann man es dann vermarkten, oder wie vermarktet ihr es aktuell?

**Lukas:** Ja, vielleicht kurz von der Vergangenheit: wir haben vieles probiert, weil wir genau vor dem Problemstand stehen — wo sind denn die Leute, die wir ansprechen wollen, wo finden wir die? Reddit ist natürlich eine Quelle, und wir sind auf

[32:13]

einer Messe gewesen, haben das probiert. Wir haben YouTube-Kanäle angeschrieben. Und es ist super lustig, weil wir haben die angeschrieben und die meinten: ja, ja, wir verwenden schon Stagetimer, super Projekt, aber wir machen kein Sponsoring. So: warum macht ihr kein Sponsoring? Ja, in dieser Industrie — die wollen diese Produktionsqualität aufrechterhalten. Und es gibt lustigerweise YouTube-Kanäle, wo einer halt Sachen vorstellt und irgendwie 1.000 Subscriber, 2.000 Subscriber hat, und dann ein paar Leute in seinem Livestream. Und er hat eine Produktionsqualität von einer TV-Show — super high quality, weißt du: die besten Kameras, super Resolution, super Schnitt — alles topnotch. Und dann halt irgendwie für 1.000 Leute, die das dann angucken. Am Ende — ein paar davon haben auch Videos gemacht über unser Tool — und die sagen: ja, wir machen kein Sponsoring. Okay, also konnten wir da nicht hin. Und da haben wir überlegt: okay, Podcasts — Podcasts haben auch nichts gefunden. Wir haben sogar Magazine angeschrieben — also Print war zu teuer für unsere Größe. Und dann sind wir gelandet: wir haben auf Facebook probiert, Facebook-Marketing. Und sind gelandet bei Google Ads — also im Google-Suchranking, das relativ gut funktioniert für uns. Und dann die ganz klassische Search-Engine-Optimization. Wir fragen auch unsere Kunden: wo kommen sie her, wie habt ihr von Stagetimer gehört? Und 50% sagen Google, und dann weitere 40% sagen, sie haben es irgendwo von einem Freund, Kollegen, anderen Leuten in der Industrie gehört. Also das sind unsere Hauptkanäle.

**Andreas:** Du musst ja ein Weiterempfehlungs-Bonussystem irgendwie noch ausdenken, oder so?

**Lukas:** Ja, wir wollen das ausprobieren in den nächsten Monaten.

**Andreas:** Stichwort Kunden — woher kommen die denn? Von der ganzen Welt, kannst du sagen,

[34:14]

das ist viel Europa — oder ist es total wirklich durch alle Länder hinweg?

**Lukas:** Ganz viel USA, Frankreich aus irgendeinem Grund, Kanada und Deutschland auch — aber also hauptsächlich USA und dann global eigentlich auch.

**Andreas:** Und der asiatische Raum — braucht das sowas auch?

**Lukas:** Die brauchen das auch. Aber der asiatische Raum ist bisschen schwieriger, weil du mit Englisch nicht so weit kommst. Also du hast immer — wir haben Leute aus Japan — aber du hast halt dann Japan, Korea — immer gleich das Problem, dass du eigentlich müsstest du die Sache lokalisieren, weil du einfach nicht Englisch als Standard hast. In Europa ist es ein bisschen einfacher. Afrika auch, Südamerika haben wir auch noch so ein bisschen hingekriegt. Ja, aber Asien ist nicht so stark.

**Andreas:** Und kennst du große deutsche Konferenzen, wo das dann verwendet wird?

**Lukas:** Konferenzen — ich kenne große deutsche Kunden, aber ich weiß nicht, ob ich alles einfach so sagen darf. Deswegen — okay.

**Andreas:** Okay, überspringen wir mal dann. Ich muss das sagen — mir ist ja dieser Instant-Timer im Footer aufgefallen. Das finde ich ja echt eine coole Idee, auf jeden Fall, um mal kurz einfach das Produkt auszuprobieren. Und von da kann ich dann ja auch in so ein Test-Account dann abspringen. Ich habe gesehen, das — ich habe den angelegt als programmatisches SEO. Also dass du quasi, wenn du auf den Timer klickst, dann kriegst du einen Link oben, der heißt irgendwie „30 Minute Timer". Und wenn du dann die Zeit wechselst auf sag mal 35 Minuten, dann steht oben drin „35 Minute Timer". Und dadurch haben wir irgendwie 3.000 extra Seiten auf unserer Website, die jetzt bei Google gerankt sind. Und das bringt ja auch Traffic dann — weil jemand „30 Minute Timer" sucht und dann kommt er, weil er zu blöd ist, die Timer-App am Handy aufzumachen?

**Andreas:** Wird Timer gegoogelt, oder was? 30 Minute — muss ich das gerade mal nebenbei googeln.

**Lukas:** Okay, ich habe einfach aus — ich dachte, es bringt gar nichts. Weil wenn du auf Google „30 Minute Timer" eingibst, dann kriegst du einen Timer angezeigt von Google. Aber anscheinend klicken Leute auf diesen Link. Eine Stunde, 30 Minuten — funktioniert recht gut

[36:16]

und rankt auch. Also ich hatte gedacht, es funktioniert nicht, aber es funktioniert.

**Andreas:** Das ist ja verrückt. Ja, ich sehe es gerade hier bei mir: geht der Timer, dreht sich. Es gibt sogar YouTube-Videos dann — 30 kann, 30 Minuten... YouTube gibt alles. Okay.

**Andreas:** Und jetzt habt ihr viel mit SEO noch gemacht — du hast erzählt, macht das viel deine Frau. Hat die das dann on the job gelernt, habe ich richtig verstanden?

**Lukas:** Ja, ja, ja, absolut. Also am Anfang hatten wir eine Agentur, die uns ein paar Artikel geschrieben hat. Sie hat dann Keyword-Research gelernt. Wir haben dann einige Artikel über Fiverr ausgelagert und ein paar selber geschrieben. Was wir gemerkt haben, was besonders gut funktioniert, sind solche Dokumentations-Artikel fast — also wo du einfach erklärst: wie verwende ich z.B. Stagetimer mit dem Streamdeck? Streamdeck ist so eine Box mit programmierbaren Buttons. Oder: wie verwende ich Stagetimer mit OBS Studio? OBS Studio ist so ein Livestreaming-Open-Source-Tool. Und die funktioniert echt gut. Aber das ist ja technische Artikel — das heißt, jemand muss es schreiben, meistens ich, der einfach weiß, wie diese Sachen zusammenhängen, wie die Technik dahinter funktioniert und wie man das dann umsetzt. Also so ein Stück Tutorial schon fast.

**Andreas:** Genau, mhm. Okay, und dann hast du — ich habe gesehen, du hast ja auch deine private Website, wenn die dann so privat ist, wo du dann ein bisschen erzählst, wie es so mit der Firma gekommen ist, was du alles gemacht hast. Das ist auch das Thema — glaube ich — programmatisches SEO, den Guide. Den hat glaube ich dann deine Frau geschrieben — die wie heißt — Liz?

**Lukas:** Nee, auf meiner persönlichen Website habe ich alles selber geschrieben.

**Andreas:** Und das finde ich dann auch interessant, weil hast du ja auch die Querverweise immer drin und erzählst ein bisschen die Hintergründe. Da gab's jetzt neulich den Twitter-Ask-me-anything — ist das dann auch was, was du für die Solopreneur- und Indie-Hacker-Bubble machst, oder ist es dann auch noch mal Content-Marketing für dich?

**Lukas:** Eigentlich gar nicht, weil darüber

[38:17]

keine Kunden gewinnen. Das ist wirklich so für die Bubble, für die Leute, für die Connections, für die Community. Ich mach das oft so: auf Twitter, wenn ich einen Thread mache, habe ich mir das so angewöhnt — wenn ich einen Thread mache, dann mache ich den richtig schnell, so 20, 30 Minuten, und ich klatsche es einfach rein. Ich versuche quasi das so ein bisschen zu balancieren: die Zeit, die ich da reinstecke, und die Qualität, die dahinter ist. So: okay, ein paar Screenshots und ein paar Zeilen, und ich guck, dass es zumindest inhaltlich stimmt — und schieß es raus. Und hin und wieder ist mal einer von diesen Threads erfolgreich und wird mehr geteilt und kriegt mehr Aufrufe. Und dann nehme ich den Thread, steck ihn in ChatGPT und lass einen Artikel draus generieren für meine Website. Und mache da noch ein bisschen Editing danach — damit es okay ist und nicht so — nicht wahr — diese blumige Sprache von ChatGPT ein bisschen rausnehmen. Ansonsten ist es ganz gut.

**Andreas:** Und das funktioniert dann? Hilft dir ChatGPT auch beim Coden?

**Lukas:** Ja, mittlerweile relativ gut. Wie verwendest du das dann — also so bisschen rudimentär? Hast du ein Problem und lässt dir einen ersten Code-Schnipsel generieren, oder hast du fertigen Code und bist mit dem nicht zufrieden und lässt den optimieren?

**Lukas:** Also was am besten funktioniert ist: wenn du Pseudocode schreibst. Also du schreibst quasi Kommentare: mach das erst, und dann mach das, und dann mach das — und dann: formatiere und ändere das. Und diesen Pseudocode rein postest bei ChatGPT und sagst: füll mir das aus, schreib mir das raus in der Sprache. Funktioniert relativ gut, muss ein bisschen nachbessern. Ich habe es mal versucht für richtig schwere Fragen — so Depth-Questions: oh, wie verwende ich Cloudflare und wie verbinde ich das und wie? Da ist es nicht so gut — da gibt's fast oft falsche Information, oder so eine superficiale Antwort, die dann nicht genau auf deinen Fall passt und wo du nicht wirklich weiterkommst und wo du eh wieder googeln musst. Und was am besten funktioniert ist:

[40:17]

wenn du sagst: hier ist mein Code, schreib mir Dokumentation dafür. Das ist natürlich super für Entwickler, die haben gar keine Lust, Dokumentation zu schreiben. Gut, ich mache das so oft: ich nehme einfach meine Funktion, die ich geschrieben habe, schmeißen rein, sage: hey, write types, write documentation. Und dann hast du so einen Kommentarblock, der oben drüber ist, wo dann dokumentiert wird, was die Funktion macht und was für Inputs und Outputs hat. Das funktioniert richtig gut.

**Andreas:** Hast du die kostenpflichtige Variante, oder?

**Lukas:** Seit diesem Monat habe ich mal ausprobiert, aber die kostenfreie funktioniert okay.

**Andreas:** Und hast du ein anderes Frontend drüber, oder nutzt du einfach das Online-Frontend von denen?

**Lukas:** Nein, ich nutze direkt ChatGPT, okay.

**Andreas:** Ja, Wahnsinn. Das okay, das liegt natürlich voll auf der Hand — Dokumentation. Habe ich natürlich noch nicht gedacht, aber es macht's schon gern. Das ist natürlich ja genau, deswegen ist das voll gut.

**Andreas:** Und dann habe ich gesehen, dass ein weiteres Lieblingsthema von dir ist noch das Thema Steuern. Da hast du auch mal einen ausführlichen Artikel geschrieben. Da leidet man wahrscheinlich als deutscher Gründer oder als deutsches Gründerteam dann auch über das Thema Umsatzsteuer, wenn man dann international verkauft. Woher kommt da das Interesse?

**Lukas:** Ja, das Interesse kommt, weil du einfach ein Problem damit hast. Also „Lieblingsthema" ist wahrscheinlich das falsche Wort hier — es ist eher so ein Notwendigkeits-Thema. Und ich habe das Gefühl, dass zu wenig eigentlich darüber geredet wird. Also ich sehe ganz wenige Leute, die über Steuern reden und wie das genau funktioniert, vor allem im SaaS-Bereich und im Startup-Bereich. Also viele amerikanische — gerade so Bootstrapper: was die machen, die verkaufen einfach ihre Sachen, die machen keine Steuern drauf, die verkaufen einfach nullsteuer. Und dann — ich weiß nicht — irgendwie Jahre später merken sie dann: oh, ich muss ja Steuern erklären, oder so. Ich keine Ahnung wie das funktioniert, oder sie bleiben einfach unter diesen Limits, wo dann die IRS sich einfach nie drum kümmert. Keine Ahnung. Aber in Deutschland

[42:17]

geht das nicht — die hauen dir immer gleich auf die Finger, wenn du keine Steuererklärung abgibst. Deswegen habe ich mich wirklich damit befasst: hey, wie geht das? Einfach mal zu wissen, nicht wahr: wenn du noch nie eine Firma hattest, wenn du jetzt nicht aufgewachsen bist mit Eltern, die eine Firma hatten — wie in meinem Fall, also meine Eltern hatten keine Firma, ich muss mir das alles selber beibringen — dann weißt du einfach ganz grundlegende Sachen nicht. Du weißt nicht, was genau macht ein Steuerberater überhaupt für dich, welche Steuer musst du überhaupt zahlen? Weil hast du eine GmbH, musst du eigentlich drei Steuern zahlen: die Umsatzsteuer, die Gewerbesteuer und die Körperschaftssteuer.

**Andreas:** Die Körperschaftssteuer — genau, das die dritte.

**Lukas:** Genau. Und das weißt du gar nicht — du weißt gar nicht, wie hoch die Steuern sind, wie die genau ausfallen am Ende, was die beeinflusst. Und dann bei SaaS ist es ein interessantes Thema, weil du verkaufst international. Wie besteuerst du jetzt deine internationalen Produkte? Im Härtefall — und das betrifft jedes Land, es ist völlig egal, wo du herkommst — müsstest du eigentlich die Steuern vom Verkaufsland auf dein Produkt drauf tun. Und in den USA ist das sogar per County, also noch mal unterteilt. Und dann musst du eigentlich diese Steuer einbehalten, dich mit diesem Land registrieren und dann diese Steuer an dieses Land zurückgeben. Das ist natürlich in der Praxis völlig unmöglich für jemanden, der gerade mal anfängt, international zu verkaufen. Deswegen gibt's da so etwas wie „Merchant of Record" — wo du eine Firma hast, die quasi — wo du sagst: hey, ich lizenziere die Software an dich, du verkaufst es, du kümmerst dich um dieses ganze Steuerrückgabe-Ding, und gib mir dann das Geld, das am Ende übrig bleibt. Was ich auch gemacht habe. Und da kriegst du quasi nur eine Rechnung, anstelle von 500.

**Andreas:** Nutzt du Paddle, oder was machst du da?

**Lukas:** Paddle, genau.

**Andreas:** Ich habe im Artikel bei dir gelernt, dass du dann keine Umsatzsteuer zahlst, wenn du ein kanadisches Unternehmen hast, das weniger als 30.000 kanadische Dollar macht — da gibt's dann noch mal eine Sonderregel. Und mit sowas beschäftigt man sich dann.

**Lukas:** Es gibt Freibeträge für jedes Land, wo du

[44:19]

quasi an die verkaufen kannst, ohne dass du Steuern aufschreiben musst. Also klar, so 30.000 normal — kann sich aber ändern.

**Andreas:** Okay, und das macht Paddle dann automatisch für dich, musst du jetzt gar nichts mehr machen?

**Lukas:** Na gut, Paddle, ja, genau. Da musst du gar nicht drüber nachdenken, das ist natürlich perfekt.

**Andreas:** Interessant. Also ich verlinke — und die machen auch im europäischen Raum die ganze Sache. Die schreiben dann die deutsche Umsatzsteuer in Deutschland drauf, die französische in Frankreich. Und die Österreicher — die wollen es immer ohne Umsatzsteuer, das ist bei denen ganz wichtig — und dann machen die das auch? Die haben diese ganzen Mechanismen, kümmern die sich drum.

**Lukas:** Okay, Wahnsinn.

**Andreas:** Du — ich habe auf deiner Seite gefunden, dass du auch noch andere Sachen machst. Jetzt hast du vorhin angesprochen, du glaubst, du hast deine Roadmap und du möchtest quasi bei Stagetimer nicht zu sehr das in die Breite gehen — was ich nachvollziehen kann. Dann bist du ja irgendwann damit fertig. Du machst ja jetzt schon auch andere Sachen. Oder hast du die vorher gemacht? Hier „DashMaster" — habe ich noch gefunden. Also sind es noch ehemalige Projekte, die halt noch laufen, oder hast du jetzt schon parallel was Neues angefangen?

**Lukas:** Mein Ziel war immer, dass Stagetimer eigentlich nur so ein bisschen der Finanzgeber ist für das nächste Projekt. Ich weiß, ich ge-bootstrap es, es wirft dann irgendwann genug Geld ab, dass ich mich ums nächste Projekt kümmern kann. Aber dann von dem vorherigen Leben: DashMaster z.B. ist ein interessanter Fall. Jeder, der schon mal einen Cofounder gesucht hat, weiß, wie schwierig das ist — manche haben Glück, aber in anderen Fällen kann es entweder schiefgehen oder es ist halt sehr schwer, jemanden zu finden. Und ich habe jemanden kennengelernt in dieser Event- und Videoszene, der auch seine eigenen Apps programmiert. Und wir haben gesagt: hey, lass uns doch mal zusammen was machen. Und es ist ein richtiges Fun-Projekt — also ohne Regeln, ohne irgendwie muss monetized sein — alles geht. Wir schmeißen irgendwelche Features raus, auf die wir gerade Lust haben, und gucken

[46:19]

mal, was passiert. Und das hat uns beiden so ein bisschen die Möglichkeit gegeben, kennenzulernen, wie wir miteinander arbeiten. Ist richtig top — es war richtig gut. Und jetzt vor einem, zwei Monaten haben wir unser — ein richtiges Projekt angefangen, fast schon so eine Art Nachfolge für Stagetimer, im ähnlichen Bereich, aber ein viel größerer Scope. Eher für die Broadcasting-Pros, also viel professioneller — wo wir jetzt als Team von drei Cofoundern angefangen haben dran zu arbeiten.

**Andreas:** Sehr cool. Erzählst du jetzt noch...?

**Lukas:** Bisschen im Stealth-Mode eher, weil wir einfach noch ganz ganz early sind und es noch nicht so viel zu erzählen gibt.

**Andreas:** Und wenn du jetzt so ein Produkt baust, machst du das dann auch wieder — dass du relativ früh Feedback holst von potenziellen Usern, dass du eben kein Produkt entwickelst, das dann am Markt vorbeigehe?

**Lukas:** Ja, ja, absolut. Wir hatten jetzt den Fall, dass wir gesagt haben: wir haben einen Wegwerfprototyp geschrieben in Code. Wir haben gesagt, wir nehmen uns dafür eine, zwei Wochen — oder so: zwei Tage, drei, vier Tage, wo wir zusammen gehackt haben. Haben gesagt: da müssen wir fertig sein, und dann tun wir es vor Leute. Natürlich völlig furchtbares Design, furchtbare Usability — aber zumindest das Kernprodukt ist da. Und haben tatsächlich schon unser erstes Interview mit einem potenziellen User gemacht, wo wir einfach ganz viel schon gesehen haben: okay, der hat das erwartet, deshalb funktioniert das, aber das hat nicht funktioniert, da sind Erwartungen richtig, da müssen wir noch Hand anlegen. Das ist ganz ganz wertvoll, wenn man das so früh wie möglich macht.

**Andreas:** Wie organisierst du dich dann da gerade — hast du einen geregelten Tagesablauf, habt ihr den zusammen? Seid ihr zur gleichen Zeit produktiv, wenn ihr zusammen wohnt und arbeitet — wie organisiert ihr euch da? Du meinst es mit deiner Frau?

**Lukas:** Ja. Wir machen hin und wieder mal so Meetings, wo wir uns wirklich Zeit nehmen. Oder wir gehen essen und sagen dann: jetzt nehmen wir uns wirklich Zeit, um über strategische Fragen zu sprechen. Aber so im Alltag

[48:22]

mache ich meine Arbeit, sie macht ihre Arbeit. Wir sind da relativ getrennt, weil wir das so quasi relativ gut getrichtert haben: die Arbeit, die sie macht, und die ich mache. Und manchmal kommt sie mit Details zu mir, nicht wahr: oh, ich habe das Detail, kann ich kurze Frage stellen? Oder: wie mache ich das, wie kann ich das umsetzen? Oder: wie machen wir das, wie wir auf die Frage antworten?

**Andreas:** Ja. Und hast du dann normale Arbeitszeiten? Hört sich vielleicht blöd an, aber hast du einen 8-Stunden-Tag, machst du manchmal abends noch was, gibt's Tage, wo du gar nichts machst — wie ist das so der Ablauf? Ich glaube, das ist als Bootstrapper wahrscheinlich sowohl das Beste als auch das Schwierigste.

**Lukas:** Das hast du aber als Freelancer auch oft, weil dir niemand sagt, wann du arbeiten sollst. Kannst dir völlig frei einteilen. Und ein Problem, das oft passiert — gerade am Anfang, wenn man das zum ersten Mal macht — ist: du überarbeitest dich total. Du arbeitest einfach den ganzen Tag, immer jede — sobald du merkst, oh, meine Stunde ist wertvoll, geht alles in die Arbeit. Wenn du es eine Weile gemacht hast, dann lernst du damit umzugehen. Und ich mag das echt, weil ich weiß, wie ich arbeite. Ich bin jemand, der morgens einfach ganz lang braucht, bis er auf Fahrt kommt. Das heißt, ich lasse mir morgens Zeit — manchmal nehme ich meinen Laptop ins Bett und mache so ein paar ganz einfache Sachen. Und normalerweise erst so nach Mittag, wo ich richtig anfange zu arbeiten. Und dann — dann geht der Kopfhörer auf den Kopf, die Musik an, und dann ist fünf Stunden lang richtig Deep-Coding. Und was ich auch gerne mache: ich brauche immer eine Pause zwischendrin — also entweder vor oder nach dieser Coding-Session: raus, laufen, Fahrrad fahren. Oder ich mache auch gerne mal ein Computerspiel, wo ich mir einfach zwei Stunden Zeit nehme für sowas — also richtig schön lange Pause. Und dann manchmal mache ich abends noch was, je nachdem, wie das Energielevel ist. Es ist auch über die Woche anders, nicht wahr — so in meiner Erfahrung: ich arbeite gerne sonntags schon, und dann ist mittwochs — geht dann immer das Energielevel komplett runter, dann muss ich so einen halben Pausetag einlegen. Und dann Freitag ist auch schon wieder

[50:23]

die Energie weg. Aber dann so Montag, Dienstag, Donnerstag — da krieg ich am meisten gearbeitet.

**Andreas:** Interessant. Und dann machst du aber Sonntag auch nicht den ganzen Tag — sondern so, wenn dir was einfällt oder du Bock auf was hast, dann machst du dann konzentriert was, weil du dann deine Ruhe hast sozusagen?

**Lukas:** Genau. Sonntag ist für mich so ein bisschen der „Everything-goes"-Tag. Das heißt, Sonntag erlaube ich mir auch, an Features zu arbeiten, nach denen niemand gefragt hat. Ansonsten über die Woche gucken wir, dass wir uns schon an die Prioritäten halten.

**Andreas:** Okay, spannend. Hast du sonst noch Freelancer, die euch da helfen bei Themen, die du nicht machst — Grafik oder Texte, hast du vorhin angesprochen?

**Lukas:** Ja, also Grafik bin ich recht fit. Aber ich habe jetzt seit zwei Monaten jemanden, der mir Teilzeit hilft als Freelancer. Und das ist echt super, das ist gut.

**Andreas:** Aber das — wie stimmt ihr euch dann da ab, alles asynchron und digital?

**Lukas:** Ja, wir haben montags — reden wir miteinander, und dann machen wir über Discord das meiste. Und wenn ein Meeting nötig ist, dann machen wir eins — ansonsten schreiben wir uns gegenseitig.

**Andreas:** Cool. Wenn das so funktioniert. So, ich höre schon raus: das Erfolgsmodell Bootstrapping ist für dich auf jeden Fall der Weg to go. Also — hast du mal schon, gab's schon Anfragen bei Stagetimer, wenn du jetzt da vielleicht eine größere Produktion hast — dass die sagen: hey, das finden wir cool, das würden wir gerne — da würden wir gerne investieren, oder übernehmen?

**Lukas:** Noch nicht direkt als Investoren. Also ich habe natürlich diese ganzen Spam-Sachen, wo Leute sagen: oh, ich möchte gerne investieren, blablabla. Aber noch kein seriöser Investor, der uns da angeschrieben hat. Ich würde aber auch kein Geld nehmen — ich habe mir das schon oft überlegt: würde ich Investorengeld nehmen? Ja, sag mal, jemand bietet mir eine Million Euro für soundso viel Prozent von der Firma — würde ich es annehmen? Wahrscheinlich nicht, weil ich selber in Startups gearbeitet habe, die gefundraised haben. Und ich weiß: der Investor erwartet natürlich Wachstum, und oft ist so 300% year-over-year Minimum. Und ich weiß nicht, ob ich das machen möchte mit

[52:24]

meinem eigenen Bootstrapping-Projekt. Ich fühle so, dass das Privileg, das ich habe, ist: ich kann es auch organisch wachsen lassen. Ja, wir investieren Geld in Google-Marketing, aber wir könnten es auch organisch wachsen lassen oder einfach laufen lassen. Und diese Freiheit möchte ich mir momentan nicht nehmen. Allerdings — das nächste Projekt — unter Umständen schon.

**Andreas:** Okay, verstanden. Das heißt aber: Stagetimer wächst jedes Jahr, aber es wächst gesund, aber nicht 300%.

**Lukas:** Ich meine, momentan sind wir über — okay, aber das — ich meine, in den ersten zwei Jahren ist es relativ einfach noch. Ich glaube, wir haben so 16% Wachstum monatlich momentan, relativ stabil. Mal bisschen weniger, je nachdem, wie halt die Schwingungen der Saison sind.

**Andreas:** Ja, du hast ja gesagt, dass es manche Monate gibt, wo es eher schlechter ist.

**Lukas:** Ja, ja, Mensch.

**Andreas:** Cool. Dann hast du jetzt erübrigt sich meine Frage — da hast du noch andere Sachen vor dann dieses Jahr — wie das andere Projekt, wo ihr gerade zusammen dran arbeitet. Hast du noch was? Möchtest du dir ein Portfolio aufbauen, oder wo geht die Reise hin?

**Lukas:** Ja, so langfristig: gerne eigentlich so ein SaaS-Portfolio, Software-Portfolio würde ich mir gerne aufbauen. Weiß nicht, ob es funktioniert, wie gesagt, ich mache es. Das andere Projekt mache ich auch. Ich habe natürlich super FOMO mit dieser ganzen AI-Geschichte — würde am liebsten irgendwas mit ChatGPT oder Midjourney oder sowas machen. Auf der anderen Seite ist es halt alles noch gehyped und relativ früh. Und da baust du so ein Tool, und dann beim nächsten Update bist du gleich obsolet, weil es schon mit drin ist. Und ich habe das Gefühl: ich kenne mich jetzt aus in dieser Event-Produktions-Industrie. Und es ist auch so eine underserved Industry — also da gibt's relativ wenig so Indie-Software dafür. Ich habe das Gefühl, es ist einfach viel Potenzial da, sich noch zu entfalten und Software zu bauen. Da sind wir mal gespannt, was du dir noch so einfallen lässt — oder ihr euch zusammen dann.

[54:24]

**Andreas:** Ja, bist du — du hast gesagt — bist regelmäßig im Austausch dann mit anderen Bootstrappern. Hast du da — trefft ihr euch in irgendeiner Community, oder passiert das über Twitter? Oder hast du jetzt auch Asien erwähnt — ist ja auch so ein Hotspot, wo man sich dann auch mal trifft. Oder wie bist du da so aufgestellt?

**Lukas:** Ja, wir waren jetzt sechs Monate lang unterwegs, meine Frau und ich. Wir waren in Asien — in Thailand, Vietnam und so. Und da haben wir uns dort auch lokal dann mit ein paar Leuten getroffen, die es auch machen. Nicht oft, also hin und wieder mal im Coworking-Space zusammen. Zusätzlich zu diesen Coworking-Spaces läuft einfach viel auf Twitter. Ich kenne die Leute, wir schreiben uns gegenseitig, haben auch hin und wieder mal einen Video-Call, wenn wir Lust drauf haben. Und dann Discord-Communities — hauptsächlich eigentlich mit den Leuten von der Industrie, also von dem Markt, wo ich jetzt bin, mit anderen Entwicklern in der Videoproduktions-Szene.

**Andreas:** Interessant. Okay, ja, Mensch. Ich wünsche dir auf jeden Fall viel Erfolg für dieses Jahr — erstens mit Stagetimer und zweitens mit dem, was ihr sonst noch so vorhast. Kann auch gerne in Kontakt bleiben, wird mich natürlich interessieren, wie es weitergeht und was du sonst so schreibst. Ich folge dir auf Twitter, dann kriege ich es ja mit.

**Lukas:** Vielen Dank auf jeden Fall, ist eine coole Geschichte. Und so mit Reddit — das kannte ich jetzt so auch noch nicht, aber ist natürlich echt sehr witzig und cool, dass es sich für dich gelohnt hat.

**Lukas:** Ja, wer hätte es gedacht, ne, dass es funktioniert.

**Andreas:** Ja, mega. Viel Erfolg für dieses Jahr dann, und vielen Dank für deine Zeit.

**Lukas:** Danke dir, Andi, war super.

**Andreas:** Alles klar, danke, ciao.

**Lukas:** Ciao.

---

**Andreas:** Jo, das war auch schon wieder Folge 25 von Happy Bootstrapping. Vielen Dank, dass du bis hierhin dabei warst. Schick mir wie immer gerne Feedback und Vorschläge an hallo@happy-bootstrapping.de oder schau auch mal auf der Website happy-bootstrapping.de vorbei, um dir ja Folgen

[56:25]

und anderen Content anzuschauen. In Folge 26 habe ich schon aufgenommen mit Volker Elösser von Ventano Beschläge. Und Volker hat eine wirklich coole Geschichte — war schon lange IT-Entwickler gewesen, hat in den 80ern sogar schon Spiele entwickelt, dann später eine Firma in Nordkorea aufgebaut, und ja, jetzt heute verkauft er Beschläge für denkmalgeschützte Objekte, Schlösser, Böden und so weiter. Also wirklich eine coole Geschichte, hört unbedingt rein — erscheint dann nächsten Donnerstag. Bis dahin eine schöne Woche, tschüss!
