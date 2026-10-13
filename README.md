# Anuvab Munshi — Personal Portfolio Website

A responsive, single-page portfolio website built with vanilla HTML5, CSS3, and JavaScript. Deployed on GitHub Pages.

🔗 **Live Demo:** [a-munshi.github.io/AMPortfolio](https://a-munshi.github.io/AMPortfolio/)

---

## Preview

<img width="2841" height="1488" alt="Screenshot 2024-07-13 094943" src="https://github.com/user-attachments/assets/2cb34ada-04b8-4a0b-8c84-170f639f308a" />

---

## Features

- **Fixed glassmorphic navbar** with scroll-spy — active tab updates automatically as the user scrolls through sections
- **Scroll-triggered animations** — About section content animates in/out using `getBoundingClientRect()` and CSS transitions
- **Skill icon grid** — icons display their technology name on hover via `data-name` attribute
- **Projects section** — cards with hover-reveal overlays linking to live demos and source repositories
- **Contact form** — client-side JavaScript validation for name, email, phone, and message fields before submission
- **Dynamic footer** — current year populated automatically via JavaScript
- **Responsive layout** — built with CSS Flexbox; adapts across desktop and mobile viewports
- **Smooth scroll navigation** — all anchor links use `scrollIntoView({ behavior: 'smooth' })`

---

## Sections

| Section | Description |
|---|---|
| Home | Hero section with name, About Me CTA button, and social media links |
| About | Animated photo and bio with a Resume PDF link |
| Skills | Hover-interactive icon grid for HTML, CSS, JS, Java, Python, C, C++, GitHub, Canva, Xilinx |
| Projects | Showcase cards for 5 web projects with live view and source code buttons |
| Contact | Validated contact form with name, email, phone, and message fields |

---

## Projects Showcased

- [Italian Restaurant Homepage](https://a-munshi.github.io/ItalianRestaurant/) — HTML/CSS landing page
- [Calculator](https://a-munshi.github.io/Calculator/) — Functional calculator with keyboard support
- [To-Do List](https://a-munshi.github.io/ToDoList/) — Task management web app
- [Netflix Homepage Clone](https://a-munshi.github.io/Netflix/) — HTML/CSS UI replica
- [Tic-Tac-Toe](https://a-munshi.github.io/Tic-Tac-Toe-game/) — Browser-based game

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (Flexbox, transitions, backdrop-filter) |
| Behaviour | Vanilla JavaScript (ES6+) |
| Icons | Font Awesome 6 |
| Hosting | GitHub Pages |

---

## Project Structure

```
AMPortfolio/
├── index.html          # Single-page layout — all five sections
├── styles.css          # All styles including animations and responsive rules
├── script.js           # Scroll-spy, section animations, form validation
├── Logo2.png           # Personal logo
├── AMabout.JPG         # About section photo
├── Get in Touch.avif   # Contact section illustration
├── BrolimoRegular.ttf  # Custom font (unused in production build)
├── icons/              # Technology skill icons (HTML, CSS, JS, Java, etc.)
└── Projimg/            # Project preview images for the Projects section
```

---

## Running Locally

No build tools required.

```bash
git clone https://github.com/A-Munshi/AMPortfolio.git
cd AMPortfolio
# Open index.html in any browser
open index.html
```

---

## Author

**Anuvab Munshi**
[LinkedIn](https://linkedin.com/in/anuvab-munshi) · [GitHub](https://github.com/A-Munshi)
