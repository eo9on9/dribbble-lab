import {
  createContext,
  useContext,
  useId,
  useState,
  type PropsWithChildren,
} from 'react'

interface SubPanelContextValue {
  id: string
  isCreated: boolean
  isShown: boolean
  show: () => void
  hide: () => void
  toggle: () => void
  reset: () => void
  onHidden: () => void
}

const subPanelContext = createContext<SubPanelContextValue | undefined>(
  undefined,
)

export const SubPanelContextProvider = ({ children }: PropsWithChildren) => {
  const id = useId()
  const [isCreated, setIsCreated] = useState(false)
  const [isShown, setIsShown] = useState(false)

  const _show = () => {
    setIsCreated(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsShown(true)
      })
    })
  }

  const _hide = () => {
    setIsShown(false)
  }

  const _destroy = () => {
    setIsCreated(false)
  }

  const show = () => {
    if (!isShown) _show()
  }

  const hide = () => {
    if (isCreated) _hide()
  }

  const toggle = () => {
    if (!isShown) {
      _show()
    } else if (isCreated) {
      _hide()
    }
  }

  const reset = () => {
    _destroy()
    _hide()
  }

  const onHidden = () => {
    if (!isShown) _destroy()
  }

  const value = {
    id,
    isCreated,
    isShown,
    show,
    hide,
    toggle,
    reset,
    onHidden,
  }

  return (
    <subPanelContext.Provider value={value}>
      {children}
    </subPanelContext.Provider>
  )
}

export const useSubPanelContext = () => {
  const context = useContext(subPanelContext)

  if (!context)
    throw new Error(
      'useSubPanelContext must be used within a SubPanelContextProvider',
    )

  return context
}
