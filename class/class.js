class Car {

    // Sama seperti function constructor
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this._color = color;
        this.enginesActive = false;
    }

    // implementasi get and set
    get color() {
        return `warna mobil ${this._color}`;
    }
    set color(value) {
            console.log(`warna mobil di ubah dari ${this._color} menjadi ${this.value}`);
            this._color = value;
        }
        // Sama seperti Car.prototype.startEngine
    startEngines() {
        console.log('Mobil dinyalakan...');
        this.enginesActive = true;
    }

    // Sama seperti car.prototype.info
    info() {
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Color:  ${this.color}`);
        console.log(`Engines: ${this.enginesActive ? "Active" : "Inactive"}`);
    }

}

const johnCar = new Car("Honda", "Red");
johnCar.startEngines();
johnCar.info();
//get and set
console.log(johnCar.color);
johnCar.color = 'white';
console.log(johnCar.color)
    //property assesor

console.log(`Warna mobil : ${johnCar.color}`);
johnCar.color = 'White';
console.log(`Berganti jadi Warna mobil : ${johnCar.color}`)