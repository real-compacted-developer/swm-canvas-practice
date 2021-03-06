import React from "react";
import ReactDOM from "react-dom";
import Main from "./views/Main";
import * as serviceWorker from "./serviceWorker";

import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
