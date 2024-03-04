type PageTitleProps = {
  text: string
}

export default function PageTitle({ text }: PageTitleProps) {
  return <h1 className='font-bold'>{text}</h1>
}
