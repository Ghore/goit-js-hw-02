"use strict";
let input;
const numbers = [];
let total = 0;
let caro = true;

while(caro){
    const input = prompt('Пожалуйста введите число');
    if(input === null){
        caro = false;
    }else{
        numbers.push(input);
    }
}
console.log(numbers);

for(const number of numbers){
    total+=Number(number);
}
console.log(total);