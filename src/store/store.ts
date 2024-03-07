// state management store

import { create } from 'zustand'
import { PersonajeItemProps } from '../types/personajes'
import { localStorageGetItem } from '../utils/localStorage'

// interface favoritos
interface ListaFavoritosStore {
  favoritos: PersonajeItemProps[] | []
  añadirFavorito: (item: PersonajeItemProps) => void
  borrarFavorito: (id: number) => void
}

// interface paginación
interface PaginacionStore {
  paginaPersonajes: number
  paginaFavoritos: number
}

// store favoritos
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
  paginaFavoritos: Number(localStorage.getItem('página-favoritos')) || 1,
  paginaPersonajes: Number(localStorage.getItem('página-personajes')) || 1,
}))
