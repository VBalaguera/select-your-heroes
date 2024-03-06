import { useEffect, useState } from 'react'
import { PersonajeItemProps } from '../../types/personajes'
import PersonajeFicha from '../personajes/PersonajeFicha'

export default function FavoritosLista() {
  const [listaFavoritos, setListaFavoritos] = useState<PersonajeItemProps[]>([])

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]')
    setListaFavoritos(favoritos)
  }, [])
  console.log(listaFavoritos)
  return (
    <div className='flex flex-wrap gap-2 items-center justify-center'>
      {listaFavoritos.map((item: PersonajeItemProps) => (
        <PersonajeFicha item={item} key={item.id} />
      ))}
    </div>
  )
}
