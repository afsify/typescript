# Decorator Factories in TypeScript

A **Decorator Factory** is a function that returns a decorator. This approach allows for more customization and flexibility when using decorators by enabling parameters to be passed to the decorator function.

### What is a Decorator Factory?

In TypeScript, a **Decorator Factory** is a function that:
1. Takes one or more parameters.
2. Returns a decorator function.

By using decorator factories, you can customize the behavior of a decorator based on the arguments provided.

### Syntax of a Decorator Factory

A decorator factory consists of an outer function with arguments, which returns the actual decorator function.

```typescript
function decoratorFactory(parameter: Type) {
    return function(target: Object, propertyKey?: string | symbol, descriptor?: PropertyDescriptor) {
        // Decorator logic using parameter
    };
}
```

### Example: Logging with a Decorator Factory

Imagine we want to create a decorator that logs the execution of a method with a custom message. Using a decorator factory, we can pass in a custom message as a parameter.

```typescript
function LogExecution(message: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(`${message} - Executing ${propertyKey} with arguments:`, args);
            const result = originalMethod.apply(this, args);
            console.log(`${message} - Result:`, result);
            return result;
        };

        return descriptor;
    };
}

class Calculator {
    @LogExecution("Calculator Log")
    add(a: number, b: number) {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(2, 3);  // Logs custom message before and after execution
```

In this example:
- `LogExecution` is a decorator factory that takes a `message` parameter.
- The returned decorator logs the execution of the method with the custom message.

### Types of Decorator Factories

Decorator factories can be applied to all types of decorators (class, method, accessor, property, parameter). Here’s a breakdown of some common uses:

1. **Class Decorator Factory**: Adds functionality to a class based on parameters.
   ```typescript
   function RegisterClass(className: string) {
       return function (constructor: Function) {
           console.log(`Registered class: ${className}`);
       };
   }

   @RegisterClass("UserClass")
   class User {
       constructor(public name: string) {}
   }
   ```

2. **Method Decorator Factory**: Wraps or augments a method with additional functionality.
   ```typescript
   function LogDuration(unit: string) {
       return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
           const originalMethod = descriptor.value;

           descriptor.value = function (...args: any[]) {
               const start = performance.now();
               const result = originalMethod.apply(this, args);
               const end = performance.now();
               console.log(`Duration in ${unit}:`, end - start);
               return result;
           };
       };
   }
   ```

3. **Property Decorator Factory**: Modifies or initializes properties based on parameters.
   ```typescript
   function DefaultValue(value: any) {
       return function (target: any, propertyKey: string) {
           target[propertyKey] = value;
       };
   }

   class Product {
       @DefaultValue("Default Name")
       name: string;
   }
   ```

4. **Parameter Decorator Factory**: Logs or validates parameters based on arguments.
   ```typescript
   function LogParameter(index: number) {
       return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
           console.log(`Parameter at index ${index} on ${String(propertyKey)} logged`);
       };
   }

   class Example {
       greet(@LogParameter(0) name: string) {
           console.log("Hello", name);
       }
   }
   ```

### Practical Use Cases

- **Access Control**: Use decorator factories to restrict access to class methods based on roles.
- **Caching**: Store method results with configurable cache expiration.
- **Input Validation**: Validate method parameters according to provided criteria.

### Benefits of Using Decorator Factories

1. **Flexibility**: Decorators can be tailored with parameters to fit specific needs.
2. **Reusable Logic**: Shared logic can be reused with different configurations across classes and methods.
3. **Readability**: Decorator factories make decorators more self-explanatory by including parameters that describe their functionality.

### Summary

Decorator factories allow you to:
- Create flexible and reusable decorators.
- Pass parameters to decorators to alter their behavior.
- Improve code readability by making decorator purpose clearer.

Using decorator factories, you can create more versatile and dynamic decorators, making TypeScript code more robust and configurable.