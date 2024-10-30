# Template Literal Types in TypeScript

Template Literal Types are a powerful feature in TypeScript that allows the creation of string types based on string literals. This feature enables more flexible and expressive type definitions, allowing developers to define types that can represent specific string patterns.

### 1. **What Are Template Literal Types?**

Template Literal Types allow for the creation of new string types by combining string literals, unions, and other types into a new type. This is similar to how template literals work in JavaScript but applied to types.

### 2. **Syntax**

The syntax for creating a template literal type uses backticks (` `) and can incorporate string literals and union types:

```typescript
type TypeName = `prefix_${string}`;
```

This defines a type that represents any string starting with `prefix_`.

### 3. **Basic Examples**

#### a) **Simple Template Literal Type**

```typescript
type Greeting = `Hello, ${string}`;
```

- The type `Greeting` can represent any string that starts with "Hello," followed by any other characters (e.g., "Hello, World!", "Hello, TypeScript!").

#### b) **Combining String Literals**

```typescript
type Color = 'red' | 'green' | 'blue';
type ColorWithShade = `${Color}-shade`;
```

- The type `ColorWithShade` can represent "red-shade", "green-shade", or "blue-shade".

### 4. **Using Template Literal Types with Unions**

Template Literal Types can be particularly useful when working with unions to generate more specific types:

```typescript
type Event = 'click' | 'hover';
type EventWithAction = `${Event}-action`;
```

- Here, `EventWithAction` results in "click-action" or "hover-action".

### 5. **Creating Complex Types**

Template Literal Types can also be combined with other types to create more complex types:

```typescript
type Route = `/${string}`;
type ApiEndpoint = `api${Route}`;
```

- The type `ApiEndpoint` can represent any string that matches the pattern "api/something" (e.g., "api/users", "api/products").

### 6. **Dynamic Object Keys with Template Literal Types**

Template Literal Types can be utilized to create dynamic object keys in TypeScript, enhancing the type safety of objects:

```typescript
type Actions = 'create' | 'update' | 'delete';
type ActionHandlers = {
  [K in `${Actions}Handler`]: () => void;
};

// Example usage
const handlers: ActionHandlers = {
  createHandler: () => console.log('Creating...'),
  updateHandler: () => console.log('Updating...'),
  deleteHandler: () => console.log('Deleting...'),
};
```

### 7. **Using Template Literal Types with Conditional Types**

You can also combine template literal types with conditional types for even more expressive type definitions:

```typescript
type UserStatus = 'active' | 'inactive';
type StatusMessage<T extends UserStatus> = `User is currently ${T}`;

let activeMessage: StatusMessage<'active'> = 'User is currently active'; // Valid
let inactiveMessage: StatusMessage<'inactive'> = 'User is currently inactive'; // Valid
```

### 8. **Best Practices**

- **Use for String Patterns**: Use Template Literal Types when you want to define types based on string patterns, especially when those patterns can be derived from existing string literal types.
- **Combine with Unions**: They are particularly useful when creating types that depend on unions, allowing for more concise and readable type definitions.
- **Avoid Over-Complication**: While powerful, avoid using template literal types for overly complex structures that can lead to difficult-to-read code. Keep it simple and readable.

### 9. **Limitations**

- **Runtime Values**: Template Literal Types do not evaluate at runtime; they only affect type checking at compile time.
- **No Type Instantiation**: Template Literal Types cannot be instantiated, so they cannot be used to create new string values directly.

### Summary of Key Points

1. **Purpose**: Template Literal Types allow the creation of new string types based on existing string literals, enhancing type flexibility and expressiveness.
2. **Syntax**: Defined using backticks (` `) with string literals and union types.
3. **Applications**: Useful for creating complex types, dynamic object keys, and working with unions.
4. **Best Practices**: Use for defining clear string patterns, combine with unions, and maintain code readability.
5. **Limitations**: They only influence type checking and cannot create runtime values.

---

Template Literal Types are a powerful feature that enhances TypeScript's type system, making it easier to create expressive and flexible type definitions that accurately reflect the intended structure of string data.