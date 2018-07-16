/**
 * isVowel()
 * ------------------------------------------------------
 * Write a function called isVowel() that returns true/false for
 * whether a character is a vowel or not.
 *
 **/


// ++ YOUR Code below (write the 'makeGreeting' function): ++

function isVowel(word) {
    word= word.toLowerCase();
    if (word === 'a' || word === 'e' || word === 'i'
    || word === 'o' || word === 'u') {
        return true;
    }else{
        return false;
    }
}

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
// function accepts string input
//    and returns boolean true if it is a vowel
/*--------------------------------------------------*/
console.log("==== ex-08-isVowel : TEST 1 ====");
console.assert(isVowel('a') === true);
console.assert(isVowel('e') === true);
console.assert(isVowel('i') === true);
console.assert(isVowel('o') === true);
console.assert(isVowel('u') === true);
console.assert(isVowel('y') === false);
 //(of course, 'y' is a vowel!!)

/*-------------------TEST-2-------------------------*/
// function receives string input
//    and returns boolean false if it is NOT a vowel
/*--------------------------------------------------*/
console.log("==== ex-08-isVowel : TEST 2 ====");

console.assert(isVowel('x') === false);
console.assert(isVowel('n') === false);

/*-------------------TEST-3-------------------------*/
// function will return true if passed
//   an uppercase vowel
/*--------------------------------------------------*/
console.log("==== ex-08-isVowel : TEST 3 ====");
console.assert(isVowel('A') === true);
console.assert(isVowel('E') === true);
console.assert(isVowel('U') === true);
