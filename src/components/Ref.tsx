import { Card } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const Ref: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [clientHeight, setClientHeight] = useState<number | undefined>()
  useDocumentTitle('hello word')
  //   const title = useRef(document.title)
  //   console.log('🚀 ~ file: Ref.tsx:9 ~ title:', title)

  useEffect(() => {
    if (ref) {
      const height = ref.current?.clientHeight
      setClientHeight(height)
    }
  }, [])
  return (
    <div ref={ref}>
      <Card>
        <p>{clientHeight}</p>
        <p>hello word</p>
      </Card>
    </div>
  )
}

export default Ref
