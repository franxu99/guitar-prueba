import { useLoaderData} from "@remix-run/react"
import { getGuitarras } from "../models/guitarras.server"
import ListadoGuitarras from "../components/listado-guitarras"

export function meta(){
  return [
    {
      title: 'GuitarLA - Tienda de Guitarras',
      descripcion: 'GuitarLA - Nuestra coleccion de guitarras'
    }
  ]
}

export async function loader(){
  const guitarras = await getGuitarras()    //Funcion que se hace en el lado del servidor
  return guitarras.data
}

function Tienda() {

  const guitarras = useLoaderData();
  // console.log(guitarras)
  return (
    <ListadoGuitarras
        guitarras = {guitarras}
    />
  )
}

export default Tienda