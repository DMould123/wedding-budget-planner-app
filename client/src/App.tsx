import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRoutes from './routes/routes'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
