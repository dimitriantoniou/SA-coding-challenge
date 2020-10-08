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
arrayOfIntegers([1, -6, 5, 4, 3, -7, -10, 201, -3]);//should return [5,-26]
arrayOfIntegers(null); //should return []

//4
// Write a function that translates an input string
// by replacing each character with a number representing the amount of times that character appears in the string.
// Then separate each individual number with a different character.
// Examples:
// Input: "hello world", "-" |
// Output: "1-1-3-3-2-1-1-2-1-3-1"
// Input: "challenge", "/" |
// Output: "1/1/1/2/2/2/1/1/2"



// 5
// Given a string of names like this: "Travis:Meyer;Gene:Carangal;Tom:Young;Jeff:Meyer",
// write a function that makes the entire string uppercase
// and sorts it in alphabetical order by last name.
// If the last names are the same sort them by the first name,
// put the last name in front of the first name,
// remove the colons and semicolons,
// put the names in parentheses
// and separate the names with commas.
//
// Example:
// The end string should look like this: "(CARANGAL, GENE)(MEYER, JEFF)(MEYER, TRAVIS)(YOUNG, TOM)"

function sortNames(str){
    const names = str.toUpperCase().split(";");//convert to uppercase and split at the semicolons into individuals
    for (let i=0;i<names.length;i++){//split individuals into first and last
        names[i]=names[i].split(":");
    }
    for (let i=0;i<names.length;i++){//alphabetize by last name
        names[i].reverse();
    }
    for (let i=0;i<names.length;i++){//join first and last name with a comma
        names[i]=names[i].join(', ');
    }
    names.sort();//sort by last name
    const result = names.map(name => '(' + name + ')')//add parentheses
    const final = result.join('');   //remove commas between names
    console.log("#5: "+final);


    /*
    let upperCase = str.toUpperCase();//makes entire string uppercase
    let splitString = upperCase.split(";"); //turns list into an array of individual strings 'first:last'
    let names = [];
    for (let i=0;i<splitString.length;i++){ //split apart at the colon
        names.push(splitString[i].split(":"));
    }
    for(let i=0;i<names.length;i++){//put the last name first
        let reverseNames = names[i].reverse();
    }
    let joinedNames = [];
    for (let i=0;i<names.length;i++){//join the last name and first name
        joinedNames.push(names[i].join(', '));
    }
    const result = names.map(name => '(' + name + ')');
    //let sorted = joinedNames.sort();//sort the list of names alphabetically by last name
    //let sortedString=sorted.toString();

    //console.log(upperCase);
    //console.log(splitString);
    //console.log(names);
    //console.log(names[0])
    //console.log(reverseNames);
    //console.log(sorted);
    //console.log(sortedString);
    */
}
sortNames("Travis:Meyer;Gene:Carangal;Tom:Young;Jeff:Meyer")


/*
// 6
// Write a function to calculate a person’s age based on the date entered in the format MM/DD/YYYY.
//
// Example:
// Input: 11/04/1982
// Output: 34

function calculateAge(dob) {
    let dobString=dob.toString();
    let dobSplit=dobString.split("/");//split date formatting
    let month = dobSplit[0];//get the month
    let day =dobSplit[1];// get the day
    let year = dobSplit[2];//get the year
    let newDob=new Date(year, month, day);
    let today = new Date();//get today's date

    let age = today-newDob;
console.log(dobSplit);
console.log(month);
console.log(day);
console.log(year);
console.log(newDob);
console.log(age);
}
calculateAge("11/04/1982");
*/

// 7
// Write a function to convert a string into an array of words.
//
// Example:
// Input: "Trick or Treat"
// Output: [‘Trick’, ‘or’, ‘Treat’]
function stringToArray(str){
let array = [];
array.push(str.split(" "));
console.log("#7: " + array);
}
stringToArray("Trick or Treat");


// 8
// Write a function to count the number of occurrences of a substring in a given string.
//
// Example:
// Input: "The pumpkin rolled down the hill and under someone’s car.", "the"
// Output: 2

function countSubstring(str,substr){
    let count = 0;
    /*
    if (str.includes(substr)){
        count++
    }
    */
    let regex = new RegExp(substr, 'gi' );
    let found = str.match(regex) || [];
    count = found.length;

    console.log("#8: " +count);
}
countSubstring("The pumpkin rolled down the hill and under someone's car.","the");
//countSubstring("The","the");

// 9 Write a function to remove these special characters from a string:
// ~,!,$,&,%, ,#,@,-,_,^,? (yes, "space" is a character in that list)
//
// Examples:
// Input: "Happy ~!&$%#@- Halloween" |
// Output: "HappyHalloween"
// Input: "I’ll bet living in a nudist-colony takes all the fun out of Halloween!!" |
// Output: "IllbetlivinginanudistcolonytakesallthefunoutofHalloween"

function removeChars(str){

    let result = str.replace(/[~!$&%#@_^?' '-]/g, '');
    console.log ("#9: " + result);
}
removeChars("Happy ~!$%&#@_?-Halloween");

// 10
// Write a function called "multiply" that takes two integers and returns the product.
// You are NOT allowed to use the * operator or any imported multiplication function. We will check your code.
//
// Example:
// Input: multiply(5, 6) |
// Output: 30
// Input: multiply(-1, 15) |
// Output: -15
// Input: multiply(-2, -7) |
// Output: 14
function multiply(a,b){
    let product = 0;
    for (let i=1;i<=b;i++){
        product += a;
    }
    console.log("#10: "+ product);
}
multiply(5,6);

// 11
// Write a function that takes a string
// and returns true if all of the characters are the same case, false otherwise.
//
// Examples:
// Input: "hello world" |
// Output: true
// Input: "HELLO WORLD" |
// Output: true
// Input: "HeLLo wORld" |
// Output: false

function sameCase(str) {
    if (str === str.toLowerCase() || str === str.toUpperCase()) {
        console.log("#11: " + true);
    }else{
        console.log("#11: " + false);
    }
}
sameCase("hello world");
sameCase("Hello World");
//originally had console.log(sameCase(str)); which was returning undefined


// 12
// Write a function that takes an array of integers
// and returns an array of integers where
// each number is the sum of itself and all of the previous numbers in the array.
//
// Example:
// Input: [1, 1, 1] |
// Output: [1, 2, 3]
// Input: [4, 2, 1, 3, 5] |
// Output: [4, 6, 7, 10, 15]

function sumOfSelves(arr){
//for each array element, sum itself plus the preceeding elements
//add that new sum to a new array
    let result=arr;
    for (let i=arr.length-1;i<arr.length;i--){
        result[i]=(arr[i)
    }

    console.log("#12: "+result);
}
sumOfSelves([1,1,1]);

// 13 An Isogram is a word that has no repeating letters, consecutive or not.
// Write a function that takes a string and returns true if it’s an isogram and false if it isn’t.
//
// Examples:
// Input: "fish" |
// Output: true
// Input: "food" |
// Output: false
// Input: "color" |
// Output: false


// 14
// Write a function that takes a phone number with letters in it and converts it to one with only numbers.
// All input phone numbers will follow this pattern: "###-###-####"
// (Hint: Search for "phone keypad")
//
// Examples:
// Input: 210-367-CODE |
// Output: 210-367-2633
// Input: TRY-THE-FOOD |
// Output: 879-843-3663

// 15
// Write a function that returns all possible partitions of an array from left to right.
// With an n amount of elements in the input the returned array should have n-1 subarrays.
// An empty array should return an empty array.
//
// Examples:
// Input: [1, 5, 3, 2] |
// Output: [[[1], [5, 3, 2]], [[1, 5], [3, 2]], [[1, 5, 3], [2]]]
// Input: [a, b, c] |
// Output: [[[a], [b, c]], [[a, b], [c]]]
