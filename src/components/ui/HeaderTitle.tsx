// Título de la app

import { Link } from '@tanstack/react-router'

export default function HeaderTitle() {
  return (
    <span className='text-2xl font-bold'>
      <Link
        to='/'
        className='[&.active]:font-bold [&.active]:text-[orangered]  hover:text-[orangered] transition:all_.3s_ease-in-out hover:[transition:all_.3s_ease-in-out]'
      >
        Select your heroes
      </Link>
    </span>
  )
}
