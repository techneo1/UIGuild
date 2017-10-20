// string
let myName1 = "Srikanth";           // Implicit
let myName2: string = "Srikanth"    // Explicit
// myName1 = 123

// number
let myAge1 = 30;                    // Implicit
let myAge2: number = 30;            // Explicit
// myAge1 = true

// boolean
let hasHobbies1 = true;             // Implicit
let hasHobbies2: boolean = true;    // Explicit
// hasHobbies1 = 1;

// any
let car;                            // Implicit
car = "BMW";
car = { brand: "BMW"}

let myCar: any;                     // Explicit

// array
let myHobbies1 = ["Cooking", "Reading"];
let myHobbies2: string[] = ["Cooking", "Reading"];

// myHobbies1 = [100]

// tuples
let myAddress1: [String, number] = ["Marathahalli", 560037]
// let myAddress2: [String, number] = [560037, "Marathahalli"]

// enum
enum Colors {
    Gray,
    Green = 100,
    Orange = 2
}

let mycolor1: Colors = Colors.Gray;
let mycolor2: number = Colors.Gray;

// let mycolor3: string = Colors.Gray;

// functions
function getMyName(): string { 
    return myName1;
}

// void 
function sayHello(): void { 
    console.log("Hello");
}

// Argument types
function multiply(val1: number, val2: number): number { 
    return val1 * val2;
}

multiply(2, 10);
// multiply(2, "Max"); 


// function types
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;   Error!
myMultiply = multiply;

// Objects
let userData1 = {
    name: "Srikanth",
    age: 30
}

// Error: Due to type mismatch
// userData1 = {
//     name: 30,
//     age: "Srikanth"
// }

// Error: Due to property mismatch
// userData1 = {
//     a: "Srikanth",
//     b: 30
// }

let userData2: { name: string, age: number };
userData2 = {
    name: "Srikanth",
    age: 30
}

// Complex object
let complexObj1: { data: number[], output: (all: boolean) => number[]};

complexObj1 = {
    data: [10, 20],
    output: function (all: boolean): number[] { 
        all = true;
        return this.data;
    }
}

// Type alias

type Complex = { data: number[], output: (all: boolean) => number[] };
let complexObj2: Complex = {
    data: [10, 20],
    output: function (all: boolean): number[] { 
        all = true;
        return this.data;
    }
} 

// Union types
let myRealRealAge: number | string = 30;
myRealRealAge = "30";
// myRealRealAge = true;

// Checking types 
let finalValue = 30;
if (typeof finalValue == "number") { 
    // do something
}

// never (Added in Typescript 2.0)
function neverReturns(): never {
    throw new Error("Error!"); 
} 

// Nullable types (added in Typescript 2.0)
let canBeNull1: number = 12;
// canBeNull1 = null;      // if strictNullChecks: false
// canBeNull1 = null;   // Error, if strictNullChecks: true or strict: true

// if strictNullChecks: true
let canBeNull2: number | null = 2;
canBeNull2 = null;

let canThisBeAny = null;    // => let canThisBeNull: null = null
// canThisBeAny = 12;      // Because is treated as type now, as strictNullChecks = true

// With strictNullChecks and noU
// function controleMe(isTrue: boolean, somethingElse: boolean){
//     let result: number;
//     if(isTrue){
//         result = 2;
//     }
//     return result; // throws Error
// }
