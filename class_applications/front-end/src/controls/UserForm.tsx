//this component acting as utility component

//this component receives following parameters
//@initialFormFieldValues in the form of a json object
//@flag
//@user defined function

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function UserForm(initialValues:any,validateOnCheck=false,validate:any):any{
        const [values,setValues] = useState(initialValues);
        const [errors,setErrors] = useState({});

        const handleChanges = (event:any)=>{
            let {name,value} = event.target;
            setValues({
                ...values,
                [name]:value
            })
            if(validateOnCheck){
                validate({[name]:value});
            }
        };

        const resetForm = ()=>{
            setValues(initialValues);
            setErrors({});
        };

        return{
            values,
            setValues,
            errors,
            setErrors,
            handleChanges,
            resetForm
        };
};


const useStyles = makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root':{
            width:"80%",
            margin:theme.spacing(1)
        }
    }
}));

export function Form(props:any):any{
    const {children,...others} = props;
    const classes = useStyles();
    return(
        <form className={classes.root} autoComplete="off" {...others}>
            {children}
        </form>
    )
};