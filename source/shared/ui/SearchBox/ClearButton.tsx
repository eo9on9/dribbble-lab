import { ClearIcon } from '@/source/shared/ui/icons'
import { useBoxControlContext } from '@/source/shared/ui/SearchBox/BoxControlContext'
import { cva } from 'class-variance-authority'

interface ClearButtonProps {
  value?: string
  onClick?: () => void
}

export const ClearButton = ({ value, onClick }: ClearButtonProps) => {
  const { isFocused, isHovered } = useBoxControlContext()

  if (value?.length === 0 || (!isFocused && !isHovered)) return null

  return (
    <button className={buttonClassName()} onClick={onClick} aria-label="Clear">
      <ClearIcon className={iconClassName()} />
    </button>
  )
}

const buttonClassName = cva([
  /** layout */
  'flex justify-center items-center w-5 h-5',
  /** text */
  'text-drb-black',
  /** interaction */
  'cursor-pointer outline-0 opacity-50 hover:opacity-100 focus:opacity-100',
])

const iconClassName = cva('w-5 h-5')
