# ES Modules in TypeScript

ES (ECMAScript) Modules are a standardized way to structure and share code in JavaScript and TypeScript, allowing for modular, maintainable, and reusable code across files. ES Modules use the `import` and `export` syntax to share functionality between files.

### Key Concepts of ES Modules

1. **Modules**: Independent units of code, each with its own scope, which can be imported and exported.
2. **Exporting**: Declaring which parts of a module are available for other files to use.
3. **Importing**: Bringing functionality from one module into another.

### ES Module Syntax

#### Exporting Code

There are two primary ways to export functionality from a module:
1. **Named Exports**: Export multiple named items.
2. **Default Exports**: Export a single default item.

#### Named Exports

Named exports allow you to export multiple values (functions, classes, variables) with specific names.

```typescript
// mathUtils.ts
export const PI = 3.14159;

export function add(a: number, b: number): number {
    return a + b;
}

export class Calculator {
    multiply(a: number, b: number): number {
        return a * b;
    }
}
```

Here, `PI`, `add`, and `Calculator` are all named exports. They can be imported individually by their names.

#### Default Exports

Default exports allow you to export one primary item from a module, making the import syntax simpler for that item.

```typescript
// greet.ts
export default function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

In this example, the `greet` function is the default export, meaning it’s the primary export from the module.

### Importing Code

To use exported functionality, you import it into another module.

#### Importing Named Exports

You can import named exports using the following syntax:

```typescript
// main.ts
import { PI, add, Calculator } from "./mathUtils";

console.log(PI); // 3.14159
console.log(add(3, 5)); // 8
const calculator = new Calculator();
console.log(calculator.multiply(4, 5)); // 20
```

#### Importing Default Exports

You can import default exports without curly braces, and you can give them any name.

```typescript
// main.ts
import greet from "./greet";

console.log(greet("Alice")); // "Hello, Alice!"
```

#### Importing All as a Namespace

You can also import everything from a module as a single object.

```typescript
// main.ts
import * as MathUtils from "./mathUtils";

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.add(3, 5)); // 8
const calculator = new MathUtils.Calculator();
console.log(calculator.multiply(4, 5)); // 20
```

### Combining Default and Named Exports

A module can have both a default export and named exports. However, this should be done cautiously for readability.

```typescript
// userUtils.ts
export const getUser = (id: number) => ({ id, name: "User" + id });
export default function getDefaultUser() {
    return { id: 0, name: "Default User" };
}
```

```typescript
// main.ts
import getDefaultUser, { getUser } from "./userUtils";

console.log(getDefaultUser()); // { id: 0, name: "Default User" }
console.log(getUser(5)); // { id: 5, name: "User5" }
```

### Re-exporting from Modules

You can re-export items from one module in another module, which is useful for creating a centralized module of related exports.

```typescript
// utils/index.ts
export { add, Calculator } from "./mathUtils";
export { default as greet } from "./greet";
```

Now you can import everything from `utils/index.ts` as a single module:

```typescript
// main.ts
import { add, Calculator, greet } from "./utils";

console.log(add(1, 2)); // 3
const calc = new Calculator();
console.log(greet("Alice")); // "Hello, Alice!"
```

### Dynamic Imports

Dynamic imports allow you to load modules asynchronously, which can improve application performance by loading code only when needed.

```typescript
// main.ts
async function loadAndGreet() {
    const { default: greet } = await import("./greet");
    console.log(greet("Alice"));
}

loadAndGreet(); // "Hello, Alice!"
```

### Module Resolution in TypeScript

TypeScript uses a **module resolution** strategy to locate module files based on `import` paths. Some key settings in `tsconfig.json` affect module resolution:

- **`module`**: Specifies the module system (e.g., `esnext`, `commonjs`, `es6`).
- **`baseUrl`**: Specifies the root directory for imports, useful for avoiding relative paths.
- **`paths`**: Allows mapping module paths to specific directories or files.

### Example Configuration in `tsconfig.json`

```json
{
  "compilerOptions": {
    "module": "esnext",
    "target": "es6",
    "baseUrl": "./src",
    "paths": {
      "@utils/*": ["utils/*"]
    }
  }
}
```

With this setup, you can use `@utils` to import from the `src/utils` directory:

```typescript
import { add } from "@utils/mathUtils";
```

### Summary of ES Modules in TypeScript

- **Named Exports**: Export multiple items by name and import them using the same names.
- **Default Exports**: Export one main item per module, which can be imported without curly braces.
- **Namespace Imports**: Import all exports as a single object.
- **Re-exports**: Re-export items from other modules for cleaner, centralized imports.
- **Dynamic Imports**: Load modules asynchronously for performance.
- **Module Resolution**: TypeScript's settings for resolving paths make importing modules more efficient and organized.

ES Modules allow for clear, maintainable, and reusable code structures, which TypeScript extends with static type-checking and module resolution.