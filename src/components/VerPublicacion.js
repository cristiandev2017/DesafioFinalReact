import React from "react";
import { useDispatch, useSelector } from "react-redux";

const VerPublicacion = () => {
  //publicacion que traere de mi store
  const publicacion = useSelector(
    (state) => state.publicaciones.publicacionobtener
  );
  //Hago destructuring
  const { titulo, imagen, descripcion, contacto, categoria, precio, id } =
    publicacion;
  console.log(publicacion);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card border-light mb-3">
            <div className="card-header">
              <h4 className="card-title text-center">{titulo}</h4>
            </div>
            <div className="card-body">
              <img src={imagen} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card text-white bg-primary mb-3">
            <div class="card-header">Información</div>
            <div class="card-body">
              <h5>Descripcion:</h5>
              <p class="card-text">{descripcion}</p>
              <h5>Contacto:</h5>
              <p class="card-text">{contacto}</p>
              <p>
                Precio:<strong>{precio}$</strong>
              </p>
               <h5>Categoria:</h5>
              <p class="card-text">{categoria}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerPublicacion;
