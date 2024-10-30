# Type Guards in TypeScript

Type Guards are a way to determine the type of a variable at runtime in TypeScript, allowing you to narrow down a type within a conditional block. They provide added type safety by ensuring that operations on values are appropriate for their specific types.

### Why Use Type Guards?

1. **Type Safety**: Ensures type correctness at runtime, helping prevent runtime errors.
2. **Code Clarity**: By narrowing down types, Type Guards make code easier to read and understand.
3. **Enhanced Type Inference**: TypeScript’s type inference becomes more effective with Type Guards, making it easier to work with union types and handle conditional logic based on types.

### Built-In Type Guards

TypeScript has some built-in Type Guards that help check the types of primitive values, such as `typeof` and `instanceof`.

#### 1. Using `typeof`

The `typeof` operator can be used for primitive types like `string`, `number`, `boolean`, `symbol`, and `bigint`.

**Example:**
```typescript
function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase(); // TypeScript infers value as string
    } else {
        return value.toFixed(2); // TypeScript infers value as number
    }
}

formatValue("hello"); // Returns "HELLO"
formatValue(10.5);    // Returns "10.50"
```

In this example, `typeof` helps TypeScript determine whether `value` is a `string` or a `number`, allowing for appropriate methods to be used.

#### 2. Using `instanceof`

The `instanceof` operator checks if an object is an instance of a specific class. This is especially useful for class-based objects.

**Example:**
```typescript
class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark(); // TypeScript infers animal as Dog
    } else {
        animal.meow(); // TypeScript infers animal as Cat
    }
}

const dog = new Dog();
makeSound(dog); // Logs "Woof!"
```

In this example, `instanceof` lets TypeScript know if `animal` is an instance of `Dog` or `Cat`, and TypeScript narrows the type within each block accordingly.

### Custom Type Guards

You can create custom type guards using TypeScript's type predicates, which specify that a function will return `true` if the argument is of a specific type.

#### Syntax

A type predicate is defined using the `parameterName is Type` syntax:

```typescript
function isString(value: any): value is string {
    return typeof value === "string";
}
```

#### Example with Custom Type Guard

Custom type guards are especially useful when working with complex types or interfaces.

```typescript
interface Car {
    drive(): void;
}

interface Bike {
    pedal(): void;
}

function isCar(vehicle: Car | Bike): vehicle is Car {
    return (vehicle as Car).drive !== undefined;
}

function operate(vehicle: Car | Bike) {
    if (isCar(vehicle)) {
        vehicle.drive(); // TypeScript infers vehicle as Car
    } else {
        vehicle.pedal(); // TypeScript infers vehicle as Bike
    }
}
```

Here, the custom type guard `isCar` checks if `vehicle` has a `drive` method, allowing TypeScript to narrow the type within the `operate` function.

### Type Guards with `in` Operator

The `in` operator can also be used as a type guard, especially when checking for properties in objects.

**Example:**
```typescript
interface Circle {
    radius: number;
}

interface Square {
    sideLength: number;
}

function getArea(shape: Circle | Square): number {
    if ("radius" in shape) {
        return Math.PI * shape.radius ** 2; // TypeScript infers shape as Circle
    } else {
        return shape.sideLength ** 2; // TypeScript infers shape as Square
    }
}

const circle: Circle = { radius: 5 };
getArea(circle); // Returns 78.53981633974483
```

In this example, the `in` operator helps TypeScript determine if `shape` is a `Circle` or `Square` based on whether it has the `radius` property.

### Discriminated Unions

Discriminated unions are a pattern used in TypeScript where each type in a union has a common property with unique values, making it easy to distinguish between types.

**Example:**
```typescript
interface Dog {
    kind: "dog";
    bark: () => void;
}

interface Cat {
    kind: "cat";
    meow: () => void;
}

type Animal = Dog | Cat;

function speak(animal: Animal) {
    switch (animal.kind) {
        case "dog":
            animal.bark(); // TypeScript infers animal as Dog
            break;
        case "cat":
            animal.meow(); // TypeScript infers animal as Cat
            break;
    }
}
```

In this example, `kind` is the discriminant property that allows TypeScript to infer the specific type of `animal`.

### Summary of Type Guards

- **`typeof`**: Checks types of primitive values.
- **`instanceof`**: Checks if an object is an instance of a particular class.
- **Custom Type Guards**: Defined using type predicates for complex types or interfaces.
- **`in` Operator**: Useful for checking properties in objects.
- **Discriminated Unions**: Use a common property with unique values to distinguish between types in a union.

Type Guards are a powerful feature that helps TypeScript ensure type safety at runtime, allowing you to build more robust applications.