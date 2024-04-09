# React router

## Instalar

`npm i react-router-dom`

## Importar

`import { createBrowserRouter, RouterProvider } from "react-router-dom";`

## Definir rutas

### createBrowserRouter()

- Función donde se definen las rutas, cada ruta es un objeto.

### Propiedades

- path => ruta => ejemplo /about
- element => Componente de la ruta

```js
const router = createBrowserRouter([
  {
    // Propiedades de la ruta
  }
])
```
```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
  {
    path: "/contact",
    element: <h1>Contact</h1>,
  },
]);
```
## Inyectar rutas

### RouterProvider

- Componente que comparte las rutas

- Se utiliza con el atributo `router` cuyo valor es la constante de las rutas creadas.

```js
// main.js
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```
## Configurar error paths

- Crear la propiedad errorElement con el componente a renderizar en la ruta principal

```js
 {
    path: "/",
    element: <h1>Home</h1>,
    errorElement: "error",
  },
```
## Estructurar rutas

### Crear carpeta routes

En esta carpeta se crearán los componentes globales de cada ruta (página) y se cargarán en el componente principal del sitio (main, app, etc)

```js
// src/routes/Home.jsx
const Home = () => {
  return <h1>Home</h1>;
};
```
```js
// main.jsx, no olvidar importar el componente
{
    path: "/",
    element: <Home />,
    errorElement: "error",
},
```

## Navegación

React router proporciona componentes específicos para hacer la navegación que es `Link`

### Importar 

- En el componente de la ruta (ej Home.jsx)

`import { Link } from "react-router-dom";`

### Cargar

`<Link to={'/path'}/>`

```js
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
```

## Children routes
- Propiedad children de createBrowserRouter
- Recibe como valor un array de rutas descendientes (objeto), con sus respectivas propiedades de ruta.
- children utiliza las mismas propiedades de la ruta padre.
- En el componente padre se debe montar la ruta children por medio de la etiqueta Outlet (previo import)
  - import {outlet} form 'react-router-dom'

```jsx
// main.jsx
  {
    path: "/",
    element: <Home />,
    errorElement: "error",
    children: [
      {
        path: "users/:userid" // ruta dinámica,
        element: < User/>,
      },
    ],
  },
```

```jsx
// Home.jsx
<>
      <Nav />
      <h1>Home</h1>
      <div>
        <Outlet />
      </div>
    </>
```


### Rutas dinámicas
- Toma lugar cuándo el componente se está renderizando, permite establecer una ruta según elementos, datos, estados, eventos, comportamientos, etc
- Se especifica con el operador (:)

## Manejo de errores

### Hook useRouterError()

- React router permite acceder al error para realizar alguna acción como imprimirlo.
- Se declara en una constante
- Métodos
  - status, statusText, message, etc.

```jsx
import { useRouteError } from "react-router-dom";
// Dentro del componente
const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <p>{`${error.status} ${error.statusText}`}</p>
    </div>
  );
};
```
### Mostrar código de error y mensaje de error

[Continúa en](https://youtu.be/JNhhdkCuyog?t=1317)

### hook useParams()

Es un hook que recupera los parámetros de una url dinámica. Para utilizarlo se declara una constante.

```jsx

// main.js => url dinámica

{
    path: "/contact/:contactid",
    element: <Contact />,
},

// Contact.jsx

const Contact = () => {
  const params = useParams();
  const contact = useMemo(
    () => getContact(params.contactid),
    [params.contactid] /* useMemo es un hook para trabajar con data */
);
}

```