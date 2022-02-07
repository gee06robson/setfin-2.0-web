import styles from "./styles.module.scss"

export const Loading = () => {
  return (
    <div className={styles.containerLoading}>
      <div className={styles.contentLoading}>
        <span className="animate__animated animate__flash animate__infinite animate__slow" >Carregando...</span>
      </div>
    </div>
  )
}