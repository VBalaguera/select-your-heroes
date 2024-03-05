// recibe el status del personaje

type PersonajeItemStatusProps = {
  status: string
}

export default function PersonajeItemStatus({
  status,
}: PersonajeItemStatusProps) {
  console.log(typeof status)
  return (
    <span
      className={`text-[white] font-bold px-4 py-[.4rem] rounded-[8px] capitalize
 personaje-status-${status}`}
    >
      {status}
    </span>
  )
}
