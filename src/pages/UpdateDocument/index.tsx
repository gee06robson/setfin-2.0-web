import { useEffect, useState } from "react"
import { ErrorMessage } from "@hookform/error-message"
import { useForm } from "react-hook-form"
import styles from "./styles.module.scss"
import $ from "jquery"
import "jquery-mask-plugin/dist/jquery.mask.min"
import { api } from "../../services";
import { useNavigate, useParams } from "react-router-dom"
import { HandleValueData, SPMaskBehavior } from "../../Utils/utils"
import { format, parseISO } from "date-fns"
import { ImOpt } from "react-icons/im"


type FormInputs = {
  id: string
  number: string
  emission: string
  due_date: string
  value: string
}

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
  due_date?: string | null
  value: string
  units: Units[]
}


export const UpdateDocument = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [responseDocumentError, setResponseDocumentError] = useState<string | boolean>(false)
  const [document, setDocument] = useState<IDocumentData | null>(null)
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormInputs>({
    defaultValues: {
      id
    }
  })
  
  useEffect(() => {
    api.get<IDocumentData>(`/select_document/${id}`).then(response => {
      let handleData = response.data
        handleData.emission = format(parseISO(handleData.emission), 'dd/MM/yyyy')
        if(handleData.due_date) {
          handleData.due_date = format(parseISO(handleData.due_date), 'dd/MM/yyyy')
          setValue("due_date", handleData.due_date)
        }
      setDocument(handleData)
      setValue("number", handleData.number)
      setValue("emission", handleData.emission)
      setValue("value", Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(Number(handleData.value)))
    }).catch(err => {
      const { data: message } = err.response
      console.log(message.error)
    })
  }, [])
  

  const onSubmit = (data: IDocumentData) => {
    setResponseDocumentError(false)
    data.value = HandleValueData(data.value)

    if(data.due_date==="") {
      data.due_date = null
    }

    api.post("/document/update", data).then(response => {
      reset()
      navigate(-1)
    }).catch(err => {
      const { data: message } = err.response

      if(message.error==="Invalid time value") {
        setResponseDocumentError("data informada em [emissão / vencimento] inválida")
      } else {
        setResponseDocumentError(message.error)
      }
      
    })
  }

  useEffect(() => {
    $(".value").mask("#.##0,00", { 
      reverse: true 
    })
    $(".date").mask("00/00/0000")
    $("#code").mask(SPMaskBehavior)
  })

  return (      
    <div className={styles.formDocumentBox}>

      <div className={styles.contentTitleForm}>
        <h2>Alterar Documento</h2>
        <span>[Nota Fiscal, Fatura]</span>
        { responseDocumentError &&
          <div className={`${styles.contentAlertBox} animate__animated animate__fadeIn`}>
            <i>{responseDocumentError}</i> 
          </div>
        }
      </div>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

        <div className={styles.contentTextBox}>
          <span>Código Credor</span>
          <div className={styles.contentText}>
            <ImOpt color="#4C5948" />
            <span id="code">{document?.creditor.code}</span>
          </div>
        </div>


        <div className={styles.contentTextBox}>
          <span>Razão Credor</span>
          <div className={styles.contentText}>
            <ImOpt color="#4C5948" />
            <span>{document?.creditor.name}</span>
          </div>
        </div>
        
        <div className={styles.contentInputBox}>
          <label htmlFor="number">Número Documento</label>
          <input id="number" {...register("number", { 
            required: {
              value: true,
              message: "preenchimento obrigatório"
            },
            pattern: {
              value: /^[0-9]+$/i,
              message: "somente números"
            },
          })} />
          <ErrorMessage
            errors={errors}
            name="number"
            render={({ message }) => <p>{message}</p>}
          />
        </div>

        <div className={styles.contentInputBox}>
          <div className={styles.contentDoubleInputBox}>
            <div className={styles.contentBox}>
              <label>Emissão</label>
              <input className="date" {...register("emission", { 
                required: {
                  value: true,
                  message: "preenchimento obrigatório"
                },
                maxLength: {
                  value: 10,
                  message: "máximo 10 caracteres"
                },
                minLength: {
                  value: 10,
                  message: "mínimo 10 caracteres"
                }
              })} />
              <ErrorMessage
                errors={errors}
                name="emission"
                render={({ message }) => <p>{message}</p>}
              />
            </div>

            <div className={styles.contentBox}>
              <label>Vencimento</label>
              <input className="date" {...register("due_date", {
                maxLength: {
                  value: 10,
                  message: "máximo 10 caracteres"
                },
                minLength: {
                  value: 10,
                  message: "mínimo 10 caracteres"
                }
              })} />
              <ErrorMessage
                errors={errors}
                name="due_date"
                render={({ message }) => <p>{message}</p>}
              />
            </div>
          </div>
        </div>

        <div className={styles.contentInputBox}>
          <label>Valor</label>
          <input className="value" {...register("value", { 
            required: {
              value: true,
              message: "preenchimento obrigatório"
            }
          })} />
          <ErrorMessage
            errors={errors}
            name="value"
            render={({ message }) => <p>{message}</p>}
          />
        </div>

        <div className={styles.contentBoxButton}>

          <button type="submit">
            <span>Confirmar</span>
          </button>

          <button type="button" onClick={() => navigate(-1)}>
            <span>Voltar</span>
          </button>

        </div>

      </form>
    </div> 
  )
}