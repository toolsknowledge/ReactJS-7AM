export function withdrawAsync(val){
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(withdrawSync(val));
        },5000);
    };
};
export function withdrawSync(val){
    return {type:"WITHDRAW",value:val};
};
export function depositAsync(val){
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(depositSync(val));
        },5000);
    };
};
export function depositSync(val){
    return {type:"DEPOSIT",value:val};
};

