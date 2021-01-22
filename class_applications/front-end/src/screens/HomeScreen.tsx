import React from "react";
import * as actions from "../action/ProductAction";
import { connect } from "react-redux";
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
        return(
            <div>
                {JSON.stringify(this.props.my_state)}
            </div>
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