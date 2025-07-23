import { cva } from 'class-variance-authority'

interface SearchButtonProps {
  onClick?: () => void
}

export const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <button className={buttonClassName()} aria-label="search" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        role="img"
        className={iconClassName()}
      >
        <path
          d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  )
}

const buttonClassName = cva(
  'flex justify-center items-center rounded-full bg-pink-500 text-white w-10 h-10 cursor-pointer outline-0 hover:opacity-90 focus:opacity-90',
)
const iconClassName = cva('w-5 h-5')
