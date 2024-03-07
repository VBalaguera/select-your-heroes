// llamadas API
import axios from 'axios'

const url = 'https://rickandmortyapi.com/api/character/'

// obtiene ítems de personajes por páginas
export async function getPersonajes(page: number) {
  const res = await axios.get(`${url}?page=${page}`)

  return res.data
}

// obtiene ítem único de personaje por id
export async function getPersonajesPorId(id: number) {
  const res = await axios.get(`${url}/${id}`)

  return res.data
}
