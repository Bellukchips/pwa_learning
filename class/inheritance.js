//class vehicle
class Vehicle {
    constructor(lisensePlate, manufacture) {
        this.lisensePlate = lisensePlate;
        this.manufacture = manufacture;
        this.engineActive = false;
    }
    startEngines() {
        console.log(`Mesin kendaraan ${this.lisensePlate} di nyalakan`);
    }
    info() {
        console.log(`Nomor Kendaraan : ${this.lisensePlate}`);
        console.log(`Manufacture : ${this.manufacture} `);
        console.log(`Mesin : ${this.engineActive ? "Active" : "Inactive"}`);
        console.log(`Jumlah roda: ${this.wheels}`);
    }
    droveOff() {
        console.log(`Kendaraan ${this.lisensePlate} melaju`);
    }
    openDoor() {
        console.log(`Membuka Pintu`);
    }
    parking() {
        console.log(`Kendaraan ${this.lisensePlate} Parkir`);
    }
}
class VehicleFactory {
    static repair(vehicles) {
        vehicles.forEach(vehicle => {
            console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`)
        })
    }
}
class Car extends Vehicle {
    constructor(lisensePlate, manufacture, wheels) {
        super(lisensePlate, manufacture);
        this.wheels = wheels;
    }
    droveOff() {
        console.log(`Kendaraan ${this.lisensePlate} Melaju`);
    }
    openDoor() {
        console.log(`Membuka pintu`);
    }
}
class Motorcycle extends Vehicle {
    constructor(lisensePlate, manufacture, wheels) {
        super(lisensePlate, manufacture);
        this.wheels = wheels;
    }
    droveOff() {
        console.log(`Kendaraan ${this.lisensePlate} Melaju`);
    }
    driveStop() {
        console.log(`Kendaraan ${this.lisensePlate} Berhenti`)
    }
}
const johnCar = new Car("H121S", "Honda", 4);
const tomMotor = new Motorcycle("GF121J", "Yamaha", 2);
const dimasCar = new Car("TA1408K", "Tesla", 4);
// johnCar.startEngines();
// johnCar.info();
// tomMotor.startEngines();
// tomMotor.info();
// dimasCar.startEngines();
// dimasCar.info();
VehicleFactory.repair([johnCar, tomMotor, dimasCar]);