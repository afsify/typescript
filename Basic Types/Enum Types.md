# Enum Types in TypeScript

Enums are a feature in TypeScript that allows developers to define a set of named constants. They are useful for creating a collection of related values that can be referred to by name, improving code readability and maintainability.

## Key Characteristics of Enums

1. **Named Constants**: Enums provide a way to define a group of named constants, making the code more descriptive.
2. **Type Safety**: Enums enforce type safety by limiting the values to those defined in the enum.
3. **Readable Code**: Using enums enhances code readability as the intent is clearer compared to using plain numeric or string literals.
4. **Reverse Mapping**: Numeric enums allow reverse mapping, meaning you can get the name of the enum member from its value.

## Types of Enums

### 1. Numeric Enums
Numeric enums are the most basic type of enums. They are automatically assigned numeric values starting from `0` unless specified otherwise.

**Example:**

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction.Up);    // Output: 1
console.log(Direction.Down);  // Output: 2
```

**Reverse Mapping:**

```typescript
console.log(Direction[1]); // Output: 'Up'
```

### 2. String Enums
String enums allow you to define enums with string values. This is useful when you need more descriptive values.

**Example:**

```typescript
enum Response {
  No = "NO",
  Yes = "YES",
}

console.log(Response.No); // Output: 'NO'
console.log(Response.Yes); // Output: 'YES'
```

### 3. Heterogeneous Enums
Heterogeneous enums allow a mix of string and numeric values, although they are less common.

**Example:**

```typescript
enum Mixed {
  No = 0,
  Yes = "YES",
}

console.log(Mixed.No); // Output: 0
console.log(Mixed.Yes); // Output: 'YES'
```

### 4. Computed and Constant Members
You can have computed members (members that are calculated at runtime) and constant members (members that are known at compile time).

**Example:**

```typescript
enum FileAccess {
  None,         // 0
  Read = 1 << 1, // 2
  Write = 1 << 2, // 4
  ReadWrite = Read | Write, // 6
}

console.log(FileAccess.ReadWrite); // Output: 6
```

## Using Enums

Enums can be used in functions, switch statements, and other contexts where a specific set of values is expected.

### Example: Function with Enum Parameter

```typescript
function respondToCommand(command: Direction): void {
  switch (command) {
    case Direction.Up:
      console.log("Moving Up");
      break;
    case Direction.Down:
      console.log("Moving Down");
      break;
    case Direction.Left:
      console.log("Moving Left");
      break;
    case Direction.Right:
      console.log("Moving Right");
      break;
  }
}

respondToCommand(Direction.Left); // Output: 'Moving Left'
```

### Example: Enum in a Class

```typescript
enum Status {
  Active,
  Inactive,
  Pending,
}

class User {
  constructor(public name: string, public status: Status) {}
}

const user1 = new User("Alice", Status.Active);
console.log(user1); // Output: User { name: 'Alice', status: 0 }
```

## Best Practices

1. **Use Enums for a Fixed Set of Values**: Enums are best used when you have a known set of related constants.
2. **Prefer String Enums When Appropriate**: String enums can be more descriptive and prevent accidental value collisions.
3. **Avoid Heterogeneous Enums**: It's generally best to avoid mixing string and numeric values in an enum for clarity.

## Summary of Key Concepts

- **Enums**: A way to define a set of named constants in TypeScript.
- **Numeric Enums**: Automatically assigned numeric values, with reverse mapping.
- **String Enums**: Enums that hold string values for better clarity.
- **Heterogeneous Enums**: Enums that can contain both string and numeric values.
- **Computed Members**: Allow the use of calculations to assign values.

Enums provide a powerful way to create well-defined, type-safe collections of related constants, improving code clarity and maintainability.
