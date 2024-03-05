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
