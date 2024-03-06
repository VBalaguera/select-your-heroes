# SELECT YOUR HEROES

## Descripción del proyecto

Prueba de selección realizada por [Víctor Balaguera](https://www.balaguera.es/) en Marzo de 2024.

El proyecto ejecuta las siguientes funciones:

1. Obtener información de una API específica (para la realización de este proyecto ha sido [Rick and Morty API](https://rickandmortyapi.com/documentation)).
2. Desplegaar el contenido en la página principal.
   1. Cada uno de los ítems desplegados permite añadirlo a un listado de favoritos.
   2. Cada uno de los ítems desplegados tiene una página individual.
3. Visualizar el listado de favoritos.

## Herramientas utilizadas en el proyecto

1. [React](https://es.react.dev/reference/react) (a través de [Vite](https://vitejs.dev/guide/)).
2. [Typescript](https://www.typescriptlang.org/).
3. [TailwindCSS](https://tailwindcss.com/).
4. [Axios](https://axios-http.com/es/docs/intro) para realizar llamadas API.
5. [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/overview) para gestionar llamadas API.
6. [Tanstack Router](https://tanstack.com/router/latest/docs/framework/react/overview) para creación de rutas.
7. [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) para supervisar/mutar estado.
8. [LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage) para guardar información adicional.

## Estructura de rutas del proyecto

1. /
2. /favoritos
3. /personajes/:id

## Estructura de archivos del proyecto

```

app/
    src/
        /componentes/ui
        /features
        /features/favoritos
        /features/personajes
        /helpers
        /routes
        /services
        /store
        /types

```

## scrips disponibles

En la app, los siguientes scripts están disponibles:

### npm run dev

Ejecuta la app en modo dev.

Se accede por [http://localhost:5173/](http://localhost:5173/) salvo que ya exista otra app en el mismo puerto.

### npm run build

Prepara la app para producción.
Usa el dir `dist`.

### npm run lint

Ejecuta eslint con los siguientes commandos:

```sh
eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0
```
