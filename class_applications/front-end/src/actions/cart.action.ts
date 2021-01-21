//"cartaction" receives the productID & qty from CartScreen
//make the asynchrnous call (axios)   
//send the final result to cartreducer

import Base_URL from "../config/endpoint";
import axios from "axios";

export const getProductDetails = (productID:any,qty:number)=>{
        return async (dispatch:any)=>{
            const res = await axios.get(`${Base_URL}/${productID}`);
            dispatch({
                name:res.data.name,
                image:res.data.image,
                price:res.data.price,
                countInStock:res.data.countInStock,
                product:res.data._id,
                qty
            });
        }
};