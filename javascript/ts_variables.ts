//string
//collection of characters called as string
//"" , '' and ``(backtick)
//``(backtick) operator introduced in ES6
//``(backtick) operator used to define the paragraphs
//``(backtick) operator also called as template literal
var sub:string = `ReactJS`;
var wish:string = `Welcome to ${sub} with TypeScript`;
console.log(wish);    //Welcome to ReactJS with TypeScript


var tbl_name:string = `employees`;
var u_name:string=`scott`;
var u_pwd:string = `tiger`;
var sql_query:string = `select * from ${tbl_name} where uname='${u_name}' and upwd='${u_pwd}'`;
console.log(sql_query);


//number
//decimal , double , hexadecimal , octal and binary
//hexadecimal number should prefix with "0x"
//octal number will prefix with "0o"
//binary number will prefix with "0b"
var decimal:number = 100;
var double:number = 100.12345;
var hexadecimal:number = 0x123ABC;
var octal:number = 0o123;
var binary:number = 0b1010;
console.log( decimal, double, hexadecimal, octal, binary);



//boolean
//true or false
var $flag:boolean = true;
console.log($flag);     //true



var demo:number | string = 1000;
console.log(demo);     //1000
demo = "Active";
console.log(demo);     //Active


//any
//any called as global datatype
//any have the capability to hold any values
var demo1:any = 200;
var demo2:any = `Hello`;
var demo3:any = true;
var demo4:any = {"wish":"welcome to react native"};
console.log( demo1, demo2, demo3, demo4 );


//array
var arr1:number[] = [10,20,30,40,50];
var arr2:Array<number> = [100,200,300,400,500];
arr1.forEach((element,index)=>{
    console.log( element, arr2[index] );
});

var sub1:string[] = [`Angular`,`ReactJS`,`VueJS`];
var sub2:Array<string> = [`MongoDB`,`Cassandra`,`CouchDB`];
sub1.forEach((element,index)=>{
    console.log( element, sub2[index] );
});















































