import React from "react";
function Test2(props:any):any{
   
    return(
        <React.Fragment>
             {props.key1.map((element:any,index:any):any=>(
                 <span key={index}>{element}</span>
             ))}

             {props.key2.var_one}

             {JSON.stringify(props.key3)}
        </React.Fragment>
    )
};
export default Test2;