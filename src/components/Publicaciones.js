import React, {Fragment, useEffect} from 'react';
import Publicacion from './Publicacion'

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {obtenerPublicacionesAction} from '../actions/publicacionActions';


const Publicaciones = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        //Consultar la Api o la base de datos
        const cargarPublicaciones = () => dispatch(obtenerPublicacionesAction());
        cargarPublicaciones();
    }, [])

    //Vamos a obtener el state
    const publicaciones = useSelector(state => state.publicaciones.publicaciones);
    const error = useSelector(state => state.publicaciones.error);
    const cargando = useSelector(state => state.publicaciones.loading);

    return (
        <Fragment>            
            <h2 className="text-center my-5"> Listado de Publicaciones</h2>

            {error ? <p className="alert-danger text-center" >Hubo un error</p>: null}
            {cargando ? <p className="text-center">Cargando..</p>: null}
            <table className="table table-striped container">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Imagen</th>
                         <th scope="col">Descripcion</th>
                         <th scope="col">Contacto</th>
                         <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {publicaciones.length === 0 ? 'No hay registros': (
                        publicaciones.map(publicacion  =>(
                            <Publicacion     
                                key={publicacion.id}
                                publicacion={publicacion}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
    );
}
 
export default Publicaciones;