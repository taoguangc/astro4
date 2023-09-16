import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
      category: z.string().optional(),
      tags: z.array(z.string()).optional(),
      author: z.string().optional(),
    }),
})

export const collections = { blog }
