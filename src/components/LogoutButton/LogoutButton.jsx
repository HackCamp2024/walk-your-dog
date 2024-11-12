import { googleLogout } from "@react-oauth/google";
import "../LoginButton/LoginButton.css";

const LogoutButton = () => {
  return (
    <button className="auth-button" onClick={() => googleLogout()}>
      Log Out
    </button>
  );
};

export default LogoutButton;
