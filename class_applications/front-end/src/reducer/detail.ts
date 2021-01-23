import { DetailActionTypes, LODAING_PRODUCT_ID, LODAING_PRODUCT_ID_FAIL, LODAING_PRODUCT_ID_SUCCESS } from "../action/DetailActionTypes";
import { Detail } from "../model/detail";

interface initialStateI{
    loading:boolean;
    product:Detail;
    error:string;
};
const initialState:initialStateI = {
    loading:false,
    product:{"_id":"","brand":"",category:"",description:"",countInStock:0,image:"",numReviews:0,name:"",price:0,rating:0},
    error:""
};

const detailReducer = (state=initialState,action:DetailActionTypes):initialStateI=>{
    switch(action.type){
        case LODAING_PRODUCT_ID:
        case LODAING_PRODUCT_ID_SUCCESS:
        case LODAING_PRODUCT_ID_FAIL:
            return{
                ...state,
                loading:action.loading,
                error:action.error,
                product:action.product
            }
        default:
            return state;
    }
};

export default detailReducer;