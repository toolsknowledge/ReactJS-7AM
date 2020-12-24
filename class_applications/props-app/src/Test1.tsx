import React from "react";
import Test2 from "./Test2";
function Test1():any{
    const arr1:number[] = [10,20,30,40,50];
    const obj:any = {var_one:"Hello_1"};
    const flag = true;
    return(
        <Test2 key1={arr1} key2={obj} key3={flag}/>
    )
};
export default Test1;