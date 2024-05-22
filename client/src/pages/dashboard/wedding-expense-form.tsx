import { useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import { useWeddingExpenses } from '../../context/wedding-expenses-context.tsx'

export const WeddingExpenseForm = () => {
  const [description, setDescription] = useState<string>('')
  const [cost, setCost] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [paymentMethod, setPaymentMethod] = useState<string>('')
  const { addExpense } = useWeddingExpenses()
  const { user } = useUser()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newExpense = {
      userId: user?.id ?? '',
      date: new Date(),
      description,
      cost: parseFloat(cost),
      category,
      paymentMethod
    }

    addExpense(newExpense)
    setDescription('')
    setCost('')
    setCategory('')
    setPaymentMethod('')
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Description:</label>
          <input
            type="text"
            required
            className="input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Amount:</label>
          <input
            type="number"
            required
            className="input"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Category:</label>
          <select
            required
            className="input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            <option value="Venue">Venue</option>
            <option value="Catering">Catering</option>
            <option value="Photography">Photography</option>
            <option value="Music">Music</option>
            <option value="Flowers">Flowers</option>
            <option value="Decorations">Decorations</option>
            <option value="Dress">Dress</option>
            <option value="Invitations">Invitations</option>
            <option value="Transportation">Transportation</option>
            <option value="Gifts">Gifts</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-field">
          <label>Payment Method:</label>
          <select
            required
            className="input"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select a Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="button">
          Add Expense
        </button>
      </form>
    </div>
  )
}

export default WeddingExpenseForm
