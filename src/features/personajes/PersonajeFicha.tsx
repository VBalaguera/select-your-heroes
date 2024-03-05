import { PersonajeItemProps } from '../../types/personajes'
import PersonajeItemParent from './PersonajeItem'

export default function PersonajeFicha(item: PersonajeItemProps) {
  return (
    <div className='flex flex-col gap-2'>
      <PersonajeItemParent key={item.id}>
        <PersonajeItemParent.Status status={item.status} />
        <PersonajeItemParent.Image {...item} />
        <PersonajeItemParent.Info {...item} />
        <PersonajeItemParent.Button {...item} />
      </PersonajeItemParent>
    </div>
  )
}
