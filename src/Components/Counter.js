import React, { useState } from "react";
import  './Counter.css';


function Counter(){

    const [counter,setCounter]=useState(0);

    const increment=()=>{
        setCounter(counter+1);
        console.log(counter);
    }
    const decrement=()=>{
        setCounter(counter-1);
        console.log(counter)
    }
    return(
        <div className="container">
            <div className="subContainer">
                <h1>Counter</h1>
                <div className="buttons">
                    <button className="increament" onClick={increment}> Increament</button>
                    <button className="decrement" onClick={decrement}>Decrement</button>
                    <h3>{counter}</h3>
                </div>

            </div>



        </div>
    )
}

export default Counter