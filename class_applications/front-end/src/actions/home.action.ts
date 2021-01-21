//homeaction connect to server (axios)
//homeaction will send final result to the reducer (homereducer)
//http://localhost:80808/api/products     (config)

import Base_URL from "../config/endpoint";

import axios from "axios";

export const getProducts = ()=>{
    return async (dispatch:any)=>{
        const res = await axios.get(Base_URL);
        dispatch({
            type:"ALL_PRODUCTS",
            value:res.data
        });
    };
};
