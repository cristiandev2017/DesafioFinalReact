import React from "react";
import { Link, useHistory } from "react-router-dom";

//redux
import {useDispatch} from 'react-redux';
import {obtenerPublicacionVer} from '../actions/publicacionActions';

const Publicacion = ({ publicacion }) => {
  
  const dispatch = useDispatch();
  const history = useHistory(); //Me permite redireccionar y tener un historial
  const { id, titulo, imagen, descripcion, contacto, categoria, precio } = publicacion;

  //Funcion que redirige de forma programada
  const redireccionarVer = publicacion =>{
      dispatch(obtenerPublicacionVer(publicacion))
      //Lo que hace es que cuando de en el clic siempre me tome el elemento que estoy llamando
      history.push(`/publicaciones/ver/${publicacion.id}`)
  }
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
        <button 
          type="button"
          onClick={()=> redireccionarVer(publicacion)}
          className="btn btn-primary text-center form-control">Ver mas</button>
      </div>
    </div>
  );
};

export default Publicacion;
