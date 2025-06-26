import { createContext } from 'react'

type StateFormType = {
  isLoading: boolean
  emailError: string
  passwordError: string
  mainError: string
}

type SetStateFormType = React.Dispatch<React.SetStateAction<StateFormType>>

type FormContextType = {
  state: StateFormType
  setState: SetStateFormType
}

export default createContext<FormContextType | null>(null)
