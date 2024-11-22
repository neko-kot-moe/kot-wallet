import {z} from 'zod'

export const accountSchema = z.object({
  id: z.string().uuid(),

  name: z.string(),
  currency: z.string(),
  color: z.string(),

  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Account = z.infer<typeof accountSchema>
