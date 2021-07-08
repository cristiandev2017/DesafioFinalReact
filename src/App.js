import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Publicaciones from "./components/Publicaciones";
import NuevaPublicacion from "./components/NuevaPublicacion";
import EditarPublicacion from "./components/EditarPublicacion";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
//Importaremos el Provider y el Store, el Store es donde fluyen los datos
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="conntainer mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/publicaciones/nueva" component={NuevaPublicacion} />
            <Route exact path="/publicaciones" component={Publicaciones} />
            <Route
              exact
              path="/publicaciones/editar/:id"
              component={EditarPublicacion}
            />

          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
