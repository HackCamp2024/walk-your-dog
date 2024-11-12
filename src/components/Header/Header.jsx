import "./Header.css";
import Hearts from "../Hearts/Hearts";

function formatDate() {
  const date = new Date(); // 86400000 ms in a day
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export const Header = ({ hearts }) => {
  const dateText = formatDate();
  return (
    <div className="header-container">
      <div className="day-container">
        <p className="day-text">{dateText}</p>
      </div>
      <div className="Hearts">
        <Hearts count={hearts}></Hearts>
      </div>
    </div>
  );
};
