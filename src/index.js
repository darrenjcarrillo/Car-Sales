import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Reducer } from "./reducers/Reducer";

import "bulma/css/bulma.css";
import "./styles.scss";

// deps - redux, react-redux
// create the Redux store (createStore)

const store = createStore(Reducer);
console.log(store);

// Wrap <App /> inside a redux provider component
// pass the newly created store to the store prop on Provider
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
