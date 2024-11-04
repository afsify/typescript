# Handling Nullable Data in TypeScript

Handling nullable data in TypeScript is essential for ensuring code robustness and preventing runtime errors due to undefined or null values. TypeScript provides several features and best practices to manage nullable types effectively.

### 1. Understanding Nullable Types

Nullable types in TypeScript refer to variables that can hold either a specific type or `null` or `undefined`. By default, all types are non-nullable unless specified otherwise.

### 2. Enabling `strictNullChecks`

To make TypeScript enforce stricter null checks, you can enable the `strictNullChecks` option in your `tsconfig.json` file. This option prevents null and undefined from being assignable to other types unless explicitly defined.

```json
{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

### 3. Declaring Nullable Types

To declare a type that can be `null` or `undefined`, you can use the union type operator (`|`).

#### Example: Declaring Nullable Variables

```typescript
let name: string | null = null;
let age: number | undefined = undefined;
```

### 4. Type Guards

Type guards are used to check the type of a variable at runtime. You can use them to safely access properties or methods on potentially nullable types.

#### Example: Using Type Guards

```typescript
function printLength(value: string | null) {
    if (value !== null) {
        console.log(value.length); // Safe access
    } else {
        console.log("Value is null");
    }
}
```

### 5. Optional Chaining

Optional chaining (`?.`) is a feature that allows you to safely access deeply nested properties without having to check for null or undefined at every level.

#### Example: Using Optional Chaining

```typescript
interface User {
    name: string;
    address?: {
        street?: string;
    };
}

const user: User = { name: "Alice" };

console.log(user.address?.street); // Outputs: undefined (no error thrown)
```

### 6. Nullish Coalescing Operator

The nullish coalescing operator (`??`) allows you to provide a default value for a variable that may be `null` or `undefined`.

#### Example: Using Nullish Coalescing

```typescript
const userInput: string | null = null;
const username = userInput ?? "Guest"; // "Guest" is assigned if userInput is null or undefined
console.log(username); // Outputs: "Guest"
```

### 7. Assertions

Type assertions can be used when you are certain that a value will not be null or undefined at a specific point in the code.

#### Example: Using Assertions

```typescript
let value: string | null = "Hello";
console.log(value!.length); // The `!` asserts that value is not null or undefined
```

### 8. Default Parameters

You can set default parameters in functions to handle cases where values might be `null` or `undefined`.

#### Example: Using Default Parameters

```typescript
function greet(name: string | null = "Guest") {
    console.log(`Hello, ${name}`);
}

greet(); // Outputs: "Hello, Guest"
```

### 9. Best Practices for Handling Nullable Data

- **Use Strict Null Checks**: Enable `strictNullChecks` to enforce better handling of nullable types.
- **Prefer Explicit Types**: Always declare whether a variable can be null or undefined.
- **Utilize Optional Chaining**: Use optional chaining to safely access properties on nullable objects.
- **Use Nullish Coalescing**: Utilize the nullish coalescing operator to provide fallback values.
- **Implement Type Guards**: Use type guards to ensure safe access to properties of potentially nullable types.
- **Avoid Type Assertions**: Use type assertions cautiously; prefer runtime checks to maintain type safety.

### 10. Summary

- Nullable types can hold `null` or `undefined` values.
- Enabling `strictNullChecks` enforces strict handling of nullable types.
- Use type guards, optional chaining, and nullish coalescing for safer access to nullable data.
- Always declare whether a variable can be null or undefined to improve code clarity and maintainability.

---

By effectively handling nullable data in TypeScript, you can build more reliable applications and reduce the risk of runtime errors caused by unexpected null or undefined values.