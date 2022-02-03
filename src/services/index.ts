import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 30000,
  timeoutErrorMessage: "tempo esgotado"
})