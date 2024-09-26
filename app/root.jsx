//EL ARCHIVO ROOT ES EL PRINCIPAL, AQUI SE LEEN LOS OTROS COMPONENTES Y PAGINAS. SERIA EL EQUIVALENTE AL MAIN EN VITE
import { useState } from "react" 
import { Meta, Links, Outlet, Scripts, LiveReload, useRouteError, isRouteErrorResponse, Link } from "@remix-run/react" //SCRIPTS SIRVE PARA EVITAR EL PARPADEO AL NAVEGAR
import styles from '~/styles/index.css' //LO QUE HACE ~ ES APUNTAR A LA CARPETA APP
import Header from "~/components/header" //EL HEADER LO IMPORTO EN ROOT DADO QUE BUSCO APLICARLO EN TODAS LAS PAGINAS
import Footer from "~/components/footer"//EL FOOTER TAMBIEN SE VA A APLICAR A TODASLAS PAGS

//PARA AGREGAR INFO META U HOJAS DE ESTILO DEBEMOS EXPORTAR LA FUNCION:
export  function meta(){
    return(
        //DEBEMOS RETORNAR DENTRO DE UN ARRAY DE OBJETOS LA INFO QUE SE VA A INYECTAR EN META
        [
           { charset: 'utf8'},
           { title: 'GuitarLA-Remix'},
           { viewport: 'width=device-width,initial-scale=1'}
        ]
    )
}

//PARA AGREGAR HOJAS DE ESTILOS DEBEMOS EXPORTAR LA FUNCION

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel:'stylesheet',
            href: styles
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&family=Silkscreen&display=swap',
           
        }
    ]
}

export default function App(){

    const [carrito, setCarrito] = useState([])

    const agregarCarrito = guitarra => {
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            //iterar sobre el arreglo e identificar el elemnto duplicado
            const carritoActualizado = carrito.map(guitarraState =>{
                if(guitarraState.id === guitarra.id){
                    //sobreescribir la cantidad
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            //Añadir al carrito
            setCarrito(carritoActualizado)
        }else{
            setCarrito([...carrito, guitarra])
        }
    }

    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if(guitarraState.id === guitarra.id){
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
    }
    return(
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad
                }}
            />
        </Document>
    )
}

function Document({children}){
    return (
        <html lang="es" >
            <head>
                <Meta/>
                <Links/>
            </head>

            <body>
                <Header/>
                {children}
                <Footer/>

                <Scripts/> 
                <LiveReload/>
            </body>
        </html>
    )
}

/** MANEJO DE ERRRORES */
export function ErrorBoundary(){
    const error = useRouteError()

    if(isRouteErrorResponse(error)){
        return(
            <Document>
                <p className="error">{error.status} {error.statusText} </p>
                <Link to='/' className="error-enlace">Tal vez quieras volver a la pagina principal </Link>
            </Document>
        )
    }
    
}