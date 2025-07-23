import { cva } from 'class-variance-authority'
import { useBoxControlContext } from '../contexts/BoxControlContext'

interface ClearButtonProps {
  onClick?: () => void
}

export const ClearButton = ({ onClick }: ClearButtonProps) => {
  const { isFocused, isHovered } = useBoxControlContext()

  if (!isFocused && !isHovered) return null

  return (
    <button className={buttonClassName()} onClick={onClick}>
      <Icon />
    </button>
  )
}

const Icon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
  </svg>
)

const buttonClassName = cva(
  'flex justify-center items-center w-5 h-5 text-gray-900 cursor-pointer outline-0 opacity-50 hover:opacity-100 focus:opacity-100',
)
