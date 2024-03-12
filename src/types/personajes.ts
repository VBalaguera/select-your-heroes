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

export interface PersonajeInteraccionesProps {
  esFavorito: boolean | undefined
  item: PersonajeItemProps
  borrarFavorito: (item: PersonajeItemProps) => void
  handleAñadirFavorito: (item: PersonajeItemProps) => void
}
