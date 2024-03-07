import { createFileRoute } from '@tanstack/react-router'
import usePersonajesPorId from '../../services/usePersonajesPorId'
import PersonajeFicha from '../../features/personajes/PersonajeFicha'
import { useNavigate } from '@tanstack/react-router'
import Cargando from '../../components/ui/Cargando'
import Error from '../../components/ui/Error'

export const Route = createFileRoute('/personajes/$id')({
  component: PersonajesId,
})

export default function PersonajesId() {
  const navigate = useNavigate()
  const { id } = Route.useParams()

  const { data, isLoading, error } = usePersonajesPorId(Number(id))

  if (isLoading) return <Cargando />
  if (error) return <Error text={error.message} />

  return (
    <div className='flex flex-col gap-2 items-center justify-center h-full w-full'>
      <PersonajeFicha {...data} />
      <button onClick={() => navigate({ to: '/' })}>Volver</button>
    </div>
  )
}
