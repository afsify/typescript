# Primitive Types in TypeScript

Primitive types are the most basic data types in TypeScript. They represent single values, as opposed to objects, which can hold multiple values. TypeScript's primitive types are based on JavaScript's, with added type-checking to prevent runtime errors.

### Key Primitive Types:
1. **`string`**
2. **`number`**
3. **`boolean`**
4. **`bigint`**
5. **`symbol`**
6. **`null`**
7. **`undefined`**

### 1. **`string`**
   - Represents textual data in TypeScript.
   - Strings are enclosed in single (`'`), double (`"`), or backtick (`` ` ``) quotes.
   
   **Example:**
   ```typescript
   let firstName: string = "John";
   let lastName: string = 'Doe';
   let fullName: string = `${firstName} ${lastName}`;
   ```

### 2. **`number`**
   - Used for both integer and floating-point numbers.
   - All numbers in TypeScript are represented as `float64` values.
   
   **Example:**
   ```typescript
   let age: number = 30;
   let temperature: number = 98.6;
   let hex: number = 0xf00d;  // hexadecimal
   let binary: number = 0b1010; // binary
   let octal: number = 0o744;   // octal
   ```

### 3. **`boolean`**
   - Represents logical values: `true` or `false`.
   - Typically used in conditional statements or flags.
   
   **Example:**
   ```typescript
   let isLoggedIn: boolean = true;
   let isAdmin: boolean = false;
   ```

### 4. **`bigint`**
   - Represents whole numbers larger than the safe integer limit (`Number.MAX_SAFE_INTEGER`).
   - Can hold extremely large integers beyond JavaScript's `number` type.
   - Created by adding an `n` suffix or using `BigInt` constructor.
   
   **Example:**
   ```typescript
   let largeNumber: bigint = 9007199254740991n;
   let anotherLarge: bigint = BigInt("123456789012345678901234567890");
   ```

### 5. **`symbol`**
   - A unique and immutable identifier useful as object property keys.
   - Created by calling `Symbol()` function.
   
   **Example:**
   ```typescript
   let uniqueID: symbol = Symbol("id");
   let anotherID: symbol = Symbol("id");
   console.log(uniqueID === anotherID); // Output: false
   ```

### 6. **`null`**
   - Represents an intentional absence of any object value.
   - By default, `null` is assignable to any type (unless `strictNullChecks` is enabled in `tsconfig.json`).
   
   **Example:**
   ```typescript
   let emptyValue: null = null;
   let response: string | null = null; // Union type allowing null or string
   ```

### 7. **`undefined`**
   - Represents a variable that has been declared but not assigned a value.
   - By default, `undefined` is assignable to any type (unless `strictNullChecks` is enabled).
   
   **Example:**
   ```typescript
   let notAssigned: undefined = undefined;
   let responseCode: number | undefined;
   ```

---

### Additional Notes on `null` and `undefined`
- **`strictNullChecks`**: If enabled in `tsconfig.json`, it prevents `null` and `undefined` from being assigned to other types, making code safer and reducing the chances of runtime errors.
  
   ```json
   // tsconfig.json
   {
     "compilerOptions": {
       "strictNullChecks": true
     }
   }
   ```
  
- **Union Types**: Both `null` and `undefined` can be combined with other types using union types, especially when a value is optional.

   **Example:**
   ```typescript
   let name: string | null = "Alice";
   name = null;
   
   let age: number | undefined;
   age = 30;
   ```

---

### Summary of Primitive Types

| Type       | Description                              | Example                   |
|------------|------------------------------------------|---------------------------|
| `string`   | Textual data                             | `"Hello, World!"`         |
| `number`   | Numerical data (integer, float)          | `42`, `3.14`              |
| `boolean`  | Logical true/false values                | `true`, `false`           |
| `bigint`   | Large integers beyond `Number` limits    | `9007199254740991n`       |
| `symbol`   | Unique identifiers                       | `Symbol("id")`            |
| `null`     | Intentional absence of a value           | `null`                    |
| `undefined`| Uninitialized or absent variable value   | `undefined`               |

---

This covers the main types and syntax of TypeScript's primitives with examples. Let me know if you’d like details on any specific type.