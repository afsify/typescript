# Inheritance and Method Overriding in TypeScript

Inheritance is a core concept in object-oriented programming that allows a class to inherit properties and methods from another class. In TypeScript, this is implemented using the `extends` keyword. Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its parent class.

## 1. Inheritance

Inheritance enables code reuse and establishes a relationship between classes. A child class (subclass) inherits from a parent class (superclass).

### Example of Inheritance:

```typescript
class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  // Dog class inherits from Animal
  makeSound(): void {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Output: 'Buddy barks.'
```

### Key Points:

- Use the `extends` keyword to create a subclass.
- The subclass inherits properties and methods from the superclass.
- The constructor of the superclass can be called using `super()`.

## 2. Method Overriding

Method overriding allows a subclass to provide a specific implementation for a method that is already defined in its superclass. This helps in defining specialized behavior.

### Example of Method Overriding:

```typescript
class Cat extends Animal {
  // Cat class overrides the makeSound method
  makeSound(): void {
    console.log(`${this.name} meows.`);
  }
}

const cat = new Cat("Whiskers");
cat.makeSound(); // Output: 'Whiskers meows.'
```

### Calling the Superclass Method

You can call the overridden method from the superclass using `super.methodName()`.

```typescript
class Bird extends Animal {
  makeSound(): void {
    super.makeSound(); // Call the superclass method
    console.log(`${this.name} chirps.`);
  }
}

const bird = new Bird("Tweety");
bird.makeSound(); 
// Output: 
// 'Tweety makes a sound.'
// 'Tweety chirps.'
```

## 3. Access Modifiers

Inheritance works with access modifiers (`public`, `protected`, `private`) to control the visibility of properties and methods.

- **public**: Accessible from anywhere (default).
- **protected**: Accessible within the class and its subclasses.
- **private**: Accessible only within the class.

### Example of Access Modifiers:

```typescript
class Vehicle {
  constructor(protected brand: string) {} // Protected property

  public getBrand(): string {
    return this.brand; // Accessible in subclasses
  }
}

class Car extends Vehicle {
  constructor(brand: string, private model: string) {
    super(brand);
  }

  public getDetails(): string {
    return `${this.getBrand()} ${this.model}`;
  }
}

const car = new Car("Toyota", "Corolla");
console.log(car.getDetails()); // Output: 'Toyota Corolla'
// console.log(car.brand); // Error: Property 'brand' is protected and only accessible within class 'Vehicle' and its subclasses.
```

## 4. Abstract Classes

Abstract classes are classes that cannot be instantiated on their own and can include abstract methods that must be implemented by subclasses.

### Example of Abstract Class:

```typescript
abstract class Shape {
  abstract area(): number; // Abstract method

  display(): void {
    console.log(`Area: ${this.area()}`);
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  area(): number {
    return this.width * this.height; // Implementation of abstract method
  }
}

const rectangle = new Rectangle(5, 10);
rectangle.display(); // Output: 'Area: 50'
```

## Summary of Key Concepts

- **Inheritance**: A mechanism to create a new class based on an existing class using the `extends` keyword.
- **Method Overriding**: A subclass can provide a specific implementation of a method already defined in its superclass.
- **Access Modifiers**: Control visibility of properties and methods (`public`, `protected`, `private`).
- **Abstract Classes**: Define base classes that cannot be instantiated and can contain abstract methods to be implemented by subclasses.

Inheritance and method overriding promote code reuse and establish a clear hierarchy in TypeScript applications, making them easier to maintain and extend.
