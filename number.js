// var orangePrice = 30 ;
// var chocolate = 0.9 ;

// console. log( orangePrice + chocolate);

// // var applePrice = parseInt('56.99');
// var applePrice = parseFloat('56.99');
// console.log(applePrice);

// console.log( orangePrice +   applePrice);

// var first =0.2;
// var second = 0.3;
// var total = first + second;
// console.log(total.toFixed(1));

// const num = -45 /3;
// console.log(num);
// var eggPrice =33;
// var milkPrice = 332 ;
// var total = milkPrice% eggPrice;
// console.log(eggPrice/milkPrice);
// console.log(total);
// console.log(11 % 3);


// var price =44;
// price = price+33;
// console.log(price);
// var newPrice =price + 443;
// var discountPrice = newPrice -32;
// console.log(discountPrice);
// var date = 33;
// // date += 10;
// date -= 44;
// date = date * 3;
// console.log(date);


//Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
// Input:The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.
// Output: Print the result.

var applePrice =400;
var orangePrice = 300;
var cost = applePrice + orangePrice;
console.log(cost);

var customerMoney = 1000;
var returnMoney = customerMoney - cost;

console.log (returnMoney);

//Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
// Input:The first line of the input is the marks of the five subjects mentioned above, respectively.
// Output:Print the result in 2 decimal places.
// Sample Input:75.25, 65, 80, 35.45, 99.50
// Sample Output:71.04

var math =parseInt(75.25);
var biology = 65;
var chemistry = 85;
var physics = parseInt(35.45);
var bangla = parseInt(99.40);
var total = math + biology + chemistry + physics + bangla;
console.log(total);
var average =total / 5;
console.log(average.toFixed(2));

//You task is to divide the given number by 5 and show the remainder as the output.
// Input:The first line of the input contains the number.
// Output:Print the remainder.
// Sample Input:119
// Sample Output:4

var input = 119;
var input2 = 5;
var divide= input%input2;

console.log(divide);



var person = 'abdullah' ;
console.log(person);
var somthing = null;
console .log(somthing);


var text ='how ' + 'dare you?';
var welComeMsg = 'Hello ' + 'text';
console.log(typeof welComeMsg)


var myName  ='abdullah';
myName ='noman';
console.log( myName);


var a = !10||20;
console.log(a);