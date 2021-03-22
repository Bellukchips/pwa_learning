//satu parameter
const sayhello = name => console.log(`${name}`);
sayhello('lukman')
    //dua parameter
const buah = (name, flavor) => console.log(`${name},${flavor}`);
buah('jeruk', 'kecut')

// tanpa parameter
const hello = () => console.log('Halooo');
hello()


// default parameter

const say = (name = 'lukman', greet = 'Hello') => console.log(`${greet} ${name}`);

say('Dimas', 'Hai')
say()


///block body function

const nyapa = language => {
    if (language.toUpperCase() === 'INDONESIA') {
        return 'selamat pagi';
    } else {
        return 'good morning';
    }
}

console.log(nyapa('INDONESIA'))

// menggunakan this keyword

function People(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

People.prototype.introMyself = function() {
    setTimeout(() => {
        console.log(`Nama saya ${this.name}, umur saya ${this.age}`)
        console.log(`hobby saya ${this.hobby}`)
    }, 300)
}

const data = new People('lukman', 19, ['coding', 'game']);
data.introMyself();