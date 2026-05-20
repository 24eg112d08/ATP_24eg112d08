# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# 🎨 Week 5 – CSS Deep Dive & Tailwind CSS

> **Course:** ATP | **Student ID:** 24eg112d08  
> **Week:** 5 | **Topics:** CSS (Advanced Basics) & Tailwind CSS

---

## 📚 Table of Contents

1. [CSS Recap](#css-recap)
2. [CSS Flexbox](#css-flexbox)
3. [CSS Grid](#css-grid)
4. [CSS Pseudo-classes & Pseudo-elements](#css-pseudo-classes--pseudo-elements)
5. [CSS Variables](#css-variables)
6. [What is Tailwind CSS?](#what-is-tailwind-css)
7. [Setting Up Tailwind CSS (CDN)](#setting-up-tailwind-css-cdn)
8. [Tailwind Utility Classes](#tailwind-utility-classes)
9. [Tailwind vs Plain CSS](#tailwind-vs-plain-css)
10. [Code Examples](#code-examples)
11. [Practice Questions](#practice-questions)

---

## 🔁 CSS Recap

Before diving deeper, here's a quick recap from Week 4:

```css
/* Selector types */
p { }          /* Tag selector */
.card { }      /* Class selector */
#title { }     /* ID selector */

/* Box Model */
margin    /* Space OUTSIDE the element */
padding   /* Space INSIDE the element */
border    /* Border around the element */
```

---

## 📐 CSS Flexbox

**Flexbox** is a CSS layout tool that makes it easy to arrange elements **in a row or column**.

### Enable Flexbox
```css
.container {
  display: flex;
}
```

### Key Flexbox Properties

```css
.container {
  display: flex;

  /* Direction */
  flex-direction: row;           /* row (default) | column | row-reverse | column-reverse */

  /* Alignment along main axis (horizontal for row) */
  justify-content: center;       /* flex-start | flex-end | center | space-between | space-around */

  /* Alignment along cross axis (vertical for row) */
  align-items: center;           /* flex-start | flex-end | center | stretch */

  /* Wrap items to next line if needed */
  flex-wrap: wrap;
  
  /* Gap between items */
  gap: 16px;
}

/* On child items */
.item {
  flex: 1;   /* Each item takes equal space */
}
```

### Flexbox Example
```html
<div class="flex-container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>
```

```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: #f0f0f0;
  padding: 20px;
}

.box {
  background-color: #3498db;
  color: white;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  text-align: center;
}
```

> 💡 **Think of Flexbox as:** arranging items on a single line (row or column).

---

## 🔲 CSS Grid

**CSS Grid** is for creating **two-dimensional layouts** (rows AND columns together).

```css
.grid-container {
  display: grid;

  /* Define 3 equal columns */
  grid-template-columns: 1fr 1fr 1fr;

  /* OR shorthand */
  grid-template-columns: repeat(3, 1fr);

  /* Define row height */
  grid-template-rows: 100px 200px;

  /* Gap between rows and columns */
  gap: 20px;
}
```

### Grid Example
```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 20px;
}

.grid-item {
  background-color: #e74c3c;
  color: white;
  padding: 30px;
  text-align: center;
  border-radius: 8px;
  font-size: 20px;
}
```

> 💡 **Flexbox vs Grid:**  
> Use **Flexbox** for 1D layouts (a row of buttons, a navbar).  
> Use **Grid** for 2D layouts (photo galleries, page layouts).

---

## 🎭 CSS Pseudo-classes & Pseudo-elements

### Pseudo-classes (state of an element)
```css
/* When mouse hovers over a button */
button:hover {
  background-color: darkblue;
}

/* First item in a list */
li:first-child {
  font-weight: bold;
}

/* Last item in a list */
li:last-child {
  color: gray;
}

/* Every other row in a table */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* When an input is focused (clicked) */
input:focus {
  border-color: blue;
  outline: none;
}
```

### Pseudo-elements (style part of an element)
```css
/* Style the first line of a paragraph */
p::first-line {
  font-weight: bold;
}

/* Add content before an element */
h2::before {
  content: "👉 ";
}

/* Add content after an element */
h2::after {
  content: " ✅";
}
```

---

## 🎨 CSS Variables

CSS Variables (also called **Custom Properties**) let you store values and reuse them.

```css
/* Define variables in :root (global) */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size-large: 24px;
  --border-radius: 8px;
}

/* Use variables anywhere */
.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-large);
  border-radius: var(--border-radius);
}

.success {
  color: var(--secondary-color);
}
```

> 💡 **Why use variables?** Change the value in one place and it updates everywhere!

---

## 🌬️ What is Tailwind CSS?

**Tailwind CSS** is a **utility-first CSS framework**.  
Instead of writing CSS yourself, you apply **pre-made classes directly in HTML**.

| Plain CSS | Tailwind CSS |
|-----------|-------------|
| You write CSS rules in a separate file | You use class names directly in HTML |
| `background-color: blue;` | `class="bg-blue-500"` |
| More files to manage | Everything in one place |
| Full control over naming | Uses a fixed naming system |

---

## ⚡ Setting Up Tailwind CSS (CDN)

The easiest way for beginners — just add this line to your `<head>`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Tailwind Demo</title>
    <!-- Add Tailwind via CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <h1 class="text-3xl font-bold text-blue-600 text-center mt-10">
      Hello, Tailwind!
    </h1>
  </body>
</html>
```

That's it — no installation needed for learning! ✅

---

## 🧰 Tailwind Utility Classes

### Typography
```html
<p class="text-sm">Small text</p>
<p class="text-base">Normal text</p>
<p class="text-lg">Large text</p>
<p class="text-xl">Extra large</p>
<p class="text-2xl">2x large</p>
<p class="text-3xl font-bold">Bold heading</p>
<p class="italic underline">Italic & underlined</p>
<p class="text-center">Centered text</p>
<p class="text-blue-500">Blue colored text</p>
<p class="text-red-600">Red colored text</p>
```

### Background Colors
```html
<div class="bg-blue-500">Blue background</div>
<div class="bg-green-400">Green background</div>
<div class="bg-yellow-300">Yellow background</div>
<div class="bg-gray-100">Light gray background</div>
<div class="bg-white">White background</div>
```

> 💡 **Color scale:** 100 (lightest) → 900 (darkest). E.g. `bg-blue-100`, `bg-blue-500`, `bg-blue-900`

### Spacing (Margin & Padding)
```html
<!-- Padding: p-{size} -->
<div class="p-4">Padding all sides</div>
<div class="px-4">Padding left & right</div>
<div class="py-4">Padding top & bottom</div>
<div class="pt-2 pb-6">Padding top 2, bottom 6</div>

<!-- Margin: m-{size} -->
<div class="m-4">Margin all sides</div>
<div class="mx-auto">Center horizontally</div>
<div class="mt-8 mb-4">Margin top & bottom</div>
```

> 💡 **Size scale:** 1 = 4px, 2 = 8px, 4 = 16px, 8 = 32px, 16 = 64px

### Width & Height
```html
<div class="w-full">Full width</div>
<div class="w-1/2">Half width</div>
<div class="w-64">Fixed width (256px)</div>
<div class="h-10">Fixed height (40px)</div>
<div class="min-h-screen">At least full screen height</div>
```

### Borders & Rounded Corners
```html
<div class="border">Thin border</div>
<div class="border-2 border-blue-500">Blue border</div>
<div class="rounded">Slightly rounded</div>
<div class="rounded-lg">More rounded</div>
<div class="rounded-full">Fully rounded (circle/pill)</div>
```

### Flexbox in Tailwind
```html
<div class="flex justify-center items-center gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Common flex classes -->
<!-- flex            → display: flex -->
<!-- flex-col        → flex-direction: column -->
<!-- justify-center  → justify-content: center -->
<!-- justify-between → justify-content: space-between -->
<!-- items-center    → align-items: center -->
<!-- gap-4           → gap: 16px -->
```

### Grid in Tailwind
```html
<div class="grid grid-cols-3 gap-4">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>

<!-- grid-cols-1, grid-cols-2, grid-cols-3, grid-cols-4 -->
```

### Hover Effects
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
  Hover Me
</button>
```

### Shadows
```html
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Normal shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">Extra large shadow</div>
```

---

## ⚖️ Tailwind vs Plain CSS

```html
<!-- Plain CSS approach -->
<div class="card">Hello</div>

<style>
  .card {
    background-color: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    text-align: center;
    font-size: 18px;
  }
</style>
```

```html
<!-- Tailwind approach (same result!) -->
<div class="bg-white p-6 rounded-xl shadow-lg text-center text-lg">
  Hello
</div>
```

> ✅ Both produce the same result — Tailwind just keeps everything in one place!

---

## 💻 Code Examples

### Example 1 – Responsive Navbar with Tailwind

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Tailwind Navbar</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-50">

    <!-- Navbar -->
    <nav class="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <h1 class="text-2xl font-bold">MyWebsite</h1>
      <ul class="flex gap-6 text-sm font-medium">
        <li><a href="#" class="hover:underline">Home</a></li>
        <li><a href="#" class="hover:underline">About</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
      </ul>
    </nav>

    <!-- Hero Section -->
    <div class="flex flex-col items-center justify-center h-64 text-center px-4">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">Welcome to Week 5!</h2>
      <p class="text-gray-500 text-lg">Learning CSS & Tailwind CSS</p>
      <button class="mt-6 bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold transition">
        Get Started
      </button>
    </div>

  </body>
</html>
```

---

### Example 2 – Card Grid with Tailwind

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Card Grid</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 p-10">

    <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">Our Team</h1>

    <div class="grid grid-cols-3 gap-6 max-w-4xl mx-auto">

      <!-- Card -->
      <div class="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
        <img src="https://i.pravatar.cc/80?img=1" class="rounded-full mx-auto mb-4" alt="User" />
        <h2 class="text-lg font-semibold text-gray-800">Ravi Kumar</h2>
        <p class="text-sm text-gray-500">Frontend Developer</p>
        <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full">
          View Profile
        </button>
      </div>

      <!-- Card -->
      <div class="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
        <img src="https://i.pravatar.cc/80?img=2" class="rounded-full mx-auto mb-4" alt="User" />
        <h2 class="text-lg font-semibold text-gray-800">Priya Sharma</h2>
        <p class="text-sm text-gray-500">UI Designer</p>
        <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full">
          View Profile
        </button>
      </div>

      <!-- Card -->
      <div class="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
        <img src="https://i.pravatar.cc/80?img=3" class="rounded-full mx-auto mb-4" alt="User" />
        <h2 class="text-lg font-semibold text-gray-800">Arjun Reddy</h2>
        <p class="text-sm text-gray-500">Backend Developer</p>
        <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full">
          View Profile
        </button>
      </div>

    </div>

  </body>
</html>
```

---

### Example 3 – Pure CSS Flexbox Layout

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Flexbox Layout</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }

      body {
        font-family: Arial, sans-serif;
        background: #f4f4f4;
      }

      header {
        background: #2c3e50;
        color: white;
        padding: 16px 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      nav a {
        color: white;
        text-decoration: none;
        margin-left: 20px;
        font-size: 14px;
      }

      nav a:hover { text-decoration: underline; }

      .cards {
        display: flex;
        justify-content: center;
        gap: 20px;
        padding: 40px;
        flex-wrap: wrap;
      }

      .card {
        background: white;
        padding: 24px;
        border-radius: 12px;
        width: 200px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        transition: transform 0.2s;
      }

      .card:hover { transform: translateY(-4px); }

      .card h3 { color: #2c3e50; margin-bottom: 8px; }
      .card p  { color: #777; font-size: 13px; }
    </style>
  </head>
  <body>

    <header>
      <h1>FlexSite</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </header>

    <div class="cards">
      <div class="card">
        <h3>🎨 Design</h3>
        <p>Beautiful UI with clean layouts</p>
      </div>
      <div class="card">
        <h3>💻 Code</h3>
        <p>Clean and maintainable code</p>
      </div>
      <div class="card">
        <h3>🚀 Deploy</h3>
        <p>Fast and reliable hosting</p>
      </div>
    </div>

  </body>
</html>
```

---

## 📝 Practice Questions

### ✅ Theory Questions

1. What is the difference between **Flexbox** and **Grid**? When would you use each?
2. What does `justify-content: space-between` do in Flexbox?
3. What does `display: grid; grid-template-columns: repeat(3, 1fr)` mean?
4. What is a CSS Variable? How do you define and use one?
5. What is Tailwind CSS? How is it different from writing plain CSS?
6. What does `mx-auto` do in Tailwind CSS?
7. What is the difference between `p-4` and `px-4` in Tailwind?
8. What is a pseudo-class? Give 2 examples.

---

### 💻 Coding Exercises

**Exercise 1:** Using **plain CSS Flexbox**, create a navigation bar with:
- A logo/brand name on the left
- Three navigation links on the right
- All items vertically centered

**Exercise 2:** Using **CSS Grid**, create a photo gallery with:
- 3 columns of equal width
- 6 colored boxes (use different background colors)
- A gap of 16px between all items

**Exercise 3:** Using **Tailwind CSS**, create a pricing card with:
- A white background, rounded corners, and a shadow
- A plan name (e.g., "Pro Plan")
- A price (e.g., "₹999/month")
- A list of 3 features
- A "Buy Now" button

**Exercise 4:** Recreate the following using Tailwind classes:
```css
/* Convert this to Tailwind */
.box {
  background-color: #10b981;  /* green */
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 9999px;
  text-align: center;
}
```

**Exercise 5:** Using CSS Variables, create a theme with:
- A `--primary-color`, `--bg-color`, and `--text-color` variable
- Apply them to a heading, a paragraph, and a button

---

## 🔗 Useful Resources

| Resource | Link |
|----------|------|
| CSS Flexbox Guide | https://css-tricks.com/snippets/css/a-guide-to-flexbox/ |
| CSS Grid Guide | https://css-tricks.com/snippets/css/complete-guide-grid/ |
| Tailwind CSS Docs | https://tailwindcss.com/docs |
| Tailwind Cheatsheet | https://nerdcave.com/tailwind-cheat-sheet |
| MDN CSS Reference | https://developer.mozilla.org/en-US/docs/Web/CSS |

---

## ✍️ Author

**Student ID:** 24eg112d08  
**GitHub:** [ATP_24eg112d08](https://github.com/24eg112d08/ATP_24eg112d08)  
**Week:** 5 – CSS Deep Dive & Tailwind CSS

---

> 💡 *"CSS is the art of making the web beautiful. Tailwind CSS is the shortcut to that art."*
