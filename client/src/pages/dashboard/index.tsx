import { useUser } from '@clerk/clerk-react'
import { WeddingExpenseForm } from './WeddingExpenseForm'
import { WeddingExpenseList } from './WeddingExpenseList'
import './WeddingExpense.css'
import { useWeddingExpenses } from '../../context/wedding-expenses-context'
import { useMemo } from 'react'

export const Dashboard = () => {
  const { user } = useUser()
  const { expenses } = useWeddingExpenses()

  const weddingTotal = useMemo(() => {
    return expenses.reduce((total, expense) => total + expense.cost, 0)
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
