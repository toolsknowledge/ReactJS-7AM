import React from "react";
import { ChildComp } from "./ChildComp";
export function ParentComp():any{
     const strData:string = "Hello";
     const numData:number = 100;
     const boolData:boolean = true;
     const numArr:number[] = [10,20,30,40,50];
     const productsArray:any[] = [{"p_id":111,"p_name":"p_one","p_cost":10000},
                                  {"p_id":222,"p_name":"p_two","p_cost":20000},
                                  {"p_id":333,"p_name":"p_three","p_cost":30000},
                                  {"p_id":444,"p_name":"p_four","p_cost":40000},
                                  {"p_id":555,"p_name":"p_five","p_cost":50000}];
     
    const obj:any = {sub_one:"ReactJS",sub_two:"NodeJS",sub_three:"MongoDB"};
    return(
        <React.Fragment>
            <ChildComp strData={strData}
                       numData={numData}
                       boolData={boolData}
                       numArr={numArr}
                       productsArray={productsArray}
                       obj={obj}/>
        </React.Fragment>
    )
};