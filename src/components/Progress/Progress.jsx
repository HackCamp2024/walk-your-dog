import "./Progress.css";
export const Progress = ({ steps }) => {
  // Clamp value between 0 and
  const progress = Math.min(Math.max(steps, 0), 10000);
  10000;
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${(progress / 10000) * 100}%` }}
        />
      </div>
    </div>
  );
};
