import {z} from 'zod'

export const categorySchema = z.object({
  id: z.string().uuid(),

  name: z.string(),
  icon: z.string(),
  color: z.string(),

  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Category = z.infer<typeof categorySchema>
