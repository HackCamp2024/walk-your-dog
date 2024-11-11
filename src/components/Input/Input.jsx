import "./Input.css";
function Input({ value, handleChange, setSteps }) {
  const handleAdd = () => {
    setSteps(value);
  };

  return (
    <div className="step-input">
      <input type="text" value={value} onChange={handleChange} />/ 10000
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
export default Input;
