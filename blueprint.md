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

## Current Plan: Initial Implementation

1.  **Update `index.html`:** Setup the document structure, import fonts, and add the main container.
2.  **Update `style.css`:** Implement the pastel theme, CSS variables, and global styles.
3.  **Update `main.js`:**
    *   Define the `RecipeCard` and `RecipeList` custom elements.
    *   Populate the app with 5 cute recipes.