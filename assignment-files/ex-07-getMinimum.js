/**
 * getMinimum()
 * ------------------------------------------------------
 * Write a function called `getMinimum()` that takes 4 numbers as arguments
 * and returns the one with the lowest value.
 *
 **/

// ++ YOUR Code below (write the 'makeGreeting' function): ++
function getMinimum(num1,num2,num3,num4) {
    
    if(num1<=num2 && num1<=num3 && num1<=num4){
        return num1;
    } else if (num2<=num1 && num2<=num3 && num2<=num4){
        return num2;
    } else if (num3<=num2 && num3<=num1 && num3<=num4){
        return num3;
    } else{
        return num4;
    }
}

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
// function receives 4 number inputs
//    and returns the minimum value
/*--------------------------------------------------*/
console.log("==== ex-07-getMinimum : TEST 1 ====");


console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(1,2,4,0) !== 1 )

console.assert( getMinimum(4,8,4,20) === 4 )

console.assert( getMinimum(300,-2,-99,0) === -99 )

console.assert( getMinimum(-5,-11,4,-5) === -11 )
