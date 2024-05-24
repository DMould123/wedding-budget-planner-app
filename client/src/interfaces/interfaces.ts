export interface EditableCellProps {
  value: any
  row: any
  column: any
  updateExpense: (rowIndex: number, columnId: string, value: any) => void
  editable: boolean
}

export interface WeddingExpense {
  _id?: string
  userId: string
  date: Date
  description: string
  cost: number
  category: string
  paymentMethod: string
}

export interface WeddingExpensesContextType {
  expenses: WeddingExpense[]
  addExpense: (expense: WeddingExpense) => void
  updateExpense: (id: string, updatedExpense: WeddingExpense) => void
  deleteExpense: (id: string) => void
}
