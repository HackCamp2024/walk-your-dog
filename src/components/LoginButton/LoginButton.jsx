import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={async () => {
        try {
          await loginWithRedirect({
            connection: "google-oauth2",
            scope:
              "openid profile email https://www.googleapis.com/auth/fitness.activity.read",
          });
        } catch (error) {
          console.error("Login error:", error);
        }
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;
