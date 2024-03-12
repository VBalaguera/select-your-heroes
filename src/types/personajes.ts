import { ReactNode } from 'react'

export interface PersonajeItemProps {
  id: number
  image: string
  name: string
  gender: string
  species: string
  status: string
  episode: string[]
  origin: {
    name: string
  }
  location: {
    name: string
  }
  url: string
}

export type PersonajeItemParentProps = {
  children: ReactNode
}

export type PersonajeItemInfoProps = Omit<PersonajeItemProps, 'status' | 'url'>

export type PersonajeItemStatusProps = Pick<PersonajeItemProps, 'status'>

export type PersonajeItemImageProps = Pick<
  PersonajeItemProps,
  'image' | 'name' | 'id'
>

export interface PersonajeFichaProps {
  item: PersonajeItemProps
  esFavorito?: boolean | undefined
  handleAñadirFavorito?: (item: PersonajeItemProps) => void | undefined
  borrarFavorito?: (item: PersonajeItemProps) => void | undefined
  hasButton?: boolean
}

export type PersonajeInteraccionesProps = Omit<PersonajeFichaProps, 'hasButton'>

export type PersonajesListaProps = {
  data: PersonajeItemProps[]
}
