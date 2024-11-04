# Context API with TypeScript

The Context API in React provides a way to share values between components without having to explicitly pass props through every level of the component tree. This is particularly useful for global data, such as user authentication or theme settings.

### Key Concepts

- **Context**: A way to pass data through the component tree without having to pass props down manually at every level.
- **Provider**: A component that provides the context value to its children.
- **Consumer**: A component that consumes the context value.

### Setting Up Context API with TypeScript

#### 1. Creating a Context

To create a context, use `React.createContext()` with a default value.

```typescript
import React, { createContext, useContext, useState } from 'react';

// Define the shape of the context data
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
```

#### 2. Creating a Provider Component

The provider component will hold the state and provide it to its children.

```typescript
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
```

#### 3. Consuming Context

To consume context values in a component, use the `useContext` hook.

```typescript
const ThemeToggle: React.FC = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('ThemeToggle must be used within a ThemeProvider');
    }

    const { theme, toggleTheme } = context;

    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};
```

#### 4. Using the Provider in Your Application

Wrap your application (or part of it) with the provider to provide context values to components.

```typescript
const App: React.FC = () => {
    return (
        <ThemeProvider>
            <ThemeToggle />
            {/* Other components that need access to the ThemeContext */}
        </ThemeProvider>
    );
};
```

### Example: Full Implementation

Here’s a complete example that demonstrates how to set up and use the Context API with TypeScript.

```typescript
import React, { createContext, useContext, useState } from 'react';

// Define context type
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider component
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Component to consume context
const ThemeToggle: React.FC = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('ThemeToggle must be used within a ThemeProvider');
    }

    const { theme, toggleTheme } = context;

    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

// Main App component
const App: React.FC = () => {
    return (
        <ThemeProvider>
            <ThemeToggle />
        </ThemeProvider>
    );
};

export default App;
```

### Best Practices

1. **Type Safety**: Always define and use interfaces/types for your context values to take full advantage of TypeScript's type safety.
2. **Default Values**: Provide a meaningful default value when creating the context. This can help prevent errors if a component tries to consume the context without a provider.
3. **Avoid Overusing Context**: While the Context API is powerful, it should be used judiciously. Avoid putting too much data in context, as it can lead to unnecessary re-renders of all consuming components.
4. **Separate Contexts**: If you have multiple unrelated pieces of data, consider creating separate contexts to keep concerns separate and reduce the number of re-renders.

### Conclusion

The Context API is a powerful feature in React that simplifies state management across deeply nested components. By using TypeScript, you can enhance the type safety of your context, making your code more robust and easier to maintain. With proper setup and best practices, you can effectively leverage the Context API in your TypeScript applications.