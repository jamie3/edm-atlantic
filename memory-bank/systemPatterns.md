# System Patterns

## Architecture Overview

### Content-Driven Architecture

- Uses Nuxt Content for file-based content management
- Artist data stored as Markdown files in `/content/artists/`
- Dynamic routing for artist pages via `[...slug].vue`

### Component Structure

```
App (app.vue)
├── Navigation/Header
├── Pages (router-based)
│   ├── Home (index)
│   └── Artist Detail ([...slug])
│       ├── ArtistBio
│       ├── MusicList
│       └── SetsList
└── Footer
```

### Data Flow Pattern

1. **Content Layer**
   - Markdown files define artist content
   - Frontmatter for metadata (name, genres, etc.)
   - Body content for biography

2. **Query Layer**
   - `queryContent()` API to fetch artist data
   - Server-side and client-side queries

3. **Presentation Layer**
   - Vue components render content
   - Reactive UI with Vue 3 Composition API

4. **Interaction Layer**
   - Like/star actions stored in localStorage
   - Composable for like management

## Key Technical Patterns

### Like/Star System

```typescript
// Composable: useLikes.ts
- getLikes(itemId) → boolean
- toggleLike(itemId) → void
- getLikeCount(itemId) → number (from localStorage)
```

### Content Schema

```yaml
---
title: Artist Name
slug: artist-slug
bio: Short bio
genres: [House, Techno]
image: /images/artist.jpg
music:
  - title: Track Name
    url: soundcloud/spotify link
    year: 2024
sets:
  - title: Set Name
    url: mixcloud/youtube link
    date: 2024-01-15
---
# Full Biography (Markdown)
```

### Routing Pattern

- `/` - Homepage with artist grid
- `/artists/:slug` - Individual artist page

## Design Patterns

### Composables for Reusability

- `useLikes()` - Like management
- `useArtists()` - Artist data fetching (if needed)

### Component Composition

- Small, focused components
- Props for data passing
- Emits for events

### Responsive Design

- Mobile-first approach
- CSS Grid/Flexbox for layouts
- Breakpoints for different screen sizes
