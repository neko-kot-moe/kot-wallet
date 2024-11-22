import {synchronizableSchema} from '#/shared-entity/core'
import {z} from 'zod'
import {accountSchema} from './account'
import {categorySchema} from './category'
import {originSchema} from './origin'

export const transactionSchema = synchronizableSchema.extend({
  title: z.string(),
  amount: z.number().int().positive(),
  type: z.enum(['expense', 'income', 'transfer']),

  accountId: accountSchema.shape.id,
  categoryId: categorySchema.shape.id.optional(),
  originId: originSchema.shape.id.optional(),
})

export type Transaction = z.infer<typeof transactionSchema>
