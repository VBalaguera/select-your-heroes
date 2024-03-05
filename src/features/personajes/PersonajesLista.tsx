import { PersonajeItemProps } from '../../types/personajes'
import PersonajeItemParent from './PersonajeItem'

// TODO:  fix this
export default function PersonajesLista({ data }: PersonajeItemProps[]) {
  console.log(data)
  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
      {/* paginación */}

      {/* lista de personajes */}
      <div className='flex flex-wrap gap-2'>
        {data.map((item: PersonajeItemProps) => (
          <PersonajeItemParent key={item.id}>
            <PersonajeItemParent.Status status={item.status} />
            <PersonajeItemParent.Image {...item} />
            <PersonajeItemParent.Info {...item} />
            <PersonajeItemParent.Button {...item} />
          </PersonajeItemParent>
        ))}
      </div>
    </div>
  )
}
