//AL COLOCAR SERVER EN EL NOMBRE DEL ARCHIVO LE ESTAMOS INDICANDO QUE DEBE EJECUTARSE EN LADO DEL SERVIDOR

export async function getGuitarras(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    return await respuesta.json()
}

export async function getGuitarra(url){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}
