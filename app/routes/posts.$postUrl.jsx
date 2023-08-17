import { getPost } from "../models/posts.server"
import { useLoaderData, useRouteError, Link } from "@remix-run/react"
import { formatearFecha } from "../utils/helpers"

export async function loader({params}){

    const post = await getPost(params.postUrl) //Le pasamos la URL para que nos DEVUELVA los DATOS de ese post

    if(post.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra No Encontrada',
            data: {}
        })
    }

    return post;
}

    //Manejo de errores
    export function ErrorBoundary() {
        const error = useRouteError(); // esto es un hook de remix
            
        return (
            <div>
                {/* de esta manera imprimimos los errores */}
                <p className="error">{error.status}  {error.statusText} </p>
                <Link className="error-enlace" to="/">Tal vez quieras volver a la página principal
                </Link>
            </div>
            )
    }

export function meta({data}) { 
    if(!data){                          //Titulo de la página cuando no sea encontrado el post
        return[
            {
                title:'Post No Encontrado'
            },
            {
                descripcion: 'Post, post no encontrado'
            }
        ]
    }
    return[
        {
            title: `GuitarLA - Remix ${data.data[0].attributes.titulo}`
        },
        {
            descripcion: `Post ${data.data[0].attributes.titulo}`
        }
    ]
}

function Post() {

    const post = useLoaderData();
    const {titulo, contenido, imagen, publishedAt} = post.data[0].attributes
    

  return (
    <article className="post mt-3">
            <h3 className="titulo">{titulo}</h3>
        <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`} />
        <div className="contenido">
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}

export default Post