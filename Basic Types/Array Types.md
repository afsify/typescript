# Array Types in TypeScript

In TypeScript, arrays are a commonly used data structure for storing collections of elements. TypeScript allows us to define arrays with specific types, providing type safety and preventing errors.

### 1. **Defining Basic Array Types**

TypeScript provides two main syntaxes for defining arrays:

1. **Square Bracket Notation**: `[Type]`
   - Example: `number[]` represents an array of numbers.

2. **Generic Array Type**: `Array<Type>`
   - Example: `Array<number>` also represents an array of numbers.

Both notations are equivalent and can be used interchangeably based on preference.

#### Examples

```typescript
// Using square brackets
let numbers: number[] = [1, 2, 3, 4];

// Using generic array type
let names: Array<string> = ["Alice", "Bob", "Charlie"];
```

---

### 2. **Arrays of Custom Types**

You can create arrays of custom types such as objects, classes, or even unions.

#### Example: Array of Objects

```typescript
type Person = {
  name: string;
  age: number;
};

let people: Person[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
];
```

#### Example: Array of Union Types

```typescript
let mixedArray: (number | string)[] = [1, "hello", 2, "world"];
```

---

### 3. **Multi-dimensional Arrays**

TypeScript supports multi-dimensional arrays, often used for matrices or tables. Define multi-dimensional arrays by nesting arrays in the type.

#### Example: 2D Array (Matrix)

```typescript
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

#### Example: 3D Array

```typescript
let cube: string[][][] = [
  [["a", "b"], ["c", "d"]],
  [["e", "f"], ["g", "h"]]
];
```

---

### 4. **Readonly Array**

If you want to ensure that an array cannot be modified after creation, use `ReadonlyArray<Type>`. This array type disallows methods that alter the array, such as `push` or `splice`.

#### Example: Readonly Array

```typescript
let fixedNumbers: ReadonlyArray<number> = [10, 20, 30];

// The following line will cause an error:
// fixedNumbers.push(40); // Error: Property 'push' does not exist on type 'readonly number[]'
```

### 5. **Tuple Types**

TypeScript arrays can be configured as tuples, allowing fixed types and lengths for each element. Tuples are especially useful when the array represents a specific structure.

#### Example: Tuple Array

```typescript
let user: [number, string, boolean] = [1, "Alice", true];

// Accessing tuple elements
console.log(user[0]); // Output: 1
console.log(user[1]); // Output: Alice
```

#### Using Array Methods on Tuples

- TypeScript infers the type for each element when using methods like `push`, but the tuple’s original types are enforced.

---

### 6. **Array Methods with Type Inference**

TypeScript provides strong typing on array methods, improving type safety when manipulating arrays.

#### Example: `map`, `filter`, `reduce`

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];

// Using map
let doubled = numbers.map((num) => num * 2); // Type: number[]

// Using filter
let evens = numbers.filter((num) => num % 2 === 0); // Type: number[]

// Using reduce
let sum = numbers.reduce((acc, num) => acc + num, 0); // Type: number
```

---

### 7. **Union Arrays and Mixed Types**

TypeScript allows arrays containing multiple types by using union types.

#### Example: Array with Union Types

```typescript
let data: (string | number)[] = ["text", 100, "hello", 200];
```

---

### 8. **Type Aliases for Arrays**

For complex arrays, defining type aliases can improve code readability.

#### Example: Type Alias for an Array of Objects

```typescript
type Product = {
  id: number;
  name: string;
  price: number;
};

let products: Product[] = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 }
];
```

---

### 9. **Advanced Type Guards with Arrays**

Type guards help TypeScript infer types in union arrays during runtime checks.

#### Example: Type Guard for Union Arrays

```typescript
let items: (string | number)[] = ["apple", 2, "banana", 4];

function filterStrings(arr: (string | number)[]): string[] {
  return arr.filter((item): item is string => typeof item === "string");
}

let stringsOnly = filterStrings(items); // Type: string[]
```

---

### Summary of Key Concepts

- **Basic Array Types**: Defined using either `[]` or `Array<type>`.
- **Arrays of Custom Types**: Enables creation of structured or union-based arrays.
- **Multi-dimensional Arrays**: Define arrays of arrays, useful for matrices.
- **Readonly Array**: Ensures array immutability.
- **Tuples**: Fixed-length and fixed-type arrays, useful for specific structures.
- **Array Methods with Type Inference**: TypeScript enhances array methods like `map`, `filter`, and `reduce` with inferred types.
- **Union Arrays and Mixed Types**: Define arrays with multiple possible types.
- **Type Aliases for Complex Arrays**: Enhances readability and code maintenance.
- **Type Guards with Arrays**: Adds runtime checks to infer specific types.

These array types and configurations make TypeScript powerful for handling collections with precise type control.