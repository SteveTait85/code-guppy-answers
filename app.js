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
		let timesTable = `${num} * ${i} = ${ num * i}`;
		console.log(timesTable);
	}
};

for (let j = 1; j <= 10; j++) {
	console.log(`==== ${j} Times Table ====`)

	timesTableCreator(j);
};

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
};

console.log(factorial(10));

// console.log("==============Challenge 7=================");
// // Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
let sum1 = 0
for (let i = 11; i <= 30; i += 2) {
	sum1 += i;
}
console.log(sum1);

// // Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit


function celciusToFahrenheit(celcius) {
	return (celcius * 9 / 5) + 32;
}

// // Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius


function fahrenheitToCelcius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}


// // Coding challenge #10: Calculate the sum of numbers in an array of numbers

function sumOfArray(arr) {
	let sum = 0
	for (i of arr) {
		sum += i;
	};
	return sum
}

// // Coding challenge #11: Calculate the average of the numbers in an array of numbers


function averageOfArray(arr) {
	let sum = 0

	for (i of arr) {
		sum += i;
	};
	return sum / arr.length;
}
// // Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers


function positivesOfArray(arr) {
	let positives = []

	for (i of arr) {
		if (i >= 0) {
			positives.push(i);
		}
	}
	return positives;
}

// // Coding challenge #13: Find the maximum number in an array of numbers

function findMaxNumber(arr) {
	let maxNum = arr[0];
	for (i of arr) {
		if (arr[i] > maxNum) {
			maxNum = arr[i];
		}
	}
	return maxNum;
}

// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion
function fibonacci(positions) {
	let result = [0, 1];
	let fib1 = 0;
	let fib2 = 1;

	for (let i = 2; i < positions; i++) {
		let fibNum = fib1 + fib2;
		fib1 = fib2;
		fib2 = fibNum;
		result.push(fibNum);
	}
	return result;
}

console.log(fibonacci(10));

// Coding challenge 14B: Print the first n Fibonacci numbers with recursion
// function fibLoopRecurison(num) {

// 	let result = [];
// 	for (let i = 0; i < num; i++) {
// 		result.push(fibRecursive(num[i]));
// 	}
// 	return result;
// }

// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion

function fibRecursive(num) {
	if (num < 2) {
		return num
	}
	return fibRecursive(num - 1) + fibRecursive(num - 2);
}