import { ReactNode } from 'react'

export type PersonajeItemProps = {
  id: number
  image?: string
  name: string
  gender: string
  species: string
  status?: string
  episode: string[]
  origin: {
    name: string
  }
  location: {
    name: string
  }
  url?: string
}

export type PersonajeItemParentProps = {
  children: ReactNode
}

export interface PersonajeFichaProps {
  item: PersonajeItemProps
  esFavorito?: boolean | undefined
  handleAñadirFavorito?: (item: PersonajeItemProps) => void | undefined
  borrarFavorito?: (item: PersonajeItemProps) => void | undefined
  hasButton?: boolean
}

export interface PersonajeInteraccionesProps {
  esFavorito: boolean
  item: PersonajeItemProps
  borrarFavorito: (item: PersonajeItemProps) => void
  handleAñadirFavorito: (item: PersonajeItemProps) => void
}

export type PersonajesListaProps = {
  data: PersonajeItemProps[]
}
