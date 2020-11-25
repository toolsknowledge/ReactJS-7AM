/*
    let fun_one = ()=>{
        console.log("fun_one");
        return ()=>{
            console.log("fun_two");
            return ()=>{
                console.log("fun_three");
                return ()=>{
                    console.log("fun_four");
                    return ()=>{
                        console.log("fun_five");
                    }
                };
            };
        };
    };
    fun_one()()()()()
*/

let fun_one = ()=>{
    console.log("fun_one");
    return fun_two;
};
let fun_two = ()=>{
    console.log("fun_two");
    return fun_three;
};

let fun_three = ()=>{
    console.log("fun_three");
    return fun_four;
};
let fun_four = ()=>{
    console.log("fun_four");
    return fun_five;
};
let fun_five = ()=>{
    console.log("fun_five");
};

fun_two()







