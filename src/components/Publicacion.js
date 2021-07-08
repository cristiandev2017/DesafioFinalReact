import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Publicacion = ({ publicacion }) => {
  const { id, titulo, imagen, descripcion, contacto, precio } = publicacion;
  return (
    <div className="card border-primary mb-3 card-w container">
      <div className="card-header">
        <img
          src={imagen}
          className="img-fluid"
        />
      </div>

      <div className="card-body">
        <h4 className="card-title">{titulo}</h4>
        <p className="card-text">{descripcion}</p>
        <a href="/" className="btn btn-primary text-center form-control">Ver mas</a>
      </div>
    </div>
  );
};

export default Publicacion;
