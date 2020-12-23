import React from "react";

export function Second(props:any):any{
    const { key1,key2,key3,key4,key5 } = props;
    return(
        <React.Fragment>
            <h1>{key1}</h1>
            <h1>{key2}</h1>
            <h1>{key3}</h1>
            
        </React.Fragment>
    )
};