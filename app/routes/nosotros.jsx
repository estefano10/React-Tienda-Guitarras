import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
  return(
    [
      { title: 'GuitarLA-Sobre Nosotros'},
      { description: 'Venta de guitarras, blog de musica'}
    ]
  )
  
}

//MEDIANTE ESTA FUNCION ESTAMOS TRAYENDO UNA HOJA DE ESTILOS. TAMBIEN NOS PERMITE HACER UN PRELOAD DE UNA IMAGEN
export function links(){
  return [
    {
      rel:'stylesheet',
      href: styles
    },
    {
      rel:'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      
      <div className="contenido">
        <img src={imagen} alt='imagen nosotros'/>

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet, ex vitae pretium rhoncus, tortor dolor aliquam dui, nec consectetur nunc justo non dui. Nam ut suscipit ipsum. Integer vehicula vulputate eros, vel porttitor nulla ultricies a. Fusce ut commodo felis. Etiam eget nisl interdum, faucibus dolor eu, scelerisque risus. Pellentesque vel massa rhoncus, hendrerit quam at, imperdiet mi. Curabitur vel volutpat felis, vitae ullamcorper ex.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
