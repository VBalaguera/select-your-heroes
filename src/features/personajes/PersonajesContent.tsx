import { useState } from 'react'
import useCharacters from '../../services/usePersonajes'
import Cargando from '../../components/ui/Cargando'

import PersonajesLista from './PersonajesLista'
import Paginacion from '../../components/ui/Paginacion'
import { usePaginacionStore } from '../../store/store'

export default function PersonajesContent() {
  // página inicial
  const [pagina, setPagina] = useState<number>(
    usePaginacionStore((state) => state.paginaFavoritos)
  )

  // query
  const { data, isLoading, error, isFetching } = useCharacters(pagina)

  if (isLoading) return <Cargando />
  if (error) return <span>{error.message}</span>

  return (
    <div className='flex flex-col gap-2'>
      {/* paginación  */}
      <Paginacion
        pagina={pagina}
        setPagina={setPagina}
        numPaginas={data.info.pages}
        nombrePagina={'personajes'}
      />

      {/* datos */}
      {!isFetching && <PersonajesLista data={data.results} />}
    </div>
  )
}
