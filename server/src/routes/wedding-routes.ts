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

export default router
