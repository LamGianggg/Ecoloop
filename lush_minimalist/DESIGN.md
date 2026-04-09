# Design System Document

## 1. Overview & Creative North Star: "The Living Breath"
This design system rejects the rigid, boxy constraints of traditional web grids in favor of a "Living Breath" philosophy. Our goal is to create a digital ecosystem that feels organic, airy, and inherently calm. We move beyond "Modern Eco" by treating the interface as a series of soft, interconnected landscapes rather than a collection of containers.

### The Creative North Star
To achieve a high-end editorial feel for a Gen Z audience, we utilize **Intentional Asymmetry** and **Tonal Depth**. Elements should feel like they are floating in a gentle breeze—overlapping slightly, utilizing generous negative space (Apple-inspired), and avoiding the harshness of traditional structural lines. We prioritize the "feel" of the space over the density of the information.

---

## 2. Colors & Surface Philosophy
The palette is rooted in botanical tones, designed to reduce cognitive load and eye strain.

### Surface Hierarchy & Nesting (The "No-Line" Rule)
**Crucial Directive:** 1px solid borders are strictly prohibited for sectioning. Definition must be achieved through background shifts.
- **Base Layer:** Use `surface` (#fcfeea) for the primary canvas.
- **Nested Layers:** Use `surface_container_low` (#f8fce2) for large content blocks and `surface_container` (#f2f6da) for interactive modules.
- **Elevation through Tone:** By nesting a `surface_container_lowest` (#ffffff) card inside a `surface_container_low` section, you create a natural lift that feels sophisticated and clean.

### The Glass & Gradient Rule
To prevent the UI from feeling "flat" or "cheap," we employ two signature treatments:
1.  **Soft Radiance:** Use gradients for hero sections and primary CTAs transitioning from `primary` (#2e7238) to `primary_container` (#abf4ac) at a 135-degree angle.
2.  **Glassmorphism:** For floating navigation or overlays, use `surface` at 80% opacity with a `20px` backdrop-blur. This allows the pastel background gradients to bleed through, maintaining a sense of place.

---

## 3. Typography: Editorial Authority
We pair the geometric clarity of **Plus Jakarta Sans** for high-impact moments with the approachable rhythm of **Manrope** for functional reading.

- **Display (Plus Jakarta Sans):** Used for "Hero" moments. Large scales (`display-lg` at 3.5rem) with tight letter-spacing (-0.02em) create an editorial, premium feel.
- **Headlines (Plus Jakarta Sans):** These are your anchors. Use `headline-lg` to introduce major sections with a soft, confident presence.
- **Body & Labels (Manrope):** Chosen for its high legibility and friendly "Gen Z" curves. `body-lg` (1rem) is our standard for storytelling, ensuring the interface never feels cramped.

The hierarchy should be extreme: very large displays contrasted with generous whitespace and smaller, well-spaced body copy.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too heavy for a pastel ecosystem. We use light to define space.

- **The Layering Principle:** Depth is "built," not "dropped." Stack containers from darkest/lowest to brightest/highest to guide the eye toward interactive elements.
- **Ambient Shadows:** When a float is required (e.g., a floating Action Button), use an ultra-diffused shadow:
  - `box-shadow: 0 20px 40px rgba(52, 58, 35, 0.06);` (using a tint of `on_surface`).
- **Ghost Borders:** If a boundary is required for accessibility, use `outline_variant` (#b6bd9d) at **15% opacity**. This creates a "suggestion" of a line rather than a hard stop.

---

## 5. Components

### Buttons & Interaction
- **Primary Button:** Rounded `full` (pill-shape). Background: `primary` (#2e7238). Text: `on_primary` (#ffffff). Apply a subtle inner-glow on hover.
- **Secondary Button:** `secondary_container` (#c7ef98). No border. Soft and inviting.
- **Tertiary/Ghost:** No background. Use `primary` text with an icon.

### Cards & Lists
- **The "No-Divider" Rule:** Never use horizontal lines to separate list items. Use 24px–32px of vertical padding and subtle background color shifts (`surface_container_low` vs `surface_dim`) to define rows.
- **Cards:** Utilize the `xl` corner radius (3rem) for a friendly, approachable aesthetic. Content should have at least 40px of internal padding to breathe.

### Inputs & Form Fields
- **Fields:** Use `surface_container_highest` (#e5ecc9) for the input track.
- **Corners:** `md` (1.5rem) to maintain the soft language.
- **Focus State:** A 2px "Ghost Border" using `primary` at 40% opacity.

### Additional Signature Components
- **Floating Navigation:** A pill-shaped dock at the bottom of the screen using Glassmorphism (`surface` @ 80% + blur) to maximize screen estate and feel modern.
- **Eco-Progress Chips:** Small, `full` rounded chips using `tertiary_container` (#f1fc87) to highlight sustainable metrics or tags.

---

## 6. Do’s and Don’ts

### Do
- **Do** use asymmetrical layouts where text is offset from imagery to create an editorial "magazine" feel.
- **Do** lean into the `xl` (3rem) corner radius for high-level containers.
- **Do** use "Plus Jakarta Sans" for numbers and data—it feels more premium and intentional.
- **Do** ensure illustrations have a "flat" style but use the `secondary` and `accent` tones to stay on-brand.

### Don't
- **Don't** use pure black (#000000) for text. Always use `on_background` (#343a23) to keep the vibe soft.
- **Don't** cram content. If a section feels "full," double the padding.
- **Don't** use standard Material shadows. They are too grey and "heavy" for this pastel palette.
- **Don't** use sharp 90-degree corners anywhere. Even small elements like checkboxes must have a `sm` (0.5rem) radius.