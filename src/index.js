import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App";
import { GlobalStyle } from "./globalStyle";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <Fragment>
    <GlobalStyle  background={'#F0F4DB'}/>
    <App />
  </Fragment>
);
