const QUELLEN = {
    flyer: {
        name: "FHNW, Flyer Bachelor Architektur",
        url: "https://www.fhnw.ch/de/studium/architektur-bau-geomatik/bachelor-studiengang-architektur/media/iarch-bachelor-webflyer.pdf"
    },
    bachelor: {
        name: "FHNW, Bachelor-Studiengang Architektur",
        url: "https://www.fhnw.ch/de/studium/architektur-bau-geomatik/bachelor-studiengang-architektur"
    },
    institut: {
        name: "FHNW, Institut Architektur",
        url: "https://www.fhnw.ch/iarch"
    },
    institutPortraet: {
        name: "FHNW, Porträt Institut Architektur",
        url: "https://www.fhnw.ch/de/die-fhnw/hochschulen/architektur-bau-geomatik/institute/institut-architektur"
    },
    module3: {
        name: "FHNW, Module 3. Semester",
        url: "https://www.fhnw.ch/de/architektur-bau-geomatik/studium/angebot/studiengaenge/bachelor-in-architektur/module-3-semester"
    },
    baunetz: {
        name: "BauNetz Wissen, FHNW in Muttenz",
        url: "https://www.baunetzwissen.de/drucken/fachhochschule-nordwestschweiz-in-muttenz-7163883"
    },
    baselland: {
        name: "Kanton Basel-Landschaft, Medienmitteilung 2015",
        url: "https://www.baselland.ch/politik-und-behorden/direktionen/bau-und-umweltschutzdirektion/medienmitteilungen/grundsteinlegung-fur-das-neue-fachhochschulgebaude"
    },
    baselTourismus: {
        name: "Basel Tourismus, Führung FHNW Campus",
        url: "https://www.basel.com/en/Basel/guide/detail/TDS00020014883658659?lang=en"
    }
};

// Die erste Antwort in "antworten" ist immer die richtige.
// Die Reihenfolge wird bei jedem Durchgang neu gemischt.
const FRAGEN = [
    {
        frage: "Was haben alle Bachelor-Studierenden am Institut Architektur?",
        antworten: [
            "Einen eigenen Arbeitsplatz, rund um die Uhr nutzbar",
            "Einen eigenen Arbeitsplatz, nur während der Unterrichtszeit",
            "Einen wechselnden Arbeitsplatz pro Semester",
            "Einen Spind, gearbeitet wird in der Bibliothek"
        ],
        erklaerung: "Der eigene Arbeitsplatz gehört fest zum Studium am Institut.",
        quelle: "flyer"
    },
    {
        frage: "In welchem Geschoss liegt das Institut Architektur?",
        antworten: ["11. OG Ost", "3. OG West", "7. OG Nord", "12. OG Süd"],
        erklaerung: "Die Adresse lautet Institut Architektur, 11. OG Ost, Hofackerstrasse 30.",
        quelle: "institut"
    },
    {
        frage: "Was hat in der Architekturausbildung an der FHNW Tradition?",
        antworten: [
            "Der fächerübergreifende Projektunterricht",
            "Die Abschlussprüfung ohne Projektarbeit",
            "Das reine Fernstudium",
            "Der Entwurf ausschliesslich von Hand"
        ],
        erklaerung: "Das architektonische Projekt verbindet Städtebau und Typologie mit den technischen und kulturellen Grundlagenfächern.",
        quelle: "institutPortraet"
    },
    {
        frage: "Wie lange dauert der Bachelor Architektur im Vollzeitstudium?",
        antworten: [
            "6 Semester, 180 ECTS",
            "8 Semester, 240 ECTS",
            "7 Semester, 210 ECTS",
            "4 Semester, 120 ECTS"
        ],
        erklaerung: "Das Studium führt in 6 Semestern und mit 180 ECTS zum Bachelor of Arts FHNW in Architektur.",
        quelle: "bachelor"
    },
    {
        frage: "Welches Thema prägt das zweite Studienjahr im Bachelor?",
        antworten: ["Wohnen", "Sportbauten", "Brückenbau", "Industriebau"],
        erklaerung: "Das zweite Jahr ist das Aufbaustudium mit dem Schwerpunkt Wohnen.",
        quelle: "bachelor"
    },
    {
        frage: "Wie heisst das Entwurfsmodul im Herbstsemester des zweiten Jahres?",
        antworten: ["Typologie & Raum", "Haus & Kontext", "Struktur & Prozess", "Stadt & Landschaft"],
        erklaerung: "Typologie & Raum behandelt die Wohnkultur. Im Frühjahr folgt Haus & Kontext zum Stadtwohnen.",
        quelle: "bachelor"
    },
    {
        frage: "Was steht im Modulplan des 3. Semesters unter den Allgemeinen Grundlagen?",
        antworten: ["Studienreise", "Bachelor-Thesis", "Vorpraktikum", "Abschlussausstellung"],
        erklaerung: "Das Modul A302 Allgemeine Grundlagen II enthält die Studienreise und Englisch.",
        quelle: "module3"
    },
    {
        frage: "Was findet nach jedem Semester öffentlich statt?",
        antworten: ["Die Schlusskritiken", "Die Aufnahmegespräche", "Die Wahl der Studierendenvertretung", "Die Bachelor-Thesis"],
        erklaerung: "Mit den öffentlichen Schlusskritiken stärkt das Institut den Austausch.",
        quelle: "flyer"
    },
    {
        frage: "Was findest du in der 2022 eröffneten Materialsammlung FHNW vor allem?",
        antworten: [
            "Materialmuster aus der Baukonstruktion",
            "Gipsmodelle historischer Bauten",
            "Archivierte Bachelor-Arbeiten",
            "Originalpläne des Campus"
        ],
        erklaerung: "Die Sammlung umfasst rund 470 Exponate und ist bei der Bibliothek Muttenz gelistet.",
        quelle: "institut"
    },
    {
        frage: "Welcher Basler Architekt studierte von 1990 bis 1993 am Institut Architektur in Muttenz?",
        antworten: ["Daniel Buchner", "Jacques Herzog", "Pierre de Meuron", "Roger Diener"],
        erklaerung: "Daniel Buchner machte zuerst eine Lehre als Hochbauzeichner und wurde später Mitgründer von Buchner Bründler Architekten.",
        quelle: "flyer"
    },
    {
        frage: "Welches Büro entwarf den FHNW Campus Muttenz?",
        antworten: ["pool Architekten", "Herzog & de Meuron", "Buchner Bründler Architekten", "Diener & Diener Architekten"],
        erklaerung: "Der Entwurf stammt von pool Architekten aus Zürich. Fertiggestellt wurde der Bau 2018.",
        quelle: "baunetz"
    },
    {
        frage: "Wie hiess der prämierte Wettbewerbsentwurf für den Campus?",
        antworten: ["«Kubuk»", "«Kubus»", "«Polyfeld»", "«Monolith»"],
        erklaerung: "Der Entwurf von pool Architekten und Perolini Baumanagement hiess «Kubuk».",
        quelle: "baselland"
    },
    {
        frage: "Mit welchem Begriff wird das Konzept des Campus beschrieben?",
        antworten: ["Vertikaler Campus", "Pavillon-Campus", "Ring-Campus", "Hallen-Campus"],
        erklaerung: "Die Hochschulen liegen im kubischen Gebäude übereinander, statt sich in die Fläche auszubreiten.",
        quelle: "baselTourismus"
    },
    {
        frage: "Was liegt im 3. Obergeschoss, das die Architekten Beletage nennen?",
        antworten: [
            "Die Bibliothek und gemeinschaftlich genutzte Bereiche",
            "Das Baulabor",
            "Die Büros der Institutsleitung",
            "Die Dachterrasse"
        ],
        erklaerung: "Die Beletage liegt hinter grossformatigen Verglasungen über dem Innenhof.",
        quelle: "baunetz"
    }
];

const geschosseElement = document.getElementById("geschosse");
const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total");
const fortschrittElement = document.getElementById("fortschritt");
const frageElement = document.getElementById("frage");
const antwortenElement = document.getElementById("antworten");
const rueckmeldungElement = document.getElementById("rueckmeldung");
const weiterButton = document.getElementById("weiter-button");
const resetButton = document.getElementById("reset-button");

let aktuelleFrage = 0;
let punkte = 0;
let ergebnisse = [];

function mischen(liste) {
    const kopie = [...liste];
    for (let i = kopie.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
    }
    return kopie;
}

function zeichneModell(neuesGeschoss = null) {
    geschosseElement.replaceChildren();
    FRAGEN.forEach((_, index) => {
        const geschoss = document.createElement("div");
        geschoss.className = "geschoss";
        if (ergebnisse[index] === true) {
            geschoss.classList.add("richtig");
            geschoss.classList.toggle("neu", index === neuesGeschoss);
        } else if (ergebnisse[index] === false) {
            geschoss.classList.add("falsch");
        } else if (index === aktuelleFrage) {
            geschoss.classList.add("aktuell");
        }
        geschosseElement.appendChild(geschoss);
    });
}

function zeigeFrage() {
    const eintrag = FRAGEN[aktuelleFrage];

    fortschrittElement.textContent = `Frage ${aktuelleFrage + 1} von ${FRAGEN.length}`;
    frageElement.textContent = eintrag.frage;
    rueckmeldungElement.replaceChildren();
    weiterButton.hidden = true;
    antwortenElement.replaceChildren();

    mischen(eintrag.antworten).forEach((text) => {
        const knopf = document.createElement("button");
        knopf.type = "button";
        knopf.className = "antwort";
        knopf.dataset.richtig = String(text === eintrag.antworten[0]);

        const beschriftung = document.createElement("span");
        beschriftung.textContent = text;
        knopf.appendChild(beschriftung);

        knopf.addEventListener("click", () => beantworte(knopf));
        antwortenElement.appendChild(knopf);
    });

    zeichneModell();
}

function markiere(knopf, text) {
    const marke = document.createElement("span");
    marke.className = "antwort-marke";
    marke.textContent = text;
    knopf.appendChild(marke);
}

function beantworte(gewaehlt) {
    const eintrag = FRAGEN[aktuelleFrage];
    const istRichtig = gewaehlt.dataset.richtig === "true";

    ergebnisse[aktuelleFrage] = istRichtig;
    if (istRichtig) {
        punkte++;
    }
    scoreElement.textContent = punkte;

    antwortenElement.querySelectorAll(".antwort").forEach((knopf) => {
        knopf.disabled = true;
        if (knopf.dataset.richtig === "true") {
            knopf.classList.add("korrekt");
            markiere(knopf, "✓ Richtig");
        } else if (knopf === gewaehlt) {
            knopf.classList.add("gewaehlt-falsch");
            markiere(knopf, "✕ Deine Antwort");
        } else {
            knopf.classList.add("gedaempft");
        }
    });

    zeigeRueckmeldung(eintrag, istRichtig);
    zeichneModell(aktuelleFrage);

    const letzteFrage = aktuelleFrage === FRAGEN.length - 1;
    weiterButton.textContent = letzteFrage ? "Resultat anzeigen" : "Nächste Frage";
    weiterButton.hidden = false;
    weiterButton.focus();
}

function zeigeRueckmeldung(eintrag, istRichtig) {
    const urteil = document.createElement("p");
    urteil.className = "urteil";
    urteil.textContent = istRichtig ? "Richtig. Das Geschoss steht." : "Nicht ganz. Dieses Geschoss bleibt Graukarton.";

    const erklaerung = document.createElement("p");
    erklaerung.textContent = eintrag.erklaerung;

    const quelle = QUELLEN[eintrag.quelle];
    const zeile = document.createElement("p");
    zeile.className = "quelle";
    const link = document.createElement("a");
    link.href = quelle.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = quelle.name;
    zeile.append("Quelle: ", link);

    rueckmeldungElement.replaceChildren(urteil, erklaerung, zeile);
}

function bilanzText() {
    const anteil = punkte / FRAGEN.length;
    if (anteil === 1) {
        return "Alle Geschosse stehen. Du kennst den Campus bis unters Dach.";
    }
    if (anteil >= 0.7) {
        return "Das Modell ist fast fertig. Ein paar Geschosse fehlen noch.";
    }
    if (anteil >= 0.4) {
        return "Der Rohbau steht. Mit Zurücksetzen startest du einen neuen Versuch.";
    }
    return "Da liegt noch viel Graukarton. Mit Zurücksetzen startest du einen neuen Versuch.";
}

function zeigeResultat() {
    aktuelleFrage = FRAGEN.length;
    fortschrittElement.textContent = "Resultat";
    frageElement.textContent = `${punkte} von ${FRAGEN.length} Punkten`;
    antwortenElement.replaceChildren();

    const bilanz = document.createElement("p");
    bilanz.className = "bilanz";
    bilanz.textContent = bilanzText();
    rueckmeldungElement.replaceChildren(bilanz);

    weiterButton.hidden = true;
    zeichneModell();
    frageElement.focus();
}

function naechsterSchritt() {
    if (aktuelleFrage < FRAGEN.length - 1) {
        aktuelleFrage++;
        zeigeFrage();
        frageElement.focus();
    } else {
        zeigeResultat();
    }
}

function zuruecksetzen() {
    aktuelleFrage = 0;
    punkte = 0;
    ergebnisse = [];
    scoreElement.textContent = punkte;
    zeigeFrage();
    frageElement.focus();
}

weiterButton.addEventListener("click", naechsterSchritt);
resetButton.addEventListener("click", zuruecksetzen);

totalElement.textContent = FRAGEN.length;
zeigeFrage();
