import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import CacheBuster from './utils/cacheBuster';
import { BrowserRouter } from "react-router-dom";
// import * as serviceWorker from '../public/serviceWorker';
import "./assets/css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// TODO Register service worker
// serviceWorker.register();
