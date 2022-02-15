import styles from "./styles.module.scss"
import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate()
  
  return (
    <div className={styles.homeBoxWrapper}>
      <div className={styles.contentHome}>

      <div className={styles.contentCard}>
        <div className={styles.card}>

          <h1>Documento</h1>

          <div className={styles.contentButton}>
            <button type="button" onClick={() => navigate("/financial/document/new")} >
              <span>Cadastrar</span>  
            </button>

            <button type="button" onClick={() => navigate("/financial/document/list")} >
              <span>Listar</span>
            </button>
          </div>

        </div>
      </div>

      </div>
    </div>
  )
}