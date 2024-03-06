import { createFileRoute } from '@tanstack/react-router'
import PageTitle from '../components/ui/PageTitle'
import FavoritosContenido from '../features/favoritos/FavoritosContenido'
import { useFavoritosStore } from '../store/store'

export const Route = createFileRoute('/favoritos')({
  component: Favoritos,
})

export default function Favoritos() {
  const favoritos = useFavoritosStore((state) => state.favoritos)
  console.log(favoritos)
  return (
    <div className='flex flex-col gap-2'>
      <PageTitle text='Favoritos' />
      <FavoritosContenido />
    </div>
  )
}
