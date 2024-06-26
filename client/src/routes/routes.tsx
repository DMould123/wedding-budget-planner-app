import { Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard } from '../pages/dashboard'
import { Auth } from '../pages/auth'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { WeddingExpensesProvider } from '../context/wedding-expenses-context'
import { useAuth } from '@clerk/clerk-react'

const AppRoutes = () => {
  const { isSignedIn } = useAuth()

  return (
    <Routes>
      <Route
        path="/"
        element={
          isSignedIn ? (
            <WeddingExpensesProvider>
              <Dashboard />
            </WeddingExpensesProvider>
          ) : (
            <Navigate to="/auth" />
          )
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}

export default AppRoutes
