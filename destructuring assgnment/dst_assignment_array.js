const favorites = ['seafood', 'salad', 'nugget', 'soup'];
let myfood = 'ice cream';
let herfood = 'noodles';

[myfood, herfood] = favorites;

console.log(myfood);
console.log(herfood)



// spreading operator dan rest parameter
//spreading
console.log(...favorites)
    //menggabungkan 2 array
const other = ['cake', 'pie', 'donut'];

const all = [...favorites, ...other]

console.log(all)