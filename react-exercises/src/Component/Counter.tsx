import {useState} from "react";

function Counter() {
    const [value, setValue] = useState(0);
    const increment1 = () => {setValue(value + 1); }
    const increment5 = () => {setValue(value + 5); }
    const reset = () => {setValue(0); }
    const decrement1 = () => {setValue(value - 1); }
    const decrement5 = () => {setValue(value - 5); }

    return (
        <div>
            <h2>Compteur : {value}</h2>
            <button onClick={decrement5} disabled={value <= 4}>-5</button>
            <button onClick={decrement1} disabled={value <= 0}>-1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment1}>+1</button>
            <button onClick={increment5}>+5</button>
        </div>
    );
}

export default Counter;
