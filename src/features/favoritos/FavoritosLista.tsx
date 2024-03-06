import { useEffect, useState } from 'react'
import { PersonajeItemProps } from '../../types/personajes'
import PersonajeFicha from '../personajes/PersonajeFicha'
import { getItem, setItem } from '../../utils/localStorage'

export default function FavoritosLista() {
  const [listaFavoritos, setListaFavoritos] = useState<
    PersonajeItemProps[] | object
  >([])

  // carga favoritos de localStorage
  // al montarse
  useEffect(() => {
    const favoritos = getItem('favoritos')
    setItem('favoritos', favoritos)
    console.log(getItem('favoritos'))
    setListaFavoritos(favoritos)
  }, [])

  return (
    <div className='flex flex-wrap gap-2 items-center justify-center'>
      {Object.values(listaFavoritos).map((item: PersonajeItemProps) => (
        <PersonajeFicha item={item} key={item.id} />
      ))}
    </div>
  )
}
