# Generic Functions in TypeScript

Generic functions in TypeScript allow functions to operate on various types while maintaining strict type safety. By using generic types, you can create functions that can handle multiple data types without sacrificing TypeScript's benefits of type checking and inference.

### Key Concepts of Generic Functions

1. **Reusability**: Generics make it possible to write functions that work with different types, increasing code reuse.
2. **Type Safety**: Unlike using `any`, generics enforce type constraints, allowing TypeScript to check for type compatibility.
3. **Flexibility**: Generics allow functions to be more flexible while retaining strong type checking, which helps prevent runtime errors.

### Syntax of Generic Functions

Generics are defined by adding a type parameter inside angle brackets `<T>` after the function name.

```typescript
function functionName<T>(parameter: T): T {
    // Function logic
    return parameter;
}
```

- `T` is a generic type variable that stands for "Type". You can name it anything, though `T` is common.
- You can specify multiple generic types, such as `<T, U>`.

### Basic Example of a Generic Function

A simple example is a function that returns the same data type that it receives as input:

```typescript
function identity<T>(value: T): T {
    return value;
}

const num = identity<number>(42);    // TypeScript infers that T is number
const text = identity<string>("Hello, TypeScript!"); // T is string
```

### Benefits of Using Generics Instead of `any`

Using `any` sacrifices type checking, while generics allow TypeScript to infer the type:

- **Using `any`:** No type safety.
- **Using Generics:** Enforces type safety and catches errors at compile time.

### Generic Functions with Multiple Type Parameters

You can define functions that take multiple generic types. This is useful when you want to work with multiple data types in the same function.

**Example:**
```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const mergedObject = merge({ name: "Alice" }, { age: 30 });
// Result: { name: "Alice", age: 30 }
```

In this example, `merge` combines properties of both objects, and TypeScript infers the type of `mergedObject` as `{ name: string; age: number; }`.

### Constraining Generics with `extends`

By using `extends`, you can restrict a generic type to a specific set of types, ensuring that the generic type has certain properties or methods.

**Example:**
```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = { name: "John", age: 25 };
const personName = getProperty(person, "name"); // Works
const personAge = getProperty(person, "age");   // Works
// getProperty(person, "address"); // Error: 'address' does not exist on type '{ name: string; age: number; }'
```

In this example, the `getProperty` function only allows accessing properties that exist on the object, providing more type safety.

### Using Default Types in Generics

You can assign a default type to a generic if a type is not specified when the function is called.

**Example:**
```typescript
function wrap<T = string>(value: T): T[] {
    return [value];
}

const wrappedNumber = wrap(123);       // Inferred as number[]
const wrappedString = wrap("hello");   // Inferred as string[]
```

### Practical Examples of Generic Functions

1. **Generic Array Function**

   A function that takes an array and returns the first element:

   ```typescript
   function getFirstElement<T>(arr: T[]): T | undefined {
       return arr[0];
   }

   const firstNum = getFirstElement([10, 20, 30]);    // TypeScript infers T as number
   const firstChar = getFirstElement(["a", "b", "c"]); // TypeScript infers T as string
   ```

2. **Mapping Over an Array**

   This function applies a callback function to every element of an array and returns a new array.

   ```typescript
   function mapArray<T, U>(arr: T[], callback: (item: T) => U): U[] {
       return arr.map(callback);
   }

   const numbers = [1, 2, 3];
   const doubled = mapArray(numbers, (num) => num * 2); // [2, 4, 6]
   ```

3. **Generic Function with Optional Parameters**

   Generics can also work with optional parameters to further customize behavior.

   ```typescript
   function combine<T, U = T>(first: T, second?: U): [T, U?] {
       return [first, second];
   }

   const combined1 = combine(10);           // Result: [10, undefined]
   const combined2 = combine(10, "hello");  // Result: [10, "hello"]
   ```

### Summary of Key Concepts

- **Generic Functions**: Allow you to create functions that work with various types without losing type checking.
- **Multiple Generics**: Use multiple generic types in the same function to handle multiple data types.
- **Type Constraints**: Limit what types can be passed to generics with the `extends` keyword.
- **Default Types**: Define default types for generics to be used if none are specified.
- **Benefits**: Generic functions provide type safety, flexibility, and reusability.
