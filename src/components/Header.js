import React from "react";
import { Link } from "react-router-dom";

//Forma de hacer el mas ->  &#43;

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
        <div className="container">
            <h1> <Link to={'/'} className="text-light">🤗Ofrece tus servicios🧠</Link></h1>
        </div>
        <Link to={"/publicaciones/nueva"}
           className="btn btn-danger nuevo-post d-block d-md-inline-block"
        >Agregar Publicación➕</Link>
    </nav>
  );
};

export default Header;
