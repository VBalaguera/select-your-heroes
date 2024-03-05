// llamada API
import axios from 'axios'

const url = 'https://rickandmortyapi.com/api/character'

//
export async function getPersonajes() {
  const res = await axios.get(url)

  return res.data
}

//
export async function getPersonajesPorId(id: number) {
  const res = await axios.get(`${url}/${id}`)

  return res.data
}
