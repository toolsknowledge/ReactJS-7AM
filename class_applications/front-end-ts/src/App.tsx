import React,{Component} from "react";
import {connect} from "react-redux";
import * as actions from "./ageaction";

export interface IState{
  my_state:any;
}

export interface IProps{
   ageUpBtn2:any;
   age:number;
}

class App extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }

    ageUpBtn1:any = ()=>{
        this.props.ageUpBtn2();
    };

    render():any{
        return(
          <div>
             <h1>{this.props.age}</h1>
             <button onClick={this.ageUpBtn1}>AgeUp</button>
          </div>
        )
    }
};

const receive:any =  (state:IState)=>{
  return{
     age:state
  }
}

const send = (dispatch:any)=>{
    return{
      ageUpBtn2:dispatch(actions.ageUp())
    }
}

export default connect(receive,send)(App);



