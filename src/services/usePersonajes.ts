// custom hook usando llamada API
// obtiene ítems de personajes por páginas
import { getPersonajes } from './apiPersonajesAlt'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export default function useCharacters(page: number) {
  const { isLoading, data, error, isPlaceholderData } = useQuery({
    queryKey: ['personajes', page],
    queryFn: () => getPersonajes(page),
    placeholderData: keepPreviousData,
    retry: 2,
  })

  return {
    isLoading,
    data,
    error,
    isPlaceholderData,
  }
}
