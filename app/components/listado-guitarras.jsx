import Guitarra from "./guitarra"

function ListadoGuitarras({guitarras}) {
  return (
    <>
        <h2 className="heading">
          Nuestra Colección
        </h2>
        {guitarras.length && (          //Si hay guitarras generamos el div con todas las guitarras que nos devuelva nuestra API
            <div className="guitarras-grid">
                {guitarras.map( guitarra => (
                    <Guitarra 
                    key={guitarra?.id}
                    guitarra = {guitarra?.attributes}
                    />
                ))}
            </div>
        )}
    </>
    
  )
}

export default ListadoGuitarras