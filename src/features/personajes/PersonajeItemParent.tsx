// despliega info sobre personaje
// usando compound comp patterns

import React from 'react'
import {
  PersonajeItemImageProps,
  PersonajeItemInfoProps,
  PersonajeItemParentProps,
  PersonajeItemProps,
  PersonajeItemStatusProps,
} from '../../types/personajes'

import { Link } from '@tanstack/react-router'

// Container para resto de elementos
const PersonajeItemParent = ({ children }: PersonajeItemParentProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-2 w-full h-auto  sm:w-[400px]`}
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

// imagen principal
const PersonajeItemImage = ({ image, name, id }: PersonajeItemImageProps) => {
  return (
    <Link
      to='/personajes/$id'
      params={(prev) => ({ ...prev, id: id.toString() })}
    >
      <div className='w-full h-[300px] overflow-hidden flex items-center justify-center hover:brightness-75 hover:[transition:all_.3s_ease-in-out] [transition:all_.3s_ease-in-out]'>
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
      {/* nombre y link a su ficha */}

      <Link
        to='/personajes/$id'
        params={(prev) => ({ ...prev, id: id.toString() })}
        className='[&.active]:font-bold [&.active]:text-[orangered]  hover:text-[orangered] transition:all_.3s_ease-in-out hover:[transition:all_.3s_ease-in-out]'
      >
        <span className='uppercase text-xl font-bold'>{name}</span>
      </Link>

      {/* info */}
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

// TODO: mantener este comp?
const PersonajeItemBoton = ({
  esFavorito,
  item,
  borrarFavorito,
  handleAñadirFavorito,
}: {
  // TODO: refactor this
  esFavorito: boolean
  item: PersonajeItemProps
  borrarFavorito: (item: PersonajeItemProps) => void
  handleAñadirFavorito: (item: PersonajeItemProps) => void
}) => {
  return (
    <div className='flex gap-2 w-full'>
      {' '}
      {esFavorito ? (
        <button className='w-full' onClick={() => borrarFavorito(item)}>
          Borrar favorito.
        </button>
      ) : (
        <button className='w-full' onClick={() => handleAñadirFavorito(item)}>
          Añadir favorito.
        </button>
      )}
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

PersonajeItemParent.Image = PersonajeItemImage
PersonajeItemParent.Info = PersonajeItemInfo
PersonajeItemParent.Status = PersonajeItemStatus
PersonajeItemParent.Boton = PersonajeItemBoton

export default PersonajeItemParent
