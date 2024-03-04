export type PersonajeItemProps = {
  id: number
  image: string
  name: string
  gender: string
  species: string
  status: string
}

const PersonajeItem = ({
  id,
  image,
  name,
  gender,
  species,
  status,
}: PersonajeItemProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 w-[400px] h-[500px] border-[1px] border-[solid] border-[black] rounded-[14px]'>
      <div className='w-full h-[250px] overflow-hidden flex items-center justify-center p-2'>
        <img src={image} alt={name} className='object-contain ' />
      </div>
      <span>{name}</span>
      <span>{gender}</span>
      <span>{species}</span>
      <span>{status}</span>
      <button>añadir a favoritos</button>
    </div>
  )
}

export default PersonajeItem
