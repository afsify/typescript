# Function Overloading in TypeScript

Function overloading is a feature in TypeScript that allows you to define multiple function signatures for a single function. This enables a function to handle different types and numbers of parameters, providing flexibility and clarity in your code.

## Key Characteristics of Function Overloading

1. **Multiple Signatures**: You can define multiple signatures for a single function, allowing it to accept different parameter types or counts.
2. **Type Safety**: TypeScript checks the function call against the defined signatures, providing compile-time checks for correctness.
3. **Implementation**: There is a single implementation of the overloaded function that can handle all defined signatures.

## Defining Overloaded Functions

To create an overloaded function, you first define the function signatures followed by a single implementation that handles all the cases.

### Example:

```typescript
function greet(person: string): string; // Signature 1
function greet(person: string, age: number): string; // Signature 2
function greet(person: string, age?: number): string { // Implementation
  if (age !== undefined) {
    return `Hello, ${person}. You are ${age} years old.`;
  }
  return `Hello, ${person}.`;
}

console.log(greet("Alice")); // Output: 'Hello, Alice.'
console.log(greet("Bob", 30)); // Output: 'Hello, Bob. You are 30 years old.'
```

## Overloading with Different Parameter Types

You can overload functions with different types of parameters.

### Example:

```typescript
function display(value: number): void; // Signature 1
function display(value: string): void; // Signature 2
function display(value: boolean): void; // Signature 3
function display(value: any): void { // Implementation
  console.log(value);
}

display(42); // Output: 42
display("Hello"); // Output: 'Hello'
display(true); // Output: true
```

## Handling Optional and Default Parameters

You can combine overloading with optional and default parameters for added flexibility.

### Example:

```typescript
function createUser(name: string, age?: number): string; // Signature 1
function createUser(name: string, age: number, role: string): string; // Signature 2
function createUser(name: string, age?: number, role?: string): string { // Implementation
  if (age && role) {
    return `User: ${name}, Age: ${age}, Role: ${role}`;
  } else if (age) {
    return `User: ${name}, Age: ${age}`;
  }
  return `User: ${name}`;
}

console.log(createUser("Alice")); // Output: 'User: Alice'
console.log(createUser("Bob", 30)); // Output: 'User: Bob, Age: 30'
console.log(createUser("Charlie", 25, "Admin")); // Output: 'User: Charlie, Age: 25, Role: Admin'
```

## Limitations of Function Overloading

1. **Single Implementation**: You must provide a single implementation for all signatures. This can lead to complex logic within the implementation if many overloads exist.
2. **Type Checking**: TypeScript uses the first matching signature for type checking, which may not always lead to the expected behavior if not carefully defined.

## Best Practices

1. **Keep It Simple**: Use function overloading judiciously to keep code readable. Too many overloads can complicate the implementation.
2. **Logical Grouping**: Group similar function signatures together to provide clarity in intent.
3. **Clear Naming**: Use descriptive names for parameters in the overload signatures to clarify their purpose.

## Summary of Key Concepts

- **Function Overloading**: Allows defining multiple signatures for a single function, providing flexibility in handling different parameter types and counts.
- **Single Implementation**: Requires one implementation that handles all cases defined by the overloads.
- **Type Safety**: TypeScript checks function calls against the defined signatures for correctness.

Function overloading is a powerful feature that enhances code flexibility and type safety, making it easier to work with functions that need to handle multiple types or combinations of parameters.
