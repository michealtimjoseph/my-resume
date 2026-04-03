# Micheal Tim Joseph Enriquez — Web Resume
### IT 223 Web Systems and Technologies | Midterm PIT

---

## Live Site
> **GitHub Pages:** _[https://michealtimjoseph.github.io/my-resume/]_

## Video Demo
> **YouTube:** _[in progress..]_

---

## Project Overview

A fully interactive one-page web resume built with HTML5, CSS3, vanilla JavaScript, and jQuery. All resume content is loaded dynamically from a `data/resume.json` file using the `fetch()` API. The page includes multiple JavaScript and jQuery interactions that demonstrate core web development concepts covered in Modules 2, 3, 4, and 4.1.

---

## File Structure

```
my-resume/
├── index.html          ← single-page resume structure
├── css/
│   └── styles.css      ← all styling (dark/light theme)
├── js/
│   ├── script.js       ← vanilla JavaScript features
│   └── main.js         ← jQuery interactions
├── data/
│   └── resume.json     ← all resume content (data source)
├── assets/
│   └── profile.png     ← profile photo
├── README.md
└── PROMPTS.md          ← AI prompt log
```

---

## Features Implemented

### JavaScript Features (script.js)

| Feature | Description | JS Concepts Used |
|---|---|---|
| Prompt-based greeting | Asks visitor's name on load and personalises the greeting | variables, conditions, getElementById, textContent |
| Fetch + JSON rendering | Loads all resume content from resume.json and builds the DOM | fetch, Promise, createElement, appendChild |
| Form validation | Validates Name, Email, Message with red error feedback | conditions, getElementById, classList, regex |
| Typing animation | Cycles through job title phrases with typewriter effect | setInterval/setTimeout, string methods, DOM manipulation |

### jQuery Interactions (main.js)

| Interaction | jQuery Methods Used |
|---|---|
| Dark / Light mode toggle | `toggleClass()`, `text()`, `on('click')`, `hasClass()` |
| Animated skill bars | `each()`, `css()`, `data()`, `addClass()`, `removeClass()`, `text()` |
| Project category filter | `show()`, `hide()`, `addClass()`, `removeClass()`, `on('click')` |
| Active nav link | `addClass()`, `removeClass()`, `on('click')` |
| Scroll progress bar | `css()`, `scrollTop()`, `on('scroll')` |

### Bonus Add-ons (+5 pts)
- ✅ Dark mode toggle using `toggleClass()`
- ✅ Project filter buttons (Web / Mobile / UI)
- ✅ Animated skill bars triggered by button click

---

## Technical Requirements Checklist

### HTML (Module 2)
- [x] HTML5 boilerplate with correct structure
- [x] All required sections: About, Education, Experience, Skills, Projects, Contact
- [x] Navigation with anchor links (`href="#section"`)
- [x] Profile image with `alt` attribute
- [x] Contact form (Name, Email, Message, Send button)

### CSS (Module 3)
- [x] External CSS file (`css/styles.css`)
- [x] Element selectors (`html`, `ul`, `input`, `label`, `textarea`)
- [x] Class selectors (`.section-title`, `.project-card`, `.skill-bar-fill`)
- [x] ID selectors (`#navbar`, `#hero-name`, `#theme-toggle`)
- [x] Pseudo-classes (`:hover`, `:focus`)
- [x] Box model (padding, margin, borders on all cards and inputs)
- [x] Flexbox (nav, about section, contact chips, skills header)
- [x] CSS Grid (projects grid with `auto-fill` + `minmax`)

### JavaScript (Module 4)
- [x] External JS file (`js/script.js`)
- [x] At least 3 working features (4 implemented)
- [x] Uses variables, conditions (if/else), and DOM manipulation

### jQuery (Module 4.1)
- [x] jQuery loaded via CDN before own script files
- [x] All jQuery wrapped in `$(document).ready(function() { ... })`
- [x] At least 2 jQuery interactions (5 implemented)
- [x] Methods used: `text()`, `css()`, `addClass()`, `removeClass()`, `toggleClass()`, `show()`, `hide()`, `each()`, `data()`, `hasClass()`
- [x] `on('click', ...)` used for multiple interactions

---

## How to Run Locally

1. Clone or download this repository
2. Open the project folder in VS Code
3. Install the **Live Server** extension
4. Right-click `index.html` → **Open with Live Server**
5. The page opens at `http://127.0.0.1:5500`

> ⚠️ Do **not** open `index.html` by double-clicking it. The `fetch()` call for `resume.json` requires a local server (Live Server or GitHub Pages) to work.

---

## AI Use Declaration

**AI Tool Used:** Claude (claude.ai)

**Purpose of AI Use:**
- [x] Code generation
- [x] Debugging
- [x] Layout / UI ideas
- [x] Refactoring

**Where AI was used:**
Claude was used to help generate the initial file structures, JavaScript render functions, jQuery interactions, and CSS variable system. All AI-generated code was reviewed, tested, understood, and modified before inclusion in the final submission.

I confirm that I reviewed, tested, and understood the final code I submitted.

> See `PROMPTS.md` for the complete AI prompt log.
