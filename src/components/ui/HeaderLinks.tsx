import { Link } from '@tanstack/react-router'

export default function HeaderLinks() {
  return (
    <ul className='flex gap-2 items-center'>
      <li>
        <Link
          to='/favoritos'
          className='[&.active]:font-bold [&.active]:text-[orangered]  hover:text-[orangered] transition:all_.3s_ease-in-out hover:[transition:all_.3s_ease-in-out]'
        >
          Favoritos
        </Link>
      </li>
    </ul>
  )
}
