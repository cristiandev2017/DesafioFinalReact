import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR 
} from '../types';

import clienteAxios from '../config/axios';

//Esta es la que se utilizara en la vista

//Crear nuevos productos
export function crearNuevoProductoAction(producto){
    return (dispatch) =>{
        dispatch(agregarProducto());
        try {
            //Aca se insertara en la base de datos | API
            clienteAxios.post('productos', producto);

            //Si todo sale bien, actualizare el state
            dispatch(agregarProductoExito(producto))
        } catch (error) {
            console.log(error);
            //Si hay un error cambiar el state
            dispatch(agregarProductoError(true));
        }
    }
}

const agregarProducto = () =>({
    type: AGREGAR_PRODUCTO,
    payload:true
})

//Si el producto se guarda en la base de datos
const agregarProductoExito = (producto) =>({
    type:AGREGAR_PRODUCTO_EXITO,
    payload:producto
})

//Si hubo un error
const agregarProductoError = ()=>({
    type:AGREGAR_PRODUCTO_ERROR,
    //payload:estado
})