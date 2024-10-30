# Access Modifiers in TypeScript

Access modifiers in TypeScript define the visibility of class members (properties and methods) and help encapsulate the data within a class. TypeScript supports three main access modifiers: `public`, `private`, and `protected`.

### 1. **Public Modifier**

- **Definition**: Members marked as `public` are accessible from anywhere in the code, including outside the class.
- **Default Behavior**: If no access modifier is specified, the member is considered `public` by default.

#### Example

```typescript
class Person {
  public name: string;
  
  constructor(name: string) {
    this.name = name;
  }

  public greet(): void {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person("Alice");
person.greet(); // Output: Hello, my name is Alice.
```

### 2. **Private Modifier**

- **Definition**: Members marked as `private` are only accessible within the class that defines them. They cannot be accessed from outside the class or by subclasses.
- **Encapsulation**: The `private` modifier is used to restrict access to sensitive data and implementation details.

#### Example

```typescript
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // Output: 150
// console.log(account.balance); // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
```

### 3. **Protected Modifier**

- **Definition**: Members marked as `protected` are accessible within the class and its subclasses. They are not accessible from outside the class hierarchy.
- **Inheritance**: The `protected` modifier is useful for allowing subclasses to access and modify base class properties.

#### Example

```typescript
class Vehicle {
  protected brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

class Car extends Vehicle {
  public showBrand(): void {
    console.log(`Brand: ${this.brand}`);
  }
}

const car = new Car("Toyota");
car.showBrand(); // Output: Brand: Toyota
// console.log(car.brand); // Error: Property 'brand' is protected and only accessible within class 'Vehicle' and its subclasses.
```

### 4. **Summary of Access Modifiers**

- **Public**: Accessible from anywhere; default modifier.
- **Private**: Accessible only within the class; not accessible from subclasses or outside the class.
- **Protected**: Accessible within the class and its subclasses; not accessible from outside the class.

### 5. **Use Cases**

- **Public**:
  - When you want to allow unrestricted access to class members.
  - Methods that should be exposed as part of the class API.

- **Private**:
  - To hide sensitive data or implementation details from users of the class.
  - Ensures that certain methods and properties can only be modified by the class itself.

- **Protected**:
  - When creating a base class that is intended to be extended.
  - To allow subclasses to access certain properties or methods while keeping them hidden from outside access.

### 6. **Key Concepts**

- Access modifiers enhance encapsulation and promote better software design by controlling visibility.
- Use access modifiers to implement data hiding and protect class integrity.
- Properly choosing access modifiers improves code maintainability and readability.

---

Understanding access modifiers is essential for creating well-structured and maintainable TypeScript applications, allowing you to control how class members are accessed and modified.