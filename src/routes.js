import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Profile } from "./Screens";
import { connect } from "react-redux";
import { gottaCatchThemAll } from "./actions/pokedex";

function Routes(props) {
  const { limit, offset, pokemons, gottaCatchThemAll } = props;

  useEffect(() => {
    if (!pokemons) gottaCatchThemAll(limit, offset);
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:id" component={Profile} />
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
