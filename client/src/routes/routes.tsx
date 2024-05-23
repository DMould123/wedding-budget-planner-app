import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages/dashboard'
import { Auth } from '../pages/auth'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { WeddingExpensesProvider } from '../context/wedding-expenses-context'

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <WeddingExpensesProvider>
          <Dashboard />
        </WeddingExpensesProvider>
      }
    />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/auth" element={<Auth />} />
  </Routes>
)

export default AppRoutes
