import { useUser } from '@clerk/clerk-react'
import { WeddingExpenseForm } from './wedding-expense-form'
import { WeddingExpenseList } from './wedding-expense-list'
import './wedding-expense.css'

export const Dashboard = () => {
  const { user } = useUser()

  return (
    <>
      <div className="dashboard-container">
        <h1> Welcome {user?.firstName}! Here Are Your Wedding Finances:</h1>
        <WeddingExpenseForm />
        <WeddingExpenseList />
      </div>
    </>
  )
}
