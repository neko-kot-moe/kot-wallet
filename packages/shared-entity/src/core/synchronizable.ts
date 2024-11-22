import {z} from 'zod'

export const synchronizableSchema = z.object({
  id: z.string().uuid(),

  createdAt: z.number().int().positive(),
  updatedAt: z.number().int().positive(),
})

export type Synchronizable = z.infer<typeof synchronizableSchema>
