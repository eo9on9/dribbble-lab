import {
  getSuggestions,
  type GetSuggestionsResponse,
} from '@/source/entities/search/api/getSuggestions'
import { useQuery, type UseQueryOptions } from '@tanstack/react-query'

export const useGetSuggestions = (
  keyword: string,
  options?: UseQueryOptions<GetSuggestionsResponse>,
) => {
  return {
    ...useQuery({
      queryKey: ['suggestions', keyword],
      queryFn: () => getSuggestions({ keyword: keyword }),
      enabled: !!keyword,
      ...options,
    }),
  }
}
