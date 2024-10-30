# TypeScript Configuration (`tsconfig.json`)

The `tsconfig.json` file is a TypeScript configuration file that defines compiler options, file inclusions/exclusions, and project structure settings. It’s used to control how TypeScript behaves during compilation.

### Basic Structure of `tsconfig.json`

```json
{
  "compilerOptions": {
    // Compiler options (detailed below)
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

- **`compilerOptions`**: Configures TypeScript's compilation behavior.
- **`include`**: Specifies files or directories to include.
- **`exclude`**: Specifies files or directories to exclude.

---

## Important `compilerOptions`

### 1. **Target and Module**

- **`target`**: Specifies the ECMAScript version for output.
   - Options: `"ES5"`, `"ES6"`, `"ESNext"`, etc.
   - Example: `"target": "ES6"`.

- **`module`**: Sets the module system for output.
   - Options: `"commonjs"`, `"amd"`, `"es6"`, `"esnext"`, etc.
   - Example: `"module": "commonjs"`.

### 2. **Strict Type Checking**

TypeScript’s strict mode includes options to enforce rigorous type-checking.

- **`strict`**: Enables all strict type-checking options.
   - Example: `"strict": true`.

- **`noImplicitAny`**: Prevents variables from defaulting to `any` type if no type is specified.
   - Example: `"noImplicitAny": true`.

- **`strictNullChecks`**: Ensures null and undefined are handled explicitly.
   - Example: `"strictNullChecks": true`.

- **`strictPropertyInitialization`**: Requires all properties in a class to be initialized.
   - Example: `"strictPropertyInitialization": true`.

### 3. **Code Quality Options**

- **`noUnusedLocals`**: Warns if there are unused local variables.
   - Example: `"noUnusedLocals": true`.

- **`noUnusedParameters`**: Warns if there are unused parameters in functions.
   - Example: `"noUnusedParameters": true`.

- **`noImplicitReturns`**: Warns if not all code paths in a function return a value.
   - Example: `"noImplicitReturns": true`.

### 4. **Output Control**

- **`outDir`**: Specifies the output directory for compiled files.
   - Example: `"outDir": "./dist"`.

- **`rootDir`**: Specifies the root folder containing TypeScript files for the project.
   - Example: `"rootDir": "./src"`.

### 5. **Source Map and Declaration Files**

- **`sourceMap`**: Generates `.map` files for debugging.
   - Example: `"sourceMap": true`.

- **`declaration`**: Generates `.d.ts` type definition files, useful for creating reusable modules or libraries.
   - Example: `"declaration": true`.

### 6. **Module Resolution**

Module resolution options determine how TypeScript finds files and packages.

- **`moduleResolution`**: Sets the strategy for locating modules.
   - Options: `"node"`, `"classic"`.
   - Example: `"moduleResolution": "node"`.

- **`baseUrl`**: Specifies the root directory for module paths.
   - Example: `"baseUrl": "./src"`.

- **`paths`**: Allows aliasing module paths for cleaner imports.
   - Example:
     ```json
     "paths": {
       "@components/*": ["components/*"]
     }
     ```

### 7. **ESNext Features**

- **`lib`**: Defines standard library files to include, allowing ESNext features like async/await.
   - Options: `"DOM"`, `"ES6"`, `"ES2017"`, `"ESNext"`.
   - Example: `"lib": ["DOM", "ESNext"]`.

### 8. **Experimental Options**

- **`experimentalDecorators`**: Enables support for decorators, used frequently in frameworks like Angular.
   - Example: `"experimentalDecorators": true`.

- **`emitDecoratorMetadata`**: Used with `experimentalDecorators` to provide metadata for decorators.
   - Example: `"emitDecoratorMetadata": true`.

### 9. **Watch Mode**

TypeScript's `watch` mode automatically re-compiles code when files are modified.

- **Command**: `tsc --watch` or configure in `tsconfig.json` using CLI.

### 10. **Incremental Compilation**

- **`incremental`**: Speeds up compilation by storing information from previous compilations.
   - Example: `"incremental": true`.

### 11. **Project References**

- **`composite`**: Used with multi-project builds to specify project references, optimizing large codebases.
   - Example: `"composite": true`.

---

## Example `tsconfig.json` for a Standard Project

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true,
    "declaration": true,
    "moduleResolution": "node",
    "baseUrl": "./",
    "paths": {
      "@components/*": ["src/components/*"]
    },
    "lib": ["DOM", "ESNext"],
    "incremental": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

This configuration file should work well for a typical TypeScript project, with support for strict type checking, optimized output control, and modern ESNext features.