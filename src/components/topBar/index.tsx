import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth"
import styles from "./styles.module.scss"

export const Topbar = () => {
  const [state, setState] = useState<boolean>(false)
  const { user, signOut } = useContext(AuthContext)
  
  return (
    <div className={styles.topBarBoxWrapper}>

      <div className={styles.contentTopBar}>


        <div className={styles.contentLogo}>
          {user?.unity 
            ? <span>{user.unity.name}</span> 
            : <strong className="animate__animated  animate__flash animate__infinite" >carregando</strong>}
          <span>{user?.name}</span>
        </div>

        <div className={styles.contentNavigate}>
          
          <div className={styles.contentDropDown} onClick={() => state ? setState(false) : setState(true)}>
            <div className={styles.contentTitleDropDown}>
              <span>Documento</span>
            </div>

            {state &&
              <div className={styles.contentMenuDropDown} onMouseLeave={() => setState(false)}>
              <Link to="/financial/document/new"><span>Incluir Documento</span></Link>
              <Link to="/financial/document/list"><span>Listar Documentos</span></Link>
              </div>
            }

          </div>

        </div>

        {user?.image_url &&
        <div className={styles.contentUserAvatar}>
          <div className={styles.cicleAvatarUser} onClick={signOut}>
            <img src={user?.image_url} alt={user?.name} />
          </div>
          {user?.administrator && 
            <div className={styles.contentAdmin}>
              <span>Administrador</span>
            </div>
          }
        </div>}
        
      </div>
      
    </div>
  )
}