/*
    let obj = {
        "num1" : 10
    };

    function my_fun(){
        console.log( this.num1 + 10 );
    };

    my_fun.call(obj);    //20
*/




let obj = {
    num1 : 10,
    num2 : 20
};

function my_fun(arg1,arg2,arg3){
    console.log( this.num1 + this.num2 + arg1 + arg2 + arg3 );
};

my_fun.call(obj,30,40,50);    //150
my_fun.call(obj,-10,-10,-10); //0

let arr = [100,200,300];
my_fun.apply(obj,arr);    //630

let arr1 = [-10,-10,-10,-10];
my_fun.apply(obj,arr1);   //0

let final_fun = my_fun.bind(obj);
final_fun(10,10,10);   //60

my_fun.bind(obj)(-10,-10,-10);   //0










