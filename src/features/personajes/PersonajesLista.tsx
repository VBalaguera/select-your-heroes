// listado de personajes
// incl métodos para añadir/borrar personajes

import { useEffect, useState } from 'react'
import { PersonajeItemProps } from '../../types/personajes'
import PersonajeFicha from './PersonajeFicha'
import {
  localStorageGetItem,
  localStorageSetItem,
} from '../../utils/localStorage'
import {
  comprobarFavoritoExiste,
  filtrarFavoritoExistente,
} from '../../utils/favoritos'
import PersonajeInteracciones from './PersonajeInteracciones'
import { useFavoritosStore } from '../../store/store'

export default function PersonajesLista(data: PersonajeItemProps[]) {
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

  return (
    <div className='flex flex-wrap gap-2 items-center justify-center'>
      {data.map((item: PersonajeItemProps) => (
        <div className='flex flex-col gap-2 p-4 ' key={item.id}>
          <PersonajeFicha {...item} />
          <PersonajeInteracciones
            esFavorito={comprobarFavoritoExiste(favoritos, item.id)}
            item={item}
            borrarFavorito={borrarFavorito}
            handleAñadirFavorito={añadirFavorito}
          />
        </div>
      ))}
    </div>
  )
}
