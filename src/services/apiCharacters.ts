// llamada API
import axios from 'axios'

const url = 'https://rickandmortyapi.com/api/character'

export async function getCharacters() {
  const res = await axios.get(url)

  return res.data
}
