import { createFileRoute } from '@tanstack/react-router'
import PageTitle from '../components/ui/PageTitle'

export const Route = createFileRoute('/favoritos')({
  component: Favoritos,
})

export default function Favoritos() {
  return (
    <div>
      <PageTitle text='Favoritos' />
    </div>
  )
}
