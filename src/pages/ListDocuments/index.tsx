import { useEffect, useState } from "react"
import { api } from "../../services"
import styles from "./styles.module.scss"
import { format, parseISO } from "date-fns"
import { CurrencyFormat, HandleErrorResponseApi } from "../../Utils/utils"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Loading } from "../../components/Load"

interface Creditor {
  name: string
  code: string
}

interface User {
  name: string
  email: string
}

interface Units {
  included_in: string
  status: boolean
  user: User
}

interface IDocumentData {
  id: string
  creditor: Creditor
  number: string
  emission: string
  due_date: string
  value: number
  units: Units[]
}

interface IFormInputs {
  id: string[]
}

interface IDataDocumentResponse {
  data: IDocumentData[]
}

export const ListDocuments = () => {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [take, setTake] = useState<number>(8)
  const [document, setDocument] = useState<IDocumentData[]>([])
  const navigate = useNavigate()
  const { 
    handleSubmit, 
    register, 
    watch,
  } = useForm<IFormInputs>({
    defaultValues: {
      id: []
    }
  })
  
  const watchAllFields = watch()

  useEffect(() => {
    const getDocuments = async () => {
      setLoading(true)
      await api.post("/documents", { 
        take
      }).then(response => {
        const { data } = response as IDataDocumentResponse
        setDocument(data)
        setLoading(false)
      }).catch(error => {
        setLoading(false)
        HandleErrorResponseApi(error)
      })
    } 
    
    getDocuments()

  }, [take])

  useEffect(() => {
    if(watchAllFields.id.length===0) {
      localStorage.setItem('@financeiro:selectedDocuments', JSON.stringify([]))
    }

    localStorage.setItem('@financeiro:selectedDocuments', JSON.stringify(watchAllFields.id))
  }, [watchAllFields.id])

  const onSubmit = (data: IFormInputs) => {
    const { id } = data
    localStorage.setItem('@financeiro:selectedDocuments', JSON.stringify(id))
    navigate("/financial/document/extract/")
  } 

  return (
    <div className={styles.contentBoxListDocuments}>
      {isLoading && <Loading />}
      <div className={styles.contentTitleListDocuments}>
        <div className={styles.contentDateDocument}>
          <h2>Documentos</h2>
          <span>Aqui estão listados todos os documentos cadastrados em sua subunidade</span>
        </div>
        <div className={styles.contentFilterButtons}>
          <button type="button" onClick={() => navigate("/financial/home")} >
            <span>início</span>
          </button>
          <button type="button" onClick={() => navigate("/financial/document/new")} >
            <span>novo documento</span>
          </button>

          <div className={styles.contentPaginationBox}>
           <button type="button" onClick={() => setTake(take + 8) }>
              <span>Mostrando {document.length} resultados</span>
            </button>
          </div>

        </div>
      </div>

      <div className={styles.contentListBox}>
        <div className={styles.contentDocumentList}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          {document?.map(document => (  
            <div className={styles.cardDocument} key={document.id}>

              <input type="checkbox" {...register("id")} value={document.id} />

              <button type="button" className={styles.documentRedirect} onClick={() => navigate(`/financial/document/success/${document.id}`)} >
                <span>{document.number}</span>
              </button>

              <div className={styles.contentCreditor}>
                <span>{document.creditor.code}</span>
                <span>{document.creditor.name}</span>
              </div>

              <span>{format(parseISO(document.emission), "dd/MM/yyyy")}</span>

              {document.due_date 
                ? <span>{format(parseISO(document.due_date), "dd/MM/yyyy")}</span> 
                : <span><i>não há</i></span> 
              }
              
              <span>{CurrencyFormat(document.value)}</span>
              
            </div>
          ))}

          {watchAllFields.id.length > 0 && 
            <div className={`${styles.contentBarButtonForm} animate__animated  animate__fadeInUp`}>
              <button type="submit">
                <span>Extrato</span>
              </button>
              <button type="button">
                <span>{watchAllFields.id.length}</span>
              </button>
            </div>
          }
          </form>
        </div>
      </div>
    </div>
  )
}