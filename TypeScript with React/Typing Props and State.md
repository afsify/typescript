# Typing Props and State in TypeScript

### Overview

In TypeScript, typing props and state helps ensure that components receive the correct types of data and can manage their internal state properly. This enhances the robustness of the code and provides better development experiences through type checking and autocompletion.

### Typing Props

Props (short for properties) are the mechanism by which data is passed from a parent component to a child component. To type props in TypeScript, follow these steps:

#### Step 1: Define a Props Interface

Create an interface that describes the shape of the props that your component will receive.

**Example:**

```typescript
interface MyComponentProps {
    title: string;
    count: number;
    isActive: boolean;
}
```

#### Step 2: Use the Interface in the Component

Utilize the defined interface in your functional or class component.

**Functional Component Example:**

```typescript
import React from 'react';

const MyComponent: React.FC<MyComponentProps> = ({ title, count, isActive }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>Count: {count}</p>
            <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
        </div>
    );
};
```

**Class Component Example:**

```typescript
import React, { Component } from 'react';

interface MyComponentProps {
    title: string;
    count: number;
    isActive: boolean;
}

class MyComponent extends Component<MyComponentProps> {
    render() {
        const { title, count, isActive } = this.props;

        return (
            <div>
                <h1>{title}</h1>
                <p>Count: {count}</p>
                <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
            </div>
        );
    }
}
```

### Typing State

When working with state in class components or hooks in functional components, it's crucial to define the state type to prevent errors.

#### Step 1: Define a State Interface

Create an interface for the state of your component.

**Example:**

```typescript
interface MyComponentState {
    counter: number;
    isLoading: boolean;
}
```

#### Step 2: Use the State Interface

**Class Component Example:**

```typescript
class MyComponent extends Component<MyComponentProps, MyComponentState> {
    state: MyComponentState = {
        counter: 0,
        isLoading: false,
    };

    incrementCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    render() {
        const { title } = this.props;
        const { counter, isLoading } = this.state;

        return (
            <div>
                <h1>{title}</h1>
                <p>Counter: {counter}</p>
                <button onClick={this.incrementCounter}>Increment</button>
                {isLoading && <p>Loading...</p>}
            </div>
        );
    }
}
```

**Functional Component Example with Hooks:**

```typescript
import React, { useState } from 'react';

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
    const [counter, setCounter] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <h1>{title}</h1>
            <p>Counter: {counter}</p>
            <button onClick={incrementCounter}>Increment</button>
            {isLoading && <p>Loading...</p>}
        </div>
    );
};
```

### Summary

- **Typing Props**: Define an interface for component props and use `React.FC<Props>` for functional components or extend `Component<Props, State>` for class components.
- **Typing State**: Define an interface for the state and set the state type in class components or use `useState<Type>()` for functional components.
- **Benefits**: Ensures type safety, enhances developer experience through autocompletion, and helps catch potential errors at compile time.

### Best Practices

1. **Use Interfaces**: Prefer using interfaces over types for props and state as they provide better extensibility.
2. **Default Props**: If using default props, make sure to handle the types accordingly.
3. **Optional Props**: Use optional properties (`?`) in interfaces if a prop may or may not be provided.
4. **Type Inference**: Leverage TypeScript's type inference where possible to minimize explicit typing.

By typing props and state, you can create more predictable and maintainable React components with TypeScript, improving the overall quality of your applications.