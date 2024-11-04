# Decorators in TypeScript

Decorators in TypeScript are special functions that can modify the behavior of classes, methods, properties, and parameters. They enable metaprogramming and are useful for tasks such as logging, validation, and metadata addition.

### What are Decorators?

- Decorators are functions that can be attached to classes, methods, properties, and parameters to add additional functionality.
- They are executed at runtime and follow the syntax `@decoratorName`.
- To use decorators, TypeScript's experimental decorator support must be enabled.

### Enabling Decorators

Add `"experimentalDecorators": true` in your `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

---

## Types of Decorators

1. **Class Decorators**
2. **Method Decorators**
3. **Property Decorators**
4. **Parameter Decorators**

Each type of decorator has specific use cases and works differently.

---

### 1. Class Decorators

Class decorators are applied to a class constructor. They can modify or replace the class definition.

#### Syntax

```typescript
function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    // Do something with the class constructor
}

@classDecorator
class ExampleClass {
    constructor(public value: number) {}
}
```

#### Example: Logging Class Creation

```typescript
function Logger(constructor: Function) {
    console.log("Creating instance of:", constructor.name);
}

@Logger
class Person {
    constructor(public name: string) {}
}

const p = new Person("Alice"); // Logs "Creating instance of: Person"
```

### 2. Method Decorators

Method decorators are applied to a method of a class and can modify or replace the method's functionality. They receive three parameters: the target object, the method name, and the method descriptor.

#### Syntax

```typescript
function methodDecorator(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) {
    // Modify or wrap the method
}

class Example {
    @methodDecorator
    someMethod() {
        // Method code
    }
}
```

#### Example: Timing Execution

```typescript
function logExecutionTime(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const start = Date.now();
        const result = originalMethod.apply(this, args);
        const end = Date.now();
        console.log(`${propertyKey} executed in ${end - start}ms`);
        return result;
    };
    return descriptor;
}

class Calculator {
    @logExecutionTime
    calculate() {
        // Simulate a calculation
        for (let i = 0; i < 1e6; i++) {}
    }
}

const calc = new Calculator();
calc.calculate(); // Logs the execution time
```

### 3. Property Decorators

Property decorators are applied to a specific property in a class. They don’t modify the value but can be used to add metadata or enforce certain behaviors.

#### Syntax

```typescript
function propertyDecorator(target: Object, propertyKey: string | symbol) {
    // Decorate property
}

class Example {
    @propertyDecorator
    myProperty: string;
}
```

#### Example: Marking Read-Only Properties

```typescript
function readOnly(target: Object, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
        writable: false,
    });
}

class Book {
    @readOnly
    title = "TypeScript Guide";
}

const myBook = new Book();
myBook.title = "New Title"; // Error: Cannot assign to read-only property
```

In this example, the `readOnly` decorator prevents modification of `title`.

### 4. Parameter Decorators

Parameter decorators are applied to specific parameters in a method and are commonly used for metadata or validation. They take three arguments: the target, the method name, and the parameter index.

#### Syntax

```typescript
function parameterDecorator(
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
) {
    // Modify or add metadata to parameter
}

class Example {
    someMethod(@parameterDecorator param: string) {
        // Method code
    }
}
```

#### Example: Log Parameter Use

```typescript
function logParameter(
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
) {
    const methodName = String(propertyKey);
    console.log(`Logging parameter for method: ${methodName}, parameter index: ${parameterIndex}`);
}

class Logger {
    logMessage(@logParameter message: string) {
        console.log(message);
    }
}

const logger = new Logger();
logger.logMessage("Hello"); // Logs parameter index used in logMessage
```

### Combining Decorators

Multiple decorators can be applied by stacking them. Decorators are applied in the reverse order of their appearance.

```typescript
function First() {
    console.log("First decorator");
}

function Second() {
    console.log("Second decorator");
}

@First
@Second
class TestClass {}
```

**Order of Execution**:
1. `Second decorator`
2. `First decorator`

---

### Summary

- **Class Decorators** modify or replace class constructors.
- **Method Decorators** wrap or replace methods, useful for logging, timing, etc.
- **Property Decorators** add metadata or define special behavior on properties.
- **Parameter Decorators** track or validate specific parameters.
  
TypeScript decorators provide flexibility in building reusable, maintainable code by adding metadata and enhancing class behavior dynamically.