import { useSuggestionControlContext } from '@/source/shared/ui/SearchBox/SuggestionControlContext'
import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { SuggestionItem } from './SuggestionItem'

interface SuggestionProps {
  value?: string
  onClick: (suggestion: string) => void
}

export const Suggestion = forwardRef<HTMLDivElement, SuggestionProps>(
  ({ value, onClick }, ref) => {
    const { suggestions, isOpen } = useSuggestionControlContext()

    if (suggestions.length === 0 || value?.length === 0 || !isOpen) return null

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

const wrapClassName = cva([
  /** layout */
  'z-10 absolute top-16 left-0 w-full bg-white rounded-lg shadow-panel p-2',
])
