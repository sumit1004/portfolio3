# Portfolio Website - Complete Code Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [HTML Structure (index.html)](#html-structure)
4. [CSS Styling (style.css)](#css-styling)
5. [JavaScript Functionality (script.js)](#javascript-functionality)
6. [How the Website Works](#how-the-website-works)
7. [Features & Animations](#features--animations)
8. [Live website Link](https://sumit1004.netlify.app/)

---

## Project Overview

This is a **Modern Portfolio Website** for Sumit, a Frontend Developer. The website showcases:
- Professional services and expertise
- Skills and experience
- Project portfolio
- Contact information

The website features smooth animations, responsive design, and interactive elements to create an engaging user experience.

---

## Project Structure

```
Portfolio - Copy/
├── index.html          (Main HTML structure)
├── style.css           (All styling and animations)
├── script.js           (JavaScript functionality)
└── assets/             (Images and media)
    ├── img.png         (Hero section profile image)
    ├── 1.jpg to 6.png  (Project images)
```

---

## HTML Structure (index.html)

### 1. **Document Setup & Meta Tags**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Sumit</title>
```

**Explanation:**
- `<!DOCTYPE html>` - Declares this as an HTML5 document
- `<meta charset="UTF-8">` - Ensures special characters are rendered correctly
- `<meta name="viewport">` - Makes the website responsive on mobile devices by setting the viewport scale to 1:1
- `<title>` - Sets the browser tab title

### 2. **CSS & Font Imports**

```html
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:...&display=swap" rel="stylesheet">
```

**Explanation:**
- `style.css` - Imports custom styling
- **Font Awesome** - External library for icons (Instagram, LinkedIn, GitHub icons)
- **Google Fonts (Poppins)** - Imports "Poppins" font family with multiple weights (100-900)

### 3. **Splash Screen Section**

```html
<div class="splash-screen" id="splashScreen">
    <div class="content-container">
        <div class="dots-container" id="dotsContainer">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
        <div class="typing-container" id="loadingContainer">
            <span class="typing-text" id="loadingText"></span>
        </div>
        <div class="typing-container" id="sumitContainer">
            <span class="typing-text" id="sumitText"></span>
        </div>
        <div class="zoom-s-overlay" id="zoomSOverlay"></div>
    </div>
</div>
```

**Purpose:** Creates a welcome animation screen that appears when the user first visits the website

**Animation Sequence:**
1. Three bouncing dots appear
2. "loading..." text is typed out
3. "Sumit" text is typed out
4. The letter "S" zooms out to white screen
5. Main website appears

**Logic:** Each element has an ID for JavaScript control:
- `dotsContainer` - Contains three dot elements
- `loadingContainer` - Shows loading text
- `sumitContainer` - Shows "Sumit" text
- `zoomSOverlay` - Creates the zoom effect overlay

### 4. **Navigation Bar**

```html
<nav class="navbar" id="navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#home">Sumit</a>
        </div>
        <ul class="nav-menu" id="navMenu">
            <li class="nav-item">
                <a href="#home" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#about" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#projects" class="nav-link">Projects</a>
            </li>
            <li class="nav-item">
                <a href="#contact" class="nav-link">Contact</a>
            </li>
        </ul>
        <ul class="nav-menu" id="navMenu">
            <li class="nav-social">
                <a href="https://www.instagram.com/sumit_keshri_04/" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </li>
        </ul>
        <div class="nav-toggle" id="navToggle">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </div>
</nav>
```

**Components:**
- **Logo** - "Sumit" text that links to home section
- **Navigation Links** - Links to Home, About, Projects, Contact
- **Social Links** - Instagram, LinkedIn, GitHub icons
- **Toggle Button** - Hamburger menu for mobile devices (hidden on desktop)

**Navigation Logic:**
- Uses hash links (`#home`, `#about`, etc.) to navigate to sections
- `target="_blank"` opens social links in new tab
- Toggle button shows/hides menu on mobile

### 5. **Hero Section**

```html
<div class="hero-section" id="hero">
    <div class="hero-left">
        <h1>Hi, I'm <span class="hero-highlight">Sumit</span></h1>
        <div class="dynamic-text-wrapper">
            <p class="dynamic-text">I'm a <span class="rotating-text" id="rotatingText">Website Developer</span></p>
        </div>
        <p class="hero-description">Crafting beautiful, functional, and user-centric digital experiences</p>
        <div class="cta-buttons">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="#contact" class="btn btn-secondary">Get In Touch</a>
        </div>
    </div>
    <div class="hero-right">
        <div class="image-wrapper">
            <img src="assets/img.png" alt="Sumit">
        </div>
    </div>
</div>
```

**Structure:**
- **Left Side (hero-left)** - Contains welcome message and text
- **Right Side (hero-right)** - Contains profile image
- **Rotating Text** - JavaScript changes text between different roles

**Key Elements:**
- `hero-highlight` - Styled in purple gradient
- `rotating-text` - Updated by JavaScript to show different job titles
- `cta-buttons` - Call-to-action buttons for navigation

**Layout Logic:** Uses `flex` with `gap: 6rem` to position text on left and image on right. On mobile, becomes `flex-direction: column`.

### 6. **About Section**

```html
<section class="about" id="about">
    <div class="section-header">
        <h2>About Me</h2>
        <div class="section-line"></div>
    </div>
    <div class="about-container">
        <div class="about-right">
            <h3>Frontend Developer & Creative Problem Solver</h3>
            <p>I'm a passionate developer...</p>
            <div class="experience-box">
                <h4>Experience</h4>
                <div class="experience-item">
                    <div class="exp-header">
                        <span class="exp-title">Website Developer</span>
                        <span class="exp-period">2023 - Present</span>
                    </div>
                    <p class="exp-company">Freelance</p>
                    <p class="exp-desc">Creating responsive websites...</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Components:**
- **Section Header** - Title with decorative line
- **About Text** - Professional description
- **Experience Box** - Lists work experience with details
  - `exp-title` - Job position
  - `exp-period` - Duration
  - `exp-company` - Employer/Company name
  - `exp-desc` - Job description

**Styling:**
- Experience items have bottom borders that remove on last item
- Colors: Company names in pink, periods in primary color

### 7. **Skills Section**

```html
<section id="skills">
    <div class="section-header">
        <h2>My Skills</h2>
        <div class="section-line"></div>
    </div>
    <div class="skills-container">
        <div class="skill-category">
            <h3 class="category-title">Frontend</h3>
            <div class="skill-tags">
                <span class="skill-tag">HTML</span>
                <span class="skill-tag">CSS</span>
                <span class="skill-tag">JAVASCRIPT</span>
                <span class="skill-tag">REACT</span>
            </div>
        </div>
        <!-- More categories... -->
    </div>
</section>
```

**Structure:**
- Multiple skill categories (Frontend, Styling, Backend, Database, etc.)
- Each category has tags showing individual skills
- Uses CSS Grid to layout categories responsively

**Categories Included:**
1. Frontend - HTML, CSS, JavaScript, React
2. Styling - CSS3, Tailwind CSS, Styled Components, Bootstrap
3. Backend - Node.js
4. Database - AWS, Firebase, Supabase
5. Data & Architecture - UI/Design, DB Modeling
6. Languages - C, C++, JavaScript
7. Tools - Git, Github, Wix, WordPress, Vercel, Netlify
8. Design & Creative - Product Design, Figma, Adobe XD
9. Other Skills - Graphics, Video Editing, Gaming

### 8. **Projects Section**

```html
<section class="projects" id="projects">
    <div class="section-header">
        <h2>My Projects</h2>
        <div class="section-line"></div>
    </div>
    <div class="projects-grid">
        <div class="project-card">
            <div class="project-image">
                <img src="assets/1.jpg" alt="Project 1">
                <div class="project-overlay">
                    <a href="https://sumit1004.github.io/NeuroLink/" class="project-link">View Project</a>
                </div>
            </div>
            <div class="project-content">
                <h3>NeuroLink</h3>
                <p>Project description...</p>
                <div class="project-tags">
                    <span class="tag">HTML5</span>
                    <span class="tag">CSS3</span>
                    <span class="tag">JavaScript</span>
                </div>
            </div>
        </div>
        <!-- More project cards... -->
    </div>
</section>
```

**Project Card Structure:**
- **Image Section** - Shows project preview with overlay
- **Content Section** - Title, description, technology tags
- **Overlay Effect** - Shows "View Project" link on hover
- **Technology Tags** - Lists technologies used

**6 Projects Included:**
1. NeuroLink - Alzheimer's care companion
2. Infinity Manager - Tournament management platform
3. Seva+ - Sanitation and crowd management
4. Infinity Esports - Gaming club website
5. ReliefNet - Disaster relief coordination
6. HealthSync - Health records management

### 9. **Contact Section**

```html
<section class="contact" id="contact">
    <div class="section-header">
        <h2>Let's Work Together</h2>
        <div class="section-line"></div>
    </div>
    <div class="contact-content">
        <p>I'm always interested in hearing about new projects...</p>
        <div class="contact-info">
            <a href="mailto:sumitkumar042006@gmail.com" class="contact-item">
                <i class="fas fa-envelope"></i>
                <div>
                    <h4>Email</h4>
                    <p>sumitkumar042006@gmail.com</p>
                </div>
            </a>
            <a href="tel:+919229923377" class="contact-item">
                <i class="fas fa-phone"></i>
                <div>
                    <h4>Phone</h4>
                    <p>+91 9229923377</p>
                </div>
            </a>
            <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <h4>Location</h4>
                    <p>Bhilai, chhattisgarh</p>
                </div>
            </div>
        </div>
        <a href="mailto:sumitkumar042006@gmail.com" class="btn btn-primary">Send Me an Email</a>
    </div>
</section>
```

**Contact Methods:**
- **Email** - Clickable link with `mailto:` protocol
- **Phone** - Clickable link with `tel:` protocol (opens phone app on mobile)
- **Location** - Address with map icon
- **CTA Button** - Email button below contact items

### 10. **Footer**

```html
<footer class="footer">
    <div class="footer-content">
        <div class="footer-section">
            <h4>Sumit</h4>
            <p>A passionate frontend developer...</p>
        </div>
        <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Connect</h4>
            <div class="social-links">
                <a href="https://www.instagram.com/sumit_keshri_04/" class="social-link">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/sumit-kumar-685954329/" class="social-link">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/sumit1004" class="social-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2025 Sumit. All rights reserved.</p>
    </div>
</footer>
```

**Footer Structure:**
- **About Section** - Brief bio
- **Quick Links** - Navigation links
- **Social Links** - Icon links to social media
- **Copyright** - Legal footer text

---

## CSS Styling (style.css)

### 1. **CSS Variables (Root Colors)**

```css
:root {
    --primary-color: #6366f1;      /* Purple - main brand color */
    --secondary-color: #ec4899;    /* Pink - accent color */
    --dark-bg: #000000;            /* Black background */
    --light-bg: #f8fafc;           /* Light gray background */
    --white: #ffffff;              /* White */
    --text-dark: #1e293b;          /* Dark gray text */
    --text-light: #64748b;         /* Light gray text */
    --border-color: #e2e8f0;       /* Light border color */
    --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);      /* Soft shadow */
    --shadow-lg: 0 20px 50px rgba(0, 0, 0, 0.15); /* Large shadow */
}
```

**Purpose:** Defines reusable color variables throughout the CSS using CSS Custom Properties. Makes it easy to change colors globally.

**Usage:** `color: var(--primary-color)` applies the purple color

### 2. **Global Styles**

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    background: var(--white);
    color: var(--text-dark);
    line-height: 1.6;
}
```

**Explanation:**
- **Box-sizing: border-box** - Padding/borders included in element width/height
- **Font-family: Poppins** - Modern, clean font from Google Fonts
- **overflow-x: hidden** - Prevents horizontal scrollbar
- **line-height: 1.6** - Improves text readability

### 3. **Splash Screen Styling**

```css
.splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--dark-bg);
    z-index: 9999;
}
```

**Purpose:** Creates full-screen overlay for opening animation

**Properties:**
- `position: fixed` - Stays in viewport, doesn't scroll
- `z-index: 9999` - Appears above all other elements
- `display: flex` with center justify/align - Centers content

### 4. **Dots Animation**

```css
.dots-container {
    display: flex;
    gap: 0.5rem;
    font-size: 3rem;
    opacity: 0;
    animation: fadeIn 0.5s ease-in forwards;
}

.dot {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #ffffff;
    animation: bounce 1.4s infinite ease-in-out;
}

@keyframes bounce {
    0%, 80%, 100% {
        transform: scale(0);
        opacity: 0.5;
    }
    40% {
        transform: scale(1);
        opacity: 1;
    }
}
```

**Logic:**
- Three dots displayed horizontally with gap
- **bounce animation:**
  - 0-40%: Scales from 0 to 1 (grows and appears)
  - 40-80%: Remains at scale 1 (stays large)
  - 80-100%: Scales back to 0 (shrinks away)
- Animation repeats infinitely every 1.4 seconds

**Effect:** Creates a wave-like bouncing motion

### 5. **Typing Animation**

```css
.typing-text {
    display: inline-block;
}

.typing-text::after {
    content: '|';
    animation: blink 1s infinite;
    margin-left: 2px;
}

.typing-text.typing-complete::after {
    animation: none;
    opacity: 0;
}

@keyframes blink {
    0%, 50% {
        opacity: 1;
    }
    51%, 100% {
        opacity: 0;
    }
}
```

**Explanation:**
- **::after pseudo-element** - Adds blinking cursor after text
- **blink animation:** Makes cursor appear/disappear
  - 0-50%: Cursor visible (opacity: 1)
  - 51-100%: Cursor invisible (opacity: 0)
- When `typing-complete` class added, cursor disappears

### 6. **Zoom S Animation**

```css
.zoom-s-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-bg);
    z-index: 10000;
    opacity: 0;
    pointer-events: none;
}

.zoom-s {
    font-weight: bold;
    color: #ffffff;
    transform: scale(1);
    transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.zoom-s.zooming {
    transform: scale(500);
    color: #ffffff;
}
```

**Animation Sequence:**
- Overlay starts transparent (`opacity: 0`)
- When `.zooming` class added, letter "S" scales from 1 to 500
- **cubic-bezier timing** creates smooth, accelerating motion
- **scale(500)** makes letter huge (fills entire screen)

### 7. **Navbar Styling**

```css
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem 0;
    z-index: 1000;
    border-bottom: 1px solid var(--border-color);
}
```

**Features:**
- `position: fixed` - Stays at top while scrolling
- **backdrop-filter: blur** - Glass-morphism effect (frosted glass look)
- `rgba(255, 255, 255, 0.95)` - Slightly transparent white
- `z-index: 1000` - Below splash screen (9999) but above content

### 8. **Navigation Links with Underline Animation**

```css
.nav-link {
    color: var(--text-dark);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}
```

**Hover Effect Logic:**
- **::after element** creates invisible bottom border (width: 0)
- On hover, width animates to 100%
- **linear-gradient** creates purple-to-pink color transition
- Smooth 0.3s transition creates sliding effect

### 9. **Mobile Navigation Toggle**

```css
.nav-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
}

@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 60px;
        flex-direction: column;
        transition: 0.3s;
    }
    
    .nav-menu.active {
        left: 0;
    }
}
```

**Mobile Menu Logic:**
- Hamburger menu hidden on desktop (`display: none`)
- Shows on mobile (`@media max-width: 768px`)
- Menu positioned off-screen (`left: -100%`)
- When `.active` class added, slides into view (`left: 0`)

### 10. **Hero Section Layout**

```css
.hero-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, var(--light-bg) 0%, #fafbfc 100%);
    gap: 6rem;
    padding: 6rem 2rem 2rem;
}

.hero-left {
    flex: 0 1 500px;
}

.hero-right {
    flex: 1;
}
```

**Layout Logic:**
- **flex layout** with 6rem gap between left and right
- `min-height: 100vh` - Full screen height
- **gradient background** - Subtle light color transition
- Left side fixed width (500px), right side flexible
- On mobile: `flex-direction: column` stacks vertically

### 11. **Hero Title with Gradient Text**

```css
.hero-left h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.2;
    color: #1e1b4b;
}

.hero-highlight {
    background: linear-gradient(135deg, #7c3aed, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

**Typography Techniques:**
- **clamp()** - Responsive font size (2rem minimum, 5vw ideal, 4rem maximum)
- **Gradient text** - Uses background-clip to create purple gradient text
- `-webkit-` prefix for browser compatibility
- **line-height: 1.2** - Tight spacing for heading

### 12. **Rotating Text Animation**

```css
.rotating-text {
    color: #7c3aed;
    font-weight: 700;
    animation: fadeInOut 4s infinite;
}

@keyframes fadeInOut {
    0% { opacity: 1; }
    48% { opacity: 1; }
    50% { opacity: 0; }
    52% { opacity: 0; }
    100% { opacity: 1; }
}
```

**Animation Logic:**
- Text stays visible for 48% of 4s cycle (1.92s)
- Quick transition at 50% (text disappears)
- Invisible from 50-52% (text switches in JavaScript)
- Text reappears after 52%
- JavaScript updates text content during invisible phase

### 13. **CTA Buttons**

```css
.btn {
    padding: 0.875rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
}

.btn-primary {
    background: linear-gradient(135deg, #5b21b6, #7c3aed);
    color: var(--white);
    box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);
}

.btn-primary:hover {
    background: linear-gradient(135deg, #6d28d9, #8b5cf6);
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(124, 58, 237, 0.4);
}

.btn-secondary {
    background: transparent;
    color: #5b21b6;
    border: 2px solid #5b21b6;
}

.btn-secondary:hover {
    background: #f5f3ff;
    transform: translateY(-2px);
    border-color: #7c3aed;
}
```

**Button Styles:**
- **Primary Button:**
  - Purple gradient background
  - White text
  - Box shadow for depth
  - On hover: Darker gradient + upward movement + bigger shadow
  
- **Secondary Button:**
  - Transparent background with purple border
  - Purple text
  - On hover: Light purple background + upward movement

**Hover Effects:**
- `transform: translateY(-2px)` - Moves button up slightly
- Enhanced shadow - Makes button appear to lift

### 14. **About Section Cards**

```css
.experience-box {
    background: var(--light-bg);
    padding: 2rem;
    border-radius: 12px;
    margin: 2rem 0;
    border-left: 4px solid var(--primary-color);
}

.experience-item {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
}

.experience-item:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
}
```

**Card Design:**
- Light gray background with padding
- **Accent border-left** - Purple left border for visual interest
- Items separated by subtle borders
- Last item has no bottom border
- Creates clean, organized card layout

### 15. **Skills Section Grid**

```css
.skills-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
}

.skill-tag {
    display: inline-block;
    background: linear-gradient(135deg, #1e3a8a, #2d3748);
    color: var(--white);
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(30, 58, 138, 0.2);
}

.skill-tag:hover {
    background: linear-gradient(135deg, #2d5a9b, #3d4860);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(30, 58, 138, 0.3);
}
```

**Grid Layout:**
- **auto-fit** - Creates flexible number of columns
- **minmax(280px, 1fr)** - Columns minimum 280px, grow equally
- Automatically responsive (no media queries needed)

**Skill Tags:**
- Dark blue gradient background
- Hover effect: Lighter color + lift up + bigger shadow
- Smooth transitions (0.3s)

### 16. **Projects Section**

```css
.project-card {
    background: var(--white);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
    animation: fadeInUp 1s ease forwards;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
    opacity: 1;
}
```

**Card Hover Effects:**
- **Card lifts up** - `transform: translateY(-10px)`
- **Shadow increases** - Appears to float
- **Overlay appears** - Semi-transparent dark layer shows over image
- **Link becomes visible** - "View Project" button visible only on hover

**Image Effects:**
```css
.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}
```

- Image zooms 10% on hover
- Creates dynamic, engaging effect

### 17. **Contact Section**

```css
.contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background: var(--white);
    border-radius: 12px;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
    text-decoration: none;
    color: inherit;
}

.contact-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.contact-item i {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}
```

**Contact Cards:**
- White cards with shadows
- Icons in purple color
- Hover effect: Lift up + enhanced shadow
- Clickable (email/phone links work as expected)

### 18. **Footer Styling**

```css
.footer {
    background: var(--dark-bg);
    color: var(--white);
    padding: 3rem 2rem 1rem;
}

.social-link {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(99, 102, 241, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-color);
    transition: all 0.3s ease;
}

.social-link:hover {
    background: var(--primary-color);
    color: var(--white);
    transform: translateY(-3px);
}
```

**Footer Design:**
- Dark background (black)
- White text for contrast
- Circular social icons with transparent purple background
- On hover: Solid purple background + white icons + upward movement

### 19. **Responsive Design - Tablet (768px)**

```css
@media (max-width: 768px) {
    .hero-section {
        flex-direction: column;
        text-align: center;
        padding: 4rem 1rem 1rem;
        gap: 2rem;
    }

    .nav-menu {
        position: fixed;
        left: -100%;
        top: 60px;
        width: 100%;
        transition: 0.3s;
    }
    
    .nav-menu.active {
        left: 0;
    }
}
```

**Tablet Changes:**
- Hero section stacks vertically (column)
- Navigation menu becomes fullscreen mobile menu
- Reduced padding and gaps

### 20. **Responsive Design - Mobile (480px)**

```css
@media (max-width: 480px) {
    .hero-left h1 {
        font-size: clamp(1.5rem, 4vw, 2.5rem);
    }

    .btn {
        padding: 0.75rem 1.5rem;
        font-size: 0.9rem;
    }

    .skill-tag {
        padding: 0.5rem 0.9rem;
        font-size: 0.75rem;
    }
}
```

**Mobile Changes:**
- Reduced font sizes using smaller clamp() values
- Smaller button padding
- Smaller skill tags
- Optimized for small screens

### 21. **Animations**

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

**Animation Library:**
- **fadeInUp** - Elements fade in while moving up
- **slideInLeft** - Content slides in from left
- **slideInRight** - Content slides in from right
- Duration typically 1s with ease timing

---

## JavaScript Functionality (script.js)

### 1. **Email Function**

```javascript
function sendEmail() {
    const email = 'sumitkumar042006@gmail.com';
    const subject = "Let's Connect";
    const body = "Hi Sumit,\n\nI would like to connect with you.\n\nBest regards";
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
}
```

**Logic:**
- Creates mailto link with email, subject, and body
- `encodeURIComponent()` escapes special characters
- `window.location.href` opens default email client
- User sees pre-filled email in their email application

### 2. **RotatingText Class**

```javascript
class RotatingText {
    constructor() {
        this.texts = [
            'Website Developer', 
            'Problem Solver', 
            'UI/UX Designer', 
            'Creative Developer', 
            'Frontend Expert', 
            'Backend Enthusiast'
        ];
        this.textElement = document.getElementById('rotatingText');
        this.currentIndex = 0;
        this.isDeleting = false;
        this.speed = 100;
        this.deleteSpeed = 50;
        this.delayBetweenWords = 2000;
        
        this.init();
    }
    
    init() {
        setTimeout(() => this.typeEffect(), 500);
    }
    
    typeEffect() {
        const currentText = this.texts[this.currentIndex];
        const displayText = this.textElement.textContent;
        
        if (!this.isDeleting) {
            // Typing
            if (displayText.length < currentText.length) {
                this.textElement.textContent = currentText.substring(0, displayText.length + 1);
                setTimeout(() => this.typeEffect(), this.speed);
            } else {
                // Pause before deleting
                this.isDeleting = true;
                setTimeout(() => this.typeEffect(), this.delayBetweenWords);
            }
        } else {
            // Deleting
            if (displayText.length > 0) {
                this.textElement.textContent = displayText.substring(0, displayText.length - 1);
                setTimeout(() => this.typeEffect(), this.deleteSpeed);
            } else {
                // Move to next text
                this.isDeleting = false;
                this.currentIndex = (this.currentIndex + 1) % this.texts.length;
                setTimeout(() => this.typeEffect(), 500);
            }
        }
    }
}
```

**Algorithm Explanation:**

1. **Array of Roles** - 6 different job titles to cycle through
2. **Typing Phase:**
   - Adds one character every 100ms
   - Stops when full text displayed
   - Pauses for 2 seconds (delayBetweenWords)
   
3. **Deleting Phase:**
   - Removes one character every 50ms (faster than typing)
   - Stops when text empty
   - Moves to next text in array
   
4. **Cycling:**
   - Uses `% this.texts.length` to loop back to first text
   - Creates infinite cycle

**Example Timeline:**
```
0s - "Website Developer" (typing)
3s - pause
5s - delete "Website Developer"
7s - "Problem Solver" (typing)
10s - pause
etc...
```

### 3. **SplashScreen Class - Main Animation Controller**

```javascript
class SplashScreen {
    constructor() {
        this.dotsContainer = document.getElementById('dotsContainer');
        this.loadingContainer = document.getElementById('loadingContainer');
        this.sumitContainer = document.getElementById('sumitContainer');
        this.loadingText = document.getElementById('loadingText');
        this.sumitText = document.getElementById('sumitText');
        
        this.init();
    }
    
    init() {
        this.showDots();
    }
```

**Purpose:** Controls the entire splash screen sequence

**Step 1: Show Dots**

```javascript
showDots() {
    this.dotsContainer.classList.add('active');
    
    setTimeout(() => {
        this.hideDots();
    }, 2000);
}
```

**Logic:**
- Adds `active` class to show dots (CSS makes them visible)
- After 2 seconds, calls hideDots()

**Step 2: Hide Dots**

```javascript
hideDots() {
    this.dotsContainer.classList.add('hidden');
    
    setTimeout(() => {
        this.dotsContainer.style.display = 'none';
        this.showLoading();
    }, 1000);
}
```

**Logic:**
- Adds `hidden` class (CSS fades them out over 0.5s)
- After 1 second (fade complete), hides element completely
- Then shows loading text

**Step 3: Show Loading**

```javascript
showLoading() {
    this.loadingContainer.classList.add('visible');
    this.typeText('loading...', this.loadingText, () => {
        setTimeout(() => {
            this.hideLoading();
        }, 1000);
    });
}
```

**Logic:**
- Makes loading container visible
- Types out "loading..." using helper function
- Callback executes after typing completes
- Waits 1 second, then hides loading

**Step 4: Hide Loading**

```javascript
hideLoading() {
    this.loadingContainer.classList.add('hidden');
    
    setTimeout(() => {
        this.loadingContainer.style.display = 'none';
        this.showSumit();
    }, 500);
}
```

**Logic:**
- Fades out loading text
- Then shows "Sumit" text

**Step 5: Show Sumit**

```javascript
showSumit() {
    this.sumitContainer.classList.add('visible');
    this.typeText('Sumit', this.sumitText, () => {
        setTimeout(() => {
            this.sumitText.classList.add('typing-complete');
            setTimeout(() => {
                this.zoomS();
            }, 1000);
        }, 500);
    });
}
```

**Logic:**
- Shows sumit container
- Types "Sumit"
- Removes cursor (typing-complete class)
- Calls zoomS() for zoom animation

### 4. **Zoom S Animation - Complex Positioning**

```javascript
zoomS() { 
    const zoomSOverlay = document.getElementById('zoomSOverlay');
    const sumitText = this.sumitText.textContent;
    
    // Get computed styles
    const computedStyle = window.getComputedStyle(this.sumitText);
    const fontSize = computedStyle.fontSize;
    const fontWeight = computedStyle.fontWeight;
    const fontFamily = computedStyle.fontFamily;
    
    // Get positions
    const containerRect = this.sumitContainer.getBoundingClientRect();
    const textRect = this.sumitText.getBoundingClientRect();
    
    // Extract "S"
    const sLetter = sumitText.charAt(0);
```

**Explanation:**

1. **Get Styles:**
   - `window.getComputedStyle()` retrieves actual CSS values
   - Gets font size, weight, and family

2. **Get Positions:**
   - `getBoundingClientRect()` gets exact position on screen
   - Need to position zoom element at same location as original text

3. **Extract Letter:**
   - Takes first character "S" from "Sumit"

**Measuring S Width:**

```javascript
    // Create temporary element to measure "S" width
    const tempS = document.createElement('span');
    tempS.style.position = 'absolute';
    tempS.style.visibility = 'hidden';
    tempS.style.fontSize = fontSize;
    tempS.style.fontWeight = fontWeight;
    tempS.style.fontFamily = fontFamily;
    tempS.textContent = sLetter;
    document.body.appendChild(tempS);
    const sWidth = tempS.offsetWidth;
    document.body.removeChild(tempS);
```

**Why This Works:**
- Creates invisible "S" in DOM to measure its actual width
- Different fonts have different character widths
- Need exact width for proper positioning

**Creating Zoom Element:**

```javascript
    const zoomS = document.createElement('span');
    zoomS.className = 'zoom-s';
    zoomS.textContent = sLetter;
    zoomS.style.fontSize = fontSize;
    zoomS.style.fontWeight = fontWeight;
    zoomS.style.fontFamily = fontFamily;
    zoomS.style.color = '#ffffff';
    zoomS.style.position = 'absolute';
    
    // Position at same location as original
    zoomS.style.left = textRect.left + 'px';
    zoomS.style.top = textRect.top + 'px';
    
    // Hide original
    this.sumitContainer.style.opacity = '0';
    
    // Add to overlay
    zoomSOverlay.appendChild(zoomS);
    zoomSOverlay.classList.add('active');
```

**Positioning Strategy:**
- Overlay becomes visible (`active` class)
- New zoom element positioned exactly where original was
- Original hidden (opacity: 0)
- To user, looks like transition is seamless

**Triggering Zoom:**

```javascript
    setTimeout(() => {
        zoomS.classList.add('zooming');
        
        setTimeout(() => {
            zoomSOverlay.classList.add('zoomed');
            
            setTimeout(() => {
                this.showHomeSection();
            }, 100);
        }, 700);
    }, 50);
```

**Timing:**
- 50ms delay before adding `zooming` class
- CSS transition: `1.5s cubic-bezier` starts scaling to 500
- After 700ms (zoom halfway done), background turns white
- After 100ms more, shows home section

### 5. **Show Home Section**

```javascript
showHomeSection() {
    const splashScreen = document.getElementById('splashScreen');
    const homeSection = document.getElementById('homeSection');
    
    // Hide splash
    splashScreen.style.display = 'none';
    
    // Show home
    homeSection.classList.add('visible');
    
    // Initialize navbar
    this.initNavbar();
    
    // Start rotating text
    new RotatingText();
    
    // Initialize smooth scrolling
    this.initSmoothScroll();
}
```

**Logic:**
- Removes splash screen from DOM
- Shows home section with fade-in animation
- Initializes all interactive features

### 6. **Navbar Initialization**

```javascript
initNavbar() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when link clicked
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}
```

**Hamburger Menu Logic:**
- Click toggle button: Toggles `active` class on menu
- CSS shows menu when `active` class present
- When any link clicked: Menu automatically closes
- Users don't see mobile menu after navigation

### 7. **Smooth Scrolling**

```javascript
initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
```

**How It Works:**

1. **Selector** - `a[href^="#"]` matches all links starting with #
2. **Prevent Default** - Stops instant jump to section
3. **Find Target** - Uses link href to find section element
4. **Smooth Scroll** - Animated scroll to element
   - `behavior: 'smooth'` - Animates scroll
   - `block: 'start'` - Aligns to top of viewport

**Example:**
- User clicks `<a href="#about">`
- Browser finds `<section id="about">`
- Page smoothly scrolls to that section

### 8. **Type Text Helper Function**

```javascript
typeText(text, element, callback) {
    let index = 0;
    element.textContent = '';
    
    const typingInterval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(typingInterval);
            if (callback) {
                callback();
            }
        }
    }, 150);
}
```

**Typing Algorithm:**
- Starts with empty text
- Every 150ms, adds one character
- Updates `textContent` to add new character
- When done, clears interval and executes callback

**Example for "Sumit":**
```
0ms   - ""
150ms - "S"
300ms - "Su"
450ms - "Sum"
600ms - "Sumi"
750ms - "Sumit"
800ms - Callback executes
```

### 9. **Page Load Initialization**

```javascript
document.addEventListener('DOMContentLoaded', () => {
    new SplashScreen();
});
```

**Explanation:**
- `DOMContentLoaded` fires when HTML fully parsed
- Creates new SplashScreen instance
- Starts animation sequence
- **Note:** Waits for DOM ready, doesn't wait for images/CSS to load

---

## How the Website Works

### Complete User Journey

1. **Page Load**
   - HTML loaded
   - CSS applied
   - JavaScript runs DOMContentLoaded listener
   - New SplashScreen() created

2. **Splash Screen (0-11 seconds)**
   - 0-2s: Three dots bounce animation
   - 2-3s: Dots fade out
   - 3-4s: "loading..." text types
   - 4-5s: Loading text fades out
   - 5-6s: "Sumit" text types
   - 6-7s: Cursor removed
   - 7-8.5s: "S" zooms to 500 scale
   - 8.5-9s: Background turns white
   - 9s+: Home section appears

3. **Home Section Display**
   - Navbar shows at top
   - Hero section fades in
   - Rotating text starts (Website Developer → Problem Solver, etc.)
   - Images start loading

4. **User Interaction**
   - Clicks navigation links → Smooth scrolls to section
   - Clicks hamburger menu → Mobile menu opens
   - Hovers buttons → Animate up + shadow increases
   - Hovers project cards → Image zooms, overlay appears
   - Clicks social icons → Opens in new tab

5. **Contact**
   - Clicks email link → Opens email client
   - Clicks phone link → Opens phone app (mobile) or does nothing (desktop)
   - Clicks address → No action currently

---

## Features & Animations

### Animation Summary

| Animation | Duration | Trigger | Effect |
|-----------|----------|---------|--------|
| Bounce | 1.4s | Page load | Dots bounce infinitely |
| Typing | 150ms per char | Page load | Text types out character-by-character |
| Blink | 1s | Typing | Cursor blinks during typing |
| fadeInOut | 4s | After splash | Rotating text fades in/out |
| fadeInUp | 1s | Section load | Sections slide up while fading |
| Zoom S | 1.5s | After "Sumit" | Letter "S" scales 1 → 500 |
| Underline | 0.3s | Hover nav | Link underline appears |
| Button Lift | 0.3s | Hover button | Button moves up + shadow grows |
| Image Zoom | 0.3s | Hover project | Project image zooms 10% |
| Card Lift | 0.3s | Hover card | Card moves up + shadow grows |

### Responsive Breakpoints

- **Desktop (1200px+)** - Full layout, 2-3 column grids
- **Tablet (769px-1199px)** - Adjusted spacing, 2-column grids
- **Mobile (481px-768px)** - Stacked layout, hamburger menu
- **Small Mobile (480px and below)** - Minimal padding, single column

### Color Scheme

| Purpose | Color | RGB |
|---------|-------|-----|
| Primary | #6366f1 | Purple |
| Secondary | #ec4899 | Pink |
| Dark BG | #000000 | Black |
| Light BG | #f8fafc | Off-white |
| Text Dark | #1e293b | Dark gray |
| Text Light | #64748b | Light gray |

### Performance Optimizations

1. **CSS Animations** - Use `transform` and `opacity` (GPU accelerated)
2. **Will-change** - Hints browser about animations
3. **Backdrop-filter** - Glass morphism effect on navbar
4. **Lazy Loading** - Images load on demand
5. **Smooth Scrolling** - Native browser implementation

---

## Summary

This portfolio website is a modern, interactive showcase that demonstrates:

- **Frontend Skills**: HTML5, CSS3 advanced animations, vanilla JavaScript
- **Web Design**: Responsive layout, color theory, typography
- **User Experience**: Smooth animations, intuitive navigation, accessibility
- **JavaScript Patterns**: Classes, event listeners, async operations, DOM manipulation
- **Performance**: Optimized animations, responsive design, semantic HTML

The website successfully combines visual appeal with functionality, creating an engaging experience for visitors.

