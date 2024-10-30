# Generic Interfaces and Classes in TypeScript

Generics in TypeScript allow you to create reusable, flexible code by letting you work with types as parameters. Generic Interfaces and Classes make it possible to create structures that work across multiple data types without sacrificing type safety.

### 1. **Generic Interfaces**

- **Definition**: A generic interface is an interface that can operate with different types, specified when the interface is implemented or used.
- **Syntax**: Define a generic type parameter using angle brackets `<T>` after the interface name.

#### Example: Generic Interface for a Repository Pattern

```typescript
interface Repository<T> {
  add(item: T): void;
  get(id: number): T;
}

class User {
  constructor(public id: number, public name: string) {}
}

class UserRepository implements Repository<User> {
  private users: User[] = [];

  add(user: User): void {
    this.users.push(user);
  }

  get(id: number): User {
    return this.users.find(user => user.id === id) as User;
  }
}

const userRepo = new UserRepository();
userRepo.add(new User(1, "Alice"));
console.log(userRepo.get(1)); // Output: User { id: 1, name: 'Alice' }
```

#### Benefits of Generic Interfaces
- **Type Flexibility**: Allows different types to be used without rewriting code.
- **Type Safety**: Enforces type consistency, reducing runtime errors.
- **Reusability**: Enables defining methods and properties that work across various types.

### 2. **Generic Classes**

- **Definition**: A generic class allows you to define class members (properties and methods) that work with a specified type, which can be set when the class is instantiated.
- **Syntax**: Similar to interfaces, you define the type parameter after the class name in angle brackets `<T>`.

#### Example: Generic Stack Class

```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.peek()); // Output: 20
console.log(numberStack.pop());  // Output: 20

const stringStack = new Stack<string>();
stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack.peek()); // Output: World
```

#### Benefits of Generic Classes
- **Type Safety with Flexibility**: Enforces a specific type for class members while allowing flexibility across instances.
- **Reusability**: Reduces the need for redundant code by allowing a single class to handle different data types.
- **Type Inference**: TypeScript can infer types from usage, making it more straightforward to use generic classes without manually specifying the type in every instance.

### 3. **Generic Constraints**

- **Definition**: Constraints are used to restrict the types that can be passed to a generic. This is useful when a type must adhere to a certain structure or interface.
- **Syntax**: Use the `extends` keyword to add constraints to a generic type.

#### Example: Generic with Constraints

```typescript
interface Identifiable {
  id: number;
}

class DataManager<T extends Identifiable> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }
}

class Product implements Identifiable {
  constructor(public id: number, public name: string) {}
}

const productManager = new DataManager<Product>();
productManager.add(new Product(1, "Laptop"));
console.log(productManager.get(1)); // Output: Product { id: 1, name: 'Laptop' }
```

### 4. **Using Multiple Type Parameters**

- Generics can accept multiple type parameters if needed, allowing you to work with combinations of different types.

#### Example: Pair Class with Two Type Parameters

```typescript
class Pair<T, U> {
  constructor(public first: T, public second: U) {}

  display(): void {
    console.log(`First: ${this.first}, Second: ${this.second}`);
  }
}

const pair = new Pair<string, number>("Age", 25);
pair.display(); // Output: First: Age, Second: 25
```

### 5. **Key Concepts of Generic Interfaces and Classes**

- **Type Flexibility**: Generics enable writing flexible and reusable code that can handle various types.
- **Constraints**: Constraints provide control over acceptable types, ensuring that types meet certain conditions.
- **Reusability and Type Safety**: Generics provide reusability without compromising on type safety, helping to prevent common type-related errors.

### Summary of Key Points

1. **Generic Interfaces**:
   - Enable flexible, type-safe code for various implementations.
   - Use `<T>` to define a generic type.

2. **Generic Classes**:
   - Allow classes to handle multiple types without sacrificing type safety.
   - Use `<T>` after the class name.

3. **Constraints**:
   - Limit acceptable types for a generic parameter.
   - Use `extends` for adding constraints to a generic.

---

Generics in TypeScript help you write robust, reusable, and type-safe code, ideal for handling multiple types with a single, cohesive interface or class.