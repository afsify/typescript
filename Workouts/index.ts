//! Infer Types (Implicit Types)
// It refers to the compiler's ability to automatically deduce the types
let person = "afsify";
let salary = 50_000;

//! Defining Types (Explicit Types)
// It allow developers to explicitly declare the type
let isActive: boolean = true;
let skills: string[] = ["JS", "MongoDB", "ExpressJS", "ReactJS", "NodeJS"];
let count: number[] = [1, 2, 3, 4, 5];
let userDetail: { name: string; age: number } = {
  name: "afsify",
  age: 24,
};

//! Interface
// is a powerful way to define the structure of an object, a class, or a function.
// Interfaces allow you to declare what properties, methods, and types an object
// or class should have, serving as a contract that ensures consistency in your code.
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  getName: () => void;
}

const user: User = {
  id: 1,
  name: "afisfy",
  email: "afsify@gmail.com",
  isActive: true,
  getName() {
    console.log(`Hi I am ${name}`);
  },
};

//! Type
// is a keyword used to create type aliases, which allow you to define a new name for
// an existing type or a combination of types. It is a versatile way to represent complex
// types, unions, intersections, primitives, and more.

//? 1. Alias for Primitives
// You can create shorthand for basic types.
type Age = number;
let myAge: Age = 25;

//? 2. Union Types
// Combine multiple possible types into one.
//* type Response = "success" | "error" | "loading";
//* let apiResponse: Response = "success"; // Valid
// apiResponse = "unknown"; // Error: Type '"unknown"' is not assignable

//? 3. Intersection Types
// Combine multiple types into a single type that includes all properties.
type Name = { firstName: string; lastName: string };
type Address = { city: string; country: string };

type UserDetails = Name & Address;

const userObj: UserDetails = {
  firstName: "John",
  lastName: "Doe",
  city: "New York",
  country: "USA",
};

//? 4. Complex Object Types
// Define structured and nested types for objects.
type Product = {
  id: number;
  name: string;
  price: number;
  tags?: string[]; // Optional property
};

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 1500,
  tags: ["electronics", "computers"],
};

//? 5. Function Types
// Define a function signature using type.
type Add = (a: number, b: number) => number;

const add: Add = (x, y) => x + y;

//? 6. Array Types
// Alias for arrays with specific element types.
type StringArray = string[];
let fruits: StringArray = ["Apple", "Banana"];

//? 7. Tuple Types
// Define a fixed-length array with specific types for each element.
type Coordinate = [number, number];
const point: Coordinate = [10, 20];

//? 8. Custom Generics
// Use generics with type for reusable type definitions.
type Result<T> = {
  success: boolean;
  data: T;
};

let userResult: Result<{ id: number; name: string }> = {
  success: true,
  data: { id: 1, name: "Alice" },
};

//? 9. Mapped Types
// Use type to create mapped types dynamically.
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type UserOne = { id: number; name: string };
const readonlyUser: ReadOnly<UserOne> = { id: 1, name: "Alice" };
// readonlyUser.id = 2; // Error: Cannot assign to 'id'

//! Union Types
// A union type allows a variable to hold a value from multiple possible types.
// It is defined using the pipe (|) operator.
let value: number | string;
value = 42; // Valid
value = "Hello"; // Valid
// value = true;     // Error: Type 'boolean' is not assignable to type 'number | string'

let items: (number | string)[] = [1, "two", 3, "four"];

//! Optional Properties
// An optional property in TypeScript is a property that may or may not exist on an object.
// It is defined by appending a question mark (?) to the property name.
interface UserOpt {
  id: number;
  name: string;
  emailOpt?: string; // Optional property
}

const user1: UserOpt = { id: 1, name: "Alice" }; // Valid
const user2: UserOpt = { id: 2, name: "Bob", emailOpt: "bob@example.com" }; // Valid

//! Functions
// You can define a function with parameters and specify their types, as well as the return type.
function addNum(a: number, b: number): number {
  return a + b;
}

console.log(addNum(5, 10)); // Output: 15
// Use void for functions that do not return a value.
// Use never for functions that never return (e.g., errors or infinite loops)

//! Overloading
// TypeScript supports function overloading, where multiple function signatures are defined,
// and the implementation resolves to one based on the provided arguments.
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(1, 2)); // Output: 3
console.log(combine("Hello, ", "World!")); // Output: "Hello, World!"

//! Generic Functions
// Generics allow you to write functions that work with multiple types.
function getArray<T>(items: T[]): T[] {
  return [...items];
}

const numArray = getArray([1, 2, 3]);
const strArray = getArray(["a", "b", "c"]);
console.log(numArray); // Output: [1, 2, 3]
console.log(strArray); // Output: ["a", "b", "c"]

//! Named Types
// Named types in TypeScript allow you to define reusable and readable type aliases or
// structures for your data. These can be created using type aliases or interface.
// Named types make the code more organized and help in enforcing type safety in a consistent way.

//? Union Type Alias:
type Status = "active" | "inactive" | "pending";
let currentStatus: Status = "active";

//? Function Type Alias:
type AddFn = (a: number, b: number) => number;
const addFunc: AddFn = (x, y) => x + y;

//? Extending an Interface:
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  role: string;
}

const employee: Employee = {
  name: "Bob",
  age: 30,
  role: "Developer",
};

//? Example of Declaration Merging:
interface Car {
  make: string;
}

interface Car {
  model: string;
}

const car: Car = {
  make: "Toyota",
  model: "Corolla",
};
