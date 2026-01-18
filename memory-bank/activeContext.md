# Active Context

## Current Focus
Building the initial EDM Atlantic website with all core features:
1. Artist showcase functionality
2. Biography display system
3. Music and sets listings
4. Like/star interaction system

## Recent Changes
- Initialized Nuxt.js project with Content module
- Set up Memory Bank documentation structure
- Defined technical architecture and patterns

## Next Steps
1. Create homepage with artist grid layout
2. Build artist detail page structure
3. Implement like/star composable
4. Create components for music and sets display
5. Add sample artist data for testing
6. Style the website with responsive design

## Active Decisions

### Content Structure
- Using Markdown files in `/content/artists/` directory
- Frontmatter contains structured data (music, sets arrays)
- Biography in Markdown body for rich formatting

### Like System
- localStorage-based (no backend needed initially)
- Unique IDs for each track/set
- Persistent across browser sessions

### Styling Approach
- Start with custom CSS
- Can add Tailwind later if desired
- Focus on clean, modern EDM aesthetic

## Considerations
- Need to ensure mobile responsiveness
- Star/like icons should be visually clear
- Consider adding artist images
- Music/sets should link to external platforms (SoundCloud, Mixcloud, etc.)
