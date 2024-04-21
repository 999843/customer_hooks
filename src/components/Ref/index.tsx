import { Card } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import Foo, { RefProps } from './_components/Foo'

const Ref: React.FC = () => {
  const ref = useRef<RefProps>(null)
  const [clientHeight, setClientHeight] = useState<number | undefined>()
  useDocumentTitle('hello word')
  //   const title = useRef(document.title)
  //   console.log('🚀 ~ file: Ref.tsx:9 ~ title:', title)

  useEffect(() => {
    if (ref) {
      // const height = ref.current?.clientHeight
      // setClientHeight(height)
    }
  }, [])
  return (
    <div>
      <Card>
        <p>{clientHeight}</p>
        <p className=" text-red-300 font-bold">hello word</p>
      </Card>
      <Foo ref={ref} />
    </div>
  )
}

export default Ref
