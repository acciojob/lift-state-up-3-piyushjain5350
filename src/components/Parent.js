import React,{useState} from "react";
import Child from "./Child";

const Parent=()=>{
    let [btnValue , setBtnValue] =useState('');

    function handlingFn(fn){
        setBtnValue(fn.value);
        console.log(fn.value);
    }
    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child nameInput="Child Component 1" value="Option 1" handlingFn={handlingFn}/>
            <Child nameInput="Child Component 2" value="Option 2" handlingFn={handlingFn}/>
            <p>Selected Option: {btnValue}</p>
        </div>
    )
}

export default Parent;