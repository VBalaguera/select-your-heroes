import { PersonajeItemProps } from '../types/personajes'

// de localStorage, obtiene arr Personajes almacenados o arr vacío
// key modulable por si quisiéramos usar
// más categorías en localStorage que "favoritos"
export const localStorageGetItem = (key: string): PersonajeItemProps[] => {
  return JSON.parse(localStorage.getItem(key) || '[]')
}

// establece localStorage de arr Personajes
// key modulable por si quisiéramos usar
// más categorías en localStorage que "favoritos"
export const localStorageSetItem = (key: string, data: object) => {
  return localStorage.setItem(key, JSON.stringify(data))
}
