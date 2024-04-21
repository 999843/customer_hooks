import { ReactNode, createContext, useContext } from 'react'

export const ThemeContext = createContext<'dark' | 'light' | null>(null)

interface IThemeProvider {
  children: ReactNode
}
export const ThemeProvider = ({ children }: IThemeProvider) => {
  return (
    <ThemeContext.Provider value={'dark'}>{children}</ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('context is notFound')
  }
  return context
}
