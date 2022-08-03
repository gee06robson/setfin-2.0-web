import { useContext, useEffect, useState } from "react"
import { api } from "../../services"
import styles from "./styles.module.scss"
import { format, parseISO } from "date-fns"
import { CurrencyFormat, HandleErrorResponseApi } from "../../Utils/utils"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Loading } from "../../components/Load"
import { AuthContext } from "../../context/auth"
import { VscRefresh } from "react-icons/vsc"

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
  searchEngine: string
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
  const [filteredDocument , setFilteredDocument] = useState<IDocumentData[]>([])
  const navigate = useNavigate()
  const { updateState } = useContext(AuthContext)
  const [search, setSearch] = useState('')

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
        updateState()
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

  const filteredDocs = function(value: string) {
    setSearch(value);
    console.log(console.log(value))
    if (search.length > 0) {
      setFilteredDocument(document.filter(doc => doc.searchEngine.includes(search)))
      console.log(document.filter(doc => doc.searchEngine.includes(search)))
    }
  }

  return (
    <div className={styles.contentBoxListDocuments}>
      { isLoading && <Loading /> }

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

          <button type="button">
            <span>Mostrando</span>
            <strong>{document.length} </strong>
            <span>resultados</span>
          </button>

          <button type="button" onClick={() => setTake(take + 8)}>
            <VscRefresh size={20} />
            <span>Mostrar mais</span>
          </button>

        </div>

        <input
          type="text"
          onChange={e => filteredDocs(e.target.value.toUpperCase())}
          value={search}
          autoComplete="off"
          placeholder="Buscar" />

      </div>

      <div className={styles.contentListBox}>

        <div className={styles.contentDocumentList}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          {search.length > 0 ? (
            filteredDocument?.map(document => (  
              <div className={styles.cardDocument} key={document.id}>
    
                <input type="checkbox" {...register("id")} value={document.id} />
                
                <button type="button" className={styles.documentRedirect} onClick={() => navigate(`/financial/document/success/${document.id}`)} >
                  <span>{document.number}</span>
                </button>

                <div className={styles.contentCreditor}>
                  <span>{document.creditor.code}</span>
                  <span>{document.creditor.name}</span>
                </div>

                <span><strong>Emissão </strong>{format(parseISO(document.emission), "dd/MM/yyyy")}</span>

                {document.due_date 
                  ? <span><strong>Vencimento </strong>{format(parseISO(document.due_date), "dd/MM/yyyy")}</span> 
                  : <span><strong>Vencimento </strong><i>não há</i></span> 
                }
                
                <span><strong>Valor </strong>{CurrencyFormat(document.value)}</span>
                  
              </div>
            ))
          ) : (
            document?.map(document => (  
              <div className={styles.cardDocument} key={document.id}>
    
                <input type="checkbox" {...register("id")} value={document.id} />
                
                <button type="button" className={styles.documentRedirect} onClick={() => navigate(`/financial/document/success/${document.id}`)} >
                  <span>{document.number}</span>
                </button>

                <div className={styles.contentCreditor}>
                  <span>{document.creditor.code}</span>
                  <span>{document.creditor.name}</span>
                </div>

                <span><strong>Emissão </strong>{format(parseISO(document.emission), "dd/MM/yyyy")}</span>

                {document.due_date 
                  ? <span><strong>Vencimento </strong>{format(parseISO(document.due_date), "dd/MM/yyyy")}</span> 
                  : <span><strong>Vencimento </strong><i>não há</i></span> 
                }
                
                <span><strong>Valor </strong>{CurrencyFormat(document.value)}</span>
                  
              </div>
            ))
          ) 
          }

          {watchAllFields.id.length > 0 && 
            <div className={`${styles.contentBarButtonForm} animate__animated  animate__fadeInUp`}>

              <div className={styles.contentFormButtons} >
                <button type="submit">
                  <span>Extrato</span>
                </button>
              </div>

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