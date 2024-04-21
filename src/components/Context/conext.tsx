import { ReactNode, createContext, useContext } from 'react'

const baseContext = createContext<number | null>(null)

export const BaseContextProvider = (props: {
  value: number
  children: ReactNode
}) => {
  const { value, children } = props
  return <baseContext.Provider value={value}>{children}</baseContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFooContext() {
  const context = useContext(baseContext)
  if (!context) {
    throw new Error('context is null')
  }
  return context
}
