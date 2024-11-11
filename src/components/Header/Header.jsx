import "./Header.css";
import Hearts from "../Hearts/Hearts";

function formatDate(dayOffset) {
  const date = new Date(Date.now() + dayOffset * 86400000); // 86400000 ms in a day
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export const Header = ({ day, handleClickNextDay, hearts }) => {
  const dateText = formatDate(day);
  return (
    <div className="header-container">
      <div className="day-container">
        <p className="day-text">{dateText}</p>
        <button className="next-day-button" onClick={handleClickNextDay}>
          Next day
        </button>
      </div>

      {/* TODO: Hearts component later */}
      <div className="Hearts">
        <Hearts count={hearts}></Hearts>
      </div>
    </div>
  );
};
