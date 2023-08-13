//只在组件初始化执行的 hook
import { useEffect } from 'react'

export const useMount = (callBack: () => void) => {
  useEffect(() => {
    callBack?.()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
