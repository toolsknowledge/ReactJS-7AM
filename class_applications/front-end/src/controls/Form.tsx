import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(theme=>({
    "root":{
        '& .MuiFormControl-root':{
            width:"80%",
            margin:theme.spacing(1)
        }
    }
}));
export default function Form(props:any):any{
    const classes = useStyles();
    return(
        <React.Fragment>
            <form className={classes.root} autoComplete="off" {...props.others}>
                {props.children}
            </form>
        </React.Fragment>
    )
};