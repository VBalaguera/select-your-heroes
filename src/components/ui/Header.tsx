// header

import HeaderLinks from './HeaderLinks'
import HeaderTitle from './HeaderTitle'

export default function Header() {
  return (
    <nav className='pb-4 flex justify-between items-center'>
      <HeaderTitle />
      <HeaderLinks />
    </nav>
  )
}
