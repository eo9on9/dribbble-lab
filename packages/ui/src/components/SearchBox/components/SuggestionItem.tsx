import { cva } from 'class-variance-authority'
import { useSuggestionControlContext } from '../contexts'

interface SuggestionItemProps {
  index: number
  suggestion: string
  onClick: (suggestion: string) => void
}

export const SuggestionItem = ({
  index,
  suggestion,
  onClick,
}: SuggestionItemProps) => {
  const { baseText, activeIndex, setActiveIndex } =
    useSuggestionControlContext()

  const rest = suggestion.split(baseText)[1]

  // const pre = suggestion.includes(baseText) ? baseText : ''

  // const rest = suggestion.includes(baseText)
  //   ? suggestion.split(baseText)[1]
  //   : suggestion

  return (
    <button
      className={wrapClassName({ active: activeIndex === index })}
      onClick={() => onClick(suggestion)}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(-1)}
    >
      <Icon />
      <span>
        <span>{baseText}</span>
        <span className={restClassName()}>{rest}</span>
      </span>
    </button>
  )
}

const wrapClassName = cva(
  'flex items-center w-full h-10 py-1 px-2 gap-3 text-gray-900 text-sm rounded-lg whitespace-pre outline-0 focus:bg-gray-100 cursor-pointer',
  {
    variants: {
      active: {
        true: 'bg-gray-100',
        false: '', // 비활성일 때 아무 스타일 없음
      },
    },
  },
)

const restClassName = cva('font-bold')

const Icon = () => (
  <svg
    className={iconClassName()}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
  </svg>
)

const iconClassName = cva('w-4 h-4')
