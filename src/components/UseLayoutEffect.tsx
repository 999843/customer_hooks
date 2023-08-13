import { useEffect, useLayoutEffect, useState } from 'react'

const UseLayoutEffect: React.FC = () => {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  useEffect(() => {
    if (count === 0) {
      //   setInterval(() => {
      //     setCount(10 + Math.random() * 100)
      //   }, 100)
    }
  }, [count])

  useLayoutEffect(() => {
    if (count === 0) {
      //   setInterval(() => {
      //     setCount1(10 + Math.random() * 100)
      //   }, 100)
    }
  }, [count1])
  return (
    <>
      <div>hello word</div>
      <div>useEffect的count:{count}</div>
      <div>useLayoutEffect的count:{count1}</div>
    </>
  )
}

export default UseLayoutEffect
