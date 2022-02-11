import { useEffect, useState } from "react"
import { format, parseISO } from 'date-fns'
import { useNavigate, useParams } from "react-router-dom"
import { ImOpt } from "react-icons/im"
import { api } from "../../services"
import $ from "jquery"
import "jquery-mask-plugin/dist/jquery.mask.min"
import styles from "./styles.module.scss"
import { CurrencyFormat, HandleErrorResponseApi, SPMaskBehavior } from "../../Utils/utils"
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
  creditor: Creditor
  number: string
  emission: string
  due_date: string | null
  value: number
  units: Units[]
}

export const SuccessDocument = () => {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [document, setDocument] = useState<IDocumentData | null>(null)
  const { id } = useParams()
  const navigate = useNavigate()

  const removeDocument = async () => {
    setLoading(true)
    await api.post("/document/delete", {
      id
    }).then(response => {
      console.log(response.data)
      navigate(-1)
    }).catch(error => {
      setLoading(false)
      HandleErrorResponseApi(error)
    })
  }
  
  useEffect(() => {
    const getDocument = async () => {
      await api.get<IDocumentData>(`/select_document/${id}`).then(response => {
        let handleData = response.data
            handleData.emission = format(parseISO(handleData.emission), 'dd/MM/yyyy')
            if(handleData.due_date) {
              handleData.due_date = format(parseISO(handleData.due_date), 'dd/MM/yyyy')
            } 
        setDocument(handleData)
        setLoading(false)
      }).catch(error => {
        setLoading(false)
        HandleErrorResponseApi(error)
      })
    }

    getDocument()

  }, [])


  useEffect(() => {
    $("#code").mask(SPMaskBehavior)
  }, [])

  return (
    isLoading ? <Loading /> :
    <div className={styles.formsuccessNewDocumentBox}>

      <div className={styles.contentTitle}>
        <h2>Documento</h2>
        <span>Inclua impostos, nota de empenho ou retorne ao cadastro de documentos</span>
      </div>

      <div className={styles.contentResponseData}>

        <div className={styles.contentTextBox}>
          <span>Código Credor</span>
          <div className={styles.contentText}>
            <ImOpt color="#4C5948" />
            <span id="code" >{document?.creditor.code}</span>
          </div>
        </div>

        <div className={styles.contentTextBox}>
          <span>Razão Credor</span>
          <div className={styles.contentText}>
            <ImOpt color="#4C5948" />
            <span>{document?.creditor.name}</span>
          </div>
        </div>

        <div className={styles.contentTextBox}>
          <span>Número Documento</span>
          <div className={styles.contentText}>
            <ImOpt color="#4C5948" />
            <span>{document?.number}</span>
          </div>
        </div>

        <div className={styles.contentTextBox}>
          <span>Emissão</span>
          <div className={styles.contentText}>
            <ImOpt color="#4C5948" />
            <span>{document?.emission}</span>
          </div>
        </div>

        {document?.due_date && 
        <div className={styles.contentTextBox}>
          <span>Vencimento</span>
          <div className={styles.contentText}>
            <ImOpt color="#4C5948" />
            <span>{document?.due_date}</span>
          </div>
        </div> }

        <div className={styles.contentTextBox}>
          <span>Valor</span>
          <div className={styles.contentText}>
            <ImOpt color="#4C5948" />
            <span>{CurrencyFormat(document?.value)}</span>
          </div>
        </div>

      <div className={styles.contentBoxButton}>
        <button type="button" onClick={() => navigate(-1)}>
          <span>Voltar</span>
        </button>

        <button type="button" onClick={() => navigate(`/financial/document/update/${id}`)}>
          <span>Editar</span>
        </button>

        <button type="button" onClick={() => navigate(`/financial/document/taxes/${id}`) }>
          <span>Impostos</span>
        </button>

        <button type="button">
          <span>DOC SIAFI</span>
        </button>

      </div>

      </div>

      <div className={styles.contentAuthorBox}>
        <div className={styles.contentAuthorTextBox}>
          <div className={styles.contentAuthorText}>
            {document?.units.map(author => (
              <span key={author.included_in} >Criado em <strong>{format(parseISO(author.included_in), "dd/MM/yyyy 'as' HH:mm:ss")}</strong> por <strong>{author.user.name}</strong> (<strong>{author.user.email}</strong>)</span>
            ))}
          </div>
        </div> 
      </div>

      <button type="button" className={styles.deleteButton} onClick={() => removeDocument()}>
        <span>Excluir</span>
      </button>
  
    </div>
  )
}