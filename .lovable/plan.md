

# LPT Edtech — IPMAT Coaching Landing Page

## Overview
A premium, high-converting landing page for LPT Edtech's IPMAT coaching programs in Jaipur. Single-page React app with 14 sections, fully responsive, using Tailwind CSS and Inter font.

## Sections to Build

1. **Sticky Navbar** — White header with LPT logo, ~70px height, shadow, sticky top
2. **Hero Section** — Two-column: banner image (left) + registration form card (right) with Name, Email, Phone, OTP, Class dropdown, and red "Register Now" CTA
3. **Success Programs** — 2x2 grid of course cards (Crash Course 2026, 2027 Offline, Finisher Batch, Foundation) with "Book Free Demo Class" buttons
4. **Why IPMAT** — 4 cards on purple-tinted gradient background explaining IPMAT benefits (Direct IIM Entry, Save Years, Integrated Curriculum, Limited Seats)
5. **CTA Banner #1** — Purple gradient banner with "Talk to experts" text + "Request a Callback" and phone number buttons
6. **Why Join LPT** — 3x2 grid of feature boxes (Highest IIM Calls, 24+ Years, Experienced Faculty, 1:1 Mentorship, AI LMS, Performance Tracking)
7. **Results Banner** — Full-width image placeholder with "IPMAT 2025 Results" overlay
8. **Early Winners** — Two-column: motivational text with CTA on left, image placeholder on right
9. **Program Checklist** — Two-column: 7 green-checkmark items on left, student image on right
10. **CTA Banner #2** — Same gradient style, "Book Free Counselling" button
11. **Testimonials** — 2x2 grid of purple gradient cards with gold quotes, student names, "Watch Video" buttons
12. **Centers in Jaipur** — 3 tabs (Mansarovar, Bapu Nagar, Vaishali Nagar) with address details, directions, and contact buttons
13. **FAQ Accordion** — 9 questions with animated expand/collapse, one open at a time
14. **Final CTA** — Multi-color gradient banner with "Request a Call Back" and phone buttons

## Design System
- Colors: Primary Purple (#6936F5), Dark Text (#36344D), Grey (#727586), Red CTA (#AE202C), Gold (#F7B551)
- Font: Inter from Google Fonts
- Max width: 1158px centered
- Responsive: desktop/tablet/mobile breakpoints
- All CTA buttons scroll to the registration form (#register)
- Hover transitions on all interactive elements

## Technical Approach
- Single `Index.tsx` page with component extraction for major sections
- React `useState` for tabs (Centers) and accordion (FAQ)
- Tailwind CSS custom colors added to config
- Smooth scroll behavior
- No backend needed — form is UI-only

