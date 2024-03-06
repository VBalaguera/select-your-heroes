import { PersonajeItemProps } from '../../types/personajes'

export default function PersonajeInteracciones({
  esFavorito,
  item,
  borrarFavorito,
  handleAñadirFavorito,
}: {
  // TODO: refactor this
  esFavorito: boolean
  item: PersonajeItemProps
  borrarFavorito: (item: PersonajeItemProps) => void
  handleAñadirFavorito: (item: PersonajeItemProps) => void
}) {
  return (
    <div className='flex gap-2 w-full'>
      {' '}
      {esFavorito ? (
        <button className='w-full' onClick={() => borrarFavorito(item)}>
          borrar
        </button>
      ) : (
        <button className='w-full' onClick={() => handleAñadirFavorito(item)}>
          añadir
        </button>
      )}
    </div>
  )
}
