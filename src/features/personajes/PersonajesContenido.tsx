// muestra paginación y lista de personajes

import { useState } from 'react'
import useCharacters from '../../services/usePersonajes'
import Cargando from '../../components/ui/Cargando'

import PersonajesLista from './PersonajesLista'
import Paginacion from '../../components/ui/Paginacion'
import Error from '../../components/ui/Error'

export default function PersonajesContenido() {
  // página inicial
  const [pagina, setPagina] = useState<number>(() => {
    const numPagina = localStorage.getItem('página-personajes')
    return numPagina ? Number(numPagina) : 1
  })

  // query
  const { data, isLoading, error, isPlaceholderData } = useCharacters(pagina)

  if (isLoading) return <Cargando />
  if (error) return <Error text={error.message} />

  return (
    <div className='flex flex-col gap-2'>
      {/* paginación  */}
      <Paginacion
        isPlaceholderData={isPlaceholderData}
        pagina={pagina}
        setPagina={setPagina}
        numPaginas={data.info.pages}
        nombrePagina={'personajes'}
      />

      {/* datos */}
      {!isLoading && <PersonajesLista data={data.results} />}
    </div>
  )
}
