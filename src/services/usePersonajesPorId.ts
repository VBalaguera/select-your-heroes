// custom hook usando llamada API
// obtiene ítem único de personaje por id
import { getPersonajesPorId } from './apiPersonajesAlt'
import { useQuery } from '@tanstack/react-query'

export default function usePersonajesPorId(id: number) {
  const { isLoading, data, error } = useQuery({
    queryKey: ['personaje-ficha'],
    queryFn: () => getPersonajesPorId(id),
  })

  return {
    isLoading,
    data,
    error,
  }
}
