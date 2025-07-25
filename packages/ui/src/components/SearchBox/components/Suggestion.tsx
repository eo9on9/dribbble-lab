import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { useSuggestionControlContext } from '../contexts'
import { SuggestionItem } from './SuggestionItem'

interface SuggestionProps {
  value?: string
  onClick: (suggestion: string) => void
}

export const Suggestion = forwardRef<HTMLDivElement, SuggestionProps>(
  ({ value, onClick }, ref) => {
    const { suggestions, isOpen } = useSuggestionControlContext()

    if (value?.length === 0 || !isOpen) return null

    return (
      <div ref={ref} className={wrapClassName()} role="listbox">
        {suggestions.map((s, i) => (
          <SuggestionItem key={s} index={i} suggestion={s} onClick={onClick} />
        ))}
      </div>
    )
  },
)

Suggestion.displayName = 'Suggestion'

const wrapClassName = cva(
  'absolute top-16 left-0 w-full bg-white rounded-lg shadow-[0px_15px_50px_0px_rgba(0,0,0,0.1)] p-2',
)
