import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/favorites')({
  component: Favorites,
})

export default function Favorites() {
  return <div>favorite</div>
}
