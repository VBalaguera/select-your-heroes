import { PersonajeItemProps } from '../types/personajes'

// recibe arr objs y obj/num
// comprueba si en el arr objs hay un obj con un valor especificado
// devuelve boolean
export const comprobarFavoritoExiste = (
  listaFavoritos: PersonajeItemProps[] | [],
  personajeSeleccionado: PersonajeItemProps | number
): boolean => {
  if (typeof personajeSeleccionado === 'number') {
    return listaFavoritos.some(
      (item: PersonajeItemProps) => item.id === personajeSeleccionado
    )
  } else {
    return listaFavoritos.some(
      (item: PersonajeItemProps) => item.id === personajeSeleccionado.id
    )
  }
}

// filtra un obj en arr objs
// usando un valor específico
// devuelve arr objs
export const filtrarFavoritoExistente = (
  listaFavoritos: PersonajeItemProps[] | [],
  personajeSeleccionado: PersonajeItemProps
): PersonajeItemProps[] => {
  const favoritosFiltrados = listaFavoritos.filter(
    (item: PersonajeItemProps) => item.id !== personajeSeleccionado.id
  )
  return favoritosFiltrados
}
