import {z} from 'zod'
import {accountSchema} from './account'
import {categorySchema} from './category'
import {originSchema} from './origin'

export const transactionSchema = z.object({
  id: z.string().uuid(),

  title: z.string(),
  amount: z.number().int().positive(),
  type: z.enum(['expense', 'income', 'transfer']),

  accountId: accountSchema.shape.id,
  categoryId: categorySchema.shape.id.optional(),
  originId: originSchema.shape.id.optional(),

  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Transaction = z.infer<typeof transactionSchema>
