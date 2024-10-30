# Union and Intersection Types in TypeScript

TypeScript’s Union and Intersection types are essential for creating flexible and robust type systems. They allow you to combine multiple types, either by choosing one type among several (Union) or merging all required properties (Intersection).

---

### 1. **Union Types**

Union types allow a variable to hold values of multiple types. They represent a value that can be one of several possible types, making them useful when you want a type to have flexibility.

#### Syntax
```typescript
type NameOrId = string | number;
```

#### Example

```typescript
function printId(id: string | number): void {
  console.log("ID:", id);
}

printId(101);         // Output: ID: 101
printId("User123");   // Output: ID: User123
// printId(true);      // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
```

In this example, the `printId` function accepts either a `string` or a `number` as an argument. 

#### Key Points

- Union types are ideal when a variable could be one of several types.
- TypeScript provides **type narrowing** techniques (like `typeof` checks) to handle each type in a union.

##### Type Narrowing with Union Types
To perform different operations depending on the type, use **type guards**:

```typescript
function getLength(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.toString().length;
  }
}

console.log(getLength("Hello"));   // Output: 5
console.log(getLength(12345));     // Output: 5
```

### 2. **Intersection Types**

Intersection types combine multiple types into one. An intersection type requires an object to satisfy all the constituent types, making it useful for combining multiple requirements into a single type.

#### Syntax
```typescript
type Person = { name: string };
type Employee = { employeeId: number };
type Staff = Person & Employee;
```

#### Example

```typescript
type Person = { name: string };
type Employee = { employeeId: number };
type Staff = Person & Employee;

const staffMember: Staff = { name: "Alice", employeeId: 1234 };
console.log(staffMember); // Output: { name: 'Alice', employeeId: 1234 }
```

In this case, `Staff` must satisfy both `Person` and `Employee` properties. The `staffMember` object has both `name` and `employeeId`, fulfilling the intersection type’s requirements.

#### Key Points

- Intersection types combine properties of multiple types into one.
- Useful for types with overlapping requirements, such as a user who is both a `Person` and an `Employee`.

### 3. **Practical Use of Union and Intersection Types**

#### Using Union Types with Interfaces

```typescript
interface Circle {
  radius: number;
}

interface Square {
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if ("radius" in shape) {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.sideLength * shape.sideLength;
  }
}

console.log(getArea({ radius: 10 }));       // Output: 314.159...
console.log(getArea({ sideLength: 5 }));    // Output: 25
```

In this example, we use a **type guard** (`"radius" in shape`) to differentiate between a `Circle` and a `Square` in the `Shape` union type.

#### Using Intersection Types with Interfaces

```typescript
interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

interface Document {
  title: string;
  content: string;
}

type TimestampedDocument = Document & Timestamps;

const doc: TimestampedDocument = {
  title: "Project Plan",
  content: "Details of the project...",
  createdAt: new Date(),
  updatedAt: new Date(),
};

console.log(doc);
```

In this example, `TimestampedDocument` requires all properties of both `Document` and `Timestamps`.

---

### 4. **Common Use Cases**

- **Union Types** are commonly used when defining parameters or return types of functions that could have different forms, such as accepting multiple types of input.
- **Intersection Types** are useful for creating new types that combine several interfaces or types, enforcing that an object meets all requirements.

### 5. **Summary**

| Type            | Description                                               | Example                             |
|-----------------|-----------------------------------------------------------|-------------------------------------|
| **Union Type**      | Allows one of several types. Used for flexible types.      | `string \| number`                   |
| **Intersection Type** | Combines multiple types into one. Requires all properties. | `type A & B`                        |

### 6. **Examples Summary**

- **Union Example**: Allow a parameter to accept either `string` or `number`.
- **Intersection Example**: Define a new type that combines `Person` and `Employee`.

---

Union and intersection types add flexibility and rigor to TypeScript, allowing developers to define types that suit complex structures while maintaining type safety. They are particularly useful in scenarios where data structures have overlapping but distinct fields or when parameter types may vary.