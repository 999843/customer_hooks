import { useEffect, useRef } from 'react'

// 更新 title 的hook
export const useDocumentTitle = (title: string, keepOnMount = true) => {
  const oldTitle = useRef(document.title).current

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    if (!keepOnMount) {
      document.title = oldTitle
    }
  }, [keepOnMount, oldTitle])
}
