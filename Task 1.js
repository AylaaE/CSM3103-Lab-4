// Function to find the square of a given number
function square(sqnumber) {
    return sqnumber * sqnumber;
}

// Function to find sum of cubes of two numbers
function sumOfCubes(num1, num2) {
    return Math.pow(num1, 3) + Math.pow(num2, 3);
}

// Function to reverse a number
function reverseNumber(number) {
    return parseInt(number.toString().split('').reverse().join(''));
}

// Function to print all numbers between 1 and 100 which is divisible by a given number z
function printDivisibleNumbers(z) {
    for (let i = 1; i <= 100; i++) {
        if (i % z === 0) {
            console.log(i);
        }
    }
}

// Function to calculate square of a number
function squareNumber() {
    var number = document.getElementById("number").value;
    var result = square(number);
    document.getElementById("answer1").innerHTML = "Answer: " + result;
}

// Function to calculate sum of cubes of two numbers
function SumCubes() {
    var num1 = document.getElementById("num2X").value;
    var num2 = document.getElementById("num2Y").value;
    var result = sumOfCubes(num1, num2);
    document.getElementById("answer2").innerHTML = "Answer: " + result;
}

// Function to reverse a number
function ReversedNumber() {
    var number = document.getElementById("num3").value;
    var result = reverseNumber(number);
    document.getElementById("answer3").innerHTML = "Answer: " + result;
}

// Function to print all numbers between 1 and 100 which is divisible by given number X
function DivisibleNumbers() {
    var num = document.getElementById("num4").value;
    var result = printDivisibleNumbers(num);
    document.getElementById("answer4").innerHTML = "Answer: " + result;
}
