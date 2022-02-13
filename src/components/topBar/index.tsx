import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/auth"
import styles from "./styles.module.scss"
import { GrClose } from "react-icons/gr"

export const Topbar = () => {
  const [state, setState] = useState<boolean>(false)
  const [menuUser, setMenuUser] = useState(false)
  const { user, signOut } = useContext(AuthContext)
  
  return (
    <div className={styles.topBarBoxWrapper}>

      <div className={styles.contentTopBar}>


        <div className={`${styles.contentLogo} animate__animated animate__fadeIn`}>
          {user?.unity 
            ? <span>{user.unity.name}</span> 
            : <strong className="animate__animated  animate__flash animate__infinite" >carregando</strong>}
          <span>{user?.name}</span>
        </div>

        <div className={`${styles.contentNavigate} animate__animated animate__fadeIn `}>
          
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

          { menuUser===false && 
            <div className={`${styles.cicleAvatarUser} animate__animated animate__fadeIn`} onClick={() => setMenuUser(menuUser===false ? true : false)}>
              <img src={user?.image_url} alt={user?.name} />
            </div>
          }

          {menuUser &&
            <div className={`${styles.contentMenuUserDropDown} animate__animated animate__bounceInDown`}>
            
              <div className={styles.contentUserAvatarDropDown}>
                <div className={styles.cicleAvatarUser}>
                    <img src={user?.image_url} alt={user?.name} />
                </div>
                <div className={styles.userNameText}>
                  <strong>{user.name}</strong>
                </div>
              </div>

              <div className={styles.contentAdminText}>
                <strong>Administrador</strong>
              </div>
              
              <div className={styles.contentMenuUser}>
                <button type="button" onClick={() => signOut()}>
                  <span>Sair</span>
                </button>
              </div>

              <div className={styles.contentCloseButton}>
                <button type="button" onClick={() => setMenuUser(false)}>
                  <GrClose size={18} color="#312f51" />
                </button>
              </div>

            </div>
          }
          
        </div>}
        
      </div>
      
    </div>
  )
}