// Coding challenge #1: Print numbers from 1 to 10
console.log("==============Challenge 1=================");
// Coding challenge #1: Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
	console.log(i);
}
console.log("==============Challenge 2=================");
// Coding challenge #2: Print the odd numbers less than 100

for (let i = 1; i <= 100; i += 2) {
	console.log(i);

}
console.log("==============Challenge 3=================");
// Coding challenge #3: Print the multiplication table with 7

for (let i = 1; i <= 10; i++) {

	let sevenTimesTable = `7 * ${i} =  ${i * 7}`;
	console.log(sevenTimesTable);
}

console.log("==============Challenge 4=================");

// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

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

console.log("==============Challenge 5=================");
// Coding challenge #5: Calculate the sum of numbers from 1 to 10

let sum = 0;

for (let i = 1; i <= 10; i++) {
	sum += i;
}
console.log(sum);

console.log("==============Challenge 6=================");
// I do not understand what is asked of me with:
//Coding challenge #6: Calculate 10! :/ 

function factorial(num) {
	if (num === 0) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
};

console.log(factorial(10));

console.log("==============Challenge 7=================");
// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
let sum1 = 0
for (let i = 11; i <= 30; i += 2) {
	sum1 += i;
}
console.log(sum1);

console.log("==============Challenge 8=================");
// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit

let celcius = 0

function celciusToFahrenheit(celcius) {
	return (celcius * 9 / 5) + 32;
}