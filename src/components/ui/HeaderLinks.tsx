import CustomLink from './CustomLink'

const headerLinks = [
  {
    url: '/favoritos',
    texto: 'Favoritos',
  },
]

export default function HeaderLinks() {
  return (
    <ul className='flex gap-2 items-center'>
      {headerLinks.map((link, idx) => (
        <li key={idx}>
          <CustomLink url={link.url} text={link.texto} />
        </li>
      ))}
    </ul>
  )
}
