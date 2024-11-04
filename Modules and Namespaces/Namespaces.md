# Namespaces in TypeScript

Namespaces in TypeScript provide a way to organize and encapsulate code in larger applications by grouping related code, like functions, classes, and variables, within a single named scope. Namespaces help prevent naming conflicts in global scope and improve code structure.

### What are Namespaces?

- **Namespaces** are TypeScript’s way of structuring code and keeping related items (like classes, interfaces, functions, and variables) together.
- Unlike modules, namespaces are not intended for code splitting or lazy loading.
- Namespaces are often used in older TypeScript codebases or when creating libraries where code is bundled into a single file.

### Syntax

Namespaces are created using the `namespace` keyword, followed by the namespace name and curly braces `{}` to contain the code.

```typescript
namespace NamespaceName {
    export class ClassName {
        // Class code
    }

    export function functionName() {
        // Function code
    }

    export const variableName = value;
}
```

### Key Points

- **Export Keyword**: Any class, function, variable, or interface you want to access outside the namespace must be marked with `export`.
- **Accessing Members**: Access members of a namespace by referencing the namespace, e.g., `NamespaceName.ClassName`.

### Example: Basic Usage of Namespaces

```typescript
namespace Geometry {
    export function calculateArea(radius: number): number {
        return Math.PI * radius * radius;
    }

    export function calculateCircumference(radius: number): number {
        return 2 * Math.PI * radius;
    }
}

let area = Geometry.calculateArea(5); // Accessing function inside the namespace
console.log(area); // Output: 78.5398
```

In this example:
- `calculateArea` and `calculateCircumference` are both accessible outside the `Geometry` namespace because they are marked with `export`.
- The functions are accessed using `Geometry.calculateArea`.

### Nested Namespaces

Namespaces can be nested within each other to further organize code.

```typescript
namespace App {
    export namespace Models {
        export class User {
            constructor(public name: string) {}
        }
    }
    
    export namespace Utils {
        export function logMessage(message: string): void {
            console.log(message);
        }
    }
}

const user = new App.Models.User("Alice");
App.Utils.logMessage(user.name); // Output: Alice
```

### Namespace Merging

Multiple namespaces with the same name can be declared across different files or within the same file, and TypeScript will merge them into one. This is called **namespace merging**.

```typescript
namespace MyNamespace {
    export function greet() {
        return "Hello";
    }
}

namespace MyNamespace {
    export function farewell() {
        return "Goodbye";
    }
}

console.log(MyNamespace.greet());    // Output: Hello
console.log(MyNamespace.farewell()); // Output: Goodbye
```

This is useful when extending functionality in large codebases or organizing code across multiple files.

### Using Namespaces with Interfaces

Namespaces can also contain interfaces, allowing you to define types related to that namespace.

```typescript
namespace Library {
    export interface Book {
        title: string;
        author: string;
    }

    export function logBook(book: Book) {
        console.log(`${book.title} by ${book.author}`);
    }
}

const book: Library.Book = { title: "1984", author: "George Orwell" };
Library.logBook(book); // Output: 1984 by George Orwell
```

In this example:
- The `Book` interface and `logBook` function are part of the `Library` namespace.
- `Library.Book` is used as the type for the `book` object.

### Aliases in Namespaces

You can create an alias for a namespace to simplify code, especially if the namespace has a long name.

```typescript
namespace UtilsLibrary {
    export function formatDate(date: Date): string {
        return date.toISOString();
    }
}

import Utils = UtilsLibrary;
console.log(Utils.formatDate(new Date())); // Output: current date in ISO format
```

### Namespaces vs. Modules

- **Namespaces** are for organizing code within the same application or file and are often compiled to a single JavaScript file.
- **Modules** (using `import` and `export`) are recommended for organizing code across multiple files in a way that allows for better code splitting, lazy loading, and dependency management.
- **Modules** are the preferred choice in modern TypeScript projects, as they align with ES6 and provide better modularity.

### Compiling Namespaces

To use namespaces, you may need to adjust TypeScript compiler options:
- **Single Output**: Use the `outFile` option to bundle the code in one file.
- **Example Configuration**:

```json
{
  "compilerOptions": {
    "module": "none",
    "outFile": "./dist/bundle.js"
  }
}
```

This configuration compiles all files into a single output file, often used with namespaces.

### Summary of Namespaces

- **Namespaces** are useful for organizing code within the same project or when creating libraries that compile into a single file.
- Use the `export` keyword to make members of a namespace accessible externally.
- **Nested Namespaces** help further organize complex codebases.
- **Namespace Merging** allows for extending a namespace across different files.
- **Namespaces vs. Modules**: Modules are preferred for code organization in modern projects.

---

Namespaces provide a useful structure for organizing code, especially when building self-contained libraries or bundling related code. However, for most large-scale projects, **modules** are the recommended way to organize TypeScript code due to their compatibility with ES6 module standards.