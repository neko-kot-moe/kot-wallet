import {z} from 'zod'
import {accountSchema} from './account'

export const transactionSchema = z.object({
  id: z.string().uuid(),
  type: z.literal('transaction'),

  title: z.string(),
  amount: z.number().int().positive(),
  type: z.enum(['in', 'out']),

  sender: accountSchema.pick({id: true, type: true}),
  receiver: accountSchema.pick({id: true, type: true}).nullable(),

  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Transaction = z.infer<typeof transactionSchema>
