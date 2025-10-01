import { useBoxControlContext } from '@/source/shared/ui/SearchBox/BoxControlContext'
import { cva } from 'class-variance-authority'
import { type FocusEvent, type PropsWithChildren } from 'react'

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

const containerClassName = cva([
  /** layout */
  'relative flex justify-center items-center gap-3 w-full px-2 h-14 bg-drb-gray-50 rounded-full border-2 border-drb-gray-50',
  /** interaction */
  'hover:bg-white hover:border-drb-pink-50 focus-within:bg-white focus-within:border-drb-pink-50',
  /** transition */
  'transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
])
