import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Auth } from './pages/auth'
import { WeddingExpensesProvider } from './context/wedding-expenses-context'
import Navbar from './components/Navbar'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
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
      </div>
    </Router>
  )
}

export default App
