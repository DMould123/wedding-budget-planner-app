import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRoutes from './routes/routes'
import { WeddingExpensesProvider } from './context/wedding-expenses-context'

function App() {
  return (
    <WeddingExpensesProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <AppRoutes />
        </div>
      </Router>
    </WeddingExpensesProvider>
  )
}

export default App
