# Tammy Do — personal academic website

A six-page static site (no build step) styled after petrpokorny.com, with its own
"atmospheric entry" theme: deep-space navy, a meteor-trail ember accent, and a
Space Grotesk / Inter / JetBrains Mono type system.

## Files
```
index.html         Home — bio, latest research, news, GitHub callout
research.html      Research — four project write-ups (anchored: #meteoroids #luciole #apophis #cta1)
publications.html  Publications — peer-reviewed, conference, and technical writing
cv.html            CV — education, research, work, grants, volunteer (+ Download PDF button)
coding.html        Coding — projects with a language filter (Python / JS / SQL / Perl / Fortran)
contact.html       Contact — email, office, socials, map, conferences table
css/style.css      All styling and the theme tokens (top of the file)
js/main.js         Mobile menu toggle + coding-page language filter
images/            Put your images here (see below)
```

## Things to fill in
Search the pages for these markers — each is meant for you to edit:
- **`placeholder` / orange italic text** — a fact I couldn't get from your CV (office number, grant amount, etc.).
- **`lorem` / grey text** — sample copy to replace in your own words.
- **`href="#"`** — a link to add (ADS, LinkedIn, Google Scholar, ORCID, talk videos, live dashboard, GitHub repos).
- **`images/…` placeholders** — drop in real images and replace the placeholder `<div>` with an `<img>`:
  - `images/profile.jpg` (home portrait) — then in `index.html` swap the `.portrait__ph` div for `<img src="images/profile.jpg" alt="Tammy Do">`
  - `images/meteoroids.jpg`, `images/luciole.jpg`, `images/apophis.jpg`, `images/cta1.jpg` (research page)
- **`Academic_CV.pdf`** — drop your CV PDF in the root folder so the "Download PDF" button works.

## Hosting on GitHub Pages
1. Create a repo (for a user site, name it `tamidodo.github.io`; for a project site, any name works).
2. Push these files to the repo root.
3. In **Settings → Pages**, set the source to your default branch, root folder.
4. Your site goes live at `https://tamidodo.github.io/` (user site) or `https://tamidodo.github.io/<repo>/`.

To preview locally, just open `index.html` in a browser, or run `python3 -m http.server` in this folder.

## Changing the theme
All colors and fonts are CSS variables at the top of `css/style.css` (the `:root` block).
The signature accent is `--ember` / `--ember-hot`; change those two to re-skin the whole site.
