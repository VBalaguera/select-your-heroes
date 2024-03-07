// muestra nº de favoritos
// despliega contenido según nº

import { Link } from '@tanstack/react-router'

export default function FavoritosContador({
  numFavoritos,
}: {
  numFavoritos: number
}) {
  return (
    <>
      {numFavoritos > 0 ? (
        <span>Número de entradas: {numFavoritos}</span>
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
    </>
  )
}
