# Getters and Setters in TypeScript

Getters and setters in TypeScript are special methods that allow you to define how to access and modify the properties of a class. They are used to encapsulate data and provide controlled access to class properties, enabling validation and computed properties.

### Key Concepts

1. **Getters**: A getter is a method that retrieves the value of a property. It is defined using the `get` keyword.
2. **Setters**: A setter is a method that sets or updates the value of a property. It is defined using the `set` keyword.
3. **Encapsulation**: Getters and setters help enforce encapsulation by controlling how properties are accessed and modified.

### Syntax

The syntax for defining getters and setters is as follows:

```typescript
class ClassName {
    private _propertyName: PropertyType;

    constructor(value: PropertyType) {
        this._propertyName = value;
    }

    // Getter
    get propertyName(): PropertyType {
        return this._propertyName;
    }

    // Setter
    set propertyName(value: PropertyType) {
        this._propertyName = value; // You can add validation logic here
    }
}
```

### Example of Getters and Setters

1. **Simple Example**

   Here is an example of a class that uses getters and setters to manage a `radius` property of a circle.

   **Example:**
   ```typescript
   class Circle {
       private _radius: number;

       constructor(radius: number) {
           this._radius = radius;
       }

       // Getter for radius
       get radius(): number {
           return this._radius;
       }

       // Setter for radius with validation
       set radius(value: number) {
           if (value > 0) {
               this._radius = value;
           } else {
               console.log("Radius must be a positive number.");
           }
       }

       // Method to calculate area
       get area(): number {
           return Math.PI * this._radius * this._radius;
       }
   }

   const circle = new Circle(5);
   console.log(circle.radius); // Output: 5
   console.log(circle.area);   // Output: 78.53981633974483

   circle.radius = 10;         // Set a new radius
   console.log(circle.radius); // Output: 10
   console.log(circle.area);   // Output: 314.1592653589793

   circle.radius = -3;         // Attempt to set an invalid radius
   // Output: "Radius must be a positive number."
   ```

### Benefits of Using Getters and Setters

1. **Validation**: You can validate input data before setting a property.
2. **Computed Properties**: You can define properties that are calculated dynamically based on other properties.
3. **Encapsulation**: They help hide the implementation details of how a property is stored or calculated.
4. **Consistency**: You can enforce rules consistently across all access and modification points.

### Usage in Inheritance

Getters and setters can also be used in inherited classes, allowing for further customization of property access and modification.

**Example:**
```typescript
class Animal {
    protected _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

class Dog extends Animal {
    private _breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this._breed = breed;
    }

    get breed(): string {
        return this._breed;
    }

    set breed(value: string) {
        this._breed = value;
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.name);  // Output: "Buddy"
console.log(dog.breed); // Output: "Golden Retriever"

dog.name = "Max";
dog.breed = "Labrador";
console.log(dog.name);  // Output: "Max"
console.log(dog.breed); // Output: "Labrador"
```

### Summary of Getters and Setters

- **Getters** provide a way to retrieve the value of a property and are defined using the `get` keyword.
- **Setters** provide a way to modify the value of a property and are defined using the `set` keyword.
- They enable encapsulation, validation, and computed properties, enhancing data integrity and usability.
- Getters and setters can be inherited and customized in derived classes.

---

These notes cover the essentials of getters and setters in TypeScript. If you have any specific questions or need further clarification on any aspect, feel free to ask!