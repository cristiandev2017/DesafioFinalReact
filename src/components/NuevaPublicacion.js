import React, {useState} from 'react';
import { useDispatch,useSelector } from "react-redux";

//Actions de redux
import { crearNuevaPublicacionAction} from '../actions/publicacionActions';

//El history se tiene acceso cuando usamos react router dom
const NuevaPublicacion = ({history}) => {

    //state del componente(Inicializo los componentes)
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [contacto, setContacto] = useState('');
    const [imagen, setImagen] = useState('');    
    const [precio,setPrecio] = useState(0);

    //Utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    //Acceder al state del store por medio de useSelector
    const cargando = useSelector( (state)=> state.publicaciones.loading);
    const error = useSelector((state => state.publicaciones.error));    

    
    //Ahora usaremos redux se creara una funcion de redux que llame el action
    //Llama el action de productoAction
    const agregarPublicacion = (publicacion) => dispatch (crearNuevaPublicacionAction(publicacion));

    //Cuando el uaurio haga submit
    const submitNuevaPublicacion = e =>{
        e.preventDefault();

        //Validar formulario
        if(titulo.trim() === '')
        {
            return;
        }
        //Revisar errores

        //Crear el nuevo producto
        agregarPublicacion({
            titulo,
            imagen,
            descripcion,
            contacto,
            precio
        });

        //Redirecciono al home o a la lista
        history.push('/');
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nueva Publicacion💬
                        </h2>
                        <form 
                            onSubmit={submitNuevaPublicacion}
                        >
                            <div className="form-group">
                                <label>Titulo Publicación</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="titulo"
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                />
                            </div>
                               <div className="form-group">
                                <label>Imagen</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="URL de imagen"
                                    name="imagen"
                                    value={imagen}
                                    onChange={e => setImagen(e.target.value)}
                                />
                            </div>
                               <div className="form-group">
                                <label>Descripcion</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="descripcion"
                                    value={descripcion}
                                    onChange={e => setDescripcion(e.target.value)}
                                />
                            </div>
                               <div className="form-group">
                                <label>Contacto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="contacto"
                                    value={contacto}
                                    onChange={e => setContacto(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={e=>setPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>

                        {cargando? <p>Cargando..</p> :null }
                        {error ? <p className="alert alert-danger p2 mt-2 text-centern"> Hubo un error</p>: null}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NuevaPublicacion;