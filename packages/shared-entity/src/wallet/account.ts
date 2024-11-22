import {synchronizableSchema} from '#/shared-entity/core'
import {z} from 'zod'

export const accountSchema = synchronizableSchema.extend({
  name: z.string(),
  currency: z.string(),
  color: z.string(),
})

export type Account = z.infer<typeof accountSchema>
