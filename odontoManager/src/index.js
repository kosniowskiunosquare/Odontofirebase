import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

// we need to use Auth0  and axios

ReactDOM.render(
  <Auth0Provider
    domain="odonto-dev.us.auth0.com"
    clientId="eziobSTyJfsLhjMPXDeFAjrScURFgibl"
    redirectUri={`${window.location.origin}/Dashboard`}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
