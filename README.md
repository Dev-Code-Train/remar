# React Vite Project

This project is a web application developed using React and Vite. The project structure is organized into different folders within src, containing reusable components, pages, and styles. Additionally, libraries like react-icons and aos (Animate On Scroll) were used to enhance the visual experience of the application. The project is fully responsive, adapting to different screen sizes.

## Installation

1. Clone the repository to your local machine:

2. Navigate to the project directory:
```bash
cd delref
```

3. Install the dependencies:
```bash
npm install
```

4. Check Node.js Configuration
```bash
node -v
npm -v
```

5. Start the development server:
```bash
npm run dev
```

# Project Structure

```bash
/delref
│
└── delref
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   │
├── components/
│   ├── FacebookWidget.jsx
│   ├── Header.jsx
│   └── WhatsappWidget.jsx
├── pages/
│   ├── Localitation.jsx
│   ├── Home.jsx
│   ├── Meet.jsx
│   ├── Products.jsx
├── styles/
│   ├── FacebookWidget.css
│   ├── WhatsappWidget.css
│   ├── Meet.css
│   ├── Home.css
│   ├── Localitation.css
│   ├── Footer.css
│   ├── Header.css
│   ├── index.css
├── assets/ (optional)
│   └── Pictures.png
└── App.jsx
├── package.json
├── vite.config.js
└── README.md
└── requirements.txt

```
# Adding AOS (Animate On Scroll) for Animations
AOS (Animate On Scroll) is a lightweight JavaScript library that allows you to add animation effects as you scroll through your page. Below are the steps to install and use AOS in your React project.

## Installation
To install AOS, you need to add it as a dependency using npm:
```bash
npm install aos
```
Or if you prefer using yarn:
```bash
yarn add aos
```

# Usage in a React Project

1. Import AOS and its CSS:
In the component where you want to use AOS, usually your main component (e.g., App.jsx or Home.jsx), import the library and its styles:

```bash
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
```

2. Initialize AOS:
Inside your component, use the `useEffect` hook to initialize AOS:

```bash
useEffect(() => {
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true, // Whether the animation should happen only once
  });
}, []);
```
There are various animations you can apply, such as:

*fade-up
*fade-down
*fade-left
*fade-right
*zoom-in
*zoom-out
For a full list of available animations, check the AOS documentation.
