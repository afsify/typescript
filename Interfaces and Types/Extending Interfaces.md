# Extending Interfaces in TypeScript

In TypeScript, interfaces are powerful tools for defining the structure of objects. One of the significant features of interfaces is the ability to extend them. This allows you to create new interfaces that inherit properties from existing ones, promoting code reuse and enhancing type safety.

### 1. **Definition of Interfaces**

An interface in TypeScript defines a contract for the shape of an object. It can include properties, methods, and index signatures.

#### Example

```typescript
interface Person {
  name: string;
  age: number;
  greet(): void;
}
```

### 2. **Extending Interfaces**

You can extend an interface by creating a new interface that includes all the properties of the original interface, along with any additional properties or methods.

#### Syntax

```typescript
interface NewInterface extends ExistingInterface {
  // Additional properties and methods
}
```

#### Example

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
  getDetails(): string;
}
```

In this example, the `Employee` interface extends the `Person` interface, inheriting its properties and adding new ones.

### 3. **Using Extended Interfaces**

You can use the extended interface just like any other interface. It can be implemented by classes or used to type objects.

#### Example

```typescript
const employee: Employee = {
  name: "Alice",
  age: 30,
  employeeId: 123,
  department: "Engineering",
  getDetails() {
    return `${this.name}, Age: ${this.age}, ID: ${this.employeeId}, Department: ${this.department}`;
  }
};

console.log(employee.getDetails()); 
// Output: Alice, Age: 30, ID: 123, Department: Engineering
```

### 4. **Multiple Inheritance**

TypeScript allows an interface to extend multiple interfaces. This feature enables you to combine properties from various interfaces into a single one.

#### Syntax

```typescript
interface NewInterface extends InterfaceA, InterfaceB {
  // Additional properties and methods
}
```

#### Example

```typescript
interface Person {
  name: string;
  age: number;
}

interface Address {
  street: string;
  city: string;
}

interface User extends Person, Address {
  email: string;
}

const user: User = {
  name: "Bob",
  age: 25,
  street: "123 Main St",
  city: "Anytown",
  email: "bob@example.com"
};

console.log(user);
// Output: { name: 'Bob', age: 25, street: '123 Main St', city: 'Anytown', email: 'bob@example.com' }
```

### 5. **Method Overriding in Extended Interfaces**

When extending interfaces, you can also override methods from the base interface in the derived interface. The derived method can provide a different implementation.

#### Example

```typescript
interface Animal {
  sound(): string;
}

interface Dog extends Animal {
  sound(): string; // Overriding the sound method
}

const dog: Dog = {
  sound() {
    return "Woof!";
  }
};

console.log(dog.sound()); // Output: Woof!
```

### 6. **Extending Interfaces in Classes**

Classes can implement extended interfaces, ensuring that they meet the contract defined by the base interface and the extended properties.

#### Example

```typescript
interface Vehicle {
  brand: string;
  drive(): void;
}

interface ElectricVehicle extends Vehicle {
  batteryCapacity: number;
}

class Tesla implements ElectricVehicle {
  brand: string;
  batteryCapacity: number;

  constructor(brand: string, batteryCapacity: number) {
    this.brand = brand;
    this.batteryCapacity = batteryCapacity;
  }

  drive() {
    console.log(`Driving a ${this.brand} electric vehicle with a battery capacity of ${this.batteryCapacity} kWh.`);
  }
}

const myTesla = new Tesla("Tesla Model S", 100);
myTesla.drive(); 
// Output: Driving a Tesla Model S electric vehicle with a battery capacity of 100 kWh.
```

### 7. **Key Concepts**

- **Inheritance**: Interfaces allow you to inherit properties and methods from other interfaces, promoting code reuse.
- **Multiple Interfaces**: You can extend multiple interfaces, combining their properties into a single interface.
- **Method Overriding**: Extended interfaces can override methods from base interfaces, allowing for tailored implementations.
- **Implementation in Classes**: Classes can implement extended interfaces, ensuring they adhere to the defined contract.

### 8. **Use Cases**

- **Code Reusability**: Reduces duplication by allowing shared properties across multiple interfaces.
- **API Design**: Facilitates designing complex types for APIs by extending base interfaces with additional details.
- **Type Safety**: Enhances type safety by ensuring that classes or objects conform to the extended interface structure.

### 9. **Summary of Key Concepts**

- **Extending Interfaces**: Create new interfaces that inherit from existing ones.
- **Multiple Inheritance**: Combine properties from multiple interfaces into one.
- **Method Overriding**: Override methods in derived interfaces for specific implementations.
- **Class Implementation**: Classes can implement extended interfaces to adhere to defined contracts.

---

Extending interfaces in TypeScript is a powerful feature that enhances the ability to model complex types and promotes code organization and maintainability.