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

export interface PersonajeItemParentProps {
  children: ReactNode
}

export type PersonajeItemImageProps = {
  image: string
  name: string
  id: number
}

export type PersonajeItemInfoProps = {
  id: number
  name: string
  gender: string
  species: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
  episode: string[]
}

export type PersonajeItemStatusProps = {
  status: string
}
