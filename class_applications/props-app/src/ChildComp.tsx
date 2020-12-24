import React from "react";
import { Typography,Paper, TableContainer, Table, makeStyles, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";

const useStyles = makeStyles({
    "my_table":{
        width:"80%",
        margin:"auto"
    }
});

export function ChildComp(props:any):any{

    const classes = useStyles();

    const {strData,
           numData,
           boolData,
           numArr,
           productsArray,
           obj} = props;
    return(
        <React.Fragment>

            <Typography variant="h3"color="primary">
                {obj.sub_one}....{obj.sub_two}...{obj.sub_three}
            </Typography>


            <Paper elevation={0} square className={classes.my_table}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>SNO</TableCell>
                                <TableCell>P_ID</TableCell>
                                <TableCell>P_NAME</TableCell>
                                <TableCell>P_COST</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            
                                
                                    {productsArray.map((element:any,index:any)=>(
                                        <TableRow key={index}>
                                            <TableCell>{index+1}</TableCell>
                                            <TableCell>{element.p_id}</TableCell>
                                            <TableCell>{element.p_name}</TableCell>
                                            <TableCell>{element.p_cost}</TableCell>
                                        </TableRow>
                                    ))}
                                
                            
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>









            {/* <Typography variant="h2" 
                        color="secondary"
                        align="center">
                {strData}
            </Typography>
            <Typography variant="h2"
                        color="primary"
                        align="left">
                {numData}
            </Typography>
            <Typography variant="h2"
                        color="primary"
                        align="right">
                {JSON.stringify(boolData)}
            </Typography>

            {numArr.map((element:any,index:any):any=>(
                <Typography variant="h2" color="error" key={index}>
                    {element}
                </Typography>
            ))} */}




        </React.Fragment>
    )
};