import { cva } from 'class-variance-authority'
import { SuggestionItem } from './SuggestionItem'

interface SuggestionProps {
  activeIndex: number
  suggestions: string[]
  value: string
  onClickSuggestion: (suggestion: string) => void
  onMouseEnterSuggestion: (suggestion: string) => void
  onMouseLeaveSuggestion: (suggestion: string) => void
}

export const Suggestion = ({
  activeIndex,
  suggestions,
  value,
  onClickSuggestion,
  onMouseEnterSuggestion,
  onMouseLeaveSuggestion,
}: SuggestionProps) => {
  return (
    <div className={wrapClassName()}>
      {suggestions.map((s, index) => (
        <SuggestionItem
          active={activeIndex === index}
          key={s}
          suggestion={s}
          value={value}
          onClick={onClickSuggestion}
          onMouseEnter={onMouseEnterSuggestion}
          onMouseLeave={onMouseLeaveSuggestion}
        />
      ))}
    </div>
  )
}

const wrapClassName = cva(
  'absolute top-16 left-0 w-full bg-white rounded-lg shadow-[0px_15px_50px_0px_rgba(0,0,0,0.1)] p-4',
)
