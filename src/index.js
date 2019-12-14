import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const App = () => (
  <div>
    <h1>Hello</h1>
  </div>
);

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
