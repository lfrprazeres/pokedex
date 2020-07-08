import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Reducers } from "../reducers";
import Saga from "../saga";
import { apiMiddleware } from "redux-api-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware, apiMiddleware))
);

sagaMiddleware.run(Saga);

export { store };
