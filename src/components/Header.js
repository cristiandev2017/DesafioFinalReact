import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";

//Forma de hacer el mas ->  &#43;

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <h2>
        <Link to={"/"} className="text-light">
          Ofrece tus servicios
        </Link>
      </h2>
      {auth().currentUser ? (
        <div>
          <Link
            to={"/publicaciones/nueva"}
            className="btn btn-secondary nuevo-post d-block d-md-inline-block"
          >
            Agregar Publicación✚
          </Link>
          <button
            className="btn btn-danger d-block d-md-inline-block" onClick={() => auth().signOut()}>
            Cerrar sesión
          </button>
        </div>
      ) : (
        <div>
          <Link
            to={"/"}
            className="btn btn-secondary nuevo-post d-block d-md-inline-block"
          >
            Ingresar
          </Link>
          OR
          <Link
            to={"/signup"}
            className="btn btn-danger nuevo-post d-block d-md-inline-block"
          >
            Registrate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
