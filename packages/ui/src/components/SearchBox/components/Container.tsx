import { cva } from 'class-variance-authority'
import { FocusEvent, PropsWithChildren } from 'react'
import { useBoxControlContext } from '../contexts/BoxControlContext'

export const Container = ({ children }: PropsWithChildren) => {
  const { setIsFocused, setIsHovered } = useBoxControlContext()

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsFocused(false)
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className={containerClassName()}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="searchbox"
    >
      {children}
    </div>
  )
}

const containerClassName = cva(
  'relative flex justify-center items-center gap-3 w-full h-14 bg-gray-100 rounded-full px-2 border-2 border-gray-100 hover:bg-white hover:border-pink-200 focus-within:bg-white focus-within:border-pink-200 transition',
)
