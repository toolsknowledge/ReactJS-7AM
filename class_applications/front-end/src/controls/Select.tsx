import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';

interface IProps{
    name:string;
    label:string;
    value:string;
    error:null;
    onChange:any;
    options:any[];
};

interface IState{}

export default class Select extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <FormControl variant="outlined"
                        {...(this.props.error && {error:true})}>
                        <InputLabel>{this.props.label}</InputLabel>
                        <MuiSelect
                            label={this.props.label}
                            name={this.props.name}
                            value={this.props.value}
                            onChange={this.props.onChange}>
                            <MenuItem value="">None</MenuItem>
                            {
                                this.props.options.map(
                                    item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                                )
                            }
                        </MuiSelect>
                        {this.props.error && <FormHelperText>{this.props.error}</FormHelperText>}
            </FormControl>
        </React.Fragment>
        )
    }
};



