import React from "react";
export default class Second extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.key1}</h1>
                <h1>{this.props.key2}</h1>
                <table>
                    <tr>
                        <th>SNO</th>
                        <th>P_ID</th>
                        <th>P_NAME</th>
                        <th>P_COST</th>
                    </tr>
                    {this.props.key3.map((element,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.p_id}</td>
                            <td>{element.p_name}</td>
                            <td>{element.p_cost}</td>
                        </tr>
                    ))}
                </table>

                <h1>{this.props.children}</h1>
            </React.Fragment>
        )
    }
};