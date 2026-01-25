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

### Technical Architecture

*   **Framework-less:** Pure HTML, CSS, JS.
*   **Web Components:**
    *   `<recipe-card>`: Displays individual recipe details.
    *   `<recipe-list>`: Container for the cards.
*   **Data:** Expanded array of recipe objects in `main.js`, categorized by meal time (morning, lunch, dinner).

## Current Plan: Affiliate Inquiry Form Implementation

1.  **Add Form to `index.html`:** Create a new section for the affiliate inquiry form using Formspree.
2.  **Style Form in `style.css`:** Apply the "Cute & Cozy" theme to the form elements (inputs, textarea, button).
3.  **Update `main.js` (Optional):** Add success/error handling or multi-language support for the form labels.
4.  **Verify:** Test the form layout and ensure it matches the overall aesthetic.