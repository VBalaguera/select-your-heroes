// listado favoritos

import { PersonajeItemProps } from '../../types/personajes'
import PersonajeFicha from '../personajes/PersonajeFicha'

export default function FavoritosLista({
  favoritos,
}: {
  favoritos: PersonajeItemProps[] | []
}) {
  return (
    <div className='flex flex-col gap-2 items-center'>
      <div className='flex flex-wrap gap-2 items-center justify-center'>
        {favoritos.map((item: PersonajeItemProps) => (
          <div
            className='flex flex-col gap-2 p-4 
'
            key={item.id}
          >
            <PersonajeFicha {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}
