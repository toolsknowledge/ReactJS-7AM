import React from "react";

export interface MyState{
    key1:string;
    key2:number;
}

export default class App extends React.Component<{},MyState>{
    constructor(props:any){
        super(props);
        this.state = {
           key1 : "Hello_1",
           key2 : 100
        };
    };
    render(){
      return(
        <React.Fragment>
           <h1>{this.state.key1}</h1>
           <h1>{this.state.key2}</h1>
        </React.Fragment>
      )
    }
};
