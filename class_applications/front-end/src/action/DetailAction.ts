import { Dispatch } from "redux";
import { DetailActionTypes, LODAING_PRODUCT_ID, LODAING_PRODUCT_ID_FAIL, LODAING_PRODUCT_ID_SUCCESS } from "./DetailActionTypes";
import axios from "axios";

export const getDetailedProduct = (productID:any)=>{
    return async (dispatch:Dispatch<DetailActionTypes>)=>{
            dispatch({type:LODAING_PRODUCT_ID,
                      loading:false,
                      error:"",
                      product:{"_id":"","brand":"",category:"",description:"",countInStock:0,image:"",numReviews:0,name:"",price:0,rating:0}})        
            try{
                const res = await axios.get(`http://localhost:8080/api/products/${productID}`);
                const {data} = res;
                console.log(data);
                dispatch({type:LODAING_PRODUCT_ID_SUCCESS,
                         error:"",
                         loading:true,
                         product:data})
            }catch(err){
                dispatch({
                    type:LODAING_PRODUCT_ID_FAIL,
                    loading:false,
                    error:err.message,
                    product:{"_id":"","brand":"",category:"",description:"",countInStock:0,image:"",numReviews:0,name:"",price:0,rating:0}
                })
            }
    }
};