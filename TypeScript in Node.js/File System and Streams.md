# File System and Streams in TypeScript

In Node.js, the `fs` module is used to work with the file system, allowing you to read, write, and manipulate files. Streams are an efficient way to handle data flow in Node.js, especially for large files or data sources.

### 1. File System Module (`fs`)

The `fs` module provides an API for interacting with the file system. It supports both synchronous and asynchronous operations.

#### 1.1 Importing the `fs` Module

To use the `fs` module, you need to import it:

```typescript
import * as fs from 'fs';
```

#### 1.2 Reading Files

You can read files asynchronously or synchronously.

**Asynchronous Read:**

```typescript
fs.readFile('path/to/file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});
```

**Synchronous Read:**

```typescript
try {
    const data = fs.readFileSync('path/to/file.txt', 'utf8');
    console.log('File content:', data);
} catch (err) {
    console.error('Error reading file:', err);
}
```

#### 1.3 Writing Files

You can also write data to files using the `writeFile` method.

**Asynchronous Write:**

```typescript
fs.writeFile('path/to/file.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully!');
});
```

**Synchronous Write:**

```typescript
try {
    fs.writeFileSync('path/to/file.txt', 'Hello, World!');
    console.log('File written successfully!');
} catch (err) {
    console.error('Error writing file:', err);
}
```

#### 1.4 Appending to Files

To append data to an existing file:

**Asynchronous Append:**

```typescript
fs.appendFile('path/to/file.txt', '\nAppending some text.', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Data appended successfully!');
});
```

#### 1.5 Deleting Files

You can delete files using `unlink`:

**Asynchronous Delete:**

```typescript
fs.unlink('path/to/file.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully!');
});
```

### 2. Working with Directories

You can also create, read, and remove directories.

**Creating a Directory:**

```typescript
fs.mkdir('path/to/directory', (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created successfully!');
});
```

**Reading a Directory:**

```typescript
fs.readdir('path/to/directory', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    console.log('Directory contents:', files);
});
```

**Removing a Directory:**

```typescript
fs.rmdir('path/to/directory', (err) => {
    if (err) {
        console.error('Error removing directory:', err);
        return;
    }
    console.log('Directory removed successfully!');
});
```

### 3. Streams in Node.js

Streams are objects that allow you to read or write data in a continuous manner. They are particularly useful for handling large amounts of data without loading it all into memory.

#### 3.1 Types of Streams

- **Readable Streams**: Streams that allow reading data.
- **Writable Streams**: Streams that allow writing data.
- **Duplex Streams**: Streams that can read and write data simultaneously.
- **Transform Streams**: Duplex streams that modify the data as it is written or read.

#### 3.2 Using Readable Streams

You can create a readable stream from a file:

```typescript
const readStream = fs.createReadStream('path/to/file.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log('New chunk received:', chunk);
});

readStream.on('end', () => {
    console.log('No more data to read.');
});

readStream.on('error', (err) => {
    console.error('Error reading stream:', err);
});
```

#### 3.3 Using Writable Streams

You can create a writable stream to write data to a file:

```typescript
const writeStream = fs.createWriteStream('path/to/output.txt');

writeStream.write('Writing some data...\n');
writeStream.write('More data...\n');

writeStream.end(() => {
    console.log('Finished writing to the file.');
});

writeStream.on('error', (err) => {
    console.error('Error writing stream:', err);
});
```

#### 3.4 Piping Streams

You can pipe a readable stream into a writable stream, allowing for efficient data transfer.

```typescript
const readStream = fs.createReadStream('path/to/input.txt');
const writeStream = fs.createWriteStream('path/to/output.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
    console.log('Finished copying data.');
});
```

### 4. Best Practices

- **Use Asynchronous Methods**: Prefer asynchronous methods for file and stream operations to avoid blocking the event loop.
- **Error Handling**: Always implement error handling for file and stream operations to prevent crashes and data loss.
- **Stream Management**: Use streams for large files to minimize memory usage and improve performance.

### 5. Summary

- The `fs` module provides methods for file and directory manipulation.
- Streams allow for efficient data handling, especially with large files.
- Asynchronous operations help maintain the performance of your Node.js applications.
- Proper error handling is crucial for robust file system interactions.
