import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <nav className='pb-4'>
      <ul className='flex gap-2 items-center'>
        <li>
          <Link to='/' className='[&.active]:font-bold'>
            Select your heroes
          </Link>
        </li>
        <li>
          <Link to='/favorites' className='[&.active]:font-bold'>
            Favorites
          </Link>
        </li>
        <li>
          <Link to='/layout-example' className='[&.active]:font-bold'>
            Layout example
          </Link>
        </li>
      </ul>
    </nav>
  )
}
