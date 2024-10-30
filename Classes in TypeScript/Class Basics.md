# Class Basics in TypeScript

Classes in TypeScript provide a way to create objects that encapsulate data and behavior. They are a fundamental feature of object-oriented programming (OOP) and enable the creation of reusable components.

### Key Concepts of Classes

1. **Definition**: A class is a blueprint for creating objects with specific properties and methods.
2. **Instances**: An instance is an object created from a class.
3. **Constructor**: A special method for initializing new objects.
4. **Properties**: Variables that hold data within a class.
5. **Methods**: Functions defined inside a class that operate on class properties.

### Syntax for Defining a Class

The basic syntax for defining a class is as follows:

```typescript
class ClassName {
    // Properties
    propertyName: PropertyType;

    // Constructor
    constructor(parameter: ParameterType) {
        // Initialization logic
    }

    // Methods
    methodName(): ReturnType {
        // Method logic
    }
}
```

### Example of a Class

1. **Defining a Simple Class**
   - Here is a simple example of a class representing a `Person`.

   **Example:**
   ```typescript
   class Person {
       // Properties
       name: string;
       age: number;

       // Constructor
       constructor(name: string, age: number) {
           this.name = name;
           this.age = age;
       }

       // Method
       greet(): string {
           return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
       }
   }

   // Creating an instance of the Person class
   const person1 = new Person("Alice", 30);
   console.log(person1.greet()); // Output: "Hello, my name is Alice and I am 30 years old."
   ```

### Class Members

1. **Properties**
   - Properties can be defined with specific access modifiers: `public`, `private`, or `protected`.

   **Example:**
   ```typescript
   class Car {
       public model: string;      // Accessible everywhere
       private year: number;      // Accessible only within the class
       protected owner: string;    // Accessible within the class and subclasses

       constructor(model: string, year: number, owner: string) {
           this.model = model;
           this.year = year;
           this.owner = owner;
       }
   }
   ```

2. **Methods**
   - Methods can also have access modifiers and can return values or be void (no return value).

   **Example:**
   ```typescript
   class Calculator {
       add(a: number, b: number): number {
           return a + b;
       }

       subtract(a: number, b: number): number {
           return a - b;
       }
   }

   const calc = new Calculator();
   console.log(calc.add(5, 3));      // Output: 8
   console.log(calc.subtract(5, 3)); // Output: 2
   ```

### Inheritance

Classes can inherit properties and methods from other classes using the `extends` keyword.

**Example:**
```typescript
class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): string {
        return `${this.name} makes a sound.`;
    }
}

class Dog extends Animal {
    bark(): string {
        return `${this.name} barks.`;
    }
}

const dog = new Dog("Buddy");
console.log(dog.speak()); // Output: "Buddy makes a sound."
console.log(dog.bark());  // Output: "Buddy barks."
```

### Access Modifiers

- **Public**: Members are accessible from anywhere.
- **Private**: Members are accessible only within the class.
- **Protected**: Members are accessible within the class and its subclasses.

### Static Members

Static members belong to the class itself rather than instances of the class. They are defined using the `static` keyword.

**Example:**
```typescript
class MathUtils {
    static PI: number = 3.14;

    static areaOfCircle(radius: number): number {
        return this.PI * radius * radius;
    }
}

console.log(MathUtils.areaOfCircle(5)); // Output: 78.5
```

### Getters and Setters

Getters and setters provide a way to access and modify properties of a class. They allow for encapsulation and validation when getting or setting values.

**Example:**
```typescript
class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    get area(): number {
        return this._width * this._height;
    }

    set width(value: number) {
        if (value > 0) {
            this._width = value;
        }
    }

    set height(value: number) {
        if (value > 0) {
            this._height = value;
        }
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // Output: 50
rect.width = 8; // Set a new width
console.log(rect.area); // Output: 80
```

### Summary of Class Basics

- **Definition**: Classes are blueprints for creating objects with properties and methods.
- **Syntax**: Use the `class` keyword, define properties and methods, and initialize with a constructor.
- **Members**: Include properties, methods, access modifiers (public, private, protected), static members, and getters/setters.
- **Inheritance**: Classes can extend other classes to inherit properties and methods.
- **Use Cases**: Classes are used to create reusable, modular components in applications.

---

These notes provide a thorough overview of class basics in TypeScript. If you have specific questions or need further details on any topic, feel free to ask!