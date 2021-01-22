import React from "react";
import { connect } from "react-redux";
import * as actions from "./ProductAction";

interface IProps{
  myFun:any;
  my_state:any;
};

class App extends React.Component<IProps,{}>{
    constructor(props:IProps){
      super(props);
    };
    componentDidMount(){
        this.props.myFun();
    };
    render(){
      return(
        <div>
            {JSON.stringify(this.props.my_state)}
        </div>
      )
    };
};

const receive = (state:any)=>{
   return{
      my_state:state
   }
}

const send = (dispatch:any)=>{
    return{
        myFun : ()=>{dispatch(actions.getProducts())}
    }
};

export default connect(receive,send)(App);