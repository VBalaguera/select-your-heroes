import { PersonajeItemProps } from '../../types/personajes'
import PersonajeItemParent from './PersonajeItem'

export default function PersonajeFicha(item: PersonajeItemProps) {
  return (
    <div className='flex flex-col gap-2 flex flex-col gap-2 p-4 border-[1px] border-[solid] border-[black] rounded-[14px]'>
      <PersonajeItemParent key={item.id}>
        <PersonajeItemParent.Status status={item.status} />
        <PersonajeItemParent.Image {...item} />
        <PersonajeItemParent.Info {...item} />
      </PersonajeItemParent>
    </div>
  )
}
