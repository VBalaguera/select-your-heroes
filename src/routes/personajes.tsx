import { createFileRoute } from '@tanstack/react-router'
import PageTitle from '../components/ui/PageTitle'
import PersonajesList from '../features/personajes/PersonajesList'

export const Route = createFileRoute('/personajes')({
  component: Personajes,
})

export default function Personajes() {
  return (
    <div>
      <PageTitle text='Personajes' />
      <PersonajesList />
    </div>
  )
}
