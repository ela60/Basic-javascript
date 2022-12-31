//Filter ()Array potiti upadaner moddo jeta jeta shorto fullfil -
//korbe taderk notun akta arrayte rekhe seitak return kore

const numbers = [4, 6, 1, 22, 33, 44, 77, 88, 99];
const bignumbers = numbers.filter(number => number > 15);
const smallnumbers = numbers.filter(number => number < 15);
console.log(bignumbers);
console.log(smallnumbers);

const products = [
    
    { name: 'white-cream', color: 'white-yellow', peice: '550', expiredate: '12/31/22' },
    { name: 'oil', color: 'green-blue', peice: '650', expiredate: '12/31/22' },
    { name: 'shampoo', color: 'white', peice: '750', expiredate: '12/31/22' }
];
 //Filter give an array   
const expensive = products.filter(product => product.price > 600);
const white = products.filter(product => product.color =='white');

console.log(expensive);
console.log(white);
//Find give an result
const yellow = products.find(product => product.color =='white');