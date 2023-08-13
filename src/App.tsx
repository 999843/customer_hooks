import { Button } from 'antd'
import { ThemeContext, ThemeProvider, useTheme } from './context'
import { useEffect, useState } from 'react'
import Child from './components/Child'
import Reducer from './components/Reducer'
import Ref from './components/Ref'
import UseLayoutEffect from './components/UseLayoutEffect'

function App() {
  console.log('父组件更新')
  const [isShow, setIsShow] = useState(false)
  const [count, setCount] = useState<number>(0)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const handleClick = () => {
    setTheme('light')
    setIsShow(!isShow)
    setCount(count + 1)
  }
  return (
    <ThemeContext.Provider value={theme}>
      <Button type="primary" onClick={() => setTheme('dark')}>
        dark
      </Button>
      <Button type="primary" onClick={handleClick}>
        {isShow ? '卸载' : '挂载'}
      </Button>
      {theme}
      {isShow && <Child count={count} />}
      {/* <Reducer /> */}
      {/* <Ref /> */}
      <UseLayoutEffect />
    </ThemeContext.Provider>
  )
}

export default App
