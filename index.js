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
//
function reverseString(str) {
    return str.split('').reverse().join('');
}
function countCharacters(str) {
    return str.length;
}
function capitalizeWords(sentence) {
    return sentence
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' ');
}
///
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(8));


function isPrime(num) {
    if (num <= 1) {
        return false; 
    }
    if (num === 2) {
        return true; 
    }
    if (num % 2 === 0) {
        return false; 
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}
console.log(isPrime(12));
console.log(isPrime(17));


function genererFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const suite = [0, 1];
    for (let i = 2; i < n; i++) {
        suite.push(suite[i - 1] + suite[i - 2]);
    }
    return suite;
}
console.log(genererFibonacci(10)); 
console.log(genererFibonacci(14));