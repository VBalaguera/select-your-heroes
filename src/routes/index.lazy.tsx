import { createLazyFileRoute } from '@tanstack/react-router'
import PageTitle from '../components/ui/PageTitle'
import PersonajesLista from '../features/personajes/PersonajesLista'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <PageTitle text='Personajes' />
      <PersonajesLista />
    </div>
  )
}
