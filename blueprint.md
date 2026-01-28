# Project Blueprint: Cute Cooking Recommendation App (Yummy Recipes)

## Overview

This document outlines the plan for transforming the project into a "Cute Cooking Recommendation App" (오늘 뭐 먹지?). The goal is to provide users with a curated list of simple, delicious, and visually cute recipes. The design will focus on a "kawaii" aesthetic using pastel colors, rounded shapes, and playful typography.

## Implemented Features (v1 - Cooking App)

### Style and Design

*   **Theme:** "Cute & Cozy" (귀엽고 포근한 느낌).
*   **Color Palette:**
    *   Background: Cream/Ivory (`#FFFDF5`)
    *   Primary: Soft Pink (`#FFB7B2`)
    *   Secondary: Mint Green (`#E2F0CB`)
    *   Accent: Warm Yellow (`#FFDAC1`)
    *   Text: Soft Brown (`#6D4C41`)
*   **Typography:** Playful Korean fonts (e.g., 'Gamja Flower' or similar rounded fonts via Google Fonts).
*   **Visuals:**
    *   Card-based layout for recipes.
    *   Use of Emojis as food placeholders (to keep it lightweight and cute).
    *   Soft drop shadows and rounded corners (border-radius > 16px).

### Features

*   **Recipe List:** Displays 5 curated recipes.
*   **Meal Time Randomizer:**
    *   Buttons for **Morning (아침)**, **Lunch (점심)**, **Dinner (저녁)**.
    *   Clicking a button randomly selects 5 recipes suitable for that meal time from a larger pool.
*   **Internationalization (Global Support):**
    *   Language toggle button (🇰🇷 Korean ↔ 🇺🇸 English).
    *   Translates all UI elements and recipe content dynamically.
*   **Google AdSense Integration:**
    *   Added verification meta tag and auto-ads script.
    *   Included `ads.txt` for publisher verification.
    *   **Content Optimization:** Added `privacy.html`, `about.html`, and static SEO content to `index.html`.
*   **Google Analytics (GA4):**
    *   Integrated Global Site Tag (gtag.js) across all HTML pages for traffic analysis.
*   **Microsoft Clarity:**
    *   Added Clarity tracking script for heatmaps and user session recording.
*   **Guestbook (Comment Section):**
    *   Replaced the affiliate inquiry form with a local storage-based guestbook.
    *   Users can leave a nickname and comment (stored in browser).
*   **Recipe Card:** Each card shows:
    *   Food Icon (Emoji)
    *   Title (e.g., "Bear Omurice")
    *   Short Description
    *   Difficulty Level (using stars or hearts)
    *   Cooking Time
    *   **Ingredients List (Expandable):** Click to reveal required ingredients.
*   **Interactive Elements:**
    *   Hover effects on cards (scaling, bouncing).
    *   **Click Interaction:** Cards expand to show details with a smooth animation.

### SEO Optimization (v1.1)

*   **Domain Migration:** Updated all site URLs, canonical links, and sitemap references to `https://classicvibe.org/`.
*   **Redirects (`_redirects`):** Created a Cloudflare Pages redirect rule to forward `product1-360.pages.dev` traffic to `https://classicvibe.org/` to prevent duplicate content issues.
*   **Robots.txt:** Added explicit `Sitemap` directive with the new domain.
*   **About Page (`about.html`):** Added comprehensive meta tags (Description, Canonical, Open Graph, Twitter Cards).
*   **Accessibility:** Added `role="img"` and `aria-label` to recipe emojis in `main.js` for better screen reader support and SEO.

### SEO & Performance (v1.2)

*   **Custom 404 Page:** Created `404.html` with a user-friendly design and "Back to Home" button to reduce bounce rates.
*   **Security Headers (`_headers`):** Implemented `Strict-Transport-Security` (HSTS) and other security headers for Cloudflare Pages.
*   **Performance:** Optimized Google Fonts loading using `media="print"` (non-blocking) strategy to eliminate render-blocking resources.
*   **Metadata:**
    *   Updated `H1` tag in `index.html` to target keywords ("캐릭터 도시락", "쉬운 레시피") more effectively.
    *   Added `apple-touch-icon` and ensured proper favicon linkage across all pages.

### GEO Optimization (v1.3)

*   **Semantic HTML:**
    *   Refactored `<recipe-card>` to use `<article>` tags for better content definition.
    *   Structured philosophy content in `about.html` using `<ul>` lists for improved readability by AI agents.
*   **Structured Data (Schema Markup):**
    *   **FAQPage:** Added JSON-LD Schema for the new FAQ section in `index.html`.
    *   **Organization:** Added JSON-LD Schema to `about.html` to establish authority and identity.
    *   **WebPage:** Added JSON-LD Schema to `privacy.html`.
*   **Content Enhancements (Answer Engine Format):**
    *   **FAQ Section:** Implemented a "Frequently Asked Questions" section using `<details>` and `<summary>` tags in `index.html` to provide direct answers.
    *   **Philosophy List:** Converted narrative text into structured lists in `about.html`.

### Technical Architecture

*   **Framework-less:** Pure HTML, CSS, JS.
*   **Web Components:**
    *   `<recipe-card>`: Displays individual recipe details.
    *   `<recipe-list>`: Container for the cards.
*   **Data:** Expanded array of recipe objects in `main.js`, categorized by meal time (morning, lunch, dinner).