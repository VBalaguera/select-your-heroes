import { Link } from '@tanstack/react-router'

const headerLinks = [
  {
    url: '/favoritos',
    texto: 'Favoritos',
  },
]

export default function HeaderLinks() {
  return (
    <ul className='flex gap-2 items-center'>
      {headerLinks.map((link) => (
        <li>
          <Link
            to={link.url}
            className='[&.active]:font-bold [&.active]:text-[orangered]  hover:text-[orangered] transition:all_.3s_ease-in-out hover:[transition:all_.3s_ease-in-out]'
          >
            {link.texto}
          </Link>
        </li>
      ))}
    </ul>
  )
}
