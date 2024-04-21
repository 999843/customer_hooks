import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useUnmountRef } from '../hooks/useUnmountRef'
import { useMount } from '../hooks/useMount'
import useUnmount from '../hooks/useUnmount'
import useLatest from '../hooks/useLatest'

interface IProps {
  count: number
}
const Child: React.FC<IProps> = ({ count }) => {
  useDocumentTitle('is child')
  const [value, setValue] = useState(0)
  const refVaule = useLatest(value)
  console.log('🚀 ~ file: Child.tsx:16 ~ refVaule:', refVaule)
  const ref = useUnmountRef()
  console.log('🚀 ~ file: Child.tsx:14 ~ ref:', ref)
  useMount(() => {
    console.log(`首次初始化`, ref)
  })
  useUnmount(() => {
    console.log(`组件卸载`, ref)
  })
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setValue(value + 1)}>add</button>
      <Button>Click</Button>
    </div>
  )
}

export default Child
