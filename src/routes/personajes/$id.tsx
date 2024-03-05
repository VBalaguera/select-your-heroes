import { createFileRoute } from '@tanstack/react-router'
import usePersonajesPorId from '../../services/usePersonajesPorId'
import PersonajeFicha from '../../features/personajes/PersonajeFicha'
import { useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/personajes/$id')({
  loader: async ({ params }) => {
    console.log(params.id)
  },

  component: PersonajesId,
})

export default function PersonajesId() {
  const navigate = useNavigate()
  const { id } = Route.useParams()
  console.log(Number(id))

  const { data, isLoading, error } = usePersonajesPorId(Number(id))

  if (isLoading) return <span>loading</span>
  if (error) return <span>{error.message}</span>

  return (
    <div className='flex flex-col gap-2 items-center justify-center h-full w-full'>
      <PersonajeFicha {...data} />
      <button onClick={() => navigate({ to: '/' })}>Volver</button>
    </div>
  )
}
