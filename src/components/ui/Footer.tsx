export default function Footer() {
  const fecha = new Date()
  const año = fecha.getFullYear()
  return (
    <div className='flex justify-start font-bold'>
      &copy; {año} Víctor Balaguera
    </div>
  )
}
