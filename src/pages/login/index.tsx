import styles from "./styles.module.scss"
import logo from "../../assets/logo.svg"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/auth"
import { Link } from "react-router-dom"
import useScript from "../../GoogleOneTap/useScript"

export const Login = () => {
  const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_CLIENT_SCRIPT_URL, VITE_SCRIPT_FLAG } = import.meta.env
  const { signIn, user } = useContext(AuthContext)
  const googleClientScriptURL = VITE_GOOGLE_CLIENT_SCRIPT_URL as string
  const scriptFlag = VITE_SCRIPT_FLAG as string
  const script = useScript(googleClientScriptURL)

  const checkUser = (obj: object | null) => {
    return typeof obj === 'object' && obj !== null
  }

  useEffect(() => {

    const check = async () => {
      if (!window?.[scriptFlag] && window.google && script === 'ready' && !checkUser(user)) {
        await window.google.accounts.id.initialize({
          client_id: VITE_GOOGLE_CLIENT_ID,
          callback: signIn
        })
  
        window[scriptFlag] = true
      }
  
      if (window?.[scriptFlag] && script === 'ready' && !checkUser(user)) {
  
        await window.google.accounts.id.renderButton(document.getElementById("buttonDiv"), { 
          theme: "outline", 
          size: "large", 
          shape: "square" 
        })
  
        await window.google.accounts.id.prompt()
  
      }
    }

    check()    

  }, [script, window?.[scriptFlag]])

  return (
    <div className={styles.loginBoxWrapper}>
      <div className={styles.loginContentBox}>
        <div className={styles.contentImageBox}>

          <img src={logo} alt="financeiro" />

          <div className={styles.contentTitle}>
            <span>Batalhão de Polícia do Exército de Brasília</span>
            <span>Sistema de Gêrenciamento de Notas Fiscais e Faturas</span>
          </div>

          <div className={styles.contentButtonLogin}>
          {checkUser(user) 
          
          ? <Link to="/financial/home"> 
              <span>{`Seja bem vindo ${user?.name}`}</span>
            </Link>

          : <div id="buttonDiv" /> }
          </div>

        </div>
      </div>
    </div>
  )
}