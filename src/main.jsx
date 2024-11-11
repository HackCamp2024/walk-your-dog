import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-0fbwaziwuq6xfeao.us.auth0.com"
    clientId="I9QWp46V9T0wCqoYMad2A1bsN980HpDX"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
