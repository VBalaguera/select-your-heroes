// Paginación
// recibe:
// página actual
// método para cambiar página
// num total de páginas
// nombre de ítem en paginación para control estado

export default function Paginacion({
  isPlaceholderData,
  pagina,
  setPagina,
  numPaginas,
  nombrePagina,
}: {
  isPlaceholderData?: boolean
  pagina: number
  setPagina: (pagina: number) => void
  numPaginas: number
  nombrePagina: string
}) {
  const pagIncremento = () => {
    if (!isPlaceholderData) {
      setPagina(pagina - 1)
      localStorage.setItem(`página-${nombrePagina}`, (pagina - 1).toString())
    }
  }

  const pagDecremento = () => {
    setPagina(pagina + 1)
    localStorage.setItem(`página-${nombrePagina}`, (pagina + 1).toString())
  }

  return (
    <div className='w-full flex flex-col gap-2 items-center justify-center'>
      {' '}
      <span>
        Página {pagina} de {numPaginas}
      </span>
      <div className='flex gap-2'>
        <button onClick={() => pagIncremento()} disabled={pagina <= 1}>
          Anterior
        </button>
        <button onClick={() => pagDecremento()} disabled={pagina >= numPaginas}>
          Siguiente
        </button>
      </div>
    </div>
  )
}
