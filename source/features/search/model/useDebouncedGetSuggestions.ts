import { useGetSuggestions } from '@/source/entities/search/model/useGetSuggestions'
import { useEffect, useState } from 'react'

export const useDebouncedGetSuggestion = (keyword: string) => {
  const [isDebouncing, setIsDebouncing] = useState(false)
  const [debouncedKeyword, setDebouncedKeyword] = useState(keyword)
  const query = useGetSuggestions(debouncedKeyword)

  useEffect(() => {
    setIsDebouncing(true)
    const handler = setTimeout(() => {
      setDebouncedKeyword(keyword)
      setIsDebouncing(false)
    }, 200)
    return () => {
      clearTimeout(handler)
    }
  }, [keyword])

  return {
    ...query,
    isDebouncing,
  }
}
