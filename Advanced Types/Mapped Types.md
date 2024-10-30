# Mapped Types

**Definition**:
Mapped types allow you to create new types by transforming properties of an existing type. They enable flexibility in defining types dynamically based on other types, making it easier to modify or adapt structures in a scalable way.

### Key Characteristics of Mapped Types

1. **Transformation Based on Keys**:
   - Mapped types iterate over the keys of an existing type and apply transformations to create a new type.

2. **Syntax**:
   - Use the `in` keyword along with TypeScript’s `keyof` keyword to create a mapped type.
   - `T[K]` represents the type of the property `K` in the type `T`.

3. **Utility Types**:
   - TypeScript provides several built-in utility types using mapped types (e.g., `Partial`, `Readonly`, `Record`).

### Basic Syntax

**Creating a Mapped Type**:
```typescript
type MappedType<T> = {
    [Key in keyof T]: Transformation;
};
```

### Examples

1. **Basic Mapped Type**:
   ```typescript
   type Person = {
       name: string;
       age: number;
   };

   type ReadonlyPerson = {
       [K in keyof Person]: Person[K];
   };
   ```

   - Here, `ReadonlyPerson` has the same properties as `Person`, but with each property readonly.

2. **Partial Utility Type**:
   The `Partial` type makes all properties of a type optional.
   ```typescript
   type Partial<T> = {
       [P in keyof T]?: T[P];
   };

   type User = {
       username: string;
       email: string;
   };

   type OptionalUser = Partial<User>;
   // OptionalUser is { username?: string; email?: string }
   ```

3. **Readonly Utility Type**:
   The `Readonly` type makes all properties of a type immutable (readonly).
   ```typescript
   type Readonly<T> = {
       readonly [P in keyof T]: T[P];
   };

   type Car = {
       make: string;
       model: string;
   };

   type ImmutableCar = Readonly<Car>;
   // ImmutableCar is { readonly make: string; readonly model: string }
   ```

4. **Record Utility Type**:
   The `Record` type constructs a type with specified keys and values.
   ```typescript
   type Record<K extends keyof any, T> = {
       [P in K]: T;
   };

   type UserRoles = "admin" | "user" | "guest";
   type RolePermissions = Record<UserRoles, boolean>;

   // RolePermissions is:
   // {
   //   admin: boolean;
   //   user: boolean;
   //   guest: boolean;
   // }
   ```

5. **Conditional Mapped Types**:
   You can use conditional types within mapped types for further customization.
   ```typescript
   type Nullable<T> = {
       [P in keyof T]: T[P] | null;
   };

   type Product = {
       name: string;
       price: number;
   };

   type NullableProduct = Nullable<Product>;
   // NullableProduct is { name: string | null; price: number | null }
   ```

### Advanced Example

**Mapping with Conditional and Indexed Access Types**:
```typescript
type FilterByType<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type Shape = {
    color: string;
    sides: number;
    area: () => number;
};

type StringProperties = FilterByType<Shape, string>;
// StringProperties is "color"
```

### Summary of Key Concepts

- **Mapped Types**: Transform types by iterating over each property in an existing type.
- **Utility Types**: `Partial`, `Readonly`, `Record`, and others are built-in mapped types that simplify common transformations.
- **Dynamic and Conditional Mapping**: Mapped types can include conditional logic, enabling complex and flexible type transformations.
