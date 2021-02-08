import { TextField } from "@material-ui/core";
import React from "react";
//this component receives following properties dynamically
//@name
//@label
//@value
//@error
//@onChange
export default function Input(props:any):any{
    const {name,value,label,error=null,onChange} = props;
    return(
        <React.Fragment>
            <TextField 
                variant="outlined"
                name={name}
                label={label}
                value={value}
                onChange={onChange}
                {...(error && ({error:true,helperText:error}))}
            />
        </React.Fragment>
    )
};

