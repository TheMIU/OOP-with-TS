// Abstraction
// Hide implementation from the user & showing only functionality

interface Phone {
    powerOn(): void;
}

class Samsung implements Phone{
    powerOn(): void {
        console.log("Samsung Galaxy M01");
        console.log("Phone is starting");
    }
}

// user
let phone: Phone = new Samsung();
phone.powerOn();