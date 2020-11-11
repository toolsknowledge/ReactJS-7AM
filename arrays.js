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


/*
    //filter()
    //used to create the new array based on condition
    let arr = [100,200,300,400,500];
    console.log(
        arr.filter((element,index)=>{
            return element>=300;
        })
    );    //[ 300, 400, 500 ]


    console.log(
        [10,20,30,40,50].map((element,index)=>{
            return element*100;
        }).filter((element,index)=>{
            return element<=2000;
        })
    );   //[ 1000, 2000 ]
*/


/*
    //reduce()
    //it is used to find the sum of array elements
    console.log(
        [1,2,3,4,5].reduce((firstElement,nextElement)=>{
            return firstElement+nextElement;
        })
    );    //15

    console.log( [10,20,30,40,50].map((element,index)=>{
        return element/10;
    }).filter((element,index)=>{
        return element>=4;
    }).reduce((firstValue,nextValue)=>{
        return firstValue+nextValue;
    }) );     //9
*/


/*
    //reduceRight()
    //it is used to find the summation from right to left
    console.log(
        ["ReactJS","to","welcome"].reduceRight((firstElement,nextElement)=>{
            return firstElement+" "+nextElement;
        })
    );    //welcome to ReactJS
*/


/*
    let arr = [10,20,30,40,50,60,70,80,90,100];

    //[60,70,80,90,100,10,20,30,40,50]
    //[6,7,8,9,10,1,2,3,4,5]
    //[40,15]
    //[15,40]

    let callback = (element,index)=>{
        return element/10;
    };

    let addCallBack = (firstElement,nextElement)=>{
        return firstElement+nextElement;
    };

    console.log(
        [arr.slice(5).map(callback).reduce(addCallBack), 
        arr.slice(0,5).map(callback).reduce(addCallBack)].reverse()
    );
*/

/*
    //copyWithin()
    let arr1 = [10,20,30,40,50,60,70,80,90,100];
    arr1.copyWithin(2);
    console.log(arr1);   //[10,20,10,20,30,40,50,60,70,80]


    let arr2 = [10,20,30,40,50,60,70,80,90,100];
    arr2.copyWithin(5);
    console.log(arr2);  //[10,20,30,40,50,10,20,30,40,50]


    let arr3 = [10,20,30,40,50,60,70,80,90,100];
    arr3.copyWithin(0);
    console.log(arr3);   //[10,20,30,40,50,60,70,80,90,100]


    let arr4 = [10,20,30,40,50,60,70,80,90,100];
    arr4.copyWithin(2,5);
    console.log(arr4);    //[10,20,60,70,80,90,100,80,90,100]


    let arr5 = [10,20,30,40,50,60,70,80,90,100];
    arr5.copyWithin(3,8);
    console.log(arr5);   //[10,20,30,90,100,60,70,80,90,100]


    let arr6 = [10,20,30,40,50,60,70,80,90,100];
    arr6.copyWithin(2,-4);
    console.log(arr6);    //[10,20,70,80,90,100,70,80,90,100]

    let arr7 = [10,20,30,40,50,60,70,80,90,100];
    arr7.copyWithin(2,4,7);
    console.log(arr7);    //[10,20,50,60,70,60,70,80,90,100]
*/


/*
    //fill()
    //it is used to replace old values with new values
    let arr = [1,2,3,4,5];
    console.log( arr.fill(10) );        //[ 10, 10, 10, 10, 10 ]
    console.log( arr.fill(20,2) );      //[ 10, 10, 20, 20, 20 ]
    console.log( arr.fill(30,1,3) );    //[ 10, 30, 30, 20, 20 ]
*/
//findIndex()
//to know index of particular element

/*
    let arr = [10,20,30,40,50];
    console.log(
        arr.findIndex((element,index)=>{
            return element === 30;
        })
    );     //2
    console.log(
        arr.findIndex((element,index)=>{
            return element === 50;
        })
    );     //4

    arr.splice(arr.findIndex((element,index)=>{
        return element === 20;
    }),1);
    console.log(arr);    //[ 10, 30, 40, 50 ]

    arr.splice(arr.findIndex((element,index)=>{
        return element === 40;
    }),1);
    console.log(arr);    //[ 10, 30, 50 ]



let arr = [{"p_id":111,"p_name":"p_one","p_cost":10000},
            {"p_id":222,"p_name":"p_two","p_cost":20000},
            {"p_id":333,"p_name":"p_three","p_cost":30000},
            {"p_id":444,"p_name":"p_four","p_cost":40000},
            {"p_id":555,"p_name":"p_five","p_cost":50000}];

arr.splice(arr.findIndex((element,index)=>{
    return element.p_id === 333;
}),1);            
console.log(arr);
*/


/*
    //indexOf()
    //won't create indexes to repeated elements
    let arr = [10,20,10,30,10,20];
    arr.forEach((element,index)=>{
        console.log(arr.indexOf(element));
    });   //0 1 0 3 0 1

    let arr2 = [10,100,1000,10,1000,55,10,100,55,40,10,1000];
    arr2.forEach((element,index)=>{
        console.log( arr2.indexOf(element) );
    });  //0 1 0 1 2 0 2 5 0 1 5 9 0 2
*/


/*
    let arr = [10,20,30,10,20,30];
    console.log(
        arr.filter((element,index)=>{
            return arr.indexOf(element) === index;
        })
    );    //[ 10, 20, 30 ]


    let arr1 = [-1,10,-1,16,20,16,28];
    console.log(
        arr1.filter((element,index)=>{
            return arr1.indexOf(element) == index;
        })
    );   //[ -1, 10, 16, 20, 28 ]
*/


/*
    //flat()
    //it is used to convert the multi dimensional array to single dimensional array
    let arr = [1,[2],3,4];
    console.log( arr.flat(1) );    //[ 1, 2, 3, 4 ]

    let arr1 = [10,20,[[[[[[[[[30]]]]]]]]],40,[[[[50]]]]];
    console.log(
        arr1.flat(Infinity).reduce((firstValue,secondValue)=>{
            return firstValue + secondValue;
        })
    );
*/


/*
    //flatMap()
    let arr1 = [1,2,3];
    let arr2 = ["one","two","three"];

    //[ [1,"one"],[2,"two"],[3,"three"] ]
    console.log(
        arr1.map((element,index)=>{
        return [element,arr2[index]]; 
        }).flat(1)
    );   //[ 1, 'one', 2, 'two', 3, 'three' ]


    console.log(
        arr1.flatMap((element,index)=>{
        return [element,arr2[index]]; 
        })
    );   //[ 1, 'one', 2, 'two', 3, 'three' ]
*/

/*
    //sort()
    //it is used to sort the elements either ascending order or decending order
    let arr1 = [10,50,20,40,30];
    console.log(
        arr1.sort((num1,num2)=>{
            return num1-num2;
        })
    );     //[ 10, 20, 30, 40, 50 ]

    console.log(
        arr1.sort((num1,num2)=>{
            return num2-num1;
        })
    );    //[ 50, 40, 30, 20, 10 ]

    //num1-num2   (ascending order)
    //num2-num1   (decending order)


    console.log(
        [9,-1,2,6,2].sort((num1,num2)=>{
            return num1-num2;
        })[2]
    );  
    //[-1,2,2,6,9]

    console.log(
        [9,-1,2,6,2].sort((num1,num2)=>{
            return num2-num1;
        })[1]
    );  //6
*/


/*
//reverse()
//it is used to reverse the array elements
let arr1 = [10,20,30,40,50];
console.log(
    arr1.reverse()
);    //[ 50, 40, 30, 20, 10 ]


console.log(
    ["Angular","ReactJS","VueJS"].reverse()
);

console.log(
    Array.from("Hello").reverse().join("")
);

//['H','e','l','l','o']
//[ 'o', 'l', 'l', 'e', 'H' ]
//olleH


console.log(
    ["Angular","React","VueJS"].map((element,index)=>{
        return Array.from(element).reverse().join("")
    }).reverse()
);

//["ralugnA","tcaeR","SJeuV"]
//["SJeuV","tcaeR","ralugnA"]



*/


/*
    //delete
    let arr = [10,20,30,40,50];
    console.log( arr.length );
    delete arr[2];
    console.log(arr.length);   //5
    console.log(arr);          //[ 10, 20, <1 empty item>, 40, 50 ]
*/

/*
    //find()
    //to check particular element present in array or not
    let arr = [10,20,30,40,50];
    console.log( arr.find((element,index)=>{
        return element === 30;
    }) );   //30
    console.log(
        arr.find((element,index)=>{
            return element === 3;
        })
    );   //undefined
*/

/*
    //includes()
    //it is used to search particular element present in array
    //this function is boolean function
    let arr = [10,20,30,40,50];
    console.log(
        arr.includes(30)
    );   //true
    console.log(
        arr.includes(1)
    );   //false

    console.log(
        ["Angular","NodeJS","ReactJS"].includes("NodeJS")
    );   //true
*/

/*
    //some()
    //if atleast one element satisfies the condition, it will return true itherwise false
    console.log(
        [10,20,30,40,50].some((element,index)=>{
            return element<10;
        })
    );   //false
    console.log(
        [10,20,30,40,50].some((element,index)=>{
            return element<=10;
        })
    );  //true
*/

/*
    //every()
    //if all elements satisfies the condition then it will return true otherwise false
    let arr = [10,20,30,40,50];
    console.log( arr.every((element,index)=>{
        return element<60;
    }) );   //true
    console.log( arr.every((element,index)=>{
        return element<50;
    }) );   //false
*/
/*
    //repeat()
    //repeat() function used to repeat the string
    console.log("Hello \n".repeat(5));
    //console.log(["hello"].repeat(5));
*/

/*
    //trim()
    //used to remove the white spaces at begining and end of string

    //trimStart()
    //used to remove white spaces at begining of string


    //trimEnd()
    //used to remove the white spaces at end of string
    let str = " Hello ";
    console.log( str.length );    //7
    console.log( str.trim().length );   //5
    console.log( str.trimStart().length );  //6
    console.log( str.trimEnd().length );    //6
*/



/*
    //padStart()
    //padEnd()
    //fill the recomended places with some characters
    let str = "Hello";
    console.log( str.padStart(20,"*") );
    console.log( str.padEnd(20,"#") );
    console.log( str.padStart(10,"*").padEnd(15,"*") );
*/

/*
    //entries()
    //it is used to convert JSON Object to JSON Array
    let obj = {"key1":"hello_1", "key2":"hello_2", "key3":"hello_3"};
    console.log(Object.entries(obj).flat(1));   //[ 'key1', 'hello_1', 'key2', 'hello_2', 'key3', 'hello_3' ]

    //fromEntries()
    //it is used to convert array to object
    let arr = [["key1","Hello_1"]];
    console.log( Object.fromEntries(arr) );  //{ key1: 'Hello_1' }
*/

/*
    //concat()
    //it is used to concat the arrays
    let arr1 = ["Angular10"];
    let arr2 = ["NodeJS"];
    let arr3 = ["MongoDB"];
    console.log(
        arr1.concat(arr2,arr3)
    );   //[ 'Angular10', 'NodeJS', 'MongoDB' ]
    console.log(arr1,arr2,arr3);  //[ 'Angular10' ] [ 'NodeJS' ] [ 'MongoDB' ]
*/

/*
    let arr1 = [10,20];
    let arr2 = [30,40];
    let arr3 = [50,60];
    console.log([...arr1,...arr2,...arr3]);   //[ 10, 20, 30, 40, 50, 60 ]
    console.log(arr1,arr2,arr3);   //[ 10, 20 ] [ 30, 40 ] [ 50, 60 ]
*/


/*
    let str = "Hello";
    console.log( Array.from(str).reverse().toString().replace(/,/g,""));

    //[ 'H', 'e', 'l', 'l', 'o' ]
    //[ 'o', 'l', 'l', 'e', 'H' ]
    //o,l,l,e,H 
    //ol,l,e,H 
    //olleH   
*/

/*
    let str = "welcome to react js";
    console.log( str.split(" ") );   //[ 'welcome', 'to', 'react', 'js' ]

let str = "Hello.welcome,to,Node.JS";
console.log( str.replace(/,/g,".").split(".") );   //[ 'Hello', 'welcome', 'to', 'Node', 'JS' ]
*/

/*
    let str = "Welcome";
    console.log( str.substr(1,3) );    //elc
    console.log( str.substr(3,4) );    //come
*/


/*
    let str = "Welcome to ReactJS";
    console.log( str.substring(0,7) );    //Welcome
    console.log( str.substring(8,10) );   //to
    console.log( str.substring(11) );     //ReactJS  
*/

/*
    let arr = [10,20,10,20,10,30,40,10,20];
    console.log( arr.lastIndexOf(10) );   //7
    console.log( arr.lastIndexOf(20) );   //8
    console.log( arr.lastIndexOf(30) );   //5
    console.log( arr.lastIndexOf(1) );    //-1
*/
































































































































