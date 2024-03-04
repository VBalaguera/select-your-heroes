import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <nav className='pb-4 flex justify-between items-center'>
      <span className='text-2xl font-bold'>
        <Link to='/' className='[&.active]:font-bold'>
          Select your heroes
        </Link>
      </span>
      <ul className='flex gap-2 items-center'>
        <li>
          <Link to='/personajes' className='[&.active]:font-bold'>
            Personajes
          </Link>
        </li>
        <li>
          <Link to='/favoritos' className='[&.active]:font-bold'>
            Favoritos
          </Link>
        </li>
        {/* <li>
          <Link to='/layout-example' className='[&.active]:font-bold'>
            Layout example
          </Link>
        </li> */}
      </ul>
    </nav>
  )
}
