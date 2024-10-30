# Optional and Readonly Properties in TypeScript

In TypeScript, properties of interfaces and classes can be marked as optional or readonly to enhance type safety and expressiveness. These features help in defining more precise data structures.

#### 1. Optional Properties

Optional properties allow you to define properties that may or may not be present in an object. This is useful when you want to create flexible interfaces or types where certain fields are not required.

**Syntax:**
To denote an optional property, you add a question mark (`?`) after the property name.

**Example:**
```typescript
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

const user1: User = {
  id: 1,
  name: "Alice"
};

const user2: User = {
  id: 2,
  name: "Bob",
  email: "bob@example.com"
};
```

#### 2. Readonly Properties

Readonly properties can only be assigned during initialization or in the constructor of a class. Once assigned, their values cannot be changed, ensuring immutability.

**Syntax:**
To define a readonly property, use the `readonly` keyword before the property name.

**Example:**
```typescript
class Point {
  readonly x: number; // Readonly property
  readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const point = new Point(10, 20);
console.log(point.x); // Output: 10
// point.x = 15; // Error: Cannot assign to 'x' because it is a read-only property.
```

#### 3. Combining Optional and Readonly Properties

You can combine both optional and readonly properties in an interface or class, allowing for complex structures that maintain immutability while also permitting optional fields.

**Example:**
```typescript
interface Product {
  readonly id: number;        // Readonly property
  name: string;
  price?: number;             // Optional property
}

const product: Product = {
  id: 101,
  name: "Laptop"
};

console.log(product.id); // Output: 101
// product.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.
```

#### 4. Practical Use Cases

- **Optional Properties:** Ideal for scenarios like user profiles where not all users may provide certain information (e.g., a phone number).
- **Readonly Properties:** Useful for defining constants or configuration settings that should not change throughout the application's lifecycle (e.g., API endpoint URLs).

#### 5. Example with Optional Properties in a Function

You can also use optional properties in function parameters to provide default behaviors.

**Example:**
```typescript
function greet(user: { name: string; age?: number }): string {
  if (user.age) {
    return `Hello, ${user.name}. You are ${user.age} years old.`;
  } else {
    return `Hello, ${user.name}.`;
  }
}

console.log(greet({ name: "Alice" })); // Output: "Hello, Alice."
console.log(greet({ name: "Bob", age: 30 })); // Output: "Hello, Bob. You are 30 years old."
```

### Summary
- **Optional Properties** allow you to define properties that may not always be present, providing flexibility in your data structures.
- **Readonly Properties** ensure that once a property is assigned, it cannot be modified, enforcing immutability.
- Both features enhance the expressiveness and type safety of your TypeScript code, making it easier to manage complex data models.