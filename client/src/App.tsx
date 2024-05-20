import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Auth } from './pages/auth'
import { WeddingExpensesProvider } from './context/wedding-expenses-context.tsx'

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Routes>
            <Route
              path="/"
              element={
                <WeddingExpensesProvider>
                  <Dashboard />
                </WeddingExpensesProvider>
              }
            />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
