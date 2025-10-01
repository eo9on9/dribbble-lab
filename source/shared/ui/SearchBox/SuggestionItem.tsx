import { SearchIcon } from '@/source/shared/ui/icons'
import { useSuggestionControlContext } from '@/source/shared/ui/SearchBox/SuggestionControlContext'
import { cva } from 'class-variance-authority'

export interface SuggestionItemProps {
  index: number
  suggestion: string
  onClick?: (suggestion: string) => void
}

export const SuggestionItem = ({
  index,
  suggestion,
  onClick,
}: SuggestionItemProps) => {
  const { baseText, activeIndex, setActiveIndex } =
    useSuggestionControlContext()

  const isActive = activeIndex === index

  const rest = suggestion.split(baseText)[1]

  return (
    <button
      role="option"
      className={wrapClassName({ active: isActive })}
      onClick={() => onClick?.(suggestion)}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(-1)}
      aria-selected={isActive}
      aria-label={suggestion}
    >
      <SearchIcon className={iconClassName()} />
      <span>
        <span>{baseText}</span>
        <span className={restClassName()}>{rest}</span>
      </span>
    </button>
  )
}

const wrapClassName = cva(
  [
    /** layout */
    'flex items-center w-full h-10 py-1 px-2 gap-3 rounded-lg whitespace-pre',
    /** text */
    'text-sm text-drb-black',
    /** interaction */
    'cursor-pointer outline-0 focus:bg-gray-100',
  ],
  {
    variants: {
      active: {
        true: 'bg-gray-100',
      },
    },
  },
)

const restClassName = cva('font-bold')

const iconClassName = cva('w-4 h-4')
