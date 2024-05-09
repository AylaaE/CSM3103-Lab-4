// Function to find sum of digits of a number
function FindSumDigits() {
    var number = document.getElementById("number").value;
    var sum = sumofDigits(parseInt(number));
    document.getElementById("sum").innerHTML = "Answer: " + sum;
}

// Function to compute x raise to the power y using recursion
function FindPower() {
    var x = document.getElementById("num2X").value;
    var y = document.getElementById("num2Y").value;
    var result = power(parseInt(x), parseInt(y));
    document.getElementById("answer2").innerHTML = "Answer: " + result;
}

// Recursive function to find sum of digits of a number
function sumofDigits(number) {
    if (number < 10) {
        return number;
    } else {
        return (number % 10) + sumofDigits(Math.floor(number / 10));
    }
}

// Recursive function to compute x raise to the power y
function power(x, y) {
    // Base case: if exponent y is 0, return 1
    if (y === 0) {
        return 1;
    }
    // Recursive case: compute x raised to power (y-1) and multiply with x
    else {
        return x * power(x, y - 1);
    }
}
