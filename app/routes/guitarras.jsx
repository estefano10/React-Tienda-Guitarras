import { Outlet, useOutletContext } from '@remix-run/react'

import styles from '~/styles/guitarras.css'


//VAMOS A IMPORTAR LA HOJA DE ESTILOS DE LAS GUITARRAS
export function links(){
  return[
    {
      rel:'stylesheet',
      href:styles

    }
  ]
}

function Tienda() {
  
  return (
    <main className='contenedor'>
      <Outlet
        context={useOutletContext()}
      />
    </main>
  )
}

export default Tienda
