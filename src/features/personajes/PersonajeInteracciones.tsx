// interacciones (añadir, borrar) de personajes

import { PersonajeInteraccionesProps } from '../../types/personajes'

export default function PersonajeInteracciones({
  esFavorito,
  item,
  borrarFavorito,
  handleAñadirFavorito,
}: PersonajeInteraccionesProps) {
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
