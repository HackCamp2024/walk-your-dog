import React , {useState} from 'react'; 
import PropTypes from 'prop-types'; 
import './input.css'; 
const maxLength = 7;
function Input({value, handleChange, setSteps}) {
    // const [value, setValue] =useState("0");
    const [toggleInput, setToggleInput] = useState(false);
    const [tempValue, setTempValue] = useState("");
    const [displayValue, setDisplayValue] = useState(value);
    const handleClick = (e) => {
        console.log(e.target.value)
        setTempValue(e.target.value)
        // setToggleInput(!toggleInput);
        // setDisplayValue()
        
    }
    const handleKeyDown = (event) => {
        console.log(event.target.value)
        setTempValue(event.target.value)
        // if(toggleInput && (49 <= event.key.charCodeAt(0) <= 57)){
        //     setTempValue(tempValue.concat(event.target.value));
        // }
    }
   const handleAdd = (event) => {
    console.log('run add', { value})
        // if(toggleInput){
        //     setValue(tempValue);
        //     setToggleInput(!toggleInput);
        //     setTempValue("");
        // }
        setSteps(value)
   }
   
    return (
        <div className ="step-input">
            <input 
            type="text"
            value={value}
            onChange={handleChange}
            // onKeyDown = {handleKeyDown}
            />
            / 10000 
            <button onClick = {handleAdd}>Add</button>
        </div>
    );
}
export default Input;