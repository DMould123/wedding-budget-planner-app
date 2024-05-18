import mongoose from 'mongoose'

interface WeddingExpenses {
  userId: string
  date: Date
  description: string
  cost: number
  category: string
  paymentMethod: string
}

const weddingExpensesSchema = new mongoose.Schema<WeddingExpenses>({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  cost: { type: Number, required: true },
  category: { type: String, required: true },
  paymentMethod: { type: String, required: true }
})

const WeddingExpensesModel = mongoose.model<WeddingExpenses>(
  'WeddingExpenses',
  weddingExpensesSchema
)

export default WeddingExpensesModel
