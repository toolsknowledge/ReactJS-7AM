import { ProductActionTypes,PRODUCTS_LOADING,PRODUCT_SUCCESS,PRODUCT_FAIL } from "../action/ProductActionTypes";
import { Product } from "../model/Product";

interface initialStateI{
    loading:boolean;
    products:Product[];
    error:string;
}

const initialState:initialStateI = {
    loading:false,
    products:[],
    error:""
};

const productReducer = (state=initialState,action:ProductActionTypes):initialStateI=>{
    switch(action.type){
        case PRODUCTS_LOADING:
            return{
                ...state,
                loading:true,
                error:"",
                products:[]
            }
        case PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                error:action.error,
                products:action.products
            }
        case PRODUCT_FAIL:
            return{
                ...state,
                error:action.error,
                products:[],
                loading:false
            }
        default:
            return state;
    }
};

export default productReducer;