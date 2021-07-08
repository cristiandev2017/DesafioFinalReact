import React from "react";
import { Link } from "react-router-dom";

const Publicacion = ({ publicacion }) => {
  const { id,titulo, imagen, descripcion, contacto, precio } = publicacion;
  return (
    <tr key={id}>
      <td>{titulo}</td>
      <td>{imagen}</td>
      <td>{descripcion}</td>
      <td>{contacto}</td>
      <td>
        <span className="font-weight-bold">{precio}$</span>
      </td>
      <td className="acciones">
        <Link to={`/publicaciones/editar/${id}`} className="btn btn-warning">
          Editar
        </Link>
        {
        /*
        <button type="button" className="btn btn-danger">
          Eliminar
        </button>
        */}
      </td>
    </tr>
  );
};

export default Publicacion;
