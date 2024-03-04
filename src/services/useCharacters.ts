// custom hook usando llamada API
import { getCharacters } from './apiCharacters'
import { useQuery } from '@tanstack/react-query'

export default function useCharacters() {
  const { isLoading, data, error } = useQuery({
    // identify data
    // needs to be an arr
    queryKey: ['characters'],
    // function for querying
    // returns a promise
    // could be any function
    queryFn: getCharacters,
  })

  return {
    isLoading,
    data,
    error,
  }
}
