import { Outlet } from "react-router-dom"
import styles from "./styles.module.scss"

export const Document = () => {
  return (
    <div className={styles.documentBoxWrapper}>
     <Outlet />
    </div>
  )
}