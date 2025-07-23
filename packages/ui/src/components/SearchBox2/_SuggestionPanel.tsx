export const SuggestionPanel = () => {
  const { suggestions } = useSuggestionControlContext()

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
