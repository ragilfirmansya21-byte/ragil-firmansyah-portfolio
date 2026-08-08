# Ragil Firmansyah — Portfolio Design System

## Visual identity
An editorial, dark-navy engineering portfolio. The look is calm and technical: fine blueprint lines, measured spacing, muted steel-blue accents, and purposeful data panels. Photography and evidence are reserved for project stories; until supplied assets are available, technical graphic placeholders communicate the intended composition without pretending to be project evidence.

## Foundation
- **Palette:** `#03182d` primary background; `#061f39` secondary; `#092746` surface; `#f5f8fc` text; `#c0cede` secondary text; `#70a9ff` accent; `#849ab0` muted text.
- **Typography:** `Barlow Condensed` for headings when available, with `Arial Narrow` fallback; Inter/system sans for body copy. Display type uses `clamp()`; body is 16px/1.65.
- **Grid:** 12-column desktop grid within a 1320px container. Content gutters are 28px desktop, 20px mobile.
- **Spacing:** 8px base unit; sections use 104–144px desktop and 72px mobile vertical rhythm.

## Components
- **Navigation:** sticky, translucent navy surface with a compact mobile disclosure menu and a high-visibility CV action.
- **Cards:** dark surfaces, 1px steel border, 18px radius, small lift on hover; no heavy glass effects.
- **Buttons:** filled steel-blue primary action and understated outlined secondary action. Every interactive item has a visible focus ring and 44px minimum target.
- **Project visuals:** 16:10 panels, with original technical evidence prioritized once available. Placeholders use only abstract engineering linework and are explicitly marked.
- **Results:** numeric data is large, contextual, and conservatively labelled as calculated academic results where applicable.
- **Technical decoration:** low-opacity dot grids, rule lines, coordinates, and arcs never compete with content.

## Responsive and accessible behavior
The two-column editorial layouts collapse to one column below 800px. Navigation becomes a keyboard-accessible menu below 840px. Motion is limited to short fades/lifts and is disabled for `prefers-reduced-motion`. Semantic landmarks, meaningful headings, skip link, labelled buttons, visible focus states, and adequate contrast are included.
