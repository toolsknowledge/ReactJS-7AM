import { ProductActionTypes,PRODUCTS_LOADING,PRODUCT_SUCCESS,PRODUCT_FAIL } from "./ProductActionTypes";
import axios from "axios";
import { Dispatch } from "redux";

export const productAction = ()=>{
    return async (dispatch:Dispatch<ProductActionTypes>)=>{
        dispatch({type:PRODUCTS_LOADING,
                  loading:true,
                  error:"",
                  products:[]});
        try{
            const res = await axios.get(`http://localhost:8080/api/products`);
            dispatch({
                type:PRODUCT_SUCCESS,
                loading:false,
                products:res.data,
                error:""
            })
        }catch(err){
            dispatch({
                type:PRODUCT_FAIL,
                loading:false,
                error:err.message,
                products:[]
            })
        }
    }
};