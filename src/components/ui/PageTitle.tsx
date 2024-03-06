type PageTitleProps = {
  text: string
}

export default function PageTitle({ text }: PageTitleProps) {
  return <h1 className='font-bold mb-2 w-full text-center'>{text}</h1>
}
