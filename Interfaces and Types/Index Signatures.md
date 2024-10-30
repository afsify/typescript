# Index Signatures

**Definition:**
Index signatures allow you to define the type of keys and values for an object. This is useful when you want to create objects that can have properties with dynamic names, rather than predefined properties.

**Syntax:**
```typescript
interface InterfaceName {
    [key: string]: ValueType;
}
```

### Key Characteristics

1. **Dynamic Property Names**:
   - You can define objects with properties that are not known at compile time.

2. **Key Types**:
   - The key can be a `string` or `number`, but it is commonly a `string`.

3. **Value Types**:
   - The value can be any valid TypeScript type (e.g., string, number, boolean, object, etc.).

### Example

**Basic Index Signature Example**:
```typescript
interface StringMap {
    [key: string]: string;
}

const example: StringMap = {
    name: "Alice",
    city: "Wonderland",
    country: "Imagination"
};

console.log(example.name); // Output: Alice
console.log(example["city"]); // Output: Wonderland
```

**Numeric Index Signature**:
You can also create an index signature with a numeric key:
```typescript
interface NumberMap {
    [index: number]: string;
}

const numberExample: NumberMap = ["apple", "banana", "cherry"];
console.log(numberExample[0]); // Output: apple
```

### Combining with Other Properties

You can combine index signatures with other known properties:
```typescript
interface Person {
    name: string;
    age: number;
    [key: string]: any; // Allows additional properties of any type
}

const person: Person = {
    name: "Bob",
    age: 30,
    occupation: "Engineer",
    hobbies: ["reading", "traveling"]
};

console.log(person.name); // Output: Bob
console.log(person["occupation"]); // Output: Engineer
```

### Constraints with Index Signatures

When you define an index signature, all other properties must be assignable to the value type defined in the index signature:

```typescript
interface Animal {
    name: string;
    age: number;
    [key: string]: string | number; // Value can be string or number
}

const dog: Animal = {
    name: "Buddy",
    age: 5,
    breed: "Labrador" // Valid because it's a string
};

// This will cause an error:
// const cat: Animal = {
//     name: "Whiskers",
//     age: "three" // Error: Type 'string' is not assignable to type 'number'
// };
```

### Summary of Key Concepts

- **Index Signatures** allow objects to have dynamic properties.
- They are defined using a specific syntax in interfaces or types.
- The key can be a string or number, and the value can be any valid TypeScript type.
- Index signatures can be combined with other properties, but all properties must be compatible with the value type.
