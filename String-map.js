const togethers = ['mouri', 'shila', 'nela', 'srijon',
    'mehedi', 'ammu', 'abbu'];
//
//arrow function atumatically return valu (=>)

const tlengths = togethers.map(together => together.length);
console.log(tlengths);

const products = [
    
    { name: 'white-cream', color: 'white-yellow', peice: '550', expiredate: '12/31/22' },
    
    
    { name: 'oil', color: 'green-blue', peice: '650', expiredate: '12/31/22' },
    
    
        { name: 'shampoo', color: 'white', peice: '750', expiredate: '12/31/22' }
    
    
]
const productname = products.map(product => product.name);
const productprice = products.map(product => product.price);
const productcolor = products.map(product => product.color);

products.map(product => console.log(products));//map return the value

products.forEach(product => console.log(products));//foreach return korbe na kichu

//console.log(productname);