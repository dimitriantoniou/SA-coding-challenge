//1
//Write a function that returns the SUM of a sequence of numbers.
// This sequence is determined by three variables: start, finish, and step.
// The sequence begins at start, ends at finish,
// and goes up by step until it reaches finish
// or a number that when increased by step would go past finish.

function sequenceSum(start,finish,step){
    let sum=0;
    for (let i=start;i<=finish;i+=step){
        sum += i;
    }
    console.log("#1: " + sum);
}
sequenceSum(1,4,1); //should return 10

//2
//Given a string of any length with any characters in it,
// write a function to determine whether or not the string contains the whole word "english".
// The order of characters/spelling is important;
// a string "agkjnenglishsad" would return true while "asdneglihsth" would return false.
// Upper and lower case does not matter.
// Return values should be booleans (true/false).

function containsEnglish(str){
    str.toLowerCase();
    console.log("#2: " + str.includes("english"));
}
containsEnglish("agkjnenglishsad"); //should return true
containsEnglish("asdneglihsth"); //should return false

