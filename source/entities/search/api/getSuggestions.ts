export interface GetSuggestionsResponse {
  suggestions: string[]
}

type GetSuggestionsResponseDTO = string[]

const fromGetSuggestionsResponseDTO = (
  dto: GetSuggestionsResponseDTO,
): GetSuggestionsResponse => ({
  suggestions: dto,
})

interface GetSuggestionsParams {
  keyword: string
}

export const getSuggestions = async ({
  keyword,
}: GetSuggestionsParams): Promise<GetSuggestionsResponse> => {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${keyword}`,
  )

  if (!response.ok) throw new Error(`${response.status}`)

  const data = (await response.json())
    .at(1)
    .map((d: string) => d.toLowerCase())
    .filter((s: string) => s.includes(keyword.toLowerCase()))
    .slice(0, 6)

  return fromGetSuggestionsResponseDTO(data)
}
