import { useEffect, useState } from 'react'
import useCharacters from '../../services/usePersonajes'
import Cargando from '../../components/ui/Cargando'

import PersonajesLista from './PersonajesLista'

export default function PersonajesContent() {
  // página inicial
  const [page, setPage] = useState<number>(1)
  const { data, isLoading, error, isFetching } = useCharacters(page)

  // obtiene el nº de página en el que hemos estado
  useEffect(() => {
    const currPage = JSON.parse(localStorage.getItem('página') || '1')
    setPage(currPage)
  }, [])

  if (isLoading) return <Cargando />
  if (error) return <span>{error.message}</span>

  return (
    <div className='flex flex-col gap-2'>
      {/* paginación  */}
      <div className='w-full flex flex-col gap-2 items-center justify-center'>
        {' '}
        <span>
          Página {page} de {data.info.pages}
        </span>
        <div className='flex gap-2'>
          <button
            onClick={() => {
              setPage((old) => Math.max(old - 1, 0))
              localStorage.setItem('página', (page - 1).toString())
            }}
            disabled={page <= 1}
          >
            Anterior
          </button>
          <button
            onClick={() => {
              setPage(page + 1)
              localStorage.setItem('página', (page + 1).toString())
            }}
            disabled={page >= data.info.pages}
          >
            Siguiente
          </button>
        </div>
      </div>

      {/* datos */}
      {!isFetching && <PersonajesLista data={data.results} />}
    </div>
  )
}
