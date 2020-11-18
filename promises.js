/*
    - promises establishes the communication between producer and consumer.

    - producer "generates" the promises

    - consumer "consumes" the promises

    - promises also called as special "javascript objects"

    - we will create promises by using "Promise" class constructor.

    - we will consume promises by using then()

    - promises have following states.

            1) success   (resolve)

            2) failure   (reject)

            3) pending
*/


/*
    let promise1 = new Promise((resolve,reject)=>{
        resolve("Hello");
    });

    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/


/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_1");
        },0);
    });

    let promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_2");
        },5000);
    });

    let promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_3");
        },10000);
    });

    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });

    promise2.then((posRes)=>{console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });

    promise3.then((posRes)=>{console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/


/*
    let promise = new Promise((resolve,reject)=>{
        reject("Failure");
        resolve("Success");
    });
    promise.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/


/*
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Success");
        },5000);
        setTimeout(()=>{
            reject("Failure");
        },4000);
    });
    promise.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/


// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_1");
//     },0);
// });

// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_2");
//     },5000);
// });

// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_3");
//     },10000);
// });

// Promise.all([promise1,
//              promise2,
//              promise3]).then((posRes)=>{
//         console.log(posRes[0],posRes[1],posRes[2]);
//              },(errRes)=>{
//     console.log(errRes);
// });


/*
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello_1");
    },0);
});

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Failure");
    },5000);
});

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello_3");
    },10000);
});
*/


/*
Promise.all([promise1,
             promise2,
             promise3]).then((posRes)=>{
        console.log(posRes[0],posRes[1],posRes[2]);
             },(errRes)=>{
    console.log(errRes);
});
*/

/*
    Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/











































