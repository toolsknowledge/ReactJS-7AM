/*
    //declare the variable
    //initilize the variable
    //access the variable
    "use strict"
    data = 100;
    console.log(data);     //ReferenceError: data is not defined
*/

/*
    "use strict"
    data = 100;
    delete data;     //SyntaxError: Delete of an unqualified identifier in strict mode.
*/


/*
    data = 100;
    function myFun(){
        "use strict"
        console.log(data);
        data1 = 200;
    };
    myFun()
*/



let regEx = /^[0-9]+$/;
console.log( "ABC12345".match(regEx) );

let regEx1 = /^[-+]?[0-9]+$/; 
console.log( "-12345".match(regEx1) );

















