import { Table, TableContainer, TableRow, Typography ,TableHead, TableCell, TableBody } from "@material-ui/core";
import React, { useState } from "react";
export function State():any{
    const [wish,setWish] = useState("Hello");
    const [myNumber,setMyNumber] = useState(100);
    const [flag,setFlag] = useState(true);
    const arr:number[] = [10,20,30,40,50];
    const [numArr,setNumArr] = useState(arr);
    const employees:any[] = [
        {"e_id":111,"e_name":"e_one","e_sal":10000},
        {"e_id":222,"e_name":"e_two","e_sal":20000},
        {"e_id":333,"e_name":"e_three","e_sal":30000},
        {"e_id":444,"e_name":"e_four","e_sal":40000},
        {"e_id":555,"e_name":"e_five","e_sal":50000}
    ];
    const [allEmployees,setAllEmployees] = useState(employees);
    const obj:any = {
        var_one:"Hello_1",
        var_two:"Hello_2",
        var_three:"Hello_3"
    };
    const [myObj,setMyObj] = useState(obj);
    return(
        <React.Fragment>
                <Typography variant="h2" color="error" align="center">
                        {wish}    
                </Typography> 
                <Typography variant="h2" color="error" align="center">
                        {myNumber}    
                </Typography>
                <Typography variant="h2" color="error" align="center">
                        {JSON.stringify(flag)}    
                </Typography>  
                 {numArr.map((element:any,index:any):any=>(
                       <Typography key={index} variant="h2" color="secondary">
                            {element}
                       </Typography>                    
                 ))}
                 <TableContainer>
                     <Table>
                         <TableHead>
                            <TableRow>
                                 <TableCell>SNO</TableCell>
                                 <TableCell>E_ID</TableCell>
                                 <TableCell>E_NAME</TableCell>
                                 <TableCell>E_SAL</TableCell>
                            </TableRow>
                         </TableHead>
                         <TableBody>
                            {allEmployees.map((element:any,index:any)=>(
                                <TableRow key={index}>
                                    <TableCell>{index+1}</TableCell>
                                    <TableCell>{element.e_id}</TableCell>
                                    <TableCell>{element.e_name}</TableCell>
                                    <TableCell>{element.e_sal}</TableCell>
                                </TableRow>
                            ))}
                         </TableBody>
                     </Table>
                 </TableContainer>
                 <Typography variant="h2" color="secondary">
                     {myObj.var_one}....{myObj.var_two}....{myObj.var_three}
                 </Typography>
        </React.Fragment>
    )
};