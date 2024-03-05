import React, { useState, useEffect, ReactNode } from 'react'
import { PersonajeItemProps } from '../../interfaces/personajes'
import {
  comprobarFavoritoExiste,
  filtrarFavoritoExistente,
} from '../../helpers/utils'

// for the compound comp pattern I will need:
// PersonajeItem parent comp
// PersonajeItemInfo child comp
// PersonajeItemStatus child comp
// PersonajeItemImage child comp
// PersonajeItemButton child comp

// TODO: refactor, clean
interface PersonajeItemParentProps {
  children: ReactNode
}

type PersonajeItemImageProps = {
  image: string
  name: string
}

type PersonajeItemInfoProps = {
  name: string
  gender: string
  species: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
  episode: string[]
}

type PersonajeItemStatusProps = {
  status: string
}

const PersonajeItem = ({ children }: PersonajeItemParentProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 w-[400px] h-[500px] border-[1px] border-[solid] border-[black] rounded-[14px] personaje-${status} p-4`}
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
    <button onClick={handleFavorite}>
      {favoritoSeleccionado ? 'quitar de' : 'añadir a'} favoritos
    </button>
  )
}

const PersonajeItemImage = ({ image, name }: PersonajeItemImageProps) => {
  return (
    <div className='w-full h-[250px] overflow-hidden flex items-center justify-center '>
      <img src={image} alt={name} className='object-contain ' />
    </div>
  )
}

const PersonajeItemInfo = ({
  name,
  gender,
  species,
  origin,
  location,
  episode,
}: PersonajeItemInfoProps) => {
  return (
    <div className='flex flex-col gap-2'>
      {' '}
      {/* info */}
      <span className='uppercase text-xl font-bold'>{name}</span>
      {/* TODO: url como params para páginas de personajes */}
      {/* <span className='uppercase text-xl font-bold'>{url}</span> */}
      <span>Gender: {gender}</span>
      <span>Species: {species}</span>
      <span>Origin: {origin.name}</span>
      <span>Location: {location.name}</span>
      <span>
        Aparece en {episode.length}{' '}
        {episode.length === 1 ? 'episodio' : 'episodios'}
      </span>
    </div>
  )
}

const PersonajeItemStatus = ({ status }: PersonajeItemStatusProps) => {
  console.log(typeof status)
  return (
    <span
      className={`text-[white] font-bold px-4 py-[.4rem] rounded-[13px] capitalize personaje-status-${status}`}
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
