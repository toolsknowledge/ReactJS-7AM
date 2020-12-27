import React from "react";
import { makeStyles } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
const useStyles = makeStyles({
    "my_img":{
        width:100,
        height:100
    }
});
export default function BodyEx(){
    const classes = useStyles();
    return(
        <React.Fragment>
            <Avatar alt="AC Image" src="https://ashokit.s3.ap-south-1.amazonaws.com/AC/ac1.jpeg" variant="square" className={classes.my_img}></Avatar>
            <Avatar alt="AC Image" src="https://ashokit.s3.ap-south-1.amazonaws.com/AC/ac2.jpeg" variant="square" className={classes.my_img}></Avatar>
            <Avatar alt="AC Image" src="https://ashokit.s3.ap-south-1.amazonaws.com/AC/ac3.jpeg" variant="square" className={classes.my_img}></Avatar>
        </React.Fragment>
    )
};