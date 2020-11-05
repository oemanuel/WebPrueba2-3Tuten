import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import { problem2Reducer } from "./reducers";
import { problem3Reducer } from "./reducers2";

import sagas from "./sagas";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    problem2Reducer,
    problem3Reducer,
  }),
  applyMiddleware(sagaMiddleware)
);
export default store;
sagaMiddleware.run(sagas);
