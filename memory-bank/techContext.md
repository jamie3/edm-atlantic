# Technical Context

## Technology Stack

### Core Framework

- **Nuxt.js**: Vue 3 based meta-framework
- **Vue 3**: Composition API for reactive components
- **TypeScript**: Type-safe development

### Content Management

- **@nuxt/content**: File-based CMS for managing artist content
- **Markdown**: Content format for artist bios and information

### Styling

- **CSS3**: Custom styling
- Can add Tailwind CSS if needed for rapid development

### State Management

- **localStorage**: Browser-based persistence for likes/stars
- **Composables**: Vue composables for reactive state management

## Project Structure

```
edm-atlantic/
├── app/
│   ├── app.vue              # Root component
│   ├── components/          # Vue components
│   └── pages/               # Route pages
├── content/                 # Content files (Markdown)
│   └── artists/            # Artist content
├── composables/            # Vue composables (utilities)
├── public/                 # Static assets
└── memory-bank/           # Documentation
```

## Key Dependencies

- `nuxt`: Core framework
- `@nuxt/content`: Content module
- `vue`: Frontend framework
- `@nuxtjs/tailwind` (optional): Utility-first CSS

## Development Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run generate`: Generate static site
- `npm run preview`: Preview production build

## Browser Requirements

- Modern browsers (Chrome, Firefox, Safari, Edge)
- localStorage support required for likes feature
- ES6+ JavaScript support

## Development Environment

- Node.js (latest LTS)
- npm package manager
- Git for version control
