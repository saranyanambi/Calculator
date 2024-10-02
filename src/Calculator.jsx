import { useState } from "react";
import "./Calculator.css";

const Calculator=()=>{

    const[input,setInput]=useState("");
    const[result,setResult]=useState();

    const handleClick=(e)=>{
        if(e.target.value=="C"){
            setInput("");
            setResult("")
            return;
        }
        else if(e.target.value=="=")
        {
            try{
                setResult(eval(input).toString());
            }
            catch(e){
                setResult("Error")
            }
        }
        else{
        setInput((input)=>input+e.target.value)
        }
    }
    console.log(input)
    return(
        <div>
        <h1>React Calculator</h1>
        <input type="text" name="number" value={input} readOnly/>
        <div>{result}</div>
        <div className="button-container">
        <div className="button-grid">
        <button className="button" value="7" onClick={(e)=>handleClick(e)}>7</button>
        <button className="button" value="8" onClick={(e)=>handleClick(e)}>8</button>
        <button className="button" value="9" onClick={(e)=>handleClick(e)}>9</button>
        <button className="button" value="+" onClick={(e)=>handleClick(e)}>+</button>
        <button className="button" value="4"  onClick={(e)=>handleClick(e)}>4</button>
        <button className="button"value="5" onClick={(e)=>handleClick(e)}>5</button>
        <button className="button" value="6" onClick={(e)=>handleClick(e)}>6</button>
        <button className="button" value="-" onClick={(e)=>handleClick(e)}>-</button>
        <button value="1"className="button" onClick={(e)=>handleClick(e)}>1</button>
        <button className="button" value="2" onClick={(e)=>handleClick(e)}>2</button>
        <button className="button" value="3" onClick={(e)=>handleClick(e)}>3</button>
        <button className="button" value="*" onClick={(e)=>handleClick(e)}>*</button>
        <button className="button" value="C" onClick={(e)=>handleClick(e)}>C</button>
        <button className="button" value="0" onClick={(e)=>handleClick(e)}>0</button>
        <button className="button" value="/" onClick={(e)=>handleClick(e)}>/</button>
        <button className="button" value="=" onClick={(e)=>handleClick(e)}>=</button>
        </div>
        </div>
        </div>

    )
}
export default Calculator;