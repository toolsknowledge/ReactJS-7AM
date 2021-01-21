//receives "productID" from component (ProductScreen)
//make the asynchronous call   (axios)
//send the final result to reducer (productreducer)

import Base_URL from "../config/endpoint";
import axios from "axios";

export const getDetailProduct = (productID:any)=>{
    return async (dispatch:any)=>{
        const res = await axios.get(`${Base_URL}/${productID}`);
        dispatch({
            type:"DETAILS_PRODUCT",
            value:res.data
        });
    }
};
