import { createFileRoute } from '@tanstack/react-router'
import PageTitle from '../components/ui/PageTitle'
import FavoritosList from '../features/favoritos/FavoritosList'

export const Route = createFileRoute('/favoritos')({
  component: Favoritos,
})

export default function Favoritos() {
  return (
    <div className='flex flex-col gap-2'>
      <PageTitle text='Favoritos' />
      <FavoritosList />
    </div>
  )
}
