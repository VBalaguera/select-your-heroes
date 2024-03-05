import { useEffect, useState } from 'react'
import { PersonajeItemProps } from '../../interfaces/personajes'
import PersonajeItem from '../personajes/PersonajeItem'

export default function FavoritosList() {
  const [listaFavoritos, setListaFavoritos] = useState<PersonajeItemProps[]>([])

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]')
    setListaFavoritos(favoritos)
  }, [])
  console.log(listaFavoritos)
  return (
    <div className='flex flex-col gap-2'>
      <h2>listado de favoritos</h2>
      <span>
        {listaFavoritos.map((item) => (
          <PersonajeItem {...item} key={item.id} />
        ))}
      </span>
    </div>
  )
}
