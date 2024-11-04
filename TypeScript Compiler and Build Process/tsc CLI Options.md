# tsc CLI Options

The TypeScript Compiler (tsc) is a command-line tool that compiles TypeScript (.ts) files into JavaScript (.js) files. It offers a wide range of command-line options that allow you to customize the compilation process. Below are some commonly used options and their explanations.

### Basic Command Structure

```bash
tsc [options] [file1.ts file2.ts ...]
```

You can specify options in two ways:
1. As command-line arguments.
2. In a `tsconfig.json` file, which allows you to save your configuration for future use.

### Commonly Used tsc Options

#### 1. `--project` or `-p`

Specifies the project configuration file. This option allows you to compile a project based on a `tsconfig.json` file.

```bash
tsc -p ./path/to/tsconfig.json
```

#### 2. `--outDir` or `-d`

Specifies the output directory for the compiled JavaScript files.

```bash
tsc --outDir dist
```

#### 3. `--rootDir`

Specifies the root directory of input files. This can help in maintaining a folder structure.

```bash
tsc --rootDir src
```

#### 4. `--target` or `-t`

Sets the JavaScript language version for the output files. Common options include `ES5`, `ES6`, `ESNext`, etc.

```bash
tsc --target ES6
```

#### 5. `--module`

Specifies the module system to be used in the generated code. Options include `commonjs`, `amd`, `es6`, `umd`, etc.

```bash
tsc --module commonjs
```

#### 6. `--strict`

Enables all strict type-checking options in TypeScript. This is useful for catching potential errors in your code.

```bash
tsc --strict
```

#### 7. `--watch` or `-w`

Enables watch mode, which recompiles the TypeScript files whenever a change is detected.

```bash
tsc --watch
```

#### 8. `--noEmit`

Prevents the compiler from emitting output files. This is useful for type-checking without generating JavaScript files.

```bash
tsc --noEmit
```

#### 9. `--sourceMap`

Generates source maps for the compiled JavaScript files, which help in debugging the original TypeScript code.

```bash
tsc --sourceMap
```

#### 10. `--declaration` or `-d`

Generates corresponding `.d.ts` declaration files alongside the compiled JavaScript files.

```bash
tsc --declaration
```

#### 11. `--skipLibCheck`

Skips type checking of declaration files (`.d.ts`) to speed up the compilation process.

```bash
tsc --skipLibCheck
```

#### 12. `--noImplicitAny`

Disallows implicit `any` types, ensuring that every variable has an explicit type.

```bash
tsc --noImplicitAny
```

#### 13. `--esModuleInterop`

Enables emit interoperability between CommonJS and ES Modules, allowing for easier imports from CommonJS modules.

```bash
tsc --esModuleInterop
```

### Using tsconfig.json

Instead of specifying options directly in the command line, you can create a `tsconfig.json` file to manage configurations. Here’s a simple example:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "outDir": "dist",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

To compile the project using this configuration, simply run:

```bash
tsc
```

### Summary

- The `tsc` command provides numerous options to customize the TypeScript compilation process.
- Options can be provided directly in the command line or through a configuration file (`tsconfig.json`).
- Commonly used options include `--project`, `--outDir`, `--target`, `--strict`, and more.
- Utilizing a `tsconfig.json` file helps in managing configurations effectively.

### Additional Resources

- [TypeScript Compiler Options Documentation](https://www.typescriptlang.org/tsconfig)
- [TypeScript CLI Documentation](https://www.typescriptlang.org/docs/handbook/command-line-compiler.html)
