//validation - array
//fail  - null

//phone number validation
//console.log( "111 111 1111".match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) );
//console.log( "222.222.2222".match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) );
//console.log( "333-333-3333".match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) );
//console.log( "444".match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) );


//credit card validation
//console.log( "341111111111111".match(/^(?:3[47][0-9]{13})$/) );
//console.log( "111111111111111".match(/^(?:3[47][0-9]{13})$/) );


//console.log( "4111111111111".match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/) );
//console.log( "4222222222222333".match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/) );
//console.log( "42222222222223335".match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/) );


console.log( "samba.pendela@gmail.com".match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ) );
console.log( "spendela@in.autorobinc.com".match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) );

