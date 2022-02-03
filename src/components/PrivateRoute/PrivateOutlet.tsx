import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "../../context/auth"
import { Topbar } from "../topBar"

import styles from "./styles.module.scss"

export function PrivateOutlet() {
  const { user } = useContext(AuthContext)
  const token = localStorage.getItem('@financeiro:token')

  return (
    <div className={styles.privateOutlet}>
      <Topbar />

      { token
        ? <Outlet /> 
        : <Navigate to="/" replace={true} /> 
      }

    </div>
  )
}