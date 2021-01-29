import React from "react";
import * as actions from "../action/ProductAction";
import { connect } from "react-redux";
import { LoadingBox } from "../components/LoadingBox";
import { MessageBox } from "../components/MessageBox";

import Product from "../components/Product";

interface IProps{
    fun_one:any;
    my_state:any;
};
interface IState{

};
class HomeScreen extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    componentDidMount(){
        this.props.fun_one();
    };
    render(){
        const {loading,products,error} = this.props.my_state;
        return(
            <React.Fragment>
                 {!loading ? (<LoadingBox></LoadingBox>) : 
                  error === "Network Error" ? (<MessageBox variant="danger">{error}</MessageBox>) :
                  (<Product arr={products}></Product>)} 
            </React.Fragment>
        )
    };
};
//subscription
const receive = (state:any)=>{
    return{
        my_state:state.products      
    }
};
//dispatch
const send = (dispatch:any)=>{
    return{
        fun_one : ()=>{ dispatch(actions.getProducts()) }      
    }
};
export default connect(receive,send)(HomeScreen);