import React from "react"
import { Redirect } from "react-router-dom"

// Profile

// Dashboard
import Dashboard from "../pages/Dashboard/index"

// Transactions
import Transactions from "../pages/Transactions/index"

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/transactions", component: Transactions },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

export { authProtectedRoutes }
