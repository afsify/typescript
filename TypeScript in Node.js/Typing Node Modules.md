# Typing Node Modules in TypeScript

In TypeScript, typing node modules is crucial for providing type safety and improving developer experience when using third-party libraries. This ensures that the TypeScript compiler can understand the types and structures of the modules you are importing.

### Overview

- **Node Modules**: These are packages from the Node.js ecosystem, usually installed via npm. Examples include libraries like Express, Lodash, and others.
- **Type Definitions**: TypeScript uses type definitions to provide type information about JavaScript code. These definitions help the TypeScript compiler check the types of variables, function arguments, and return types.

### Benefits of Typing Node Modules

1. **Type Safety**: Ensures that you catch type-related errors during development rather than at runtime.
2. **Enhanced IDE Support**: Provides autocompletion, documentation, and error checking in IDEs.
3. **Better Code Documentation**: Makes your code more understandable and maintainable for other developers.

### Using Type Definitions

Type definitions for most popular Node.js modules are available through the DefinitelyTyped repository, which provides community-maintained type definitions for JavaScript libraries.

#### 1. Installing Type Definitions

To install type definitions for a specific package, you can use npm or yarn. The type definitions are typically prefixed with `@types/`.

**Example**: Installing type definitions for Express:

```bash
npm install @types/express --save-dev
```

or with yarn:

```bash
yarn add @types/express --dev
```

#### 2. Using Node Modules with Type Definitions

Once you have the type definitions installed, you can import and use the module in your TypeScript files with type safety.

**Example**: Using Express with TypeScript

```typescript
import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Node!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

### Creating Custom Type Definitions

If a module does not have type definitions available, you can create your own. This is done by creating a `.d.ts` file, which is a declaration file that defines the types for the module.

#### Steps to Create Custom Type Definitions:

1. **Create a Declaration File**: Create a new file with a `.d.ts` extension, usually named after the module you are typing. For example, if you're typing a module called `my-module`, you would create `my-module.d.ts`.

2. **Define the Module**: Use the `declare module` syntax to define the module and its types.

**Example**: Typing a Custom Module

```typescript
// my-module.d.ts
declare module 'my-module' {
    export function myFunction(param: string): number;
    export const myConstant: string;
}
```

3. **Using the Custom Module**:

```typescript
import { myFunction, myConstant } from 'my-module';

const result = myFunction('Hello, World!');
console.log(result);
console.log(myConstant);
```

### Using `@types` for Non-Existent Types

If you encounter a module without types, you can create a type declaration file in your project:

1. **Create a `@types` Directory**: Inside your project, create a directory called `@types`.

2. **Add Your Type Definitions**: Inside `@types`, create a new file for your module.

**Example Directory Structure**:

```
/my-project
  /src
  /@types
    my-module.d.ts
```

3. **Add Type Definitions**: Similar to the previous example, define the types within the `.d.ts` file.

### Using TypeScript Configuration

Ensure your `tsconfig.json` file is configured to include your custom types:

```json
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./@types"]
  }
}
```

### Summary

- Typing Node modules in TypeScript enhances type safety, IDE support, and code documentation.
- Type definitions can be installed via npm for popular libraries or created manually for custom modules.
- Use `.d.ts` files to define types for libraries that do not have existing type definitions.
- Proper configuration in `tsconfig.json` ensures TypeScript recognizes your type definitions.

### Additional Resources

- [DefinitelyTyped GitHub Repository](https://github.com/DefinitelyTyped/DefinitelyTyped)
- [TypeScript Handbook - Declaration Files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
