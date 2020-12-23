import React from "react";
import {Comp3} from "./Comp3";
export function Comp2(props:any):any{
    return(
        <React.Fragment>
            <Comp3 {...props}/>
        </React.Fragment>
    )
};