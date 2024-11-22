import {synchronizableSchema} from '#/shared-entity/core'
import {z} from 'zod'

export const originSchema = synchronizableSchema.extend({
  name: z.string(),
  icon: z.string(),
  color: z.string(),
})

export type Origin = z.infer<typeof originSchema>
