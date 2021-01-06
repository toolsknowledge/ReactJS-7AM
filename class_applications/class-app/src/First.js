import React from "react";
import Second from "./Second";
export default class First extends React.Component{
    
    constructor(){
        super();
        this.state = {
            key1 : "Hello_1",
            key2 : 100,
            key3 : [{"p_id":111,"p_name":"p_one","p_cost":10000},{"p_id":222,"p_name":"p_two","p_cost":20000},
                    {"p_id":333,"p_name":"p_three","p_cost":30000},
                    {"p_id":444,"p_name":"p_four","p_cost":40000},
                    {"p_id":555,"p_name":"p_five","p_cost":50000}]
        }
    }
    
    
    render(){
        return(
            <React.Fragment>
                <Second key1={this.state.key1}
                        key2={this.state.key2}
                        key3={this.state.key3}> HELLO </Second>
            </React.Fragment>
        )
    };
};