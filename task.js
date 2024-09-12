/*Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
    */

var burger= 600;
if (burger>500){
    console.log("You can buy a burger, and free coke");
}
else{
    console.log("You can't buy a burger, coke 30tk");
}
//BMI Calculator
/*Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a 
health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/
let weight=500;
let height = 2.3;
let BMI= weight/(height*height);

// if (BMI=weight/(height*height))
// {
//     console.log("You are underweight");
// }
 if (BMI < 18.5  ){
    console.log("You are underweight");
}
else if(BMI >= 18.5 && BMI<=24.99){
    console.log("You are normal");
}
else if ( BMI >=25 && BMI<=29.99)
{
    console.log("You are overweight");
}
else{
    console.log("You are obese");
}

/***

Grade Calculator

Create a simple JavaScript program that takes a 
student's score as input and returns their 
corresponding grade based on the following
 grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let score =25;

if (score >= 90 && score <= 100) {
    console.log("A");
}
else if(score >= 80 && score <= 89){
    console.log("B");
}
else if(score >= 70 && score <= 79){
    console.log("C");
}
else if(score >= 60 && score <= 79){
    console.log("D");
}
 else{
    console.log("F");
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 
    60 then tell your friend, good luck next time. 

    if your friend get less than 60 but more than or equal 
    to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
let myScore = 85; 
let friendScore = 100; 

if (myScore > 80) {
    console.log("Inside your friend's score");
    if (friendScore > 80) {
        console.log("Go for a lunch");
    } else if (friendScore >= 60 && friendScore <= 80) {
        console.log("Good luck next time");
    } else if (friendScore >= 40 && friendScore < 60) {
        console.log("Keep your friend's message unseen");
    } else if (friendScore < 40) {
        console.log("Block your friend");
    }
} else {
    console.log("Go home, sleep, and act sad");
}

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, 
then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
let result = 23;
let num1 = 190;
let num2 = 20;

result = (num1 > num2) ? num1 * 2 : num1 + num2;
console.log(result);

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 65;
let isStudent = false;
let isChild = false;
let ticketFare = 800;
if (age < 10) {
    ticketFare = 0;
    } else if (age >= 60) {
        ticketFare = ticketFare * 0.85;
        } else if (isStudent) {
            ticketFare = ticketFare * 0.5;
        }
        console.log("Ticket Fare: " + ticketFare + " tk");