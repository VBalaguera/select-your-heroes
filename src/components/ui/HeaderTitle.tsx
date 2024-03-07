// Título de la app
import CustomLink from './CustomLink'

export default function HeaderTitle() {
  return (
    <span className='text-2xl font-bold'>
      <CustomLink url='/' text='Select your heroes' />
    </span>
  )
}
