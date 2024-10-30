# Installing and Setting Up TypeScript

### 1. **Prerequisites**
   - Ensure that **Node.js** and **npm** (Node Package Manager) are installed on your system. You can verify their installation by running:
     ```bash
     node -v
     npm -v
     ```
   - If you don’t have Node.js and npm installed, download and install them from [Node.js official website](https://nodejs.org/).

### 2. **Installing TypeScript**
   - TypeScript can be installed globally or locally within a project.
   
   #### **Global Installation** (recommended for development environments)
   - To install TypeScript globally on your machine, use the following npm command:
     ```bash
     npm install -g typescript
     ```
   - After installation, you can verify it by checking the version:
     ```bash
     tsc -v
     ```
   - A successful output should show the TypeScript version installed.

   #### **Local Installation** (for individual projects)
   - To install TypeScript only within a specific project, navigate to the project folder and run:
     ```bash
     npm install typescript --save-dev
     ```
   - This adds TypeScript as a dependency to the project’s `package.json`.

### 3. **Setting Up a TypeScript Project**
   - In the root directory of your project, initialize a TypeScript configuration file (`tsconfig.json`) with:
     ```bash
     tsc --init
     ```
   - This command generates a `tsconfig.json` file, where you can configure various options for TypeScript compilation.

### 4. **Understanding `tsconfig.json`**
   - The `tsconfig.json` file allows you to control the behavior of the TypeScript compiler.
   
   Example `tsconfig.json`:
   ```json
   {
     "compilerOptions": {
       "target": "es6",          // Specifies the ECMAScript version target
       "module": "commonjs",     // Specifies module code generation
       "strict": true,           // Enables strict type-checking options
       "outDir": "./dist",       // Directory where compiled files are output
       "rootDir": "./src"        // Directory containing TypeScript source files
     },
     "include": ["src/**/*"],    // Specifies files to include in compilation
     "exclude": ["node_modules"] // Specifies files to exclude from compilation
   }
   ```

   Key Options in `compilerOptions`:
   - **target**: Specifies the ECMAScript version for output (e.g., `es5`, `es6`).
   - **module**: Defines the module system (e.g., `commonjs`, `es6`).
   - **strict**: Enables strict type-checking for improved type safety.
   - **outDir**: Directory where TypeScript will compile the `.js` files.
   - **rootDir**: Root directory for TypeScript source files.

### 5. **Compiling TypeScript Code**
   - After setting up `tsconfig.json`, you can compile your TypeScript files using:
     ```bash
     tsc
     ```
   - This command compiles all `.ts` files according to the options set in `tsconfig.json`.

### 6. **Watching for Changes (Optional)**
   - TypeScript provides a `--watch` flag to automatically recompile files on save. This is useful for development:
     ```bash
     tsc --watch
     ```
   - The TypeScript compiler will now observe changes in `.ts` files and recompile them to JavaScript.

---

This setup guide helps you initialize and configure TypeScript for both small and large projects. Let me know if you'd like more specific details on any of the steps!