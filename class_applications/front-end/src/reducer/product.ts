import { ProductActionTypes, PRODUCTS_FAIL, PRODUCTS_LOADING, PRODUCTS_SUCCESS } from "../action/ProductActionTypes";
import { product } from "../model/product";
interface initialStateI{
    loading:boolean;
    products:product[];
    error:string;
};
const initialState:initialStateI = {
    loading:false,
    products:[],
    error:""
}
const productReducer = (state=initialState,action:ProductActionTypes):initialStateI=>{
    switch(action.type){
        case PRODUCTS_LOADING:
        case PRODUCTS_SUCCESS:
        case PRODUCTS_FAIL:
            return{
                ...state,
                loading:action.loading,
                products:action.products,
                error:action.error
            }
        default:
            return state;
    }
}

export default productReducer;
