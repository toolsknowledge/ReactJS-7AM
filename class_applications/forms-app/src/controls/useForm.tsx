import React,{useState} from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(initialFValues:any,validateOnChange=false,validate:any):any{
    
    const [values,setValues] = useState(initialFValues);
    const [errors,setErrors] = useState({});

    const handleInputChange = (e:any):any=>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnChange){
            validate({[name]:value})
        }
    };
    

    const resetForm = ()=>{
        setValues(initialFValues);
        setErrors({});
    };  


    return{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
};

const useStyles = makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root':{
            width:"50%",
            margin:theme.spacing(1)
        }
    }
}))

export function Form(props:any):any{
    const classes = useStyles();
    const {children,...others} = props;
    return(
        <form className={classes.root} {...others} autoComplete="off">
            {children}
        </form>
    )
};