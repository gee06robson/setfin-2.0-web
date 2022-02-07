import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../../services";
import { HandleErrorResponseApi, HandleValueData } from "../../Utils/utils";
import styles from "./styles.module.scss"
import $ from "jquery"
import "jquery-mask-plugin/dist/jquery.mask.min"
import { Loading } from "../../components/Load";

type FormInputs = {
  document_id: string
  code: string
  calculation_basis: string
  p_a: string
}

interface IDataTaxes {
  document_id: string
  code: string
  calculation_basis: number
  p_a: number,
  amount: number,
  correction: number
  taxe_id: string
}

interface Creditor {
  name: string
  code: string
}

interface IDocumentData {
  creditor: Creditor
  number: string
  emission: string
  due_date?: string | null
  value: number,
  taxes: IDataTaxes[]
}

interface IRemoveTaxeOnDocument {
  document_id: string
  taxe_id: string
}

interface IResponseData {
  data: IDocumentData
}

export const TaxesOnDocument = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState<boolean>(true)
  const [document, setDocument] = useState<IDocumentData | null>(null)
  const [update, setUpdate] = useState<number>(0)
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormInputs>({
    defaultValues: {
      document_id: id
    }
  })

  useEffect(() => {
    setLoading(true)
    const getDocuments = async () => {
      await api.get(`/select_document/${id}`).then(response => {
        const { data } = response as IResponseData
        setDocument(data)
        setValue("calculation_basis", Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(data.value))
        setLoading(false)
      }).catch(error => {
        setLoading(false)
        HandleErrorResponseApi(error)
      })
    }

    getDocuments()

  }, [update])

  useEffect(() => {
    $(".value").mask("#.##0,00", { 
      reverse: true 
    })
  })
  
  const onSubmit = async (data: FormInputs) => {
    setLoading(true)
    data.p_a = HandleValueData(data.p_a)
    data.calculation_basis = HandleValueData(data.calculation_basis)
    console.log(data.calculation_basis)

    await api.post("/taxes/document", data).then(() => {
      reset()
      setUpdate(update+1)
      setLoading(false)
    }).catch(error => {
      setLoading(false)
      setUpdate(update+1)
      HandleErrorResponseApi(error)
    })
  }

  const RemoveTaxeOnDocument = async (data: IRemoveTaxeOnDocument) => {
    setLoading(true)
    await api.post("/taxe/remove/document", data).then(response => {
      reset()
      setUpdate(update+1)
      setLoading(false)
    }).catch(error => {
      setLoading(false)
      HandleErrorResponseApi(error)
    })
  }

  return (      
    <div className={styles.contentBoxTaxesOnDocument}>

      {isLoading && <Loading />}

      <div className={styles.contentTitleForm}>
        <div className={styles.contentTitle}>
          <h2>Gerir Documento</h2>
          <span>Deduções | Descontos | Acréscimos</span>
        </div>
      </div>

      <div className={styles.contentDataDocument}>
        <div className={styles.boxCreditor}>
          <p>{document?.creditor.name}</p>
          <p>{document?.creditor.code}</p>
        </div>

        <div className={styles.toBreak} />

        <div className={styles.boxDocument}>
          <p><span>Documento</span> {document?.number}</p>
          <p><span>Valor</span> {document?.value && Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(document?.value)}</p>

          <p>
            {document?.taxes && 
              document.taxes.length > 0 && 
                <React.Fragment>
                <span>Líquido</span>
                <span>
                  {Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(document.value - document?.taxes.reduce((soma, response) => soma +=+ response.amount, 0
                  ))}
                </span>
                </React.Fragment>
            }
          </p>
        </div>
      </div>

      {document?.taxes && 
      document.taxes.length>0 &&
      <div className={styles.contentTaxesData}>

        <div className={styles.contentTitle}>
          <span>Código</span>
          <span>%</span>
          <span>Cálculo</span>
          <span>Total</span>
        </div>

        <div className={styles.contentBoxData}>
          {document?.taxes.map(response => (
            <div key={response.amount} onClick={() => RemoveTaxeOnDocument({
              document_id: response.document_id,
              taxe_id: response.taxe_id
            })} >

              <span>{response.code}</span>

              <span>
                {Intl.NumberFormat('pt-BR', {
                  style: 'percent', 
                  minimumFractionDigits: 2
                }).format(response.p_a/100)}
              </span>

              <span>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(response.calculation_basis)}
              </span>

              <span>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(response.amount)}
              </span>

            </div>
          ))}
        </div>
        <div className={styles.contentTotal}>
          <span>Total</span>
          <span>
          {document?.taxes && Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(document?.taxes.reduce((soma, response) => soma +=+ response.amount, 0
          ))}
          </span>
        </div>
      </div>}


      <div className={styles.contentFormTaxes}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        
        <div className={styles.contentTaxesBoxInputs}>

          <div className={styles.contentInputBox}>
            <label>Código de Recolhimento DARF/DAR</label>
            <input {...register("code", { 
              required: {
                value: true,
                message: "preenchimento obrigatório"
              },
              minLength: {
                value: 4,
                message: "4 caracteres"
              },
              maxLength: {
                value: 4,
                message: "4 caracteres"
              }
            })} />
            <ErrorMessage
              errors={errors}
              name="code"
              render={({ message }) => <p>{message}</p>}
            />
          </div>

          <div className={styles.contentInputBox}>
            <label>Percentual Aplicado</label>
            <input className="value" {...register("p_a", { 
              required: {
                value: true,
                message: "preenchimento obrigatório"
              },
              maxLength: {
                value: 6,
                message: "6 caracteres ex: 100,00%"
              }
            })} />
            <ErrorMessage
              errors={errors}
              name="p_a"
              render={({ message }) => <p>{message}</p>}
            />
          </div>

        </div>

        <div className={styles.contentInputBox}>
          <label>Base de Cálculo</label>
          <input className="value" {...register("calculation_basis", { 
            required: {
              value: true,
              message: "preenchimento obrigatório"
            }
          })} />
          <ErrorMessage
            errors={errors}
            name="calculation_basis"
            render={({ message }) => <p>{message}</p>}
          />
        </div>

        <div className={styles.contentBoxButton}>
          <button type="button" onClick={() => navigate(-1)} >
            <span>VOLTAR</span>
          </button>
          <button type="submit">
            <span>CADASTRAR</span>
          </button>
        </div>

        </form>
      </div>

    </div> 
  )
}