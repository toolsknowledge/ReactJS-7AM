import React from "react";
import { makeStyles,Button as MuiButton } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    root:{
        margin:theme.spacing(1),
        width:200
    },
    label:{
        textTransform:"none"
    }
}));

export default function Button(props:any):any{
    const classes = useStyles();
    const {text,
           size,
           color,
           variant,
           onClick, ...other} = props;
    return(
        <React.Fragment>
            <MuiButton variant={variant || "outlined"}
                       size={size || "large"}
                       color={color || "primary"}
                       onClick={onClick}
                       {...other}
                       classes={{ root: classes.root, label: classes.label }}>
                {text}
            </MuiButton>
        </React.Fragment>
    )
};