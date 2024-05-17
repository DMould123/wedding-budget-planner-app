import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton
} from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'

export const Auth = () => {
  return (
    <div className="sign-in-container">
      <SignedOut>
        <h1 style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px' }}>Wedding Budget Planner</span>
          <img
            src="/wedding.png"
            alt="Wedding Icon"
            title="Wedding icons created by Freepik - Flaticon"
            style={{ width: '50px', height: '50px' }}
          />
        </h1>
        <SignUpButton mode="modal" />
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <Navigate to="/" />
      </SignedIn>
    </div>
  )
}
