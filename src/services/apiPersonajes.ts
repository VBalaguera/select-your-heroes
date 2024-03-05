// llamada API
import axios from 'axios'

const url = 'https://rickandmortyapi.com/api/character/'

//
export async function getPersonajes(page: number) {
  const res = await axios.get(`${url}?page=${page}`)

  return res.data
}

//
export async function getPersonajesPorId(id: number) {
  const res = await axios.get(`${url}/${id}`)

  return res.data
}
