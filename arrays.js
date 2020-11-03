// 9030001847
// https://t.me/joinchat/LIyexRqMMM_tP9brgCbwGw




//array
//collection of indexed elements called as array
//we can access array elements by using indexes
//we will represent arrays by using []

/*
    //push()
    //it is used to add the element at "end" of array
    //pop()
    //it is used to remove element at "end" of array
    //unshift()
    //it is used to add the element at "begining" of array
    //shift()
    //it is used to remove the element from "begining" of array
    let arr = [20,30,40];
    console.log(arr);        //[ 20, 30, 40 ]

    arr.push(50);
    console.log(arr);        //[ 20, 30, 40, 50 ]

    arr.unshift(10);
    console.log(arr);        //[ 10, 20, 30, 40, 50 ]

    arr.pop()
    console.log(arr);       //[ 10, 20, 30, 40 ]

    arr.shift();
    console.log(arr);       //[ 20, 30, 40 ]
*/

/*
    //splice()
    //remove or add elements at any index
    let arr = [10,20,30,40,50,60,70,80,90,100];

    arr.splice(5,2);
    console.log(arr);       //[10,20,30,40,50,80,90,100]

    arr.splice(6,1);
    console.log(arr);       //[10,20,30,40,50,80,100]

    arr.splice(1,1);
    console.log(arr);       //[10,30,40,50,80,100]


    arr.splice(5,1);
    console.log(arr);       //[10,30,40,50,80]

    arr.splice(1,0,20);
    console.log(arr);       //[ 10, 20, 30, 40, 50, 80 ]

    arr.splice(5,2,60,70,80,90,100);
    console.log(arr);           //[10,20,30,40,50,60,70,80,90,100]


    arr.splice(-2,1);
    console.log(arr);       //[10,20,30,40,50,60,70,80,100]

    arr.splice(-7,2);
    console.log(arr);       //[10,20,50,60,70,80,100]

    arr.splice(-1,0,90);
    console.log(arr);       //[10,20,50,60,70,80,90,100]

    arr.splice(-6,1,30,40,50);
    console.log(arr);       //[10,20,30,40,50,60,70,80,90,100]
*/

/*
    //slice()
    let arr = [10,20,30,40,50,60,70,80,90,100];          //immutable
    console.log( arr.slice(4,7) );    //[ 50, 60, 70 ]
    console.log( arr.slice(6,9) );     //[ 70, 80, 90 ]
    console.log( arr.slice(1) );       //[20,30,40,50,60,70,80,90,100]
*/

//map()
//map() function introduced in ES6
//map() function used to manipulate the "array elements"
//map() function return type is "Array"

/*
    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*10;
        })
    );     //[ 10, 20, 30, 40, 50 ]
*/

/*
    console.log(
        [100,200,300,400,500].map((element,index)=>{
            return `$ ${element}`;
        })
    );   //[ '$ 100', '$ 200', '$ 300', '$ 400', '$ 500' ]
*/
/*
    let arr1 = [10,20,30,40,50];
    let arr2 = [60,70,80,90,100];

    console.log(
        arr1.map((element,index)=>{
            return [element,arr2[index]];
        })
    );   //[ [ 10, 60 ], [ 20, 70 ], [ 30, 80 ], [ 40, 90 ], [ 50, 100 ] ]
*/













































































































