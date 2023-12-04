// Encapsulation
// Data single unit එකකට wrap කිරීම හා 
// Data වලට validation level protection එකක් ලබාදීම.

class Student {
    private _name!: string;
    private _age!: number;

    public getName(): string {
        return this._name;
    }

    public setName(name: string): void {
        this._name = name;
    }

    public getAge(): number {
        return this._age;
    }

    public setAge(age: number): void {
        // validation level protection
        (age > 0 && age < 100) ?
            this._age = age
            : console.log("wrong age");
    }
}

// implementation
let student = new Student();

student.setName("John");
student.setAge(20);
console.log("Name : " + student.getName());
console.log("Age  : " + student.getAge());