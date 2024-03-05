import { useEffect, useState } from 'react'
import { PersonajeItemProps } from '../../types/personajes'
import PersonajeItemParent from '../personajes/PersonajeItem'

export default function FavoritosList() {
  const [listaFavoritos, setListaFavoritos] = useState<PersonajeItemProps[]>([])

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]')
    setListaFavoritos(favoritos)
  }, [])
  console.log(listaFavoritos)
  return (
    <div className='flex flex-col gap-2'>
      {listaFavoritos.map((item) => (
        <PersonajeItemParent key={item.id}>
          <PersonajeItemParent.Image {...item} />
          <PersonajeItemParent.Info {...item} />
        </PersonajeItemParent>
      ))}
    </div>
  )
}
