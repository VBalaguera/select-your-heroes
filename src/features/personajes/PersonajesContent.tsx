import { useEffect, useState } from 'react'
import useCharacters from '../../services/usePersonajes'
import Cargando from '../../components/ui/Cargando'

import PersonajesLista from './PersonajesLista'
import Paginacion from '../../components/ui/Paginacion'

export default function PersonajesContent() {
  // página inicial
  const [pagina, setPagina] = useState<number>(1)

  // query
  const { data, isLoading, error, isFetching } = useCharacters(pagina)

  // obtiene el nº de página en el que hemos estado
  useEffect(() => {
    const currPagina = JSON.parse(
      localStorage.getItem('página-personajes') || '1'
    )
    setPagina(currPagina)
  }, [])

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
      {/* <div className='w-full flex flex-col gap-2 items-center justify-center'>
        {' '}
        <span>
          Página {pagina} de {data.info.pages}
        </span>
        <div className='flex gap-2'>
          <button
            onClick={() => {
              setPagina((old) => Math.max(old - 1, 0))
              localStorage.setItem('página', (pagina - 1).toString())
            }}
            disabled={pagina <= 1}
          >
            Anterior
          </button>
          <button
            onClick={() => {
              setPagina(pagina + 1)
              localStorage.setItem('página', (pagina + 1).toString())
            }}
            disabled={pagina >= data.info.paginas}
          >
            Siguiente
          </button>
        </div>
      </div> */}

      {/* datos */}
      {!isFetching && <PersonajesLista data={data.results} />}
    </div>
  )
}
