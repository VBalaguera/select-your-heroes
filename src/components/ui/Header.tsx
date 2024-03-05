import { Link } from '@tanstack/react-router'
import HeaderLinks from './HeaderLinks'

export default function Header() {
  return (
    <nav className='pb-4 flex justify-between items-center'>
      <span className='text-2xl font-bold'>
        <Link
          to='/'
          className='[&.active]:font-bold [&.active]:text-[orangered]  hover:text-[orangered] transition:all_.3s_ease-in-out hover:[transition:all_.3s_ease-in-out]'
        >
          Select your heroes
        </Link>
      </span>
      <HeaderLinks />
    </nav>
  )
}
