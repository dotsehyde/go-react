import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./router/MainRouter";

const root = ReactDOM.createRoot(document.querySelector("#root")!);
root.render(
  <MainRouter />
);