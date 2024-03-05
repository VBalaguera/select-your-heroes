import useCharacters from '../../services/usePersonajes'
import { PersonajeItemProps } from '../../types/personajes'
import PersonajeItemParent from './PersonajeItem'

export default function PersonajesLista() {
  const { data, isLoading, error } = useCharacters()

  if (isLoading) return <span>loading</span>
  if (error) return <span>{error.message}</span>

  console.log(data.info)
  console.log(data.results)

  return (
    <div className='flex flex-wrap gap-2'>
      {data.results.map((item: PersonajeItemProps) => (
        <PersonajeItemParent key={item.id}>
          <PersonajeItemParent.Status status={item.status} />
          <PersonajeItemParent.Image {...item} />
          <PersonajeItemParent.Info {...item} />
          <PersonajeItemParent.Button {...item} />
        </PersonajeItemParent>
      ))}
    </div>
  )
}
