import { PersonajeItemProps } from '../../types/personajes'
// import PersonajeInteracciones from './PersonajeInteracciones'
import PersonajeItemParent from './PersonajeItem'

export default function PersonajeFicha({
  item,
  esFavorito,
  handleAñadirFavorito,
  borrarFavorito,
}: {
  item: PersonajeItemProps
  esFavorito: boolean
  handleAñadirFavorito: (item: PersonajeItemProps) => void
  borrarFavorito: (item: PersonajeItemProps) => void
}) {
  return (
    <div className='flex flex-col gap-2 p-4 border-[1px] border-[solid] border-[black] rounded-[14px]'>
      <PersonajeItemParent key={item.id}>
        {esFavorito ? 'es favorito' : 'no lo es'}
        <PersonajeItemParent.Status status={item.status} />
        <PersonajeItemParent.Image {...item} />
        <PersonajeItemParent.Info {...item} />
        <PersonajeItemParent.Boton
          esFavorito={esFavorito}
          item={item}
          borrarFavorito={borrarFavorito}
          handleAñadirFavorito={handleAñadirFavorito}
        />
        {/* <PersonajeInteracciones
          esFavorito={esFavorito}
          item={item}
          borrarFavorito={borrarFavorito}
          handleAñadirFavorito={handleAñadirFavorito}
        /> */}
      </PersonajeItemParent>
    </div>
  )
}
