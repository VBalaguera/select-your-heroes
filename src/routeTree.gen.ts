/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as FavoritesImport } from './routes/favorites'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutLayoutExampleRouteImport } from './routes/_layout/layout-example/route'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const FavoritesRoute = FavoritesImport.update({
  path: '/favorites',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const LayoutLayoutExampleRouteRoute = LayoutLayoutExampleRouteImport.update({
  path: '/layout-example',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/favorites': {
      preLoaderRoute: typeof FavoritesImport
      parentRoute: typeof rootRoute
    }
    '/_layout/layout-example': {
      preLoaderRoute: typeof LayoutLayoutExampleRouteImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  LayoutRoute.addChildren([LayoutLayoutExampleRouteRoute]),
  FavoritesRoute,
])

/* prettier-ignore-end */
