// Polymorphism
// Single interface, Many forms
// 1. Compile time polymorphism
// 2. Runtime polymorphism

// Compile time polymorphism
class Numbers {
    num(x?: number, y?: number) {
        if (x !== undefined && y !== undefined) {
            console.log("Two params method invoked");
        } else if (x !== undefined) {
            console.log("One param method invoked");
        } else {
            console.log("No param method invoked");
        }
    }
}

// implementation
const numbers = new Numbers();
numbers.num(); // No param method invoked
numbers.num(5); // One param method invoked
numbers.num(5, 10); // Two params method invoked

////////////////////////

// Run time polymorphism
class Vehicle {
    drive() {
        console.log("Driving a Vehicle");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Driving a Car");
    }
}

// implementation
let vehicle: Vehicle = new Car();
vehicle.drive(); // Driving a Car