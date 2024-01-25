//Task1 

// var userAge = prompt("Enter your age:");

// if (userAge >= 0 && userAge <= 12) {
//     alert("You are a child.");
// } else if (userAge > 12 && userAge <= 18) {
//     alert("You are a teenager.");
// } else if (userAge > 18 && userAge <= 60) {
//     alert("You are an adult.");
// } else if (userAge > 60) {
//     alert("You are a pensioner.");
// } else {
//     alert("Invalid age entered.");
// }


//Task2

// var num = prompt("Enter number from 0 to 9:");

// switch (parseInt(num)) {
//     case 0:
//         alert(")");
//         break;
//     case 1:
//         alert("!");
//         break;
//     case 2:
//         alert("@");
//         break;
//     case 3:
//         alert("#");
//         break;
//     case 4:
//         alert("$");
//         break;
//     case 5:
//         alert("%");
//         break;
//     case 6:
//         alert("^");
//         break;
//     case 7:
//         alert("&");
//         break;
//     case 8:
//         alert("*");
//         break;
//     case 9:
//         alert("(");
//         break;
//     default:
//         alert("Invalid number entered. Please enter a number from 0 to 9.");
// }


//Task3

// var userInput = prompt("Enter a three-digit number:");
// var digits = userInput.split("");

// if (digits.length === 3 && digits[0] === digits[1] && digits[1] === digits[2]) {
//     alert("The number has all the same digits");
// } else {
//     alert("The number does not have al the same digits or is not a three-digit number.");
// }

//Task4

// var year = prompt("Enter a year:");

// year = parseInt(year);

// if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//     alert(year + " is a leap year");
// } else {
//     alert(year + " is not a leap year");
// }
 
//Task5

// var userInput = prompt("Enter a five-digit number:");
// var num = parseInt(userInput);

// if (num >= 10000 && num <= 99999) {
//     var originalNumber = num;
//     var reversedNumber = 0;

//     while (num > 0) {
//         reversedNumber = reversedNumber * 10 + (num % 10);
//         num = Math.floor(num / 10);
//     }

//     if (originalNumber === reversedNumber) {
//         alert("The number is a palindrome.");
//     } else {
//         alert("the number is not a palindrome");
//     }
// } else {
//     alert("Invalid input, enter a five-digit number");
// }

//Task6

// var usdAmount = prompt("Enter amount in USD:");
// var selectedCurrency = prompt("Choose currency to convert (EUR, UAH, or GBP):").toUpperCase();

// var exchangeRates = {
//     "EUR": 0.92,
//     "UAH": 37.64,
//     "GBP": 0.79
// };

// if (exchangeRates[selectedCurrency] !== undefined) {
//     var convertedAmount = usdAmount * exchangeRates[selectedCurrency];
//     alert("Converted amount: " + convertedAmount + " " + selectedCurrency);
// } else {
//     alert("Invalid currency");
// }

//Task7

// var purchaseAmount = prompt("Enter the purchase amount:");

// if (purchaseAmount >= 200 && purchaseAmount < 300) {
//     purchaseAmount *= 0.97; 
// } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
//     purchaseAmount *= 0.95; 
// } else if (purchaseAmount >= 500) {
//     purchaseAmount *= 0.93; 
// }

// alert("Final amount after discount: " + purchaseAmount);

//Task8

// var circleRadius = prompt("Enter the radius of the circle:");
// var perimeterOfSquare = prompt("Enter the perimeter of the square:");

// var circleDiameter = 2 * circleRadius;
// var sideOfSquare = perimeterOfSquare / 4;

// if (circleDiameter <= sideOfSquare) {
//     alert("The circle can fit into the square");
// } else { 
//     alert("The circle cannot fit into the square.");
// }

//Task9 

// var score = 0;

// var question1 = prompt("What is the capital of France?\nA) Paris\nB) Berlin\nC) Madrid");
// if (question1.toUpperCase() === "A") score += 2;

// var question2 = prompt("What is the largest mammal?\nA) Elephant\nB) Blue Whale\nC) Giraffe");
// if (question2.toUpperCase() === "B") score += 2;

// var question3 = prompt("Which planet is known as the Red Planet?\nA) Mars\nB) Jupiter\nC) Venus");
// if (question3.toUpperCase() === "A") score += 2;

// alert("Your score: " + score);

//Task10

var day = prompt("Enter the day:");
var month = prompt("Enter the month:");
var year = prompt("Enter the year:");

var currentDate = new Date(year, month - 1, day);
currentDate.setDate(currentDate.getDate() + 1);

var nextDay = currentDate.getDate();
var nextMonth = currentDate.getMonth() + 1;
var nextYear = currentDate.getFullYear();

alert("The next date is: " + nextDay + "/" + nextMonth + "/" + nextYear);
