import { createLazyFileRoute } from '@tanstack/react-router'
import PageTitle from '../components/ui/PageTitle'
import PersonajesContent from '../features/personajes/PersonajesContent'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <PageTitle text='Personajes' />
      <PersonajesContent />
    </div>
  )
}
