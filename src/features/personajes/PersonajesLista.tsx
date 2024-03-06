import { PersonajeItemProps } from '../../types/personajes'
import PersonajeFicha from './PersonajeFicha'

type PersonajesListaProps = {
  data: PersonajeItemProps[]
}

// TODO:  fix this
export default function PersonajesLista({ data }: PersonajesListaProps) {
  return (
    <div className='flex flex-wrap gap-2 items-center justify-center'>
      {data.map((item: PersonajeItemProps) => (
        <PersonajeFicha item={item} key={item.id} hasButton={true} />
      ))}
    </div>
  )
}
