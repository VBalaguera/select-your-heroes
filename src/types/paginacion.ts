export interface PaginacionProps {
  isPlaceholderData?: boolean
  pagina: number
  setPagina: (pagina: number) => void
  numPaginas: number
  nombrePagina: string
}
