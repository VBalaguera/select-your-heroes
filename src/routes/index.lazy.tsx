// router /

import { createLazyFileRoute } from '@tanstack/react-router'
import PageTitle from '../components/ui/PageTitle'
import PersonajesContenido from '../features/personajes/PersonajesContenido'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className='flex flex-col gap-2 w-full '>
      <PageTitle text='Personajes' />
      <PersonajesContenido />
    </div>
  )
}
