import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    artists: defineCollection({
      type: 'page',
      source: 'artists/**',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        realName: z.string().optional(),
        bio: z.string().optional(),
        description: z.string().optional(),
        city: z.string().optional(),
        province: z.string().optional(),
        yearsActive: z.string().optional(),
        genres: z.array(z.string()).optional(),
        image: z.string().optional(),
        links: z.object({
          website: z.string().optional(),
          soundcloud: z.string().optional(),
          mixcloud: z.string().optional(),
          bandcamp: z.string().optional(),
          beatport: z.string().optional(),
        }).optional(),
        music: z.array(z.object({
          title: z.string(),
          url: z.string(),
          year: z.number().optional(),
        })).optional(),
        sets: z.array(z.object({
          title: z.string(),
          url: z.string(),
          date: z.string().optional(),
        })).optional(),
      })
    }),
  },
})
