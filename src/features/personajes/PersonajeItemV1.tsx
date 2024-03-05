import { useState, useEffect } from 'react'
import { PersonajeItemProps } from '../../types/personajes'
import {
  comprobarFavoritoExiste,
  filtrarFavoritoExistente,
} from '../../helpers/utils'
import PersonajeItemImage from './PersonajeItemImage'
import PersonajeItemInfo from './PersonajeItemInfo'

const PersonajeItem = ({
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
}: PersonajeItemProps) => {
  const [listaFavoritos, setListaFavoritos] = useState<PersonajeItemProps[]>([])

  useEffect(() => {
    // Retrieve array from localStorage on component mount
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]')
    setListaFavoritos(favoritos)
  }, [setListaFavoritos])

  const favoritoSeleccionado = listaFavoritos.some(
    (item: PersonajeItemProps) => item.id === id
  )

  const handleFavorite = () => {
    const personajeSeleccionado = {
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
    const favoritoExiste = comprobarFavoritoExiste(
      listaFavoritos,
      personajeSeleccionado
    )

    console.log('lista existente', listaFavoritos)

    // si no está en el listado, añadir
    if (!favoritoExiste) {
      const favoritosActualizado = [...listaFavoritos, personajeSeleccionado]
      setListaFavoritos((prevFavoritos) => [
        ...prevFavoritos,
        personajeSeleccionado,
      ])
      localStorage.setItem('favoritos', JSON.stringify(favoritosActualizado))
      return
    }
    // si está en el listado, eliminar
    const favoritosFiltrados = filtrarFavoritoExistente(
      listaFavoritos,
      personajeSeleccionado
    )
    setListaFavoritos(favoritosFiltrados)
    localStorage.setItem('favoritos', JSON.stringify(favoritosFiltrados))
  }
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 w-[400px] h-[500px] border-[1px] border-[solid] border-[black] rounded-[14px] personaje-${status} p-6`}
    >
      {/* imagen */}
      <PersonajeItemImage image={image} name={name} />

      {/* info */}
      <PersonajeItemInfo
        name={name}
        gender={gender}
        species={species}
        origin={origin}
        location={location}
        episode={episode}
      />

      {/* interacción */}
      <button onClick={handleFavorite}>
        {favoritoSeleccionado ? 'quitar de' : 'añadir a'} favoritos
      </button>
    </div>
  )
}

export default PersonajeItem
