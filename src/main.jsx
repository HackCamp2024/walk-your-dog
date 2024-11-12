import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="847989147030-asdd2k80un0c9i5j96091ae4ct2v8or1.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
