# React Hooks with TypeScript

**React Hooks** are functions that let you use state and other React features without writing a class. Using hooks in conjunction with TypeScript allows for type safety and improved development experience.

### Key Concepts

1. **What are Hooks?**
   - Hooks are special functions in React that allow you to "hook into" React state and lifecycle features from function components.
   - Common hooks include `useState`, `useEffect`, `useContext`, and custom hooks.

2. **Why Use TypeScript with Hooks?**
   - Provides static type checking to prevent runtime errors.
   - Enhances IDE support with better autocompletion and inline documentation.
   - Facilitates easier debugging and refactoring.

### Common Hooks with TypeScript

#### 1. **useState Hook**

The `useState` hook is used to declare state variables in functional components.

**Syntax:**

```typescript
const [state, setState] = useState<Type>(initialValue);
```

**Example:**

```typescript
import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
```

#### 2. **useEffect Hook**

The `useEffect` hook is used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.

**Syntax:**

```typescript
useEffect(() => {
    // effect logic
    return () => {
        // cleanup logic (optional)
    };
}, [dependencies]);
```

**Example:**

```typescript
import React, { useState, useEffect } from 'react';

const DataFetcher: React.FC = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.example.com/data');
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

    return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
};
```

#### 3. **useContext Hook**

The `useContext` hook allows you to consume context values in functional components.

**Example:**

```typescript
import React, { createContext, useContext } from 'react';

type UserContextType = {
    name: string;
    age: number;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProfile: React.FC = () => {
    const user = useContext(UserContext);

    if (!user) {
        return <div>No user data available</div>;
    }

    return <div>Name: {user.name}, Age: {user.age}</div>;
};
```

### Custom Hooks

Custom hooks allow you to encapsulate reusable logic and stateful behavior. They can be typed just like regular hooks.

**Example:**

```typescript
import { useState, useEffect } from 'react';

function useFetch<T>(url: string): { data: T | null; loading: boolean; error: string | null } {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

// Usage of the custom hook
const App: React.FC = () => {
    const { data, loading, error } = useFetch<{ name: string }>('https://api.example.com/user');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return <div>User: {data?.name}</div>;
};
```

### Best Practices

1. **Type State Properly**: Always define the type of state using generics with `useState`, e.g., `useState<Type>()`.

2. **Define Context Types**: When using `createContext`, provide a type for the context value to ensure type safety.

3. **Handle Optional States**: Use type unions to handle potential `null` or `undefined` values gracefully.

4. **Reusable Custom Hooks**: Create reusable hooks for shared logic and state management across components.

5. **Dependencies in useEffect**: Be mindful of dependencies in `useEffect` to avoid unnecessary re-renders and infinite loops.

### Summary

- **React Hooks** allow functional components to manage state and side effects.
- **TypeScript** enhances the development experience by providing type safety and autocompletion.
- Using hooks with TypeScript involves correctly typing state variables, effects, context, and custom hooks.
- Following best practices will lead to cleaner, more maintainable code.
