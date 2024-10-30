# Literal Types in TypeScript

In TypeScript, literal types let you specify exact values a variable can have, rather than just a general type. These include specific strings, numbers, and booleans. Literal types are particularly useful for creating highly precise, restrictive types.

## 1. String Literal Types

String literal types allow variables to hold a specific string value. This is useful for defining constants and creating discriminated unions.

### Example of String Literal Types

```typescript
let direction: "north" | "south" | "east" | "west";

direction = "north"; // Valid
direction = "south"; // Valid
direction = "up";    // Error: Type '"up"' is not assignable to type '"north" | "south" | "east" | "west"'
```

In this example:
- `direction` can only have one of the four specified values.

## 2. Numeric Literal Types

Numeric literal types allow for restricting a variable to specific numeric values.

### Example of Numeric Literal Types

```typescript
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

let roll: DiceRoll;
roll = 4; // Valid
roll = 7; // Error: Type '7' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'
```

Here:
- `roll` can only be assigned one of the numbers defined in the `DiceRoll` type.

## 3. Boolean Literal Types

Boolean literals restrict a variable to either `true` or `false`. While less common, they can be useful for toggles or binary states.

### Example of Boolean Literal Types

```typescript
type IsEnabled = true;

let featureEnabled: IsEnabled;
featureEnabled = true; // Valid
featureEnabled = false; // Error: Type 'false' is not assignable to type 'true'
```

This restricts `featureEnabled` to only `true`.

## 4. Literal Types in Function Parameters

Literal types are often used with function parameters to enforce specific values.

### Example with Function Parameters

```typescript
function move(direction: "left" | "right" | "up" | "down") {
  console.log(`Moving ${direction}`);
}

move("up");    // Valid
move("down");  // Valid
move("forward"); // Error: Argument of type '"forward"' is not assignable to parameter
```

In this function:
- Only specific directions are allowed, enforcing strict control over the input values.

## 5. Combining Literal Types with Type Aliases

Literal types can be grouped using type aliases, which allows you to reuse the type definitions across the code.

### Example with Type Aliases

```typescript
type Pet = "dog" | "cat" | "bird";

function adopt(pet: Pet) {
  console.log(`Adopted a ${pet}`);
}

adopt("cat"); // Valid
adopt("fish"); // Error: Argument of type '"fish"' is not assignable to parameter
```

By defining a `Pet` type alias, you simplify function definitions and improve readability.

## 6. Discriminated Unions with Literal Types

Literal types are often used in discriminated unions to create types with distinct, identifiable structures.

### Example of Discriminated Unions

```typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number };

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}

const myCircle: Shape = { kind: "circle", radius: 5 };
console.log(getArea(myCircle)); // Output: 78.53981633974483
```

In this example:
- The `kind` property acts as a discriminator, making it easier to apply different logic based on the shape type.

## 7. Literal Inference with `as const`

TypeScript can infer literal types using `as const`, allowing you to define readonly arrays and objects with precise literal types.

### Example with `as const`

```typescript
const colors = ["red", "green", "blue"] as const;

function pickColor(color: typeof colors[number]) {
  console.log(`You picked ${color}`);
}

pickColor("red");   // Valid
pickColor("yellow"); // Error: Argument of type '"yellow"' is not assignable
```

Here:
- `colors` is inferred as a tuple of literal types (`"red" | "green" | "blue"`), allowing `pickColor` to accept only these values.

## Summary of Key Concepts

- **String, Numeric, and Boolean Literals**: Define specific allowable values.
- **Type Aliases**: Enhance readability and reusability.
- **Function Parameters**: Restrict values to specific literals.
- **Discriminated Unions**: Use literals as identifiers in union types.
- **`as const` Assertion**: Enforces readonly, literal types in arrays and objects.

Literal types increase type safety and improve the clarity and reliability of code, making them valuable for creating precise, well-defined types in TypeScript.
