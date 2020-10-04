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

//3
//Given an array of integers,
// write a function that returns an array of 2 integers.
// The first integer will be the count of the positive integers,
// and the second integer will be the sum of the negative integers.
// If the input is empty or null, return an empty array.

function arrayOfIntegers(arr){
    let positives=0;
    let negatives=0;
    let result = [];
    if (arr==null || arr==[]){
        console.log("#3: []");
    }else{
        for (let i=0;i<arr.length;i++){
            if(arr[i]>0){
                positives++;
            }else if(arr[i]<0){
                negatives+=arr[i];
            }
            result[0]=positives;
            result[1]=negatives;
        }
        console.log("#3: " + result);
    }
}
arrayOfIntegers([1, -6, 5, 4, 3, -7, -10, 201, -3]);
arrayOfIntegers(null);