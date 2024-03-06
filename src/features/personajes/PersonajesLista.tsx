import { useEffect, useState } from 'react'
import {
  PersonajeItemProps,
  PersonajesListaProps,
} from '../../types/personajes'
import PersonajeFicha from './PersonajeFicha'
import {
  localStorageGetItem,
  localStorageSetItem,
} from '../../helpers/localStorage'
import {
  comprobarFavoritoExiste,
  filtrarFavoritoExistente,
} from '../../helpers/utils'
import PersonajeInteracciones from './PersonajeInteracciones'
import { useFavoritosStore } from '../../store/store'

export default function PersonajesLista({ data }: PersonajesListaProps) {
  const [listaFavoritos, setListaFavoritos] = useState<
    PersonajeItemProps[] | []
  >(useFavoritosStore((state) => state.favoritos))

  // zustand
  const añadiFavoritoZustand = useFavoritosStore(
    (state) => state.añadirFavorito
  )
  const borrarFavoritoZustand = useFavoritosStore(
    (state) => state.borrarFavorito
  )

  // carga favoritos de localStorage al montarse

  const favoritos = useFavoritosStore((state) => state.favoritos)

  useEffect(() => {
    const favoritos = localStorageGetItem('favoritos')
    localStorageSetItem('favoritos', favoritos)
    setListaFavoritos(favoritos)
  }, [])

  const añadirFavorito = (nuevoFavorito: PersonajeItemProps) => {
    // ya es favorito?
    const esFavorito = comprobarFavoritoExiste(favoritos, nuevoFavorito.id)

    if (esFavorito) return

    añadiFavoritoZustand(nuevoFavorito)

    localStorageSetItem('favoritos', [...favoritos, nuevoFavorito])
  }

  const borrarFavorito = (item: PersonajeItemProps) => {
    // ya es favorito?
    const favoritosFiltrados = filtrarFavoritoExistente(listaFavoritos, item)
    borrarFavoritoZustand(item.id)
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
      {/* {favoritos.map((item) => (
        <span>{item.id}</span>
      ))} */}
      {data.map((item: PersonajeItemProps) => (
        <div className='flex flex-col gap-2 p-4 ' key={item.id}>
          <PersonajeFicha {...item} />
          <PersonajeInteracciones
            esFavorito={comprobarFavoritoExiste(favoritos, item.id)}
            item={item}
            borrarFavorito={borrarFavorito}
            handleAñadirFavorito={handleAñadirFavorito}
          />
        </div>
      ))}
    </div>
  )
}
