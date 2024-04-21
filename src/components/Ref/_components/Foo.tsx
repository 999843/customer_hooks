import { Input } from 'antd'
import React, { useImperativeHandle, useRef } from 'react'

export interface RefProps {
  aaa: () => void
}
// eslint-disable-next-line react-refresh/only-export-components
const Foo: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(
    ref,
    () => {
      return {
        aaa() {
          console.log('focus', 12121)
          inputRef.current?.focus()
        }
      }
    },
    []
  )
  return (
    <div>
      <Input />
      <div>title</div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.forwardRef(Foo)
