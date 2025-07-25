import { SearchIcon } from '#icons'
import { cva } from 'class-variance-authority'

interface SearchButtonProps {
  onClick?: () => void
}

export const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <button className={buttonClassName()} aria-label="search" onClick={onClick}>
      <SearchIcon className={iconClassName()} />
    </button>
  )
}

const buttonClassName = cva(
  'flex justify-center items-center rounded-full bg-pink-500 text-white w-10 h-10 cursor-pointer outline-0 hover:opacity-90 focus:opacity-90',
)
const iconClassName = cva('w-5 h-5')
