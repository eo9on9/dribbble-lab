import { ClearIcon } from '#icons'
import { cva } from 'class-variance-authority'
import { useBoxControlContext } from '../contexts/BoxControlContext'

interface ClearButtonProps {
  onClick?: () => void
}

export const ClearButton = ({ onClick }: ClearButtonProps) => {
  const { isFocused, isHovered } = useBoxControlContext()

  if (!isFocused && !isHovered) return null

  return (
    <button className={buttonClassName()} onClick={onClick} aria-label="Clear">
      <ClearIcon />
    </button>
  )
}

const buttonClassName = cva(
  'flex justify-center items-center w-5 h-5 text-gray-900 cursor-pointer outline-0 opacity-50 hover:opacity-100 focus:opacity-100',
)
