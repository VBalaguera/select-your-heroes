import PersonajeItemStatus from './PersonajeItemStatus'

type PersonajeItemInfoProps = {
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

export default function PersonajeItemInfo({
  name,
  gender,
  species,
  origin,
  location,
  episode,
}: PersonajeItemInfoProps) {
  return (
    <div className='flex flex-col gap-2'>
      {' '}
      {/* info */}
      <span className='uppercase text-xl font-bold'>{name}</span>
      {/* TODO: url como params para páginas de personajes */}
      {/* <span className='uppercase text-xl font-bold'>{url}</span> */}
      <span>Gender: {gender}</span>
      <span>Species: {species}</span>
      <PersonajeItemStatus status={status} />
      <span>Origin: {origin.name}</span>
      <span>Location: {location.name}</span>
      <span>
        Aparece en {episode.length}{' '}
        {episode.length === 1 ? 'episodio' : 'episodios'}
      </span>
    </div>
  )
}
