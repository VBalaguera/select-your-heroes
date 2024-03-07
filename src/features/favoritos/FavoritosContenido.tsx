// muestra contador, paginación y lista de favoritos
// realiza llamada a store para recibir favoritos
// paginación

import { useState } from 'react'
import FavoritosLista from './FavoritosLista'
import Paginacion from '../../components/ui/Paginacion'
import { useFavoritosStore, usePaginacionStore } from '../../store/store'
import FavoritosContador from './FavoritosContador'

export default function FavoritosContenido() {
  // página inicial
  const [pagina, setPagina] = useState<number>(
    usePaginacionStore((state) => state.paginaFavoritos)
  )

  // num favs por página
  const favoritosPorPagina = 5

  // carga favoritos de store
  const favoritos = useFavoritosStore((state) => state.favoritos)

  // num páginas
  const numPaginas = Math.ceil(favoritos.length / favoritosPorPagina)

  // paginación favoritos
  const paginacionFavoritos = favoritos.slice(
    (pagina - 1) * favoritosPorPagina,
    pagina * favoritosPorPagina
  )

  return (
    <div className='flex flex-wrap flex-col gap-2 items-center justify-center'>
      {/* contador de favoritos */}
      <FavoritosContador numFavoritos={favoritos.length} />

      {/* paginacion */}
      {favoritos.length > 0 && (
        <Paginacion
          pagina={pagina}
          setPagina={setPagina}
          numPaginas={numPaginas}
          nombrePagina={'favoritos'}
        />
      )}

      {/* items favoritos */}
      <FavoritosLista favoritos={paginacionFavoritos} />
    </div>
  )
}
