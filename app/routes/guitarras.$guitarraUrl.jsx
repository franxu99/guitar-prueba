import { getGuitarra } from "../models/guitarras.server"
import { useLoaderData, Link, useRouteError } from "@remix-run/react"


export async function loader({params}){     //Nos devuelve el nombre de la guitarra que hemos seleccionado
    const {guitarraUrl} = params
    const guitarra = await getGuitarra(guitarraUrl)

    if(guitarra.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra No Encontrada',
            data: {}
        })
    }
    return guitarra
}

    //Manejo de errores
export function ErrorBoundary() {
     
    const error = useRouteError(); // Esto es un hook de remix
        
    return (
        <div>
            {/* De esta manera imprimimos los errores */}
            <p className="error">{error.status}  {error.statusText} </p>
            <Link className="error-enlace" to="/">Tal vez quieras volver a la página principal
            </Link>
        </div>
        )
}

export const meta = ({data}) => {
    if(!data){
        return [
            {
                title: 'Guitarra No Encontrada'
            },
            {
                descripcion: 'Guitarras, venta de guitarras, guitarra no encontrada'
            }
    ]
    }
    return [{
            title: `GuitarLA - Remix ${data.data[0].attributes.nombre.toUpperCase()}`,
            descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre.toUpperCase()}`
        }
    ]
}


function Guitarra() {

    const guitarra = useLoaderData();
    const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes;

  return (
    <div className="guitarra">
        <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

        <div className="contenido">
            <h2>
                {nombre}
            </h2>
            <p className="descripcion">
                {descripcion}
            </p>
            <p className="precio">
                {precio.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
            </p>
        </div>
    </div>
  )
}

export default Guitarra