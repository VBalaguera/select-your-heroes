// custom hook usando llamada API
import { getPersonajes } from './apiPersonajes'
import { useQuery } from '@tanstack/react-query'

export default function useCharacters() {
  const { isLoading, data, error } = useQuery({
    // identify data
    // needs to be an arr
    queryKey: ['personajes'],
    // function for querying
    // returns a promise
    // could be any function
    queryFn: getPersonajes,
  })

  return {
    isLoading,
    data,
    error,
  }
}
