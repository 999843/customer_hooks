import { ThemeContext } from './context'
import { useEffect, useRef, useState } from 'react'

import Ref from './components/Ref'
import Context from './components/Context'
import './style/global.css'
import Calendar, { CalendarRef } from './components/Calendar'

function App() {
  console.log('父组件更新')
  const [isShow, setIsShow] = useState(false)
  const [count, setCount] = useState<number>(0)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const ref = useRef<CalendarRef>(null)
  const handleClick = () => {
    setTheme('light')
    setIsShow(!isShow)
    setCount(count + 1)
  }
  useEffect(() => {
    ref?.current?.getDate()
    console.log(
      '🚀 ~ useEffect ~  ref?.current?.getDate():',
      ref?.current?.getDate()
    )
  }, [])
  return (
    <ThemeContext.Provider value={theme}>
      {/* <Button type="primary" onClick={() => setTheme('dark')}>
        dark
      </Button>
      <Button type="primary" onClick={handleClick}>
        {isShow ? '卸载' : '挂载'}
      </Button>
      {theme}
      {isShow && <Child count={count} />} */}
      {/* <ReducerDemo /> */}
      <Ref />
      <Context />
      <Calendar
        ref={ref}
        value={new Date('2023-3-1')}
        onChange={(date) => {
          console.log('date---', date.toLocaleDateString())
        }}
      />
      {/* <UseLayoutEffect />

      <Child count={0} /> */}
    </ThemeContext.Provider>
  )
}

export default App
