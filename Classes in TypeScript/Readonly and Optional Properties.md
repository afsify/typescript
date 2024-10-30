# Readonly and Optional Properties in TypeScript

TypeScript provides powerful features for defining properties in interfaces and classes, allowing for enhanced type safety and flexibility. Two of these features are **readonly** and **optional** properties.

---

### 1. Readonly Properties

**Definition:**
Readonly properties are those that can only be assigned a value at the time of declaration or in the constructor of a class. Once set, their values cannot be modified, ensuring immutability.

**Syntax:**
To declare a property as readonly, use the `readonly` keyword before the property name.

#### Example:
```typescript
class Car {
  readonly make: string;  // Readonly property
  readonly model: string; // Readonly property

  constructor(make: string, model: string) {
    this.make = make; // Value can be set in the constructor
    this.model = model;
  }
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.make); // Output: Toyota
// myCar.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property.
```

#### Use Cases:
- **Immutable Data Structures:** Useful for defining constants or configuration settings that should not change.
- **Object Integrity:** Prevents accidental changes to critical properties, preserving the integrity of the object.

---

### 2. Optional Properties

**Definition:**
Optional properties allow you to define properties that may or may not exist in an object. This is particularly useful for creating flexible interfaces where not all properties are required.

**Syntax:**
To denote an optional property, add a question mark (`?`) after the property name.

#### Example:
```typescript
interface UserProfile {
  username: string;
  age?: number; // Optional property
  email?: string; // Optional property
}

const user1: UserProfile = {
  username: "john_doe"
};

const user2: UserProfile = {
  username: "jane_doe",
  age: 28,
  email: "jane@example.com"
};

console.log(user1.username); // Output: john_doe
console.log(user2.age); // Output: 28
```

#### Use Cases:
- **Flexible Data Models:** Ideal for scenarios like user profiles, where certain information may not be available (e.g., optional email).
- **Partial Updates:** Enables functions to accept objects with only a subset of properties.

---

### 3. Combining Readonly and Optional Properties

You can combine both readonly and optional properties within the same interface or class. This allows for creating complex data structures that are both flexible and immutable.

#### Example:
```typescript
interface Product {
  readonly id: number; // Readonly property
  name: string;
  price?: number;      // Optional property
}

const product: Product = {
  id: 101,
  name: "Laptop"
};

// product.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.
product.price = 999.99; // Allowed, since price is optional

console.log(product); // Output: { id: 101, name: "Laptop", price: 999.99 }
```

---

### 4. Practical Examples

#### Optional Properties in Functions
Optional properties can also be used in function parameters to create versatile functions.

**Example:**
```typescript
function greetUser(user: { name: string; age?: number }): string {
  return user.age 
    ? `Hello, ${user.name}. You are ${user.age} years old.` 
    : `Hello, ${user.name}.`;
}

console.log(greetUser({ name: "Alice" })); // Output: "Hello, Alice."
console.log(greetUser({ name: "Bob", age: 30 })); // Output: "Hello, Bob. You are 30 years old."
```

#### Readonly Properties in Class
**Example of Readonly Properties in Class:**
```typescript
class Circle {
  readonly radius: number; // Readonly property

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2; // Area calculation
  }
}

const circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483
// circle.radius = 10; // Error: Cannot assign to 'radius' because it is a read-only property.
```

---

### Summary
- **Readonly Properties:** Ensure that once a property is assigned, it cannot be changed, promoting immutability and data integrity.
- **Optional Properties:** Allow flexibility in object structures, making certain properties optional and enhancing the usability of interfaces.
- **Combination of Both:** Using both readonly and optional properties together allows for sophisticated type definitions, enhancing the overall robustness of your TypeScript code.