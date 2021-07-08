import React, { Fragment, useEffect } from "react";
import Publicacion from "./Publicacion";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { obtenerPublicacionesAction } from "../actions/publicacionActions";

const Publicaciones = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Consultar la Api o la base de datos
    const cargarPublicaciones = () => dispatch(obtenerPublicacionesAction());
    cargarPublicaciones();
  }, []);

  //Vamos a obtener el state
  const publicaciones = useSelector(
    (state) => state.publicaciones.publicaciones
  );
  const error = useSelector((state) => state.publicaciones.error);
  const cargando = useSelector((state) => state.publicaciones.loading);

  return (
    <Fragment>
      <h2 className="text-center my-5"> Listado de Publicaciones</h2>

      {error ? <p className="alert-danger text-center">Hubo un error</p> : null}
      {cargando ? <p className="text-center">Cargando..</p> : null}
    <div className="container">
      <div className="row">
        <div className="card-columns">
          {publicaciones.length === 0
            ? "No hay registros"
            : publicaciones.map((publicacion) => (
                <Publicacion key={publicacion.id} publicacion={publicacion} />
              ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default Publicaciones;
