import axios from "axios";
import { Dispatch } from "redux";

import { ProductDispatchTypes,PRODUCT_LOADING,PRODUCT_FAIL,PRODUCT_SUCCESS } from "./ProductActionTypes";

export const getProducts = ()=>{
    return async (dispatch:Dispatch<ProductDispatchTypes>)=>{
        dispatch({type:PRODUCT_LOADING});
        try{
            const res = await axios.get(`http://localhost:8080/api/products`);
            dispatch({type:PRODUCT_SUCCESS,
                      payload:res.data});
        }catch(error){
            dispatch({type:PRODUCT_FAIL});
        }
    };
};
