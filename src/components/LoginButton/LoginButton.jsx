import { useGoogleLogin } from "@react-oauth/google";
import "./LoginButton.css";

const LoginButton = ({ handleLoginSuccess }) => {
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      await handleLoginSuccess(codeResponse);
    },
    scope: "https://www.googleapis.com/auth/fitness.activity.read",
    redirect_uri: window.location.origin,
    ux_mode: "popup",
  });
  return (
    <button className="auth-button" onClick={() => login()}>
      Login
    </button>
  );
};

export default LoginButton;
