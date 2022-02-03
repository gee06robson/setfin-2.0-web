import { useEffect, useState } from "react"
import { VscCombine, VscEmptyWindow, VscSymbolArray } from "react-icons/vsc"
import {format, parseISO} from "date-fns"
import { api } from "../../services"
import $ from "jquery"
import "jquery-mask-plugin/dist/jquery.mask.min"
import styles from "./styles.module.scss"
import { breakApart, CurrencyFormat, HandleErrorResponseApi, SPMaskBehavior } from "../../Utils/utils"
import { useNavigate } from "react-router-dom"

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

interface IDataTaxes {
  code: string
  calculation_basis: number
  p_a: number,
  amount: number,
  correction: number
}

interface IDocumentData {
  id: string
  creditor: Creditor
  number: string
  emission: string
  due_date: string | null
  value: number
  units: Units[]
  taxes: IDataTaxes[]
}

interface IResponseData {
  data: IDocumentData[]
}

export const ExtractDocument = () => {
  const [documents, setDocuments] = useState<IDocumentData[]>([])
  const id_documents = JSON.parse(localStorage.getItem('@financeiro:selectedDocuments')!)
  const navigate = useNavigate()

  useEffect(() => {
    const getDocuments = async () => {
      const { data } = await api.post("/documents/filter", { id_documents }) as IResponseData
      setDocuments(data)
    }

    getDocuments().catch(error => HandleErrorResponseApi(error))
  }, [])

  useEffect(() => {
    $('.code').mask(SPMaskBehavior)
  }, [documents])


  return (
    <div>

      {id_documents.length === 0 && 
        <div className={styles.contentAlertExtractEmpty}>
          <VscEmptyWindow size={48} color="#915ce6" />
          <h2>Atenção</h2>
          <h3>Selecione os documentos para impressão do extrato</h3>
          <button type="button" onClick={() => navigate("/financial/document/list")} >
            <span>Documentos</span>
          </button>
        </div>
      }

      { breakApart(documents, 8).map((response: any, i: number) => (
        <div className={styles.contentPageExtract} key={i}>
          { response.map((document: any) => (
            <div className={styles.cardDocument} key={document.id} onClick={() => navigate(`/financial/document/success/${document.id}`)} >

              <div className={styles.contentDataCreditorDocument}>
                <div className={styles.textCreditorData}>
                  <span>{document.creditor.name}</span>
                  <span className="code">{document.creditor.code}</span>
                </div>
              </div>

              <div className={styles.contentDataDocument}>

                <div className={styles.textDocumentData}>
                  <span>Número</span>
                  <span>{document.number}</span>
                </div>

                <div className={styles.textDocumentData}>
                  <span>Emissão</span>
                  <span>{format(parseISO(document.emission), "dd/MM/yyyy")}</span>
                </div>

                {document.due_date && 
                <div className={styles.textDocumentData}>
                  <span>Vencimento</span>
                  <span>{format(parseISO(document.due_date), "dd/MM/yyyy")}</span> 
                </div>}

                <div className={styles.textDocumentData}>
                  <span>Valor</span>
                  <span>{CurrencyFormat(document.value)}</span>
                </div>

              </div>

              {document.taxes && 
                document.taxes.length > 0 &&
                <table className={styles.tableTaxesOnDocument} >
                  <thead>
                    <tr>
                      <th className="bold">Cód</th>
                      <th className="bold">%</th>
                      <th className="bold">Calc</th>
                      <th className="bold">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {document.taxes.map((response: any) => (
                      <tr key={response.amount}>

                        <td>{response.code}</td>

                        <td>
                          {Intl.NumberFormat('pt-BR', {
                            style: 'percent', 
                            minimumFractionDigits: 2
                          }).format(response.p_a/100)}
                        </td>

                        <td> {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                          }).format(response.calculation_basis)}
                        </td>

                        <td>{Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                          }).format(response.amount)}
                        </td>
                        
                      </tr>
                    ))}
                      <tr className={styles.textTotal}>
                        <td colSpan={2}>Total</td>
                        <td colSpan={2}>
                          {document?.taxes && Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                          }).format(document?.taxes.reduce((soma: any, response: any) => soma +=+ response.amount, 0))}
                        </td>
                      </tr>

                      <tr className={styles.textLiq}>
                        <td colSpan={2}>Líquido</td>
                        <td colSpan={2}>{Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                          }).format(document.value - document?.taxes.reduce((soma: any, response: any) => soma +=+ response.amount, 0))}
                        </td>
                      </tr>
                  </tbody>
                </table>
              }
            </div>
            ))
          }
        </div>
        ))
      }
    </div>
  )
}