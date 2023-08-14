import React,{useState} from "react";

const Child=({nameInput,value,handlingFn})=>{
    function triggered(){
        handlingFn({value});
    }
    return(
        <div>
            <h1>{nameInput}</h1>
            <button onClick={triggered}>{value}</button>
        </div>
    )
}

export default Child;