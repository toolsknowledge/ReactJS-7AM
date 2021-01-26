import React from "react";
interface IProps{
    variant:string;
};
export class MessageBox extends React.Component<IProps,{}>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <div className={`alert alert-${this.props.variant} || "info"`}>
                {this.props.children}
            </div>
        )
    }
};

































/*
import React from "react";

interface IProps{
    variant:string;
}

export class MessageBox extends React.Component<IProps,{}>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <div className={`alert alert-${this.props.variant} || "info"`}>
                  {this.props.children}
            </div>
        )
    }
};
*/