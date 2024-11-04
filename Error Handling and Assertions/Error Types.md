# Error Types in TypeScript

### Overview

TypeScript’s type-checking system helps identify potential errors at compile time, but runtime errors can still occur. TypeScript provides ways to handle and manage errors using built-in error types, error handling mechanisms like `try-catch`, and custom error types.

### Types of Errors in TypeScript

1. **Syntax Errors**
2. **Type Errors**
3. **Runtime Errors**
4. **Logical Errors**

---

### 1. Syntax Errors

**Syntax errors** occur when there is an issue with the code’s syntax, preventing it from being parsed correctly. These are often caused by typos, missing semicolons, or incorrect syntax.

**Example:**

```typescript
let num: number = 10
console.log(num  // Missing closing parenthesis
```

- **Detection**: TypeScript’s compiler immediately detects syntax errors.
- **Resolution**: Fix the syntax according to TypeScript/JavaScript language rules.

### 2. Type Errors

**Type errors** occur when a variable, parameter, or expression has an incompatible type. TypeScript’s static type system is designed to catch these at compile time.

**Example:**

```typescript
let message: string = "Hello";
message = 42; // Error: Type 'number' is not assignable to type 'string'
```

- **Detection**: TypeScript compiler detects these during compilation.
- **Resolution**: Ensure types match across your codebase. Use explicit type annotations to avoid type mismatches.

### 3. Runtime Errors

**Runtime errors** happen during the execution of a program, despite the code being syntactically and type-wise correct. They can arise due to unexpected data, missing files, invalid function calls, etc.

**Example:**

```typescript
function getArrayElement(arr: number[], index: number): number {
    return arr[index]; // Could throw an error if index is out of bounds
}

let arr = [1, 2, 3];
console.log(getArrayElement(arr, 10)); // Runtime error: Cannot read property '10' of array
```

- **Detection**: These are not detected by the TypeScript compiler and must be handled at runtime.
- **Resolution**: Use error-handling mechanisms like `try-catch` blocks to handle runtime errors gracefully.

### 4. Logical Errors

**Logical errors** are mistakes in the program logic, where code executes without crashing but produces incorrect results.

**Example:**

```typescript
function calculateArea(radius: number): number {
    return radius * radius * 3.14; // Error in logic if precision is needed
}

console.log(calculateArea(10)); // May work, but not ideal for precise calculations
```

- **Detection**: Not detected by the compiler; requires testing and validation.
- **Resolution**: Debugging and testing are essential to catch logical errors.

---

### Handling Errors in TypeScript

TypeScript allows handling errors through `try-catch` blocks, along with defining custom error types and using error boundaries.

#### `try-catch` for Error Handling

TypeScript supports traditional JavaScript error handling with `try-catch` blocks to catch and handle exceptions.

**Example:**

```typescript
try {
    const result = riskyFunction(); // This function may throw an error
    console.log(result);
} catch (error) {
    console.error("An error occurred:", (error as Error).message);
}
```

#### Custom Error Types

In TypeScript, you can define custom error classes that extend the built-in `Error` class. Custom error classes can provide specific error information or handling.

**Example:**

```typescript
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input: string) {
    if (input === "") {
        throw new ValidationError("Input cannot be empty");
    }
    return input;
}

try {
    validateInput(""); // Will throw a ValidationError
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation Error:", error.message);
    }
}
```

### Built-in Error Types in TypeScript

TypeScript has access to JavaScript’s built-in error types, which can be used depending on the situation:

1. **Error**: General-purpose error.
2. **RangeError**: Used for numeric values outside the allowable range.
3. **ReferenceError**: Thrown when referencing a non-existent variable.
4. **SyntaxError**: Indicates a syntax issue.
5. **TypeError**: Arises from invalid data type operations.
6. **URIError**: Raised when invalid parameters are passed to URI handling functions.

---

### Best Practices for Error Handling in TypeScript

1. **Use Type Annotations**: Clear type annotations reduce type errors.
2. **Custom Errors**: Create custom error classes for specific scenarios.
3. **`try-catch` Blocks**: Use `try-catch` to handle operations that may throw errors.
4. **Error Logging**: Always log error details for easier debugging.
5. **Testing and Validation**: Regular testing helps to catch logical errors.
6. **Strict Mode**: Enable `strict` mode in TypeScript for more robust type-checking, reducing potential errors.
7. **Define Fallbacks**: Implement fallbacks for operations that are prone to failure.

### Summary

- **Syntax Errors**: Issues in code syntax, detected at compile time.
- **Type Errors**: Type mismatches, caught by TypeScript’s type system.
- **Runtime Errors**: Errors during code execution, handled with `try-catch`.
- **Logical Errors**: Logical mistakes that pass compilation, found through testing.

Error handling in TypeScript, when combined with strong typing, allows for more robust and maintainable code, making applications safer and less prone to crashes.