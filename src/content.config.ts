import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z
    .object({
      title: z.string(),
      summary: z.string(),
      org: z.string().optional(),
      role: z.string(),
      start: z.string(),
      end: z.string().optional(),
      tags: z.array(z.enum(['design', 'data', 'ops', 'health', 'code'])).min(1),
      tools: z.array(z.string()).default([]),
      links: z
        .object({
          github: z.string().url().optional(),
          live: z.string().url().optional(),
          figma: z.string().url().optional(),
          press: z.string().url().optional(),
        })
        .default({}),
      kind: z.enum(['study', 'link']).default('study'),
      featured: z.boolean().default(false),
      order: z.number().default(99),
      outcomes: z
        .array(
          z.object({
            metric: z.string(),
            value: z.string(),
            basis: z.string().min(8, 'Every quantitative claim needs a stated basis.'),
          })
        )
        .default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
