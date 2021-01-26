//Rating Component receives 1) rating    2) numReviews    (props)

/*
    1) fa fa-star  ----  fully selected star

    2) fa fa-star-half-o  ---- half selected star

    3) fa fa-star-o       ----  empty star
*/

import React from "react";

interface IProps{
    rating:number;
    numReviews:number;
};
interface IState{

};
export class Rating extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <div className="rating">
                <span className={this.props.rating>=1 ? "fa fa-star" : this.props.rating>=0.5 ? "fa fa-star-half-o" : "fa fa-star-o" }></span>
                <span className={this.props.rating>=2 ? "fa fa-star" : this.props.rating>=1.5 ? "fa fa-star-half-o" : "fa fa-star-o" }></span>
                <span className={this.props.rating>=3 ? "fa fa-star" : this.props.rating>=2.5 ? "fa fa-star-half-o" : "fa fa-star-o" }></span>
                <span className={this.props.rating>=4 ? "fa fa-star" : this.props.rating>=3.5 ? "fa fa-star-half-o" : "fa fa-star-o" }></span>
                <span className={this.props.rating>=5 ? "fa fa-star" : this.props.rating>=4.5 ? "fa fa-star-half-o" : "fa fa-star-o" }></span>
                <span>{this.props.numReviews} Reviews</span>  
            </div>
        )
    };
};




























// import React from "react";

// interface IProps{
//     rating:number;
//     numReviews:number;
// }

// export class Rating extends React.Component<IProps,{}>{
//     constructor(props:IProps){
//         super(props);
//     };
//     render(){
//         return(
//             <div className="rating">
//                 <span className={this.props.rating>=1 ?  "fa fa-star" : this.props.rating>=0.5? "fa fa-star-half-o" : "fa fa-star-o"}></span>
//                 <span className={this.props.rating>=2 ?  "fa fa-star" : this.props.rating>=1.5? "fa fa-star-half-o" : "fa fa-star-o"}></span>
//                 <span className={this.props.rating>=3 ?  "fa fa-star" : this.props.rating>=2.5? "fa fa-star-half-o" : "fa fa-star-o"}></span>
//                 <span className={this.props.rating>=4 ?  "fa fa-star" : this.props.rating>=3.5? "fa fa-star-half-o" : "fa fa-star-o"}></span>
//                 <span className={this.props.rating>=5 ?  "fa fa-star" : this.props.rating>=4.5? "fa fa-star-half-o" : "fa fa-star-o"}></span>
//                 <span>{this.props.numReviews} Reviews</span>
//             </div>
//         )
//     }
// };