import React, { useState, useEffect } from 'react'
import {
  PersonajeItemImageProps,
  PersonajeItemInfoProps,
  PersonajeItemParentProps,
  PersonajeItemProps,
  PersonajeItemStatusProps,
} from '../../types/personajes'
import {
  comprobarFavoritoExiste,
  filtrarFavoritoExistente,
} from '../../helpers/utils'
import { Link } from '@tanstack/react-router'

// Container para resto de elementos
const PersonajeItem = ({ children }: PersonajeItemParentProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-2 w-[300px] h-auto sm:w-[400px] border-[1px] border-[solid] border-[black] rounded-[14px] personaje-${status} p-4`}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child)
        }
        return child
      })}
    </div>
  )
}

// botón
const PersonajeButton = ({
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
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]')
    setListaFavoritos(favoritos)
  }, [setListaFavoritos])

  // existe item en favoritos?
  const favoritoSeleccionado = comprobarFavoritoExiste(listaFavoritos, id)

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
    <button onClick={handleFavorite}>
      {favoritoSeleccionado ? 'quitar de' : 'añadir a'} favoritos
    </button>
  )
}

// imagen principal
const PersonajeItemImage = ({ image, name, id }: PersonajeItemImageProps) => {
  return (
    <Link
      to='/personajes/$id'
      params={(prev) => ({ ...prev, id: id.toString() })}
    >
      <div className='w-full h-[300px] overflow-hidden flex items-center justify-center '>
        <img className='object-contain' src={image} alt={name} />
      </div>
    </Link>
  )
}

// info
const PersonajeItemInfo = ({
  id,
  name,
  gender,
  species,
  origin,
  location,
  episode,
}: PersonajeItemInfoProps) => {
  return (
    <div className='flex flex-col gap-2 w-full items-center justify-center'>
      {/* info */}

      <Link
        to='/personajes/$id'
        params={(prev) => ({ ...prev, id: id.toString() })}
        className='[&.active]:font-bold [&.active]:text-[orangered]  hover:text-[orangered] transition:all_.3s_ease-in-out hover:[transition:all_.3s_ease-in-out]'
      >
        <span className='uppercase text-xl font-bold'>{name}</span>
      </Link>
      {/* TODO: url como params para páginas de personajes */}
      {/* <span className='uppercase text-xl font-bold'>{url}</span> */}
      <span>Gender: {gender}.</span>
      <span>Species: {species}.</span>
      <span>Origin: {origin.name}.</span>
      <span>Location: {location.name}.</span>
      <span>
        Aparece en: {episode.length}{' '}
        {episode.length === 1 ? 'episodio' : 'episodios'}.
      </span>
    </div>
  )
}

// status
const PersonajeItemStatus = ({ status }: PersonajeItemStatusProps) => {
  return (
    <span
      className={`text-[white] font-bold px-4 py-[.4rem] rounded-[8px] capitalize personaje-status-${status}`}
    >
      {status}
    </span>
  )
}

PersonajeItem.Button = PersonajeButton
PersonajeItem.Image = PersonajeItemImage
PersonajeItem.Info = PersonajeItemInfo
PersonajeItem.Status = PersonajeItemStatus

export default PersonajeItem
