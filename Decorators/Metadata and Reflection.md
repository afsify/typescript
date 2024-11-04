# Metadata and Reflection in TypeScript

Metadata and Reflection in TypeScript provide ways to inspect and manipulate information about program elements (e.g., classes, methods) at runtime. TypeScript offers metadata support primarily through the `reflect-metadata` library and decorators.

### 1. Understanding Metadata in TypeScript

**Metadata** refers to data about data—extra information that describes other data, such as type information, parameter details, or custom attributes. Metadata is commonly used in TypeScript for:
   - Storing additional information about classes, methods, properties, or parameters.
   - Simplifying the process of using external libraries, frameworks, or API integrations.
   - Enabling advanced capabilities, like dependency injection in frameworks (e.g., Angular).

#### Key Points about Metadata:
   - Metadata in TypeScript is typically added using **decorators** and stored using the `reflect-metadata` library.
   - Decorators create annotations that add metadata, which can then be accessed using reflection.

### 2. Setting Up `reflect-metadata`

To work with metadata in TypeScript, you need to install the `reflect-metadata` package. This library allows for storing and retrieving metadata at runtime.

```bash
npm install reflect-metadata
```

Then, import `reflect-metadata` at the beginning of your main file to enable metadata reflection.

```typescript
import "reflect-metadata";
```

### 3. Using Metadata with Decorators

Decorators allow you to add metadata to classes, methods, or properties. TypeScript supports several types of decorators:
   - **Class Decorators**: Add metadata to classes.
   - **Property Decorators**: Add metadata to properties.
   - **Method Decorators**: Add metadata to methods.
   - **Parameter Decorators**: Add metadata to method parameters.

To create a decorator that adds metadata, you can use the `Reflect.defineMetadata` function. To retrieve metadata, use `Reflect.getMetadata`.

### 4. Example of Metadata with Class Decorators

The following example demonstrates how to add metadata to a class using a custom decorator.

```typescript
import "reflect-metadata";

function LogMetadata(target: Function) {
    Reflect.defineMetadata("role", "admin", target);
}

@LogMetadata
class User {
    constructor(public name: string) {}
}

// Retrieving metadata
const role = Reflect.getMetadata("role", User);
console.log(role); // Output: "admin"
```

In this example:
   - The `LogMetadata` decorator adds metadata (`role: "admin"`) to the `User` class.
   - `Reflect.getMetadata` retrieves the metadata from the class.

### 5. Method and Property Metadata

You can use similar techniques to add metadata to properties and methods.

#### Property Metadata

```typescript
function PropertyMetadata(target: any, propertyKey: string) {
    Reflect.defineMetadata("propertyInfo", "This is a special property", target, propertyKey);
}

class Car {
    @PropertyMetadata
    model: string;

    constructor(model: string) {
        this.model = model;
    }
}

// Retrieve property metadata
const propertyInfo = Reflect.getMetadata("propertyInfo", Car.prototype, "model");
console.log(propertyInfo); // Output: "This is a special property"
```

#### Method Metadata

```typescript
function MethodMetadata(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    Reflect.defineMetadata("methodInfo", "This method is important", target, propertyKey);
}

class Order {
    @MethodMetadata
    processOrder() {
        console.log("Order processed.");
    }
}

// Retrieve method metadata
const methodInfo = Reflect.getMetadata("methodInfo", Order.prototype, "processOrder");
console.log(methodInfo); // Output: "This method is important"
```

### 6. Parameter Metadata

You can add metadata to specific parameters of a method using parameter decorators.

```typescript
function ParamMetadata(target: Object, propertyKey: string, parameterIndex: number) {
    Reflect.defineMetadata("paramInfo", "ID Parameter", target, propertyKey);
}

class Product {
    getProduct(@ParamMetadata id: number) {
        console.log(`Fetching product with id: ${id}`);
    }
}

// Retrieve parameter metadata
const paramInfo = Reflect.getMetadata("paramInfo", Product.prototype, "getProduct");
console.log(paramInfo); // Output: "ID Parameter"
```

### 7. Using Reflection to Access Metadata

Reflection is the process of examining and modifying the behavior of applications at runtime. In TypeScript, the `reflect-metadata` library enables reflection by allowing us to:
   - Access metadata about program elements dynamically.
   - Perform runtime type checks or dependency injections.

For example, you can use reflection to dynamically check the metadata of methods or properties and take actions based on it.

### 8. Practical Applications of Metadata and Reflection

- **Dependency Injection**: Metadata is used to inject dependencies by marking classes or methods as injectable.
- **Frameworks**: Many frameworks, such as Angular, rely heavily on metadata for dependency management and component definitions.
- **Validation**: Metadata can help validate properties or methods by marking required fields or types.
- **Logging and Monitoring**: Metadata can mark methods or classes that need specific logging or monitoring, enabling custom logging behavior.

### Summary

- **Metadata** provides additional information about classes, methods, and parameters.
- **Reflection** allows dynamic inspection and use of metadata at runtime.
- **Decorators** are commonly used to add metadata, and `reflect-metadata` provides functions to define and retrieve metadata.
- **Applications**: Metadata and Reflection are essential for dependency injection, frameworks, validation, and custom behaviors in TypeScript.

---

Metadata and Reflection are powerful tools for building scalable and organized applications in TypeScript, especially when creating libraries or working with complex frameworks.