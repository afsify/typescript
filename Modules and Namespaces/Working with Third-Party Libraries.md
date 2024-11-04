Here's a comprehensive guide on **Working with Third-Party Libraries** in TypeScript, covering how to set up, configure, and effectively use these libraries.

---

## Working with Third-Party Libraries in TypeScript

When working with third-party libraries in TypeScript, you may encounter both TypeScript-native libraries and libraries primarily written in JavaScript. This guide provides strategies to effectively use both types in TypeScript projects.

### 1. Installing Type Definitions

Some JavaScript libraries don’t include TypeScript definitions by default, but they may have associated type definitions available through the DefinitelyTyped repository.

#### Steps to Install Type Definitions:
- **If the library includes its own types:** Simply install the library.
    ```bash
    npm install library-name
    ```
- **If the library does not include types**: You may need to install types separately from the `@types` namespace.
    ```bash
    npm install library-name @types/library-name
    ```
  For example:
  ```bash
  npm install lodash @types/lodash
  ```

If a type definition package is unavailable, consider creating custom type definitions.

### 2. Using JavaScript Libraries without Types

If no official or community types are available, TypeScript allows for certain flexibility to accommodate these libraries.

- **Using `any` Type**: You can declare the library as `any` to bypass type checking, but this sacrifices type safety.
    ```typescript
    const library: any = require("library-name");
    ```

- **Writing a Custom Declaration File**: You can create a declaration file (`.d.ts`) to define minimal types for the library.
    ```typescript
    // custom-library.d.ts
    declare module "custom-library" {
        export function customFunction(param: string): void;
    }
    ```

### 3. Importing Third-Party Libraries

TypeScript supports both CommonJS (`require`) and ES Module (`import`) syntax. Most modern libraries support ES Module syntax, but the syntax choice will depend on the library.

- **ES Module Import**:
    ```typescript
    import _ from "lodash";
    ```

- **CommonJS Require**:
    ```typescript
    const _ = require("lodash");
    ```

For compatibility, set `"moduleResolution": "node"` in your `tsconfig.json`.

### 4. Using Type-Safe Third-Party Libraries

Many popular libraries have comprehensive type definitions, enabling autocompletion and type safety within your TypeScript project. Here are some examples of common type-safe libraries:

- **Lodash**: Type definitions offer complete coverage for utility functions.
    ```typescript
    import _ from "lodash";
    const result: number[] = _.times(3, String); // Provides type safety and autocompletion
    ```

- **Axios**: Includes types for HTTP request handling.
    ```typescript
    import axios, { AxiosResponse } from "axios";
    axios.get("/api/data").then((response: AxiosResponse) => console.log(response.data));
    ```

### 5. Using `import * as` Syntax

Some libraries, such as `moment` or `lodash`, are best imported using `import * as`, particularly if their default exports are not TypeScript-friendly.

Example:
```typescript
import * as moment from "moment";

const formattedDate = moment().format("YYYY-MM-DD");
```

### 6. Creating Type Declarations for Untyped Libraries

If a library lacks official TypeScript types, you can declare the module in a `.d.ts` file to specify available methods and properties.

#### Example: Declaring an Untyped Library

```typescript
// custom-math.d.ts
declare module "custom-math" {
    export function add(a: number, b: number): number;
    export function subtract(a: number, b: number): number;
}
```

#### Example: Usage in Code

```typescript
import { add, subtract } from "custom-math";

const sum = add(5, 3); // TypeScript knows add expects two numbers
```

### 7. Using JSDoc with JavaScript Libraries

Sometimes you can leverage JSDoc comments with JavaScript libraries to provide IntelliSense and basic type safety. This is particularly useful when migrating codebases from JavaScript to TypeScript incrementally.

```typescript
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}
```

### 8. Configuring `tsconfig.json` for Third-Party Libraries

The `tsconfig.json` file may need some adjustments for compatibility with third-party libraries:

- **`"moduleResolution": "node"`**: Enables TypeScript to locate module definitions within `node_modules`.
- **`"allowSyntheticDefaultImports": true`**: Allows default imports even if the library doesn’t specify a default export.
- **`"esModuleInterop": true`**: Improves compatibility with CommonJS modules.

Example configuration:
```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  }
}
```

### 9. Common Errors and Solutions

#### Error: "Could not find a declaration file for module 'library-name'."
- **Solution**: Install type definitions with `@types/library-name` or add a declaration in a `.d.ts` file.

#### Error: "Cannot use import statement outside a module."
- **Solution**: Set `"module": "commonjs"` or `"moduleResolution": "node"` in `tsconfig.json`.

### 10. Useful Third-Party Type Utilities

Several utilities, such as `utility-types`, provide extra type manipulation helpers. You can add these for advanced type operations.

Install `utility-types`:
```bash
npm install utility-types
```

Example:
```typescript
import { Omit } from "utility-types";

type User = { id: number; name: string; age: number };
type UserWithoutAge = Omit<User, "age">;
```

### Summary

- **Installing Type Definitions**: Use `@types/library-name` if no types are bundled.
- **Custom Type Declarations**: Define your own declarations for untyped libraries.
- **Configuring Imports**: Use `import`, `require`, or `import * as` based on compatibility.
- **Error Handling**: Adjust `tsconfig.json` settings to resolve import errors.
- **Type Utilities**: Libraries like `utility-types` add functionality for advanced type operations.

Using third-party libraries in TypeScript offers type safety and code flexibility, especially when combined with custom type declarations and proper configurations.