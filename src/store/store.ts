import { create } from 'zustand'
import { PersonajeItemProps } from '../types/personajes'
import { localStorageGetItem } from '../utils/localStorage'

// store
interface ListaFavoritosStore {
  favoritos: PersonajeItemProps[] | []
  añadirFavorito: (item: PersonajeItemProps) => void
  borrarFavorito: (id: number) => void
}

interface PaginacionStore {
  paginaPersonajes: number
  paginaFavoritos: number
}

// creando store
export const useFavoritosStore = create<ListaFavoritosStore>((set) => ({
  favoritos: localStorageGetItem('favoritos') || [],
  añadirFavorito: (item) =>
    set((state) => ({ favoritos: [...state.favoritos, item] })),
  borrarFavorito: (id) =>
    set((state) => ({
      favoritos: state.favoritos.filter((favorito) => favorito.id !== id),
    })),
}))

//

// store paginación
export const usePaginacionStore = create<PaginacionStore>(() => ({
  paginaFavoritos: 1,
  paginaPersonajes: 1,
}))
