// llamadas API

import { apiUrl } from '../utils/api'

// obtiene ítems de personajes por páginas
export async function getPersonajes(page: number) {
  try {
    const res = await fetch(`${apiUrl}?page=${page}`)

    if (!res.ok) {
      throw new Error('Error en la obtención de información')
    }

    const data = await res.json()

    return data
  } catch (error) {
    console.log('Error: ', error)
  }
}

// obtiene ítem único de personaje por id
export async function getPersonajesPorId(id: number) {
  try {
    const res = await fetch(`${apiUrl}/${id}`)

    if (!res.ok) {
      throw new Error('Error en la obtención de información')
    }

    const data = await res.json()

    return data
  } catch (error) {
    console.log('Error: ', error)
  }
}
