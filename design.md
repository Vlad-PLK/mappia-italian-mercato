# Ma' Pia SPA Design Mapping

## Source
- Stitch project: `Mappia` (`projects/3391996952163009816`)
- Screens used:
  - `Home - Ma' Pia (Vibrant & Minimalist)`
  - `Ma' Pia Traiteur & Catering (Light)`
  - `Suggestions du Jour - Ma' Pia`
  - `Epicerie - Ma' Pia (Vibrant)`

## Main Source Of Truth
`Trattoria Moderna` in this implementation means:
- bold sans display typography with an editorial serif accent and restrained modern sans body text
- warm crema paper background instead of flat white
- forest green and pomodoro red as the dominant contrast pair
- rounded cards, glassy navigation, and layered surfaces instead of hard divider lines
- asymmetry used sparingly through floating badges, rotated media, and offset callouts

## Section Merge Strategy
- `Home` sets the main visual identity and establishes the one-page narrative.
- `Suggestions` comes next to keep the strongest editorial/menu rhythm near the top.
- `Traiteur & Catering` broadens the offer with a lighter hospitality tone.
- `Epicerie` lands as the commerce grid, preserving the boutique browsing behavior.
- `Contact` closes with the store visit block from the home screen.

## Translation Notes
- The original Stitch screens use mixed font stacks and slightly different palettes. The SPA normalizes them into one coherent system rather than reproducing each screen literally.
- Product copy, menu items, imagery, and key labels were preserved from the Stitch-generated HTML.
- Borders were minimized to respect the project design guidance; hierarchy is mostly created through tone shifts, blur, spacing, and shadow.
