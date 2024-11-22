import {z} from 'zod'

export const originSchema = z.object({
  id: z.string().uuid(),

  name: z.string(),
  icon: z.string(),
  color: z.string(),

  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Origin = z.infer<typeof originSchema>
