import { createRootRoute } from '@tanstack/react-router'
import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

export const Route = createRootRoute({
  component: AppLayout,
})

type AppLayoutProps = {
  children: ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto] p-4'>
      <Header />
      <main className='mx-[auto] my-[0] flex h-full w-full flex-col gap-[3.2rem] overflow-scroll border-[1px] border-[black] border-[solid] p-4'>
        {/* children go here */}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
