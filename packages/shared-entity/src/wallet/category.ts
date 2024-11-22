import {synchronizableSchema} from '#/shared-entity/core'
import {z} from 'zod'

export const categorySchema = synchronizableSchema.extend({
  name: z.string(),
  icon: z.string(),
  color: z.string(),
})

export type Category = z.infer<typeof categorySchema>
