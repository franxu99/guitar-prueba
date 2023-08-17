import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta(){
  return[
    
    { title: "GuitarLA - Nosotros" }
    
  ];
}

export function links(){
  return[
    
    { rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
    
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">
        Nosotros
      </h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>Nulla mi dui, accumsan eu rhoncus sit amet, dignissim non neque. Aenean sagittis cursus tellus, id varius lacus laoreet id. Quisque fringilla nunc a mauris vulputate bibendum. Phasellus elit ante, lobortis quis venenatis et, gravida nec orci. Donec vel accumsan metus. Ut ultricies vestibulum enim, non ornare magna volutpat egestas. Pellentesque sagittis elit a placerat elementum.</p>
          <p>Quisque vel mauris egestas, condimentum enim in, rutrum velit. Sed accumsan laoreet ex. Aenean ac consequat velit, a pellentesque tellus. Vestibulum eleifend risus pretium, rutrum sem eu, viverra quam. Ut ultrices pulvinar suscipit. Nulla facilisi. Praesent finibus sagittis ipsum nec mattis. Duis pretium quam id enim porta, eu posuere est sodales. Curabitur ut accumsan urna. Pellentesque vitae ipsum dui. Aliquam ac dignissim tellus, vitae sollicitudin neque. Donec vel ligula placerat turpis laoreet ornare. Nunc dapibus eu libero id fermentum. Cras ac ornare quam. Nam sit amet volutpat nisl, auctor sagittis erat.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros