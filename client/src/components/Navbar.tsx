import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu, IoClose } from 'react-icons/io5'
import { SignedIn, UserButton } from '@clerk/clerk-react'
import { FaWallet } from 'react-icons/fa'
import { useWeddingExpenses } from '../context/wedding-expenses-context'
import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [showWallet, setShowWallet] = useState(false)
  const { expenses } = useWeddingExpenses()

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleShowWallet = () => {
    setShowWallet(!showWallet)
  }

  const weddingTotal = expenses.reduce(
    (total, expense) => total + expense.cost,
    0
  )

  return (
    <nav className="navbar">
      <div className="container">
        <div className="left-section">
          <div className="logo">
            <NavLink to="/">
              <img src="/4155044.png" alt="Logo" />
            </NavLink>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            {showNavbar ? (
              <IoClose size={30} color="black" />
            ) : (
              <IoMenu size={30} color="black" />
            )}
          </div>
        </div>
        <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="wallet-icon" onClick={handleShowWallet}>
            <FaWallet size={30} color="black" />
            {showWallet && (
              <div className="wallet-dropdown">
                <p>Budget Left: {weddingTotal} SEK</p>
              </div>
            )}
          </div>
          <SignedIn>
            <UserButton afterSignOutUrl="/auth" className="user-button" />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
