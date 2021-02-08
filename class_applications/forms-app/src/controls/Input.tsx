import { TextField } from "@material-ui/core";
import React from "react";

interface IProps{
    name:string;
    value:string;
    label:string;
    onChange:any;
    error:any
};

interface IState{}

class Input extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        const {error=null,name,value,label,onChange} = this.props;
        return(
            <React.Fragment>
                <TextField variant="outlined"
                           name={name}
                           value={value}
                           label={label}
                           onChange={onChange}
                           {...(error && {error:true,helperText:error})} />
            </React.Fragment>
        )
    };
};

export default Input;