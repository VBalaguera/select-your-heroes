import { PersonajeItemProps } from '../types/personajes'

// obtiene localStorage
export const getItem = (key: string): PersonajeItemProps[] => {
  return JSON.parse(localStorage.getItem(key) || '[]')
}

// establece localStorage
export const setItem = (key: string, data: object) => {
  return localStorage.setItem(key, JSON.stringify(data))
}
