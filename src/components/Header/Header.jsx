import "./Header.css";
function formatDate(dayOffset) {
  const date = new Date(Date.now() + dayOffset * 86400000); // 86400000 ms in a day
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export const Header = ({ day, handleClickNextDay, hearts }) => {
  const dateText = formatDate(day);
  return (
    <div className="header-container">
      <div className="day-container">
        <p>{dateText}</p>
        <button onClick={handleClickNextDay}>Next day</button>
      </div>

      {/* TODO: Hearts component later */}
      <div>Hearts</div>
    </div>
  );
};
