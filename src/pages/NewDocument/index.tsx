import { useEffect, useState } from "react"
import { ErrorMessage } from "@hookform/error-message"
import { useForm } from "react-hook-form"
import styles from "./styles.module.scss"
import $ from "jquery"
import "jquery-mask-plugin/dist/jquery.mask.min"
import { api } from "../../services";
import { useNavigate } from "react-router-dom"
import { HandleErrorResponseApi, HandleValueData } from "../../Utils/utils"
import { Loading } from "../../components/Load"


interface IDocumentData {
  code: string
  name: string
  number: string,
  emission: string,
  due_date?: string | null
  value: string
}

interface ICreditorsName {
  name: string
}

export const NewDocument = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [responseError, setResponseError] = useState<string>("")
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<IDocumentData>()
  const navigate = useNavigate()

  const onSubmit = (data: IDocumentData) => {
    setLoading(true)
    data.value = HandleValueData(data.value)

    if(data.due_date==="") {
      delete data.due_date
    }

    api.post("/document", data).then(response => {
      const { id } = response.data
      reset()
      setLoading(false)
      navigate(`/financial/document/success/${id}`)
    }).catch(error => {
      setLoading(false)
      HandleErrorResponseApi(error)
    })
  }

  useEffect(() => {
    $('.value').mask("#.##0,00", { reverse: true })
    $('.date' ).mask("00/00/0000")
  }, [])

  const selectCreditor = async (code: string) => {
    setLoading(true)
    await api.post("/select_creditor", { code }).then(response => {
      const { name } = response.data as ICreditorsName
      setResponseError("")
      setValue("name", name)
      setLoading(false)
      document.getElementById("number")?.focus()
    }).catch(err => {
      const { data: message } = err.response
      setResponseError(message.error)
      setValue("name", "")
      setLoading(false)
      document.getElementById("name")?.focus()
    })
  }

  return (      
    <div className={styles.formDocumentBox}>

      <div className={styles.contentTitleForm}>
        <div className={styles.contentTitleText}>
          <h2>Cadastro de Documentos</h2>
          <span>[Nota Fiscal, Fatura]</span>
        </div>

        {isLoading && <Loading />}

      </div>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

        <div className={styles.contentInputBox}>
          <label>Código Credor</label>
          <input onKeyPress={() => setResponseError("") } {...register("code", {
            required: {
              value: true,
              message: "preenchimento obrigatório"
            },
            pattern: {
              value: /^[0-9]+$/i,
              message: "somente números"
            },
            maxLength: {
              value: 14,
              message: "máximo 14 caracteres"
            },
            minLength: {
              value: 6,
              message: "mínimo 6 caracteres"
            }
          })} onBlur={e => selectCreditor(e.target.value)} />
          <ErrorMessage
            errors={errors}
            name="code"
            render={({ message }) => <p>{message}</p>}
          />
        </div>

        <div className={styles.contentInputBox}>
          <label htmlFor="name">Razão Credor <i>{responseError}</i></label>
          <input id="name" {...register("name")} />
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

        <div className={styles.contentButton}>
          <button type="submit">
            <span>Cadastrar</span>
          </button>
        </div>
      </form>
    </div> 
  )
}