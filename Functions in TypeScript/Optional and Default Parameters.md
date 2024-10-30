# Optional and Default Parameters in TypeScript

TypeScript allows you to define function parameters as optional and to provide default values for parameters. This feature enhances flexibility and improves the usability of functions by allowing them to be called with varying numbers of arguments.

### 1. **Optional Parameters**

Optional parameters are parameters that can be omitted when calling a function. In TypeScript, you can mark a parameter as optional by appending a question mark (`?`) to its name.

#### Syntax

```typescript
function functionName(parameterName?: type) {
  // Function body
}
```

#### Example

```typescript
function greet(name?: string) {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Hello, stranger!");
  }
}

greet("Alice"); // Output: Hello, Alice!
greet(); // Output: Hello, stranger!
```

### 2. **Default Parameters**

Default parameters allow you to specify a default value for a parameter if no value or `undefined` is passed. You can define default parameters in the function signature by assigning a value to the parameter.

#### Syntax

```typescript
function functionName(parameterName: type = defaultValue) {
  // Function body
}
```

#### Example

```typescript
function multiply(a: number, b: number = 1) {
  return a * b;
}

console.log(multiply(5, 2)); // Output: 10
console.log(multiply(5)); // Output: 5 (b defaults to 1)
```

### 3. **Combining Optional and Default Parameters**

You can use optional parameters and default parameters together in a function. However, optional parameters should always come after required parameters in the parameter list.

#### Example

```typescript
function createUser(name: string, age?: number, isAdmin: boolean = false) {
  const user = {
    name,
    age: age !== undefined ? age : null, // Explicitly handle optional parameter
    isAdmin,
  };
  return user;
}

console.log(createUser("Alice", 30, true)); // Output: { name: 'Alice', age: 30, isAdmin: true }
console.log(createUser("Bob")); // Output: { name: 'Bob', age: null, isAdmin: false }
```

### 4. **Important Considerations**

- **Order of Parameters**: When defining parameters, always place required parameters before optional or default parameters.
  
  ```typescript
  // Correct
  function example(a: number, b?: number, c: string = "default") {}

  // Incorrect
  // function example(a: number, b: number = 1, c?: string) {} // Error
  ```

- **Undefined Values**: If an optional parameter is not provided, its value will be `undefined`. Default parameters, however, will take on the specified default value.

#### Example

```typescript
function logValue(value: string, prefix: string = "Value: ") {
  console.log(`${prefix}${value}`);
}

logValue("Test"); // Output: Value: Test
logValue("Test", "Result: "); // Output: Result: Test
```

### 5. **Use Cases**

- **Improving Function Flexibility**: Optional and default parameters allow functions to handle varying input scenarios without overloading.
- **Creating APIs**: Useful in function signatures where parameters may not always be necessary, improving code readability and maintainability.
- **Avoiding Overloads**: Helps reduce the need for multiple overloaded function signatures by accommodating various parameter scenarios.

### 6. **Common Mistakes**

- **Forgetting the Order**: Placing optional parameters before required ones or mixing them can lead to errors.
- **Assuming Default Parameters Are Mandatory**: Developers sometimes forget that default parameters can be overridden.

### 7. **Summary of Key Concepts**

- **Optional Parameters**: Marked with `?`, they allow parameters to be omitted when calling a function.
- **Default Parameters**: Assigned a default value in the function signature, they provide a fallback if no value is passed.
- **Combining Parameters**: Both types can be used together, but optional parameters must come after required ones.
- **Flexibility and Usability**: Enhance function usability and reduce the need for multiple overloads.

---

Optional and default parameters in TypeScript contribute significantly to making functions more flexible and user-friendly, allowing for cleaner and more maintainable code.