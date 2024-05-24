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
        <h1 className="sign-in-header">
          <span>Wedding Budget Planner</span>
          <img
            src="/wedding.png"
            alt="Wedding Icon"
            title="Wedding icons created by Freepik - Flaticon"
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
