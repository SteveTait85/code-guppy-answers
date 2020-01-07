// Coding challenge #1: Print numbers from 1 to 10
console.log("==============Challenge 1=================");

for (let i = 1; i <= 10; i++) {
	console.log(i);
}
console.log("==============Challenge 2=================");

for (let i = 1; i <= 100; i += 2) {
	console.log(i);

}
console.log("==============Challenge 3=================");

for (let i = 1; i <= 10; i++) {

	let sevenTimesTable = `7 * ${i} =  ${i * 7}`;
	console.log(sevenTimesTable);
}

console.log("==============Challenge 4=================");

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