import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About } from "./Screens";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { closeSnackbar } from "./actions/app";

function Routes(props) {
  const { snackbar, closeSnackbar } = props;

  function handleCloseSnackbar() {
    closeSnackbar();
  }
  return (
    <Router>
      <Snackbar
        open={snackbar.visible}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert severity={snackbar.type} elevation={6} variant="filled">
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
      <Switch>
        <Route exact path="/pokedex" component={Home} />
        <Route exact path="/pokedex/about/:id" component={About} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  limit: state.pokedex.limit,
  offset: state.pokedex.offset,
  pokemons: state.pokedex.pokemons,
  useInfiniteLoading: state.pokedex.useInfiniteLoading,
  snackbar: state.app.snackbar,
});

const mapDispatchToProps = (dispatch) => ({
  closeSnackbar: () => dispatch(closeSnackbar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
