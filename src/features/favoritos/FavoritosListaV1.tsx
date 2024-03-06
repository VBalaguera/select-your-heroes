import { useEffect, useState } from 'react'
import { PersonajeItemProps } from '../../types/personajes'
import PersonajeFicha from '../personajes/PersonajeFicha'
import { getItem, setItem } from '../../utils/localStorage'
import { Link } from '@tanstack/react-router'

export default function FavoritosLista() {
  const [listaFavoritos, setListaFavoritos] = useState<
    PersonajeItemProps[] | []
  >([])

  // carga favoritos de localStorage
  // al montarse
  useEffect(() => {
    const favoritos = getItem('favoritos')
    setItem('favoritos', favoritos)
    console.log(getItem('favoritos'))
    setListaFavoritos(favoritos)
  }, [])

  return (
    <div className='flex flex-col gap-2 items-center'>
      {listaFavoritos.length > 0 ? (
        <span>Número de entradas: {listaFavoritos.length}</span>
      ) : (
        <span>
          Aún no hay favoritos.{' '}
          <Link
            to='/'
            className='[&.active]:font-bold [&.active]:text-[orangered] font-bold hover:text-[orangered] transition:all_.3s_ease-in-out hover:[transition:all_.3s_ease-in-out]'
          >
            Pulse aquí
          </Link>{' '}
          para ir a la selección de personajes.
        </span>
      )}

      <div className='flex flex-wrap gap-2 items-center justify-center'>
        {listaFavoritos.map((item: PersonajeItemProps) => (
          <div
            className='flex flex-col gap-2 p-4 border-[1px] border-[solid] border-[black] rounded-[14px]
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
