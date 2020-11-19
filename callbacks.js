//callback
//passing one function to another function as an argument called as callback

/*
    function fun_one(arg1){
        console.log( arg1() );
    };
    fun_one( function fun_two(){
        return "Hello";
    } );    //Hello
*/

/*
    function fun_one(arg1,arg2,arg3){
        console.log( arg1(), arg2(),  arg3() );
    };
    fun_one( function f1(){
        return "ReactJS";
    }, function f2(){
        return "NodeJS";
    }, function f3(){
        return "MongoDB";
    } );    //ReactJS NodeJS MongoDB
*/


/*
    function networkCall(callback1,callback2){
        console.log( callback1() , callback2() );
    };
    networkCall(()=>{
        return "success";
    },()=>{
        return "failure";
    });
*/

/*
    function add(num,callback){
        return callback(num+5,false);
    };

    add(5,(addRes,error)=>{
        if(!error){
            console.log(addRes);
        }
    });    //10
*/

/*
function add(num,callback){
    return callback(num+5,false);
};
function sub(num,callback){
    return callback(num-3,false);
};
function mul(num,callback){
    return callback(num*2,false);
};
function div(num,callback){
    return callback( (num/2)-2, false );
};
add(5,(addRes,error)=>{
    if(!error){
       sub(addRes,(subRes,error)=>{
         if(!error){
            mul(subRes,(mulRes,error)=>{
                if(!error){
                    div(mulRes,(divRes,error)=>{
                        if(!error){
                            console.log(divRes);
                        }
                    });
                }
            })
         }
       });
    }
});   //callback hell
      //creating nested callbacks called as callback hell
      //callbacks are really confusing
      //never write the application, with callback hell
      //alternative of callback hell is promises
*/

function add(num){
    return new Promise((resolve,reject)=>{
        resolve(num+5);
    });
};

function sub(num){
    return new Promise((resolve,reject)=>{
        resolve(num-3);
    });
};

(async ()=>{
    let addRes = await add(5);
    let subRes = await sub(addRes);
    console.log(subRes);
})();






















































