import { useUser } from '@clerk/clerk-react'
import { WeddingExpenseForm } from './wedding-expense-form'
import { WeddingExpenseList } from './wedding-expense-list'
import './wedding-expense.css'
import { useWeddingExpenses } from '../../context/wedding-expenses-context'
import { useMemo } from 'react'

export const Dashboard = () => {
  const { user } = useUser()
  const { expenses } = useWeddingExpenses()

  const weddingTotal = useMemo(() => {
    let totalAmount = 0
    expenses.forEach((expense) => {
      totalAmount += expense.cost
    })
    return totalAmount
  }, [expenses])

  return (
    <div className="dashboard-container">
      <h1>Welcome {user?.firstName}! Here Are Your Wedding Finances:</h1>
      <WeddingExpenseForm />
      <div>Wedding Budget Left: {weddingTotal} SEK</div>
      <WeddingExpenseList />
    </div>
  )
}
