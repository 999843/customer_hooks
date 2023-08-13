import { Button } from 'antd'
import { useEffect } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useUnmountRef } from '../hooks/useUnmountRef'
import { useMount } from '../hooks/useMount'
import useUnmount from '../hooks/useUnmount'

interface IProps {
  count: number
}
const Child: React.FC<IProps> = ({ count }) => {
  useDocumentTitle('is child')
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
      <Button>Click</Button>
    </div>
  )
}

export default Child
