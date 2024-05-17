import { useUser } from '@clerk/clerk-react'

const Dashboard = () => {
  const { user } = useUser()

  return (
    <>
      <div className="dashboard-container">
        <h1> Welcome {user?.firstName}! Here Are Your Wedding Finances:</h1>
      </div>
    </>
  )
}

export default Dashboard
