import { useEffect, useRef, useState } from 'react'

interface UseMountTransitionParams {
  /** 컴포넌트 제어 여부 */
  isOpen: boolean
  /** 애니메이션 지속 시간 (ms) */
  duration: number
  /** 표시 지연 시간 (ms) */
  showDelay?: number
}

export const useMountTransition = ({
  isOpen,
  duration,
  showDelay = 50,
}: UseMountTransitionParams) => {
  const [isCreated, setIsCreated] = useState(false)
  const [isShown, setIsShown] = useState(false)

  const openTimer = useRef<NodeJS.Timeout | null>(null)
  const closeTimer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isOpen) {
      setIsCreated(true)

      if (openTimer.current) clearTimeout(openTimer.current)

      openTimer.current = setTimeout(() => setIsShown(true), showDelay)
    } else {
      setIsShown(false)
    }

    return () => {
      if (openTimer.current) clearTimeout(openTimer.current)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isShown) {
      if (closeTimer.current) clearTimeout(closeTimer.current)

      closeTimer.current = setTimeout(() => setIsCreated(false), duration)
    }

    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [isShown])

  return {
    /** 컴포넌트 생성 여부 */
    isCreated,
    /** 컴포넌트 표시 여부 */
    isShown,
  }
}
