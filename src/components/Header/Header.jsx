import "./Header.css";
function formatDate() {
  const today = new Date();
  const options = { month: "short", day: "numeric" };
  return today.toLocaleDateString("en-US", options);
}

export const Header = () => {
  const dateText = formatDate();
  return (
    <div className="header-container">
      <p>{dateText}</p>
      {/* TODO: Hearts component later */}
      <div>Hearts</div>
    </div>
  );
};
