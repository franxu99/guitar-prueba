import { Link } from "react-router-dom";
import { formatearFecha } from "../utils/helpers";

export default function Post({ post }) {

    const {titulo, contenido, url, imagen, publishedAt} = post.attributes;

  return (
    <article className="post">
        <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`Imagen blog ${titulo}`} />
        <div className="contenido">
            <h3 className="titulo-post">{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="resumen">{contenido}</p>
            <Link className="enlace" to={`/posts/${url}`}>Leer Post</Link>
        </div>
    </article>
  )
}
