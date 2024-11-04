# Type Declarations in TypeScript

Type Declarations allow you to define the structure, shape, and properties of data in TypeScript. By declaring types explicitly, you enable TypeScript’s static type-checking, which helps catch potential errors during development.

### Basic Type Declarations

Type Declarations specify the types of variables, parameters, return values, and object properties.

#### Declaring Types for Variables

To declare a type for a variable, use a colon (`:`) after the variable name, followed by the type.

```typescript
let username: string = "John";
let age: number = 30;
let isActive: boolean = true;
```

- `username` is declared as a `string`.
- `age` is declared as a `number`.
- `isActive` is declared as a `boolean`.

#### Declaring Types for Function Parameters and Return Values

You can specify types for function parameters and return values to ensure the function’s inputs and outputs adhere to a specific type structure.

```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}

let message = greet("Alice"); // Valid
// let message = greet(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
```

Here:
- The `name` parameter is declared as `string`.
- The function returns a `string`, which TypeScript will enforce.

#### Declaring Types for Arrays

TypeScript provides two ways to declare arrays:
1. Using `type[]` notation.
2. Using `Array<type>` notation.

```typescript
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
```

Both declarations specify arrays containing elements of the defined type.

### Object Type Declarations

For objects, Type Declarations define the properties and their respective types. Each property is listed with a colon and type.

```typescript
let person: { name: string; age: number; isActive: boolean } = {
    name: "Alice",
    age: 30,
    isActive: true,
};
```

- **name**: Must be a `string`.
- **age**: Must be a `number`.
- **isActive**: Must be a `boolean`.

### Declaring Optional Properties

You can declare optional properties using a question mark (`?`). Optional properties are not required to be present in an object.

```typescript
let employee: { name: string; age?: number } = { name: "Bob" };
```

Here, `age` is optional, so `employee` can either include or omit it.

### Using `type` Keyword for Custom Type Aliases

The `type` keyword allows you to create reusable custom type declarations, called **Type Aliases**. This is useful for defining complex types.

```typescript
type Car = {
    brand: string;
    model: string;
    year: number;
};

let myCar: Car = { brand: "Toyota", model: "Camry", year: 2022 };
```

With the `Car` type alias, you can reuse this type for multiple variables.

### Type Declarations with Union Types

Union Types allow variables to accept multiple types, using the `|` (pipe) operator.

```typescript
let id: number | string;
id = 101; // Valid
id = "ABC123"; // Also valid
```

The `id` variable can be either a `number` or a `string`.

### Type Declarations with Intersection Types

Intersection Types combine multiple types into one, using the `&` (ampersand) operator.

```typescript
type ContactInfo = { phone: string };
type Address = { city: string; zip: number };

type Person = ContactInfo & Address;

let friend: Person = { phone: "123-4567", city: "New York", zip: 10001 };
```

Here, `Person` combines both `ContactInfo` and `Address` properties.

### Type Declarations with Literal Types

Literal Types allow you to declare variables with specific values, rather than just a type.

```typescript
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";
// currentStatus = "done"; // Error: Type '"done"' is not assignable to type 'Status'
```

The `Status` type only allows `"success"`, `"error"`, or `"loading"` as valid values.

### Readonly Properties

You can specify properties as `readonly` to make them immutable after initialization.

```typescript
type User = {
    readonly id: number;
    name: string;
};

let user: User = { id: 1, name: "Alice" };
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
```

In this example, `id` is immutable and cannot be changed after the object is created.

### Using Type Declarations in Functions with Type Aliases

Type Aliases can also be applied to function types to make complex function signatures reusable.

```typescript
type Greeting = (name: string) => string;

const sayHello: Greeting = (name) => `Hello, ${name}!`;

sayHello("Alice"); // "Hello, Alice!"
```

The `Greeting` type defines a reusable function signature, ensuring consistency across functions.

### Summary of Type Declarations

- **Basic Types**: Specify variable, parameter, and return types for functions.
- **Object Types**: Define properties and their types.
- **Optional Properties**: Use `?` to make properties optional.
- **Union and Intersection Types**: Define variables that can accept multiple or combined types.
- **Literal Types**: Specify specific allowed values for a variable.
- **Readonly Properties**: Use `readonly` to make properties immutable.
- **Custom Type Aliases**: Use `type` to create reusable and complex types for variables, objects, and functions.

Type Declarations enable strict type enforcement, helping TypeScript catch errors early and making code more predictable and easier to understand.