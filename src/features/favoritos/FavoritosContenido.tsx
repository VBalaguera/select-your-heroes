import { useEffect, useState } from 'react'
import FavoritosLista from './FavoritosLista'
import { getItem, setItem } from '../../utils/localStorage'
import { PersonajeItemProps } from '../../types/personajes'
import Paginacion from '../../components/ui/Paginacion'
import { Link } from '@tanstack/react-router'

export default function FavoritosContenido() {
  // página inicial
  const [pagina, setPagina] = useState<number>(1)

  // query favoritos
  const [listaFavoritos, setListaFavoritos] = useState<
    PersonajeItemProps[] | []
  >([])

  // num favs por página
  const favoritosPorPagina = 5

  // num páginas
  const numPaginas = Math.ceil(listaFavoritos.length / favoritosPorPagina)

  // carga favoritos de localStorage
  // al montarse
  useEffect(() => {
    const favoritos = getItem('favoritos')
    setItem('favoritos', favoritos)
    console.log(getItem('favoritos'))
    setListaFavoritos(favoritos)
  }, [])

  // obtiene el nº de página en el que hemos estado
  useEffect(() => {
    const currPagina = JSON.parse(
      localStorage.getItem('página-personajes') || '1'
    )
    setPagina(currPagina)
  }, [])

  // paginación favoritos
  const paginacionFavoritos = listaFavoritos.slice(
    (pagina - 1) * favoritosPorPagina,
    pagina * favoritosPorPagina
  )

  return (
    <div className='flex flex-wrap flex-col gap-2 items-center justify-center'>
      {/* paginacion */}
      {listaFavoritos.length > 0 && (
        <Paginacion
          pagina={pagina}
          setPagina={setPagina}
          numPaginas={numPaginas}
          nombrePagina={'favoritos'}
        />
      )}

      {/* TODO: refactor */}

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

      {/* items favoritos */}
      <FavoritosLista favoritos={paginacionFavoritos} />
    </div>
  )
}
