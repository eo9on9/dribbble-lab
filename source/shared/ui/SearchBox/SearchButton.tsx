import { SearchBoldIcon } from '@/source/shared/ui/icons'
import { cva } from 'class-variance-authority'

interface SearchButtonProps {
  onClick?: () => void
}

export const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <button className={buttonClassName()} aria-label="search" onClick={onClick}>
      <SearchBoldIcon className={iconClassName()} />
    </button>
  )
}

const buttonClassName = cva([
  /** layout */
  'flex justify-center items-center w-10 h-10 rounded-full bg-drb-pink-400',
  /** text */
  'text-white',
  /** interaction */
  'cursor-pointer outline-0 hover:bg-drb-pink-300 focus:bg-drb-pink-300',
])
const iconClassName = cva('w-5 h-5')
