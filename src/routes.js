import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About } from "./Screens";
import { connect } from "react-redux";
import { gottaCatchThemAll } from "./actions/pokedex";

function Routes(props) {
  const { limit, offset, pokemons, gottaCatchThemAll } = props;

  useEffect(() => {
    if (!pokemons) gottaCatchThemAll(limit, offset);
  }, [gottaCatchThemAll, limit, offset, pokemons]);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about/:id" component={About} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  limit: state.pokedex.limit,
  offset: state.pokedex.offset,
  pokemons: state.pokedex.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  gottaCatchThemAll: (limit, offset) =>
    dispatch(gottaCatchThemAll(limit, offset)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
