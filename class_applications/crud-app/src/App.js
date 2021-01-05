import React from "react";
import {connect} from "react-redux";
class App extends React.Component{
    //get
    componentDidMount(){
        this.props.my_fun();
    };
    render(){
      return(
        <p>{JSON.stringify(this.props.result)}</p>  
      )
    };
};

//subscription
const mapStateToProps = (state)=>{
   return{
      result : state
   }
};


//dispatch
const mapPropsToState = (dispatch)=>{
  return{
    my_fun : ()=>{ dispatch({type:"EMPLOYEES"}) }
  }
};

export default connect(mapStateToProps,mapPropsToState)(App);