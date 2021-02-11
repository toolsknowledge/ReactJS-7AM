import { TextField } from "@material-ui/core";
import React from "react";
interface IProps{
    name:string;
    label:string;
    value:string;
    onChange:any;
    error:any;
};
interface IState{}
export default class Input extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <TextField 
                    variant="outlined"
                    name={this.props.name}
                    label={this.props.label}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    {...(this.props.error && {error:true,helperText:this.props.error})} />
            </React.Fragment>
        )
    };
};