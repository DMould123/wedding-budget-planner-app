import React, { createContext, useContext, useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'

interface WeddingExpense {
  _id?: string
  userId: string
  date: Date
  description: string
  cost: number
  category: string
  paymentMethod: string
}

interface WeddingExpensesContextType {
  expenses: WeddingExpense[]
  addExpense: (expense: WeddingExpense) => void
  updateExpense: (id: string, updatedExpense: WeddingExpense) => void
  deleteExpense: (id: string) => void
}

export const WeddingExpensesContext = createContext<
  WeddingExpensesContextType | undefined
>(undefined)

export const WeddingExpensesProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [expenses, setExpenses] = useState<WeddingExpense[]>([])
  const { user } = useUser()

  const fetchExpenses = async () => {
    if (!user) return
    const response = await fetch(
      `http://localhost:3001/wedding-expenses/getAllByUserID/${user.id}`
    )

    if (response.ok) {
      const expenses = await response.json()
      setExpenses(expenses)
    }
  }

  useEffect(() => {
    fetchExpenses()
  }, [user])

  const addExpense = async (expense: WeddingExpense) => {
    const response = await fetch('http://localhost:3001/wedding-expenses', {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    try {
      if (response.ok) {
        const newExpense = await response.json()
        setExpenses((prev) => [...prev, newExpense])
      }
    } catch (err) {
      console.error(err)
    }
  }

  const updateExpense = async (id: string, updatedExpense: WeddingExpense) => {
    const response = await fetch(
      `http://localhost:3001/wedding-expenses/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify(updatedExpense),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    try {
      if (response.ok) {
        const updatedExpenseData = await response.json()
        setExpenses((prev) =>
          prev.map((expense) =>
            expense._id === id ? updatedExpenseData : expense
          )
        )
      }
    } catch (err) {
      console.error(err)
    }
  }

  const deleteExpense = async (id: string) => {
    const response = await fetch(
      `http://localhost:3001/wedding-expenses/${id}`,
      {
        method: 'DELETE'
      }
    )

    try {
      if (response.ok) {
        const deletedExpense = await response.json()
        setExpenses((prev) =>
          prev.filter((expense) => expense._id !== deletedExpense._id)
        )
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <WeddingExpensesContext.Provider
      value={{ expenses, addExpense, updateExpense, deleteExpense }}
    >
      {children}
    </WeddingExpensesContext.Provider>
  )
}

export const useWeddingExpenses = () => {
  const context = useContext(WeddingExpensesContext)

  if (!context) {
    throw new Error(
      'useWeddingExpenses must be used within a WeddingExpensesProvider'
    )
  }

  return context
}
