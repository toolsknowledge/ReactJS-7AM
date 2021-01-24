import { CartActionTypes, CART_ITEMS_LOADING, CART_ITEMS_LOADING_FAIL, CART_ITEMS_LOADING_SUCCESS } from "../action/CartActionTypes";
import { CartModal } from "../model/cart.modal";
interface initialStateI{
    loading:boolean;
    error:string;
    itemsInCart:CartModal[]
};
const initialState:initialStateI = {
    loading:false,
    error:"",
    itemsInCart:[]
};
const cartReducer = (state=initialState,action:CartActionTypes):initialStateI=>{
    switch(action.type){
        case CART_ITEMS_LOADING:
            return{
                ...state,
                loading:action.loading,
                error:action.error,
                itemsInCart:[]
            }

        case CART_ITEMS_LOADING_SUCCESS:
            let arr:any[]=[];
            const item = action.itemsInCart;
            const duplicateItem = state.itemsInCart.find((obj)=>obj._id === item._id);
            if(duplicateItem){
                arr = state.itemsInCart.map((obj)=> obj._id === item._id ? item : obj);
            }else{
                arr = [...state.itemsInCart,item];
            }
            return{
                ...state,
                loading:action.loading,
                itemsInCart:arr,
                error:action.error
            }
        case CART_ITEMS_LOADING_FAIL:
            return{
                ...state,
                loading:action.loading,
                error:action.error,
                itemsInCart:[]
            }
        default:
            return state;
    }
};

export default cartReducer;







