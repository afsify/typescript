# Decorators in TypeScript

### What are Decorators?

Decorators are a special kind of declaration that can be attached to classes, methods, accessors, properties, or parameters in TypeScript. They provide a way to modify or extend the behavior of the items they decorate, and are often used to add metadata, perform actions, or implement design patterns.

Decorators are functions that take arguments related to the item they decorate and can influence how it behaves or is used. Decorators are widely used in frameworks like Angular and NestJS for dependency injection, metadata handling, and configuration.

### Enabling Decorators

To use decorators in TypeScript, you must enable them in the `tsconfig.json` file by setting `experimentalDecorators` to `true`.

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

### Types of Decorators

TypeScript supports several types of decorators:

1. **Class Decorators**
2. **Method Decorators**
3. **Accessor Decorators**
4. **Property Decorators**
5. **Parameter Decorators**

### 1. Class Decorators

A class decorator is applied to an entire class and can be used to modify or extend the class behavior. The decorator function takes the class constructor as an argument.

**Syntax:**

```typescript
function ClassDecorator(constructor: Function) {
    // Modify or log the class
}

@ClassDecorator
class MyClass {
    // class definition
}
```

**Example:**

```typescript
function LogClass(constructor: Function) {
    console.log(`Class created: ${constructor.name}`);
}

@LogClass
class Person {
    constructor(public name: string) {}
}
// Logs: "Class created: Person"
```

### 2. Method Decorators

A method decorator is applied to a class method. It can modify the method behavior or add extra functionality. It receives three arguments: the target object, the method name, and the property descriptor.

**Syntax:**

```typescript
function MethodDecorator(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) {
    // Modify the method behavior
}

class MyClass {
    @MethodDecorator
    myMethod() {
        // method definition
    }
}
```

**Example:**

```typescript
function LogMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments: ${args}`);
        return originalMethod.apply(this, args);
    };
}

class Calculator {
    @LogMethod
    add(a: number, b: number) {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(2, 3); // Logs: "Calling add with arguments: 2,3"
```

### 3. Accessor Decorators

An accessor decorator is applied to a class's getter or setter. It can be used to modify the behavior of the accessor. Like method decorators, accessor decorators receive the target, property name, and property descriptor as arguments.

**Syntax:**

```typescript
function AccessorDecorator(
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    // Modify the accessor behavior
}

class MyClass {
    private _value: number = 0;

    @AccessorDecorator
    get value() {
        return this._value;
    }

    set value(val: number) {
        this._value = val;
    }
}
```

### 4. Property Decorators

A property decorator is applied to a class property and allows you to add metadata or constraints on that property. Property decorators receive the target and the property name.

**Syntax:**

```typescript
function PropertyDecorator(target: Object, propertyKey: string | symbol) {
    // Modify or add metadata to the property
}

class MyClass {
    @PropertyDecorator
    myProperty: string;
}
```

**Example:**

```typescript
function Readonly(target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
        writable: false
    });
}

class Person {
    @Readonly
    name: string = "John";
}

const person = new Person();
person.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.
```

### 5. Parameter Decorators

A parameter decorator is applied to a method's parameter. It can be used to add metadata about a parameter, which can be useful for dependency injection. Parameter decorators receive the target, method name, and parameter index.

**Syntax:**

```typescript
function ParameterDecorator(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    // Add metadata to the parameter
}

class MyClass {
    myMethod(@ParameterDecorator param: string) {
        // method body
    }
}
```

**Example:**

```typescript
function LogParameter(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log(`Parameter in ${propertyKey as string} at index ${parameterIndex} is being decorated`);
}

class Person {
    greet(@LogParameter message: string) {
        console.log(message);
    }
}

const person = new Person();
person.greet("Hello!"); // Logs: "Parameter in greet at index 0 is being decorated"
```

### Practical Applications of Decorators

- **Logging**: Log function calls, parameters, or class instantiation.
- **Access Control**: Restrict access to certain properties or methods.
- **Caching**: Cache the result of expensive function calls.
- **Validation**: Validate properties or method parameters.

### Summary of Decorators in TypeScript

- **Class Decorators**: Applied to an entire class, often to add metadata or log instantiation.
- **Method Decorators**: Applied to class methods, allowing for modification of method behavior.
- **Accessor Decorators**: Applied to getters/setters, modifying access behavior.
- **Property Decorators**: Applied to properties, often for metadata addition.
- **Parameter Decorators**: Applied to method parameters, commonly used for metadata.

Decorators provide a powerful way to separate cross-cutting concerns, like logging or validation, from core logic, making TypeScript code more modular and maintainable.