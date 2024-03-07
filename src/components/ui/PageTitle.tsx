// título de la página

export default function PageTitle({ text }: { text: string }) {
  return <h1 className='font-bold mb-2 w-full text-center'>{text}</h1>
}
