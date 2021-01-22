import React from "react";
import { connect } from "react-redux";
import * as actions from "./action/ProductAction";
interface IProps{
  fetchProducts:any;
  my_state:any;
}

class App extends React.Component<IProps,{}>{
     constructor(props:IProps){
       super(props);
     }

     componentDidMount(){
        this.props.fetchProducts();
     };

     render(){
       return(
         <div>
            {JSON.stringify(this.props.my_state)}
         </div>
       )
     }
};

const receive = (state:any)=>{
    return{
        my_state:state
    }
};

const send  = (dispatch:any)=>{
    return{
      fetchProducts:()=>{dispatch(actions.productAction())}    
    }
};

export default connect(receive,send)(App);