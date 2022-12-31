//let & constatnt
const ela = 'my tompy';
let EE = 'my name';
EE = 'samsung galaxy A12';

//2.default parameter
function maxarray(array = []) {
    const max = Math.max(...array);//array spread
    return max;
}
const big = maxarray();
console.log(big);

//5. spread or three dots(...)


//4.template string
const myname = `'my name ela ${EE}.my pet name ${ela}';`
console.log(myname);

// 6.arrow function
//function sruare(x) {
    //return x * x;
//  same work in arrow function}

const square = x => x * x;
console.log(square(10));