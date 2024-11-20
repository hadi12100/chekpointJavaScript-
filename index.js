//string manupilation function
//1reverse string
function reverseString(str) {
    return str.split('').reverse().join('');
}
//2count charachters
function countCharacters(str) {
    return str.length;
}
//3Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}
//array functions
//find maximum and minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}
//sum of array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
//filter array
function filterArray(arr, condition) {
    return arr.filter(condition);
}
//mathimatical functions
//1factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
//2prime number check
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
//3fibonacci sequence
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
}