//component     (ProductScreen)
//subscribe and dispatch
//class level component

import React from "react";
import { connect } from "react-redux";
import * as actions from "../action/DetailAction";

interface IProps{
    "productID":string;
    "fun_one":any;
    "my_state":any;
}

interface IState{

};

class ProductScreen extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    componentDidMount(){
        this.props.fun_one(this.props.productID);
    };
    render(){
        return(
            <div>
                {JSON.stringify( this.props.my_state) }
            </div>
        )
    };
};

//subscription
const receive = (state:any)=>{
    return{
        my_state :state.detail
    }
};

//dispatch
const send = (dispatch:any)=>{
    return{
        fun_one : (id:string)=>{ dispatch(actions.getDetailedProduct(id)) }        
    }
};

export default connect(receive,send)(ProductScreen);




