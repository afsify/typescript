# Best Practices with Type Annotations in TypeScript

Using type annotations effectively in TypeScript is crucial for maintaining clean, readable, and maintainable code. Here are some best practices to follow when working with type annotations:

#### 1. Use Explicit Type Annotations
While TypeScript can infer types, explicitly annotating types can improve readability and maintainability, especially for complex types.

**Example:**
```typescript
// Type inference
let age = 25; // inferred as number

// Explicit type annotation
let salary: number = 50000;
```

#### 2. Prefer `unknown` over `any`
Using `any` bypasses type checking, which can lead to runtime errors. Instead, prefer `unknown` when you don't know the type beforehand. This enforces type checking when you use the variable.

**Example:**
```typescript
let value: unknown;

// type checking required before assignment
if (typeof value === 'string') {
  console.log(value.toUpperCase());
}
```

#### 3. Utilize Union and Intersection Types
When a variable can be one of multiple types, use union types. For combining types, use intersection types.

**Union Types Example:**
```typescript
function formatValue(value: string | number): string {
  return typeof value === "number" ? value.toFixed(2) : value;
}
```

**Intersection Types Example:**
```typescript
interface User {
  id: number;
  name: string;
}

interface Admin {
  permissions: string[];
}

type AdminUser = User & Admin;

const admin: AdminUser = {
  id: 1,
  name: "Alice",
  permissions: ["read", "write"]
};
```

#### 4. Use Enums for Fixed Sets of Values
Use enums to define a set of named constants, which makes the code more readable and maintainable.

**Example:**
```typescript
enum UserRole {
  Admin,
  User,
  Guest,
}

function getUserRole(role: UserRole): string {
  return UserRole[role];
}
```

#### 5. Avoid Overly Complex Types
While TypeScript supports complex types, overly complicated types can decrease code readability. Break them into simpler types where possible.

**Example:**
```typescript
type Point = {
  x: number;
  y: number;
};

type Circle = {
  center: Point;
  radius: number;
};
```

#### 6. Define Function Return Types
Always define return types for functions. This helps with readability and ensures that the function behavior is clear.

**Example:**
```typescript
function calculateArea(radius: number): number {
  return Math.PI * radius * radius;
}
```

#### 7. Use Type Aliases for Complex Types
Type aliases help simplify complex type definitions and make them reusable.

**Example:**
```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

type UserMap = Record<number, User>;
```

#### 8. Leverage Type Inference Wisely
While explicit type annotations are good, allow TypeScript's type inference to handle straightforward cases. This keeps the code clean without losing type safety.

**Example:**
```typescript
const fruits = ["apple", "banana", "cherry"]; // inferred as string[]
```

#### 9. Utilize Optional and Default Parameters
When defining functions, make parameters optional or provide default values to enhance flexibility without compromising type safety.

**Example:**
```typescript
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}
```

#### 10. Comment Your Types When Necessary
When the purpose of a type annotation isn't immediately clear, consider adding comments to explain it.

**Example:**
```typescript
// A type representing a user with an optional age
type User = {
  id: number;
  name: string;
  age?: number; // Optional
};
```

### Summary
Following these best practices with type annotations in TypeScript will help create code that is clear, type-safe, and maintainable. Using explicit types, leveraging TypeScript features like enums and unions, and avoiding complexity can significantly enhance the quality of your code.