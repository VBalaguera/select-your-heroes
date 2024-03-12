// root router

import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import AppLayout from '../components/ui/AppLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // tiempo que los datos permanecerán en cache
      staleTime: 0,
    },
  },
})

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={queryClient}>
        <AppLayout>
          <Outlet />
        </AppLayout>
        {/* <TanStackRouterDevtools /> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  ),
})
