import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import PageNotFound from "./pages/page-not-found";
import PokemonAdd from "./pages/pokemon-add";
import PokemonsDetail from "./pages/pokemon-detail";
import PokemonEdit from "./pages/pokemon-edit";
import PokemonList from "./pages/pokemon-list";
import PrivateRoute from "./PrivateRoute";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        {/*La barre de navigation commun à toutes les pages */}
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">
              Pokédex
            </Link>
          </div>
        </nav>
        {/*Le système de gestion des routes de notre application */}
        <Switch>
          <PrivateRoute exact path="/" component={PokemonList}></PrivateRoute>
          <Route exact path="/login" component={Login}></Route>
          <PrivateRoute
            exact
            path="/pokemons"
            component={PokemonList}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/pokemon/add"
            component={PokemonAdd}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/pokemons/edit/:id"
            component={PokemonEdit}
          ></PrivateRoute>
          <PrivateRoute
            path="/pokemons/:id"
            component={PokemonsDetail}
          ></PrivateRoute>
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
