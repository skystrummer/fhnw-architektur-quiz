# Atelier-Quiz Muttenz

Ein Quiz über das Architekturstudium und das Atelier am FHNW Campus Muttenz.
Gebaut nur mit HTML, CSS und JavaScript, ohne Installation und ohne externe Bibliotheken.

## Quiz starten

1. Ordner `fhnw-architektur-quiz` in VS Code öffnen (Datei > Ordner öffnen).
2. Im Explorer links `index.html` mit der rechten Maustaste anklicken.
3. «Reveal in File Explorer» bzw. «Im Datei-Explorer anzeigen» wählen.
4. `index.html` im Datei-Explorer doppelklicken. Das Quiz öffnet sich im Browser.

Mit der VS-Code-Erweiterung «Live Server» geht es auch über «Open with Live Server»:
Änderungen am Code erscheinen dann sofort im Browser.

## Funktionen

- 14 Fragen, für jedes Geschoss des Campus eine
- Punktestand: Jede richtige Antwort gibt 1 Punkt und setzt ein Geschoss aufs Modell
- Erklärung und Quelle nach jeder Antwort
- Button «Zurücksetzen» startet das Quiz jederzeit neu und mischt die Antworten

## Dateien

- `index.html`: Aufbau der Seite
- `css/styles.css`: Gestaltung
- `js/app.js`: Fragen, Quellen und Quizlogik

## Fragen ändern

Die Fragen stehen zuoberst in `js/app.js` in der Liste `FRAGEN`.
Die erste Antwort jeder Frage ist immer die richtige. Das Quiz mischt sie bei der Anzeige.
Die Anzahl Geschosse im Modell passt sich automatisch an die Anzahl Fragen an.
