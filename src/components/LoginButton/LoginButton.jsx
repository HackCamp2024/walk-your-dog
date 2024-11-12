import { useGoogleLogin } from "@react-oauth/google";
import "./LoginButton.css";

const LoginButton = ({ handleLoginSuccess }) => {
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      await handleLoginSuccess(codeResponse);
    },
    scope: "https://www.googleapis.com/auth/fitness.activity.read",
  });
  return (
    <button className="auth-button" onClick={() => login()}>
      Login
    </button>
  );
};

export default LoginButton;
