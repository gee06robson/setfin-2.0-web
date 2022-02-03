import { createContext, ReactNode, useState, useEffect } from "react"
import { api } from "../services"
import { HandleErrorResponseApi } from "../Utils/utils"

interface IUnity {
  id: string
  name: string
}

type User = {
  id: string
  name: string
  email: string
  image_url: string
  unity: IUnity | null
  administrator: boolean
}

interface ITokenCredential {
  credential: string
}

type AuthContextData = {
  user: User | null
  signIn: (response: ITokenCredential) => void
  signOut: () => void
}

type AuthProvider = {
  children: ReactNode
}

type AuthResponse = {
  token: string
  user: User
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null)
  const token = localStorage.getItem('@financeiro:token')
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('@financeiro:token')
  }

  async function signIn(tokenCredential: ITokenCredential) {

    const { credential } = tokenCredential

    await api.post<AuthResponse>("/user", { credential }).then(response => {
      const { token, user } = response.data

      localStorage.setItem('@financeiro:token', token)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setUser(user)

    }).catch(error => HandleErrorResponseApi(error))
    
  }

  useEffect(() => {
    const signInUser = async () => {
      if(token) {
        const response = await api.get<User>("profile")
        setUser(response.data)
      }
    }
    signInUser().catch(error => HandleErrorResponseApi(error))
  }, [localStorage])

  return (
    <AuthContext.Provider value={{ signIn, user, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )

}