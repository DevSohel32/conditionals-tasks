let burgerPrice = 50;
let cakePrice;

if(burgerPrice > 500){
    cakePrice = 0;
}
else{
    cakePrice = 30;
}

let total = burgerPrice + cakePrice;
console.log('Burger price', burgerPrice);
console.log('Cake price', cakePrice);
console.log('total', total);