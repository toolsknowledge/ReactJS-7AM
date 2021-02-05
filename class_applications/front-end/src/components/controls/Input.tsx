import { TextField } from "@material-ui/core";
import React from "react";

interface IProps{
    name:string;
    label:string;
    value:string;
};

class Input extends React.Component<IProps,{}>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <TextField name={this.props.name}
                       label={this.props.label}
                       value={this.props.value}></TextField>
        )
    }
};

export default Input;