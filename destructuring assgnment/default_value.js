const profile = {
    firstName: 'jhon',
    lastName: 'doe',
    age: 18
}

// const { firstName, age, isMale } = profile
// const { firstName, age, isMale = false } = profile
const { firstName: localfirstName, lastName: localLastName, age: localAge } = profile

console.log(localfirstName);
console.log(localfirstName)
console.log(localAge)