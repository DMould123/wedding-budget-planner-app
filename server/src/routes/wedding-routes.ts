import express, { Request, Response } from 'express'
import WeddingExpensesModel from '../schema/wedding-expenses'

const router = express.Router()

router.get('/getAllByUserID/:userId', async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const expenses = await WeddingExpensesModel.find({ userId: userId })
    if (expenses.length === 0) {
      return res.status(404).send('No expenses found for this user.')
    }
    res.status(200).send(expenses)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const newExpenseBody = req.body
    const newExpense = new WeddingExpensesModel(newExpenseBody)
    const savedExpense = await newExpense.save()
    res.status(200).send(savedExpense)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const newExpenseBody = req.body

    const expense = await WeddingExpensesModel.findByIdAndUpdate(
      id,
      newExpenseBody,
      { new: true }
    )

    if (!expense) return res.status(404).send('Expense not found.')

    res.status(200).send(expense)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const expense = await WeddingExpensesModel.findByIdAndDelete(id)
    if (!expense) {
      return res.status(404).send('Expense not found.')
    }
    res.status(200).send(expense)
  } catch (err) {
    res.status(500).send(err)
  }
})

export default router
