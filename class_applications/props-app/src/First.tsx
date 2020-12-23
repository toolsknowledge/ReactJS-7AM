import React from "react";
import { Second } from "./Second";
export function First():any{
    return(
        <Second key1="Hello_1" 
                key2="100"
                key3="true"
                key4="[10,20,30,40,50]"
                key5="{key1:'Hello_1',key2='Hello_2',key3:'Hello_3'}" />
    )
};