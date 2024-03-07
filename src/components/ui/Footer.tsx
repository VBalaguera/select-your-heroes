// footer

export default function Footer() {
  const fecha = new Date()
  const año = fecha.getFullYear()
  return (
    <div className='flex justify-start font-bold'>{año} Víctor Balaguera</div>
  )
}
