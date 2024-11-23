import {z} from 'zod'

export const accountSchema = z.object({
  id: z.string().uuid(),
  type: z.literal('account'),

  name: z.string(),
  currency: z.string(),

  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Account = z.infer<typeof accountSchema>
