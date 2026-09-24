# LifeSim – Webseite (GitHub Pages)

Einseitige Download-Webseite für die Android-App **LifeSim**.

## Inhalt des Ordners

```
index.html                 Die Webseite
404.html                   Fehlerseite für falsche Adressen
.nojekyll                  Sorgt dafür, dass GitHub die Dateien unverändert ausliefert
robots.txt                 Erlaubt Suchmaschinen das Indexieren
assets/css/style.css       Gestaltung
assets/js/main.js          Menü auf dem Handy, Bildvergrößerung, Prüfsumme kopieren
assets/fonts/              Schriftart Poppins (lokal – keine Verbindung zu Google)
assets/img/                App-Icon, Vorschaubild für Social Media, Beispielbilder
downloads/LifeSim.apk      Die App
downloads/LifeSim_Anleitung.pdf   Die Anleitung als PDF
```

## In 5 Minuten online (über die GitHub-Webseite)

1. Auf github.com einloggen → oben rechts **+** → **New repository**.
2. Name eingeben, z. B. `lifesim` → **Public** auswählen → **Create repository**.
3. Auf der leeren Repository-Seite auf **uploading an existing file** klicken.
4. **Den INHALT dieses Ordners** (nicht den Ordner selbst) ins Browserfenster ziehen:
   `index.html`, `404.html`, `README.md`, `robots.txt`, `assets` und `downloads`.
   → **Commit changes**.
5. Die Datei `.nojekyll` ist unsichtbar (beginnt mit einem Punkt) und wird beim Ziehen oft nicht mitgenommen.
   Dann einfach im Repository **Add file → Create new file** wählen, als Namen `.nojekyll` eintragen, Inhalt leer lassen, **Commit changes**.
6. **Settings → Pages** öffnen. Unter „Build and deployment“:
   Source = **Deploy from a branch**, Branch = **main**, Ordner = **/ (root)** → **Save**.
7. Nach 1–2 Minuten ist die Seite erreichbar unter:
   `https://DEIN-GITHUB-NAME.github.io/lifesim/`

Tipp: Nennst du das Repository genau `DEIN-GITHUB-NAME.github.io`, liegt die Seite direkt unter `https://DEIN-GITHUB-NAME.github.io/`.

## Vor der Veröffentlichung ausfüllen (wichtig!)

1. **Impressum und Datenschutzerklärung** (unten auf der Seite, in `index.html`):
   Alle gelb markierten Platzhalter in `[eckigen Klammern]` durch deine echten Angaben ersetzen
   (Name, Anschrift, E-Mail, Datum). Für eine öffentliche Webseite aus Deutschland ist ein Impressum Pflicht.
   Die mitgelieferte Datenschutzerklärung ist eine Vorlage – lass sie im Zweifel rechtlich prüfen.
2. **Vorschaubild beim Teilen:** In `index.html` in der Zeile mit `og:image` die Adresse
   `https://DEIN-GITHUB-NAME.github.io/DEIN-REPOSITORY/assets/img/og-image.jpg` an deine echte Adresse anpassen.

## Neue App-Version veröffentlichen

1. Die neue APK **genau** `LifeSim.apk` nennen und in `downloads/` hochladen (alte Datei ersetzen).
2. In `index.html` anpassen: Version (Suche nach `1.0.0`), Dateigröße (Suche nach `2,1 MB`, kommt 2× vor)
   und die SHA-256-Prüfsumme.
   - Prüfsumme unter Windows: `certutil -hashfile LifeSim.apk SHA256`
   - Unter macOS/Linux: `shasum -a 256 LifeSim.apk`

## Hinweise

- GitHub erlaubt Dateien bis 100 MB (über die Weboberfläche bis 25 MB). Die APK hat 2,1 MB – kein Problem.
- Die Webseite nutzt keine Cookies, kein Tracking und keine externen Dienste.
- Die Beispielbilder sind Illustrationen im Stil der App. Echte Screenshots kannst du jederzeit in
  `assets/img/screens/` mit gleichem Dateinamen ersetzen (Hochformat, ideal ca. 555 × 1130 Pixel).
