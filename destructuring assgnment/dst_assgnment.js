const profile = {
    firstName: 'jhon',
    lastName: 'doe',
    age: 18
}

let firstName = 'Dimas';
let age = 20;

//menginisialisasi nilai baru melalui object destruction

({ firstName, age } = profile)

console.log(firstName);
console.log(age)