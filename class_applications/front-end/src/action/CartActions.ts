import axios from "axios";
import { Dispatch } from "redux";
import { CartActionTypes, CART_ITEMS_LOADING, CART_ITEMS_LOADING_FAIL, CART_ITEMS_LOADING_SUCCESS } from "./CartActionTypes";
//receives 1) productID , 2) qty  from CartScreen
export const getCartDetails = (productID:string,qty:number)=>{
    return async (dispatch:Dispatch<CartActionTypes>)=>{
        dispatch({type:CART_ITEMS_LOADING,
                  loading:false,
                  error:"",
                  itemsInCart:{"name":"",countInStock:0,"_id":"",image:"",price:0}});
        try{
            const res = await axios.get(`http://localhost:8080/api/products/${productID}`);
            const {data} = res;
            dispatch({
                type:CART_ITEMS_LOADING_SUCCESS,
                loading:true,
                error:"",
                itemsInCart:data,
                qty
            })
        }catch(err){
            dispatch({type:CART_ITEMS_LOADING_FAIL,
                loading:false,
                error:err.message,
                itemsInCart:{"name":"",countInStock:0,"_id":"",image:"",price:0}});
        }
    };
};
