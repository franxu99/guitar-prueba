export async function getPosts(){           //Con el .server del nombre del archivo nos aseguramos que 
                                            //el fetch se hace en el lado del servidor
const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)  //Hay que poner el localhost con la IP
return await respuesta.json()
}

export async function getPost(url){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    return respuesta.json();
}