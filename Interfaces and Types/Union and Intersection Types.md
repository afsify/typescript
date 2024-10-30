# Union and Intersection Types in TypeScript

TypeScript's type system includes powerful features like union and intersection types, which enhance type safety and flexibility in handling various data structures.

### 1. **Union Types**

Union types allow a variable to hold values of multiple types. You can define a union type using the vertical bar (`|`) to separate different types.

#### Syntax

```typescript
type UnionType = Type1 | Type2 | Type3;
```

#### Example

```typescript
// Defining a union type for a variable
let value: number | string;

value = 42; // Valid
value = "Hello"; // Valid
// value = true; // Invalid, Type 'boolean' is not assignable to type 'number | string'
```

### 2. **Using Union Types in Functions**

Union types can be used as function parameters to allow for multiple types of inputs.

#### Example

```typescript
function printValue(value: number | string): void {
  console.log(value);
}

printValue(123); // Output: 123
printValue("TypeScript"); // Output: TypeScript
```

### 3. **Type Narrowing**

When working with union types, TypeScript provides type narrowing, allowing you to safely work with specific types based on certain checks.

#### Example

```typescript
function handleValue(value: number | string) {
  if (typeof value === "string") {
    console.log(`String value: ${value.toUpperCase()}`);
  } else {
    console.log(`Number value: ${value.toFixed(2)}`);
  }
}

handleValue("hello"); // Output: String value: HELLO
handleValue(10.1234); // Output: Number value: 10.12
```

### 4. **Intersection Types**

Intersection types combine multiple types into one, allowing you to create a type that includes all the properties of the intersected types. You define an intersection type using the ampersand (`&`).

#### Syntax

```typescript
type IntersectionType = Type1 & Type2;
```

#### Example

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
}

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "Alice",
  age: 30,
  employeeId: 123
};
```

### 5. **Using Intersection Types in Functions**

You can use intersection types in function parameters to enforce multiple type constraints.

#### Example

```typescript
function logEmployeeDetails(employee: EmployeeDetails): void {
  console.log(`Name: ${employee.name}, Age: ${employee.age}, ID: ${employee.employeeId}`);
}

logEmployeeDetails({
  name: "Bob",
  age: 28,
  employeeId: 456
});
// Output: Name: Bob, Age: 28, ID: 456
```

### 6. **Combining Union and Intersection Types**

You can combine union and intersection types to create complex types that can handle multiple scenarios.

#### Example

```typescript
type StringOrNumber = string | number;
type Address = { street: string; city: string };
type User = { name: string; age: number } & Address;

function handleInput(input: StringOrNumber): void {
  if (typeof input === "string") {
    console.log(`String: ${input}`);
  } else {
    console.log(`Number: ${input}`);
  }
}

const user: User = {
  name: "Charlie",
  age: 32,
  street: "456 Elm St",
  city: "Anytown"
};

handleInput(42); // Output: Number: 42
handleInput("Hello"); // Output: String: Hello
```

### 7. **Use Cases**

- **Union Types**:
  - Handling inputs of various types in functions or APIs.
  - Flexibly defining types for variables that may take on multiple forms.

- **Intersection Types**:
  - Combining multiple interfaces or types to create more complex and specific types.
  - Enforcing that an object conforms to multiple type contracts.

### 8. **Key Concepts**

- **Union Types**: Define a type that can be one of several types. Useful for flexibility in handling different input types.
- **Intersection Types**: Create a type that combines multiple types, requiring an object to conform to all specified types.
- **Type Narrowing**: TypeScript's ability to infer and restrict types based on runtime checks.
- **Combining Types**: Union and intersection types can be combined to create complex and flexible data structures.

### 9. **Summary of Key Concepts**

- **Union Types**: Allow variables to hold values of multiple types, promoting flexibility.
- **Intersection Types**: Combine multiple types into one, ensuring all properties are present.
- **Type Narrowing**: Safely determine and work with specific types at runtime.

---

Understanding union and intersection types in TypeScript allows developers to write more flexible, type-safe code, enabling better error checking and code organization.