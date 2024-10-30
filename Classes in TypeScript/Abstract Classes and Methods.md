# Abstract Classes and Methods

**Definition:**
Abstract classes are classes that cannot be instantiated directly and are designed to be subclassed. They can contain abstract methods, which are methods without an implementation, forcing derived classes to provide their own implementations.

### Key Characteristics

1. **Cannot be Instantiated**:
   - You cannot create an instance of an abstract class directly.

2. **Abstract Methods**:
   - These methods do not have an implementation in the abstract class. They must be implemented in derived (subclass) classes.

3. **Concrete Methods**:
   - Abstract classes can also have concrete methods (methods with an implementation) that can be inherited by derived classes.

### Syntax

**Defining an Abstract Class**:
```typescript
abstract class ClassName {
    abstract methodName(param: type): returnType; // Abstract method
    concreteMethod(): returnType { // Concrete method
        // Implementation
    }
}
```

### Example

**Abstract Class Example**:
```typescript
abstract class Animal {
    abstract makeSound(): void; // Abstract method

    move(): void { // Concrete method
        console.log("Moving...");
    }
}
```

**Subclass Implementation**:
```typescript
class Dog extends Animal {
    makeSound(): void { // Implementing the abstract method
        console.log("Woof!");
    }
}

class Cat extends Animal {
    makeSound(): void { // Implementing the abstract method
        console.log("Meow!");
    }
}

const dog = new Dog();
dog.makeSound(); // Output: Woof!
dog.move(); // Output: Moving...

const cat = new Cat();
cat.makeSound(); // Output: Meow!
cat.move(); // Output: Moving...
```

### Abstract Classes and Constructors

Abstract classes can have constructors, which can be called from derived classes:
```typescript
abstract class Shape {
    constructor(public color: string) {}

    abstract area(): number; // Abstract method
}

class Circle extends Shape {
    constructor(color: string, public radius: number) {
        super(color); // Call the constructor of the abstract class
    }

    area(): number { // Implementing the abstract method
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle("red", 5);
console.log(circle.color); // Output: red
console.log(circle.area()); // Output: 78.53981633974483
```

### Summary of Key Concepts

- **Abstract Classes**: Serve as blueprints for other classes and cannot be instantiated.
- **Abstract Methods**: Must be implemented by derived classes.
- **Concrete Methods**: Can be defined within abstract classes and inherited by subclasses.
- **Constructors**: Abstract classes can have constructors that can be called in derived classes.
