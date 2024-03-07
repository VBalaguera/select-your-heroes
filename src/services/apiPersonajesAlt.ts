// llamadas API

const url = 'https://rickandmortyapi.com/api/character/'

// obtiene ítems de personajes por páginas
export async function getPersonajes(page: number) {
  try {
    const res = await fetch(`${url}?page=${page}`)

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
    const res = await fetch(`${url}/${id}`)

    if (!res.ok) {
      throw new Error('Error en la obtención de información')
    }

    const data = await res.json()

    return data
  } catch (error) {
    console.log('Error: ', error)
  }
}
