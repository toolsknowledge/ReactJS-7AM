import React from "react";
import * as actions from "../action/ProductAction";
import { connect } from "react-redux";
import { LoadingBox } from "../components/LoadingBox";
import { MessageBox } from "../components/MessageBox";
import { Rating } from "../components/Rating";
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
                <LoadingBox></LoadingBox>
                <MessageBox variant={"info"}>Error</MessageBox>
                <Rating rating={1} numReviews={10}></Rating> 
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