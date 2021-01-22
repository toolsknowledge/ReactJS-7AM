import {  ProductDispatchTypes, ProductType, PRODUCT_FAIL, PRODUCT_LOADING, PRODUCT_SUCCESS } from "./ProductActionTypes";

interface initialStateI {
    loading:boolean;
    products?:ProductType;
    payload?:any;

}

const initiaState:initialStateI = {
    loading:false,
}

const productReducer = (state:initialStateI = initiaState, action:ProductDispatchTypes):initialStateI=>{
    switch(action.type){
        case PRODUCT_LOADING:
            return{
                ...state,
                loading:true
            }
        case PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload
            }
        case PRODUCT_FAIL:
            return{
                ...state,
                loading:false
            }
        default:
            return state;
    }
};

export default productReducer;