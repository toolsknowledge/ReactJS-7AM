import axios from "axios";
import { Dispatch } from "redux";
import { ProductActionTypes, PRODUCTS_FAIL, PRODUCTS_LOADING, PRODUCTS_SUCCESS } from "./ProductActionTypes";

export const getProducts = ()=>{

    return async (dispatch:Dispatch<ProductActionTypes>)=>{

        dispatch({type:PRODUCTS_LOADING,
                  loading:false,
                  products:[],
                  error:""});
        try{
            const res = await axios.get(`http://localhost:8080/api/products`);
            const {data} = res;
            dispatch({
                type:PRODUCTS_SUCCESS,
                products:data,
                loading:true,
                error:""
            })
        }catch(err){
            dispatch({
                type:PRODUCTS_FAIL,
                products:[],
                error:err.message,
                loading:false
            })
        }


    };
};