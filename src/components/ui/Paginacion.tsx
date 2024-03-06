export default function Paginacion({
  pagina,
  setPagina,
  numPaginas,
  nombrePagina,
}: {
  pagina: number
  setPagina: (pagina: number) => void
  numPaginas: number
  nombrePagina: string
}) {
  return (
    <div className='w-full flex flex-col gap-2 items-center justify-center'>
      {' '}
      <span>
        Página {pagina} de {numPaginas}
      </span>
      <div className='flex gap-2'>
        <button
          onClick={() => {
            setPagina(pagina - 1)
            localStorage.setItem(
              `página-${nombrePagina}`,
              (pagina - 1).toString()
            )
          }}
          disabled={pagina <= 1}
        >
          Anterior
        </button>
        <button
          onClick={() => {
            setPagina(pagina + 1)
            localStorage.setItem(
              `página-${nombrePagina}`,
              (pagina + 1).toString()
            )
          }}
          disabled={pagina >= numPaginas}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}
