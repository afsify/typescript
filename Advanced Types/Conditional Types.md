# Conditional Types in TypeScript

Conditional Types provide a way to define types based on conditions, allowing TypeScript to choose between types based on type relationships. This is particularly useful for creating flexible and reusable type utilities.

### Syntax

The syntax for Conditional Types resembles a ternary operator. The format is:
```typescript
T extends U ? X : Y
```

- **`T`**: The type to be checked.
- **`U`**: The type against which `T` is evaluated.
- **`X`**: The type returned if `T` extends `U`.
- **`Y`**: The type returned if `T` does not extend `U`.

If `T` extends `U`, `X` is returned; otherwise, `Y` is returned.

### Basic Example

```typescript
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>; // "Yes"
type Test2 = IsString<number>; // "No"
```

In this example, `IsString` returns `"Yes"` if the type `T` is `string`; otherwise, it returns `"No"`.

### Using Conditional Types for Type Transformation

Conditional types are useful for creating types that transform or filter other types.

#### Example: Filter Out `null` and `undefined`

You can use Conditional Types to remove `null` or `undefined` from a type.

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type Test1 = NonNullable<string | null>; // string
type Test2 = NonNullable<number | undefined>; // number
```

Here, `NonNullable` will remove `null` and `undefined` from a type.

### Inferring Types with Conditional Types

Conditional Types can also infer specific types within conditions using the `infer` keyword.

#### Example: Extract Return Type

You can extract the return type of a function using `infer` within a conditional type.

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser() {
    return { name: "John", age: 30 };
}

type User = ReturnType<typeof getUser>; // { name: string; age: number }
```

In this example, `ReturnType` infers the return type `R` of any function type `T` and returns it. If `T` is not a function, `never` is returned.

### Nested Conditional Types

Conditional Types can be nested to create complex type conditions.

#### Example: Conditional Type with Multiple Checks

```typescript
type TypeChecker<T> = T extends string
    ? "String"
    : T extends number
    ? "Number"
    : T extends boolean
    ? "Boolean"
    : "Other";

type Test1 = TypeChecker<string>; // "String"
type Test2 = TypeChecker<number>; // "Number"
type Test3 = TypeChecker<boolean>; // "Boolean"
type Test4 = TypeChecker<null>; // "Other"
```

This example checks if `T` is a `string`, `number`, or `boolean`, and assigns a corresponding label.

### Distributive Conditional Types

When using union types in Conditional Types, TypeScript will distribute the conditional type across each member of the union type individually.

#### Example: Distributive Behavior

```typescript
type Wrapped<T> = T extends any ? { value: T } : never;

type Result = Wrapped<string | number>; 
// Result becomes { value: string } | { value: number }
```

Here, `Wrapped<string | number>` distributes across each member of the union, producing `{ value: string } | { value: number }`.

To prevent distribution, you can wrap the union type within a tuple:

```typescript
type Wrapped<T> = [T] extends [any] ? { value: T } : never;

type Result = Wrapped<string | number>; 
// Result becomes { value: string | number }
```

### Practical Use Cases of Conditional Types

#### 1. Exclude a Type

Conditional Types can exclude a particular type from a union.

```typescript
type ExcludeType<T, U> = T extends U ? never : T;

type Result = ExcludeType<"a" | "b" | "c", "a">; // "b" | "c"
```

In this example, `ExcludeType` removes `"a"` from the union, leaving `"b" | "c"`.

#### 2. Extract a Specific Type

You can also extract specific types from a union.

```typescript
type ExtractType<T, U> = T extends U ? T : never;

type Result = ExtractType<"a" | "b" | "c", "a" | "c">; // "a" | "c"
```

This `ExtractType` only keeps types that exist in both `T` and `U`.

#### 3. Construct a Readonly Version of an Object

Using Conditional Types with `infer`, you can construct types that apply changes to properties of an object.

```typescript
type ReadonlyProperties<T> = {
    [K in keyof T]: T[K] extends Function ? T[K] : Readonly<T[K]>;
};

interface Person {
    name: string;
    age: number;
    greet(): void;
}

type ReadonlyPerson = ReadonlyProperties<Person>;
// { name: Readonly<string>; age: Readonly<number>; greet: () => void; }
```

In this example, `ReadonlyProperties` applies `Readonly` to properties of `Person` that are not functions.

### Summary of Conditional Types

- **Basic Conditional Types**: Use the `T extends U ? X : Y` syntax to create conditional types.
- **Type Transformation**: Conditional Types help transform or filter types, such as removing `null` or `undefined`.
- **Type Inference with `infer`**: Allows you to infer specific parts of a type.
- **Distributive Conditional Types**: Conditional Types distribute across union types automatically, but this can be disabled using tuples.
- **Practical Applications**: Conditional Types can be used for common type manipulations like `Exclude`, `Extract`, and creating readonly or mutable types.

Conditional Types are a versatile feature in TypeScript, enabling powerful type transformations that help create safe, flexible, and reusable type definitions.
