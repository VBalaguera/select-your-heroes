import useCharacters from '../../services/useCharacters'
import { PersonajeItemProps } from '../../interfaces/personajes'
import PersonajeItemParent from './PersonajeItem'

export default function PersonajesList() {
  const { data, isLoading, error } = useCharacters()

  if (isLoading) return <span>loading</span>
  if (error) return <span>{error.message}</span>

  console.log(data.info)
  console.log(data.results)

  return (
    <div className='flex flex-col gap-2'>
      {data.results.map((item: PersonajeItemProps) => (
        <PersonajeItemParent key={item.id}>
          <PersonajeItemParent.Status status={item.status} />
          <PersonajeItemParent.Image image={item.image} name={item.name} />
          <PersonajeItemParent.Info {...item} />
          <PersonajeItemParent.Button {...item} />
        </PersonajeItemParent>
      ))}
    </div>
  )
}
