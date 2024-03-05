// custom hook usando llamada API
import { getPersonajes } from './apiPersonajes'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export default function useCharacters(page: number) {
  const {
    isLoading,
    data,
    error,
    isPending,
    isError,
    isPlaceholderData,
    isFetching,
  } = useQuery({
    // identify data
    // needs to be an arr
    queryKey: ['personajes', page],
    // function for querying
    // returns a promise
    // could be any function
    queryFn: () => getPersonajes(page),
    placeholderData: keepPreviousData,
  })

  return {
    isLoading,
    data,
    error,
    isPending,
    isFetching,
    isError,
    isPlaceholderData,
  }
}
