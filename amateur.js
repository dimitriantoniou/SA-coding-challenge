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
    console.log(sum);
}
sequenceSum(1,4,1);
