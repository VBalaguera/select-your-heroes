import CustomLink from './CustomLink'

export default function Error({ text }: { text: string }) {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <span className='font-bold  text-center'>{text}</span>
      <CustomLink url='/' text='Volver' />
    </div>
  )
}
