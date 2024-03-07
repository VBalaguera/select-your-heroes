// llamadas API
import axios from 'axios'
import { apiUrl } from '../utils/api'

// obtiene ítems de personajes por páginas
export async function getPersonajes(page: number) {
  const res = await axios.get(`${apiUrl}?page=${page}`)

  return res.data
}

// obtiene ítem único de personaje por id
export async function getPersonajesPorId(id: number) {
  const res = await axios.get(`${apiUrl}/${id}`)

  return res.data
}
