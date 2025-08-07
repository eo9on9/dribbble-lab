import { cva } from 'class-variance-authority'
import { useFormFieldContext } from './Context'

export interface ClearProps {
  visible?: boolean
  onClick?: () => void
  autoFocusAfterClick?: boolean
}

export const Clear = ({
  visible,
  onClick,
  autoFocusAfterClick,
}: ClearProps) => {
  const { id } = useFormFieldContext()

  if (!visible) return null

  const handleClick = () => {
    onClick?.()

    if (autoFocusAfterClick) document.getElementById(id)?.focus()
  }

  return (
    <button type="button" className={clearClassName()} onClick={handleClick}>
      Clear
    </button>
  )
}

const clearClassName = cva([
  /** text */
  'text-sm text-gray-700',

  /** interactivity */
  'cursor-pointer',

  /** case: hover */
  'hover:opacity-70',
])
