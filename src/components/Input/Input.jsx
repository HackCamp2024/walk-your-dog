import "./Input.css";
function Input({ value, handleChange, setSteps }) {
  const handleAdd = () => {
    setSteps(value);
  };

  return (
    <div className="step-input">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="steps-input"
      />
      <button className="input-button" onClick={handleAdd}>Add</button>
    </div>
  );
}
export default Input;
