import { Link } from '@tanstack/react-router'

export default function CustomLink({
  url,
  text,
}: {
  url: string
  text: string
}) {
  return (
    <Link
      to={url}
      className='[&.active]:font-bold [&.active]:text-[orangered]  hover:text-[orangered] transition:all_.3s_ease-in-out hover:[transition:all_.3s_ease-in-out]'
    >
      {text}
    </Link>
  )
}
