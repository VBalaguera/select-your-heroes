import { PersonajeItemProps } from '../../types/personajes'
import PersonajeItemParent from './PersonajeItem'

type PersonajeFichaProps = {
  item: PersonajeItemProps
  hasButton?: boolean
}

export default function PersonajeFicha({
  item,
  hasButton = false,
}: PersonajeFichaProps) {
  return (
    <div className='flex flex-col gap-2'>
      <PersonajeItemParent key={item.id}>
        <PersonajeItemParent.Status status={item.status} />
        <PersonajeItemParent.Image {...item} />
        <PersonajeItemParent.Info {...item} />
        {hasButton && <PersonajeItemParent.Button {...item} />}
      </PersonajeItemParent>
    </div>
  )
}
