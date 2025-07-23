import { cva } from 'class-variance-authority'

interface SuggestionItemProps {
  active: boolean
  suggestion: string
  value: string
  onClick: (suggestion: string) => void
  onMouseEnter: (suggestion: string) => void
  onMouseLeave: (suggestion: string) => void
}

export const SuggestionItem = ({
  active,
  suggestion,
  value,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: SuggestionItemProps) => {
  const rest = suggestion.split(value)[1]

  return (
    <div
      className={wrapClassName({ active })}
      onClick={() => onClick(suggestion)}
      onMouseEnter={() => onMouseEnter(suggestion)}
      onMouseLeave={() => onMouseLeave(suggestion)}
    >
      <span className={valueClassName()}>{value}</span>
      <span className={restClassName()}>{rest}</span>
    </div>
  )
}

const wrapClassName = cva(
  'flex items-center h-10 text-gray-900 text-sm whitespace-pre',
  {
    variants: {
      active: {
        true: 'bg-gray-100',
        false: '', // 비활성일 때 아무 스타일 없음
      },
    },
  },
)

const valueClassName = cva('')

const restClassName = cva('font-bold')
