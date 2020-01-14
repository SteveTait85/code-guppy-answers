// // Coding challenge #1: Print numbers from 1 to 10
// console.log("==============Challenge 1=================");
// // Coding challenge #1: Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
	console.log(i);
}
// console.log("==============Challenge 2=================");
// // Coding challenge #2: Print the odd numbers less than 100

for (let i = 1; i <= 100; i += 2) {
	console.log(i);
}
// console.log("==============Challenge 3=================");
// // Coding challenge #3: Print the multiplication table with 7

for (let i = 1; i <= 10; i++) {
	let sevenTimesTable = `7 * ${i} =  ${i * 7}`;
	console.log(sevenTimesTable);
}

// console.log("==============Challenge 4=================");

// // Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

function timesTableCreator(num) {
	for (let i = 1; i <= 10; i++) {
		let timesTable = `${num} * ${i} = ${num * i}`;
		console.log(timesTable);
	}
}

for (let j = 1; j <= 10; j++) {
	console.log(`==== ${j} Times Table ====`);

	timesTableCreator(j);
}

// console.log("==============Challenge 5=================");
// // Coding challenge #5: Calculate the sum of numbers from 1 to 10

let sum = 0;

for (let i = 1; i <= 10; i++) {
	sum += i;
}
console.log(sum);

// console.log("==============Challenge 6=================");
// // I do not understand what is asked of me with:
// //Coding challenge #6: Calculate 10! :/

function factorial(num) {
	if (num === 0) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

console.log(factorial(10));

// console.log("==============Challenge 7=================");
// // Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
let sum1 = 0;
for (let i = 11; i <= 30; i += 2) {
	sum1 += i;
}
console.log(sum1);

// // Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit

function celciusToFahrenheit(celcius = 0) {
	return celcius * 9 / 5 + 32;
}

// // Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius

function fahrenheitToCelcius(fahrenheit = 0) {
	return (fahrenheit - 32) * 5 / 9;
}

// // Coding challenge #10: Calculate the sum of numbers in an array of numbers

function sumOfArray(arr = 0) {
	let sum = 0;
	for (val of arr) {
		sum += val;
	}
	return sum;
}

// // Coding challenge #11: Calculate the average of the numbers in an array of numbers

function averageOfArray(arr) {
	let sum = 0;

	for (val of arr) {
		sum += val;
	}
	return sum / arr.length;
}
// // Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

function positivesOfArray(arr) {
	let positives = [];

	for (val of arr) {
		if (val >= 0) {
			positives.push(val);
		}
	}
	return positives;
}

// // Coding challenge #13: Find the maximum number in an array of numbers

function findMaxNumber(arr = [0]) {
	let maxNum = arr[0];
	for (val of arr) {
		if (arr[val] > maxNum) {
			maxNum = arr[val];
		}
	}
	return maxNum;
}

// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion
function fibonacci(sequences) {
	let result = [0, 1];
	let antepenultimateNumber = 0;
	let penultimateNumber = 1;

	for (let i = 2; i < sequences; i++) {
		const currentNumber = antepenultimateNumber + penultimateNumber
		antepenultimateNumber = penultimateNumber;
		penultimateNumber = currentNumber;
		result.push(currentNumber);
	}
	return result;
}

// console.log(fibonacci(10));

// Coding challenge 14B: Print the first n Fibonacci numbers with recursion
//
function fibLoopRecursion(num) {
	for (let i = 1; i < num; i++) {
		console.log('error 404 solution not found');
	}
}

// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion

function fibRecursive(num) {
	if (num < 2) {
		return num;
	}
	return fibRecursive(num - 1) + fibRecursive(num - 2);
}

// Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime

function isPrime(num) {
	for (var i = 2; i < num; i++)
		if (num % i === 0) {
			return false;
		}
	return num > 1;
}

// Coding challenge #17: Calculate the sum of digits of a positive integer number

function sumOfDigits(number) {
	let sum = 0;
	for (num of number.toString()) {
		sum += parseInt(num);
	}
	return sum;
}

// Coding challenge #18: Print the first 100 prime numbers

function printPrimes(num) {

	for (let i = 1; i < num; i++) {
		if (isPrime(i)) {
			console.log(i);
		}
	}
}

// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

function getPrimesArray(nPrimes, startAt) {
	let primesArray = [];
	let startindex = startAt;

	while (primesArray.length < nPrimes) {
		if (isPrime(startindex)) {
			primesArray.push(startindex);
		}
		startindex++
	}
	return primesArray;
}

// Coding challenge #20: Rotate an array to the left 1 position

function rotateLeft(arr) {
	const rotatedArray = [...arr];
	const fromTheFront = rotatedArray.shift();
	rotatedArray.push(fromTheFront);
	return rotatedArray;
}

// Coding challenge #21: Rotate an array to the right 1 position


function rotateRight(arr) {
	const rotatedArray = [...arr];
	const fromTheBack = rotatedArray.pop();
	rotatedArray.unshift(fromTheBack);
	return rotatedArray;
}

// Coding challenge #22: Reverse an array

function reverseArray(arr) {
	arr.reverse();
	return arr;
}

// Coding challenge #23: Reverse a string

function reverseString(str) {

	splitString = str.split("");
	reversedArray = splitString.reverse();
	joinedArray = reversedArray.join("");

	return joinedArray;
}

console.log(reverseString("Hi My Name Is Steve Tait And I Like To Write In Title Case"));
