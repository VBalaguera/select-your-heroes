import { useEffect, useState } from 'react'
import {
  PersonajeItemProps,
  PersonajesListaProps,
} from '../../types/personajes'
import PersonajeFicha from './PersonajeFicha'
import { getItem, setItem } from '../../utils/localStorage'
import {
  comprobarFavoritoExiste,
  filtrarFavoritoExistente,
} from '../../helpers/utils'
import PersonajeInteracciones from './PersonajeInteracciones'

export default function PersonajesLista({ data }: PersonajesListaProps) {
  const [listaFavoritos, setListaFavoritos] = useState<
    PersonajeItemProps[] | []
  >([])

  // carga favoritos de localStorage
  // al montarse
  useEffect(() => {
    const favoritos = getItem('favoritos')
    setItem('favoritos', favoritos)
    console.log(getItem('favoritos'))
    setListaFavoritos(favoritos)
  }, [])

  const añadirFavorito = (nuevoFavorito: PersonajeItemProps) => {
    // es favorito?
    const esFavorito = comprobarFavoritoExiste(listaFavoritos, nuevoFavorito.id)

    if (esFavorito) return

    setListaFavoritos([...listaFavoritos, nuevoFavorito])
    setItem('favoritos', [...listaFavoritos, nuevoFavorito])
    console.log('añadirFavorito listaFavoritos', listaFavoritos)
  }

  const borrarFavorito = (item: PersonajeItemProps) => {
    const favoritosFiltrados = filtrarFavoritoExistente(listaFavoritos, item)
    setListaFavoritos(favoritosFiltrados)
    localStorage.setItem('favoritos', JSON.stringify(favoritosFiltrados))
  }

  const handleAñadirFavorito = (item: PersonajeItemProps) => {
    const {
      id,
      image,
      name,
      gender,
      species,
      status,
      origin,
      episode,
      location,
      url,
    } = item
    const nuevoFavorito: PersonajeItemProps = {
      id,
      image,
      name,
      gender,
      species,
      status,
      origin,
      episode,
      location,
      url,
    }
    añadirFavorito(nuevoFavorito)
  }

  return (
    <div className='flex flex-wrap gap-2 items-center justify-center'>
      {data.map((item: PersonajeItemProps) => (
        <div
          className='flex flex-col gap-2 
'
          key={item.id}
        >
          <PersonajeFicha
            item={item}
            esFavorito={comprobarFavoritoExiste(listaFavoritos, item.id)}
            borrarFavorito={borrarFavorito}
            handleAñadirFavorito={handleAñadirFavorito}
            hasButton={true}
          />
        </div>
      ))}
    </div>
  )
}
