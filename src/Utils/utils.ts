import Swal from "sweetalert2"
import "sweetalert2/src/sweetalert2.scss"

const CurrencyFormat = (value: number | undefined) => {
  if(value) {
    return Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
  } 
}

const SPMaskBehavior = (value: string) => {
  value = value.replaceAll("-", "")
  value = value.replaceAll(".", "")
  value = value.replaceAll("/", "")
  
  switch (value.length) {
    case 14: return '00.000.000/0000-00'
    case 11: return '000.000.000-00'
    case 6: return '000000'
    default: return 'Error!';
  }
}


const HandleValueData = (value: string) => {
  value = value.replace(".", "")
  value = value.replace(",", ".")

  return value
} 

interface IErrorData {
  response: {
    data: {
      error: string
    }
  }
}

const HandleErrorResponseApi = (error: IErrorData) => {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'error',
    title: "Ops' algo deu errado",
    text: error.response.data.error,
    position: "top"
  })

  console.log(error.response.data.error)
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

const breakApart = (itens: IDocumentData[], maximo: number) => {
  return itens.reduce((acumulador: any, item: IDocumentData, indice: number) => {
    const grupo = Math.floor(indice / maximo)
    acumulador[grupo] = [...(acumulador[grupo] || []), item]
    return acumulador;
  }, [])
}


export { CurrencyFormat, SPMaskBehavior, HandleValueData, HandleErrorResponseApi, breakApart }