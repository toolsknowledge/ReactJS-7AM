import React from "react";
import * as actions from "./actions/actions";
import {connect} from "react-redux";

class App extends React.Component{
     render(){
        return(
          <React.Fragment>
              <h1>{this.props.bal}</h1>   
              <button onClick={this.props.withdraw}>Withdraw</button>
              <button onClick={this.props.deposit}>Deposit</button>    
          </React.Fragment>
        )
     }
};


//subscription
const mapStateToProps = (state)=>{
    return{
      bal:state.bal
    }
};

//dispatch
const mapPropsToState = (dispatch)=>{
    return{
        withdraw : ()=>{ dispatch(actions.withdrawAsync(1000)) },
        deposit  : ()=>{ dispatch(actions.depositAsync(10000)) }
    }
};

export default connect(mapStateToProps,mapPropsToState)(App);





