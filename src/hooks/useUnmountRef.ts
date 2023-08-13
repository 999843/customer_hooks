import { useEffect, useRef } from 'react'

//组件是否卸载
export const useUnmountRef = (): { readonly current: boolean } => {
  const unmountRef = useRef<boolean>(false)
  useEffect(() => {
    unmountRef.current = false
    return () => {
      unmountRef.current = true
    }
  }, [])
  return unmountRef
}
