# Using Multiple Type Parameters in TypeScript

Type parameters in TypeScript allow us to create flexible, reusable components by specifying generic types. Using multiple type parameters can further increase flexibility, enabling components to work with multiple types simultaneously.

## 1. Basics of Multiple Type Parameters

When defining a generic function or class, we can use multiple type parameters by separating them with commas. For example, `<T, U>` indicates that the function or class accepts two generic types.

### Example of Using Multiple Type Parameters

```typescript
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const mixedPair = pair<string, number>("Hello", 42);
console.log(mixedPair); // Output: ['Hello', 42]
```

In this example:
- `T` and `U` are generic type parameters.
- `pair` function accepts two parameters of potentially different types and returns a tuple containing those values.

## 2. Using Multiple Type Parameters in Classes

Classes can also benefit from multiple type parameters, allowing different types for properties or methods within the class.

### Example with a Pair Class

```typescript
class Pair<T, U> {
  constructor(public first: T, public second: U) {}

  getFirst(): T {
    return this.first;
  }

  getSecond(): U {
    return this.second;
  }
}

const stringNumberPair = new Pair<string, number>("TypeScript", 2024);
console.log(stringNumberPair.getFirst()); // Output: 'TypeScript'
console.log(stringNumberPair.getSecond()); // Output: 2024
```

## 3. Constraints with Multiple Type Parameters

Constraints can be applied to multiple type parameters to enforce that they meet certain conditions, such as implementing specific interfaces.

### Example with Constraints

```typescript
interface Identifiable {
  id: number;
}

function mergeObjects<T extends Identifiable, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const user = { id: 1, name: "Alice" };
const details = { age: 30, occupation: "Developer" };

const userDetails = mergeObjects(user, details);
console.log(userDetails);
// Output: { id: 1, name: 'Alice', age: 30, occupation: 'Developer' }
```

In this example:
- `T` extends `Identifiable`, so any object passed as `obj1` must have an `id` property.
- `U` can be any type, allowing for flexible merging.

## 4. Multiple Type Parameters in Interfaces

Interfaces can also use multiple type parameters, allowing you to define structures that depend on more than one type.

### Example with an Interface

```typescript
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const product: KeyValuePair<string, number> = { key: "price", value: 29.99 };
console.log(product); // Output: { key: 'price', value: 29.99 }
```

In this example:
- `KeyValuePair` uses two type parameters, `K` and `V`, representing the types of the `key` and `value`.

## 5. Multiple Type Parameters with Default Values

Type parameters can also have default values, allowing flexibility without requiring explicit type arguments each time.

### Example with Default Values

```typescript
class Storage<T, U = string> {
  constructor(public item: T, public description: U) {}
}

const defaultStorage = new Storage<number>(123, "Sample");
const customStorage = new Storage<number, boolean>(123, true);

console.log(defaultStorage); // Output: Storage { item: 123, description: 'Sample' }
console.log(customStorage);  // Output: Storage { item: 123, description: true }
```

## 6. Practical Use Cases for Multiple Type Parameters

1. **Data Structures**: Define structures like pairs, dictionaries, or complex mappings.
2. **Utility Functions**: Create functions that manipulate or combine different types.
3. **Reusable Components**: Design components for use in various contexts, such as form controls with various data types.

## Summary of Key Concepts

- **Multiple Type Parameters**: Allow functions and classes to work with multiple types.
- **Constraints**: Ensure type parameters meet certain conditions.
- **Default Values**: Optional for more flexibility and easier use.
- **Use Cases**: Essential in data structures, utility functions, and reusable components.

Multiple type parameters help to make TypeScript code more adaptable, enabling a broader range of use cases for functions, classes, and interfaces.
