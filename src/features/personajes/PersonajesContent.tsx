import { useEffect, useState } from 'react'
import useCharacters from '../../services/usePersonajes'
import PersonajesLista from './PersonajesLista'

export default function PersonajesContent() {
  const [page, setPage] = useState(1)
  // const { data, isLoading, error } = useCharacters(page)
  const {
    data,
    isLoading,
    error,
    // isPending,
    // isError,
    // isPlaceholderData,
    isFetching,
  } = useCharacters(page)

  useEffect(() => {
    const currPage = JSON.parse(localStorage.getItem('página') || '1')
    setPage(currPage)
  }, [])

  if (isLoading) return <span>Cargando...</span>
  if (error) return <span>{error.message}</span>
  return (
    <div className='flex flex-col gap-2'>
      {/*  */}
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
            disabled={page === 1}
          >
            Anterior
          </button>
          <button
            onClick={() => {
              setPage(page + 1)
              localStorage.setItem('página', (page + 1).toString())
            }}
          >
            Siguiente
          </button>
        </div>
      </div>

      {/*  */}
      {!isFetching && <PersonajesLista data={data.results} />}
    </div>
  )
}
