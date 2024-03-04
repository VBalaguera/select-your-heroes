import useCharacters from '../../services/useCharacters'
import CharacterItem, { PersonajeItemProps } from './PersonajeItem'

export default function PersonajesList() {
  const { data, isLoading, error } = useCharacters()

  if (isLoading) return <span>loading</span>
  if (error) return <span>{error.message}</span>

  console.log(data.info)
  console.log(data.results)

  return (
    <div className='flex flex-col gap-2'>
      {data.results.map((item: PersonajeItemProps) => (
        <CharacterItem {...item} key={item.id} />
      ))}
    </div>
  )
}
