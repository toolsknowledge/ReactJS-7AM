//Product Component receives the arr from HomeScreen
//Product Component displays the data in the form of Cards
import React from "react";
import { NavLink } from "react-router-dom";
import { product } from "../model/product";
import { Rating } from "./Rating";
interface IProps{
    arr:product[]
};
interface IState{
};
class Product extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <div className="row center">
                    {this.props.arr.map((prod)=>(
                        <div className="card" key={prod._id}>
                            <NavLink to={`/product/${prod._id}`}>
                                <img src={prod.image} className="medium" alt={prod.name}></img>
                            </NavLink>
                            <div className="card-body">
                                <a href="#"><h2>{prod.name}</h2></a>
                                <Rating rating={prod.rating} numReviews={prod.numReviews}></Rating>
                                <div className="price">
                                    Price : ${prod.price}
                                </div>
                            </div>
                        </div>
                    ))}             
                </div>
            </React.Fragment>
        )
    };
};
export default Product;
