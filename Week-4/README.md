#  Week 4 – HTML & CSS Basics

> **Course:** ATP | **Student ID:** 24eg112d08  
> **Week:** 4 | **Topics:** HTML Structure & CSS Styling

---

## Table of Contents

1. [What is HTML?](#what-is-html)
2. [Basic HTML Structure](#basic-html-structure)
3. [Common HTML Tags](#common-html-tags)
4. [What is CSS?](#what-is-css)
5. [Ways to Add CSS](#ways-to-add-css)
6. [Common CSS Properties](#common-css-properties)
7. [CSS Selectors](#css-selectors)
8. [Box Model](#box-model)
9. [Code Examples](#code-examples)
10. [Practice Questions](#practice-questions)

---

##  What is HTML?

**HTML** stands for **HyperText Markup Language**.  
It is the **skeleton** of every webpage — it defines the structure and content.

- HTML uses **tags** like `<h1>`, `<p>`, `<div>` to organize content.
- Tags usually come in pairs: an **opening tag** `<tag>` and a **closing tag** `</tag>`.
- Files are saved with a `.html` extension.

---

##  Basic HTML Structure

Every HTML file follows this structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>
```

| Part | Purpose |
|------|---------|
| `<!DOCTYPE html>` | Tells the browser this is an HTML5 document |
| `<html>` | Root element that wraps everything |
| `<head>` | Contains metadata (title, links, etc.) — not visible on page |
| `<body>` | Contains everything visible on the webpage |

---

##  Common HTML Tags

```html
<!-- Headings (h1 is biggest, h6 is smallest) -->
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Smaller Heading</h3>

<!-- Paragraph -->
<p>This is a paragraph of text.</p>

<!-- Bold and Italic -->
<b>Bold text</b>
<i>Italic text</i>

<!-- Line Break and Horizontal Rule -->
<br />       <!-- Moves to next line -->
<hr />       <!-- Draws a horizontal line -->

<!-- Links -->
<a href="https://www.google.com">Click to visit Google</a>

<!-- Images -->
<img src="photo.jpg" alt="A description of the image" />

<!-- Unordered List (bullet points) -->
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>

<!-- Ordered List (numbered) -->
<ol>
  <li>Wake up</li>
  <li>Brush teeth</li>
  <li>Have breakfast</li>
</ol>

<!-- Division (used to group elements) -->
<div>
  <p>This paragraph is inside a div.</p>
</div>

<!-- Span (used to style inline text) -->
<p>My favorite color is <span style="color: red;">red</span>.</p>
```

---

##  What is CSS?

**CSS** stands for **Cascading Style Sheets**.  
It is used to **style and design** HTML elements — colors, fonts, layout, spacing, etc.

- Without CSS → plain, ugly text on a white background.
- With CSS → beautiful, designed, colorful webpages!

---

##  Ways to Add CSS

There are **3 ways** to add CSS:

### 1. Inline CSS (directly on the tag)
```html
<p style="color: blue; font-size: 18px;">This is blue text.</p>
```

### 2. Internal CSS (inside `<style>` tag in `<head>`)
```html
<head>
  <style>
    p {
      color: green;
      font-size: 16px;
    }
  </style>
</head>
```

### 3. External CSS (separate `.css` file)  Best Practice
```html
<!-- In your HTML file -->
<link rel="stylesheet" href="style.css" />
```
```css
/* In your style.css file */
p {
  color: purple;
  font-size: 16px;
}
```

---

##  Common CSS Properties

```css
/* Text & Font */
color: red;                  /* Text color */
font-size: 20px;             /* Text size */
font-family: Arial, sans-serif; /* Font type */
font-weight: bold;           /* Bold text */
text-align: center;          /* Align text: left, right, center */
text-decoration: underline;  /* Underline text */

/* Background */
background-color: yellow;    /* Background color */
background-image: url('bg.jpg'); /* Background image */

/* Size */
width: 300px;
height: 150px;

/* Spacing */
margin: 20px;       /* Space OUTSIDE the element */
padding: 10px;      /* Space INSIDE the element */

/* Border */
border: 2px solid black;
border-radius: 10px; /* Rounded corners */

/* Display */
display: block;
display: inline;
display: flex;       /* Modern layout */
```

---

##  CSS Selectors

Selectors tell CSS **which HTML element to style**.

```css
/* Tag Selector – styles ALL <p> tags */
p {
  color: blue;
}

/* Class Selector – styles elements with class="box" */
.box {
  background-color: lightblue;
  padding: 10px;
}

/* ID Selector – styles the ONE element with id="title" */
#title {
  font-size: 32px;
  color: darkred;
}
```

```html
<!-- How to use class and id in HTML -->
<p class="box">I have the box class.</p>
<h1 id="title">I have the title id.</h1>
```

>  **Rule:** Use `class` for multiple elements, `id` for only one unique element.

---

##  Box Model

Every HTML element is a **box** with 4 layers:

```
+-----------------------------+
|         MARGIN              |  ← Space outside the element
|  +-----------------------+  |
|  |       BORDER          |  |  ← The border around the element
|  |  +-----------------+  |  |
|  |  |    PADDING      |  |  |  ← Space inside the border
|  |  |  +-----------+  |  |  |
|  |  |  |  CONTENT  |  |  |  |  ← Your actual text/image
|  |  |  +-----------+  |  |  |
|  |  +-----------------+  |  |
|  +-----------------------+  |
+-----------------------------+
```

```css
div {
  width: 200px;
  padding: 20px;    /* space inside */
  border: 3px solid black;
  margin: 30px;     /* space outside */
}
```

---

##  Code Examples

### Example 1 – Simple Webpage with Styling

**index.html**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Week 4 Demo</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h1 id="main-title">Welcome to My Page</h1>
      <p class="intro">This is a beginner HTML & CSS example.</p>

      <h2>My Hobbies</h2>
      <ul>
        <li>Reading</li>
        <li>Coding</li>
        <li>Gaming</li>
      </ul>

      <a href="https://www.google.com" class="btn">Visit Google</a>
    </div>
  </body>
</html>
```

**style.css**
```css
/* Reset default spacing */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f0f4ff;
  color: #333;
}

.container {
  width: 600px;
  margin: 50px auto;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

#main-title {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 10px;
}

.intro {
  text-align: center;
  color: #666;
  margin-bottom: 20px;
}

ul {
  padding-left: 20px;
  margin-bottom: 20px;
}

li {
  margin-bottom: 8px;
}

.btn {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
}

.btn:hover {
  background-color: #2980b9;
}
```

---

### Example 2 – Card Component

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Card Example</title>
    <style>
      body {
        background: #eee;
        display: flex;
        justify-content: center;
        padding: 40px;
      }

      .card {
        background: white;
        width: 280px;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        text-align: center;
      }

      .card img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-bottom: 16px;
      }

      .card h2 {
        margin-bottom: 8px;
        color: #222;
      }

      .card p {
        color: #777;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <img src="https://i.pravatar.cc/80" alt="Profile Photo" />
      <h2>Ravi Kumar</h2>
      <p>Computer Science Student</p>
    </div>
  </body>
</html>
```

---

##  Practice Questions

###  Theory Questions

1. What does HTML stand for? What is its purpose?
2. What is the difference between `<head>` and `<body>` in HTML?
3. Name any 5 HTML tags and explain what each does.
4. What does CSS stand for? Why do we use it?
5. What are the 3 ways to apply CSS? Which is considered best practice and why?
6. What is the difference between `margin` and `padding`?
7. What is the Box Model in CSS?
8. What is the difference between a `class` selector and an `id` selector?

---

###  Coding Exercises

**Exercise 1:** Create an HTML page with:
- A heading with your name
- A paragraph describing yourself
- An unordered list of 3 of your hobbies
- A link to your favorite website

**Exercise 2:** Style the page from Exercise 1 using an external CSS file:
- Set a background color for the page
- Change the font color of the heading
- Add padding and a border to your list

**Exercise 3:** Create a **profile card** in HTML + CSS with:
- A circular profile picture (use any image)
- Your name as a heading
- A short bio as a paragraph
- A button that says "Contact Me"

**Exercise 4:** Explain what the following CSS code does:
```css
.box {
  width: 200px;
  height: 100px;
  background-color: coral;
  border: 2px solid black;
  border-radius: 15px;
  margin: 20px auto;
  text-align: center;
}
```

---

##  Useful Resources

| Resource | Link |
|----------|------|
| MDN Web Docs (HTML) | https://developer.mozilla.org/en-US/docs/Web/HTML |
| MDN Web Docs (CSS) | https://developer.mozilla.org/en-US/docs/Web/CSS |
| W3Schools HTML | https://www.w3schools.com/html/ |
| W3Schools CSS | https://www.w3schools.com/css/ |
| CSS Tricks | https://css-tricks.com |

---

##  Author

**Student ID:** 24eg112d08  
**GitHub:** [ATP_24eg112d08](https://github.com/24eg112d08/ATP_24eg112d08)  
**Week:** 4 – HTML & CSS Basics

---

> *"Every great website starts with a single `<html>` tag."*
