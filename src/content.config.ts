import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    image: z.string().optional(),
    available: z.boolean().default(true),
  }),
});

export const collections = { productos };
