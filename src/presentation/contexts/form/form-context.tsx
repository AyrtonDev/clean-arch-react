import { createContext } from 'react'

type StateFormType = {
  isLoading: boolean
}

type StateErrorType = {
  email: string
  password: string
  main: string
}

type FormContextType = {
  state: StateFormType
  errorState: StateErrorType
}

export default createContext<FormContextType | null>(null)
