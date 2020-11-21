//let keyword
//let keyword used to define the variables
//let keyword introduced in ES6

/*
    for(let i=0;i<5;i++){

    };
    console.log(i);    //let :ReferenceError: i is not defined    //var:5
    //var keyword breaks the loops functionality
    //let keyword obeys the loops functionality
*/


/*
    let data = 100;
    let data = 200;
    console.log(data);     //let:SyntaxError: Identifier 'data' has already been declared     //var:200
    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables
*/

/*
    let data = 100;

    {
    let data = 200; 
    }

    console.log(data);      //let:100     //var:200
    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/



/*
    console.log(i);
    let i = 100;       //Error     //undefined   //variable hoisting    //ReferenceError: Cannot access 'i' before initialization

    //getting undefined while accessing variables before its "declaration and initilization" called as variable hoisting

    //variables hoisting raised because of var keyword

    //we can overcome variable hoisting by using let keyword
*/


/******************************************************************* *
        var                                                 let    

    var keyword introduced                  let keyword introduced
    in ES1                                  in ES6

    variable hoisting raised by             we can overcome variable
    var keyword                             hoisting by using let keyword

    duplicate variables allowed             duplicate variables not allowed
    by var keyword                          by let keyword

    scope rule break by var keyword         let keyword obeys the scope rule

    var members are by default global       let members by default block level memmbers
    members
/*********************************************************************/


//const keyword
//const keyword introduced in ES6
//const keyword used to define the variables
//const keyword won't allow re-initilization

/*
    const data = 100;
    data = 200;     // Assignment to constant variable.
*/

/*
const arr = ["Angular","ReactJS","NodeJS"];
//arr = [];    //Assignment to constant variable
arr[0] = "Angular11";
arr.push("VueJS");
console.log(arr);    //[ 'Angular11', 'ReactJS', 'NodeJS', 'VueJS' ]
arr = ["Angular12","Deno","ReactJS"];   //Assignment to constant variable.
*/


const obj = {"wish":"welcome"};
//obj = {};     //Assignment to constant variable.
//obj = {"wish":"welcome to node js"};   // Assignment to constant variable
obj.wish = "Hello";
console.log(obj);   //{ wish: 'Hello' }





































