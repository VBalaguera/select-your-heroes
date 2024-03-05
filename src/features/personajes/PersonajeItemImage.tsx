type PersonajeItemImageProps = {
  image: string
  name: string
}

export default function PersonajeItemImage({
  image,
  name,
}: PersonajeItemImageProps) {
  return (
    <div className='w-full h-[250px] overflow-hidden flex items-center justify-center'>
      <img src={image} alt={name} className='object-contain ' />
    </div>
  )
}
