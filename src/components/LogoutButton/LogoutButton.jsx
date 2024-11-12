import "../LoginButton/LoginButton.css";

const LogoutButton = ({ handleLogout }) => {
  return (
    <button className="auth-button" onClick={() => handleLogout()}>
      Log Out
    </button>
  );
};

export default LogoutButton;
