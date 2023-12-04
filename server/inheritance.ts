// Inheritance
// යම් class එකක තියෙන Attributes & Behaviors 
// තවත් class එකකට direct access ලබාදීම.

class Animal {
    walk() {
        console.log("walking");
    }
}

class Dog extends Animal {

}

// implementation
let dog = new Dog();
dog.walk();