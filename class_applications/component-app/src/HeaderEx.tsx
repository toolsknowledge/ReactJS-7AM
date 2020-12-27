import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    "my_heading":{
        color:"green",
        fontWeight:600,
        textAlign:"center"
    }
});
export default function HeaderEx(){
    const classes:any = useStyles();
    return(
        <p className={classes.my_heading}>ECommerce Appliation Soon....!</p>
    )
};