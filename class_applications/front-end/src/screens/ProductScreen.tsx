//component     (ProductScreen)
//subscribe and dispatch
//class level component

import React from "react";
import { connect } from "react-redux";
import * as actions from "../action/DetailAction";
import { match, NavLink } from "react-router-dom";
import { Rating } from "../components/Rating";

interface matchProps{
    productID:string;
};


interface IProps{
    "productID"?:match<productsID>;
    "fun_one":any;
    "my_state":any;
}

interface IState{
    qty:number;
};

interface productsID{
    "id":string;
}

class ProductScreen extends React.Component<IProps,IState>{
   
    constructor(props:IProps){
        super(props);
        this.state = {
            qty:1
        }
    };
    componentDidMount(){
        console.log(this.props.productID);
        this.props.fun_one("5ff079f59fd97224dd3dede7");
    };

    setQty = (count:any)=>{
        this.setState({
            qty:count
        })
    }

    addToCartHandler = ()=>{
        console.log("move to cart screen");
    };

    render(){
        const { loading,product,error } = this.props.my_state; 
        return(
            <React.Fragment>
                 <NavLink to="/" exact strict>Back To Results</NavLink>
                 <div className="row top">
                    
                    {/*image */}
                    <div className="col-2">
                        <img src={product.image} alt={product.image}></img>
                    </div>
                    
                    {/*description */}
                    <div className="col-1">
                        <ul>
                            <li><h2>{product.name}</h2></li>
                            <li>
                                <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                            </li>
                            <li>
                                $ {product.price}
                            </li>
                            <li>
                                {product.description}
                            </li>
                        </ul>
                    </div>

                    {/*cart to cart functionality*/}
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Price</div>
                                        <div>{product.price}</div>
                                    </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>Status</div>
                                            <div>
                                                {product.countInStock>0 ? (<span className="success">Count In Stock</span>):(<span className="error">Out Of Stock</span>)}
                                            </div>
                                        </div>
                                    </li>
                                    {product.countInStock>0 && (
                                    <>
                                        <li>
                                            <div className="row">
                                                <div>Qty</div>
                                                <div>
                                                    <select value={this.state.qty} 
                                                            onChange={(e)=>this.setQty(e.target.value)}>
                                                        {
                                                            [...Array(product.countInStock).keys()].map((x:any)=>(
                                                                <option key={x+1} value={x+1}>{x+1}</option>
                                                            ))
                                                            
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <button onClick={this.addToCartHandler} className="primary block">Add to Cart</button>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>

                 </div>
            </React.Fragment>
        )
    };
};

//subscription
const receive = (state:any)=>{
    return{
        my_state :state.detail
    }
};

//dispatch
const send = (dispatch:any)=>{
    return{
        fun_one : (id:string)=>{ dispatch(actions.getDetailedProduct(id)) }        
    }
};

export default connect(receive,send)(ProductScreen);




