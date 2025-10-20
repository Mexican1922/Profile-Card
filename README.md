# 🪪 Profile Card

A simple and responsive personal profile website built with **HTML**, **CSS**, and a touch of **JavaScript**.  
The site includes multiple pages with smooth navigation and a clean, modern design.

🔗 **Live Demo:** [View Deployment](https://profile-card-0y91.onrender.com)

---


## Pages

- **Home (`index.html`)** — Landing page with a simple profile introduction and navigation.
- **About Me (`about.html`)** — Personal bio, goals, areas of improvement, and personal note to future self.
- **Contact (`contact.html`)** — A form or section where users can get in touch.

---

## Tech Stack

- **HTML5** — semantic structure  
- **CSS3** — responsive design  
- **JavaScript** — live timestamp  

---

## Features

- Semantic HTML (`<article>`, `<header>`, `<figure>`, `<section>`, `<nav>`)
- Live updating current time in **milliseconds** (matches `Date.now()` within a reasonable delta)
- Keyboard-accessible navigation
- Social links open in a new tab
- Accessible Markup with `aria` attributes and `data-testid` selectors for testing.  
- Fully Responsive Layout** that adapts to mobile, tablet, and desktop screens.  
- Smooth Scroll Navigation between sections of the page.


---

## Testing Notes

- Each visible element includes `data-testid` attributes to enable automated testing.
- Navigation links have `aria-label` for accessibility.
- Tested across different screen sizes to ensure responsiveness.


---

## Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mexican1922/Profile-Card.git
