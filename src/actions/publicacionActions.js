import {
    AGREGAR_PUBLICACION,
    AGREGAR_PUBLICACION_EXITO,
    AGREGAR_PUBLICACION_ERROR,
    COMENZAR_DESCARGA_PUBLICACIONES,
    DESCARGAR_PUBLICACIONES_EXITO,
    DESCARGAR_PUBLICACIONES_ERROR
} from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

//Esta es la que se utilizara en la vista

//Crear nuevas publicaciones
export function crearNuevaPublicacionAction(publicacion){
    return async (dispatch) =>{
        dispatch(agregarPublicacion());
        try {
            //Aca se insertara en la base de datos | API
            await clienteAxios.post('publicaciones', publicacion);

            //Si todo sale bien, actualizare el state
            dispatch(agregarPublicacionExito(publicacion))

            //Alerta
            Swal.fire(
                'Correcto',
                'La publicación se agregó correctamente',
                'sucess'
            )
        } catch (error) {
            console.log(error);
            //Si hay un error cambiar el state
            dispatch(agregarPublicacionError(true));

            //alerta de error
            Swal.fire({
                icon:error,
                title:'Hubo un error',
                text: 'Hubo un error, verifica por favor'
            })
        }
    }
}

const agregarPublicacion = () =>({
    type: AGREGAR_PUBLICACION,
    payload:true
})

//Si la publicacion se guarda en la base de datos
const agregarPublicacionExito = (publicacion) =>({
    type:AGREGAR_PUBLICACION_EXITO,
    payload:publicacion
})

//Si hubo un error
const agregarPublicacionError = (estado)=>({
    type:AGREGAR_PUBLICACION_ERROR,
    payload:estado
});

//Función que descarga los publicacions de la base de datos
export function obtenerPublicacionesAction(){
    return async (dispatch)=>{
        dispatch(descargarPublicaciones());

        try {
            //Hago la operacion para traer los datos de la base de datos
            const respuesta = await clienteAxios.get('/publicaciones');
            //console.log(respuesta.data);
            dispatch(descargaPublicacionesExitosa(respuesta.data))
        } catch (error) {   
            dispatch(descargaPublicacionesError())
        }
    }
}

const descargarPublicaciones= () =>({
    type:COMENZAR_DESCARGA_PUBLICACIONES,
    payload:true
});

const descargaPublicacionesExitosa = publicacion =>({
    type: DESCARGAR_PUBLICACIONES_EXITO,
    payload: publicacion
})

const descargaPublicacionesError = () =>({
    type:DESCARGAR_PUBLICACIONES_ERROR,
    payload:true
})