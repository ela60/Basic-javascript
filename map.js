// Map works = potita element k neba then kaj kore tar result ta akta array vitor dea reaturn korbe

const numbers = [4, 6, 8, 10];
const output = [];
for (const number of numbers) {
    const result = number * 2;
    output.push(result);
}
//console.log(output);

//1.loop through each element
//2.for each element call the provide the function
//3.result for each element will be stored in an array
const double = number => number * 2;
const number = [];
const out = number.map(double);
console.log(out);