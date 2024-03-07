// footer

import CustomLink from './CustomLink'

export default function Footer() {
  const fecha = new Date()
  const año = fecha.getFullYear()
  return (
    <div className='flex justify-between font-bold pt-2'>
      {año} Víctor Balaguera
      <span>
        <CustomLink
          url='https://rickandmortyapi.com/documentation'
          text='Rick & Morty API'
        />
      </span>
    </div>
  )
}
