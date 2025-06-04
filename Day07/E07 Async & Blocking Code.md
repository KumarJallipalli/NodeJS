# E07: Async & Blocking Code [ 04/02/2025 ]

---

```jsx
const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Synchronous Function [ See the fn name ] --> Runs Synchronously --> Blocking Code 
fs.readFileSync("./07_file.txt", "utf8"); // 10 ms
console.log("This will execute only after file read is Completed");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

// Async function
fs.readFile("./07_file.txt", "utf8", (err, data) => {
  console.log("File Data : ", data);
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);
```

The reason your code doesn't stop running even after the completion of all asynchronous operations is because 

- the `https.get` function doesn't explicitly end the request.
- The request remains open, and Node.js keeps the event loop alive until all network requests are either completed or explicitly terminated.
- To solve this issue, you can call `res.on('data', () => {});` and `res.on('end', () => {});` to consume and end the response data stream.

```jsx
https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");

  // Consume the response data
  // This is Mandataory, else request is still open
  res.on('data', () => {});

  // End the request when the response has ended
  res.on('end', () => {
    console.log("Response ended");
  });
});
```

Here, 

- `fs.readFileSync()` → Sync Function ⇒ Blocking Code [ Blocks the Main Thread’s Execution ]
    - This won’t be offloaded to `libuv`, V8 will execute it synchronously & Blocks the remaining code execution
        - Hence it is called a Blocking Code [ as it blocks the remaining code ]
    - This is True for all Sync Functions
    - So, DON’T use the Sync Functions [ as they are Blocking Functions ]
    - As it is a Sync function, It won’t have a Callback Function
- `fs.readFile()` → Async Function ⇒ Non Blocking Code

## Blocking Code

- Blocking via a Sync Function can be clearly seen using this Code Example
    
    ```jsx
    const crypto = require('node:crypto')
    
    console.log("Hello World");
    
    // Synchronous Function --> Blocks the Main Thread's Execution
    const key1 = crypto.pbkdf2Sync("Password", "salt", 5000000, 50, 'sha512')
    console.log(key1.toString('hex'));
    
    // Asynchronous Function --> Execution Continues without Bloacking
    const key2 = crypto.pbkdf2("Password", "salt", 5000000, 50, 'sha512', () => {
        console.log("This is an Async Function [ Pbkdf2 --> pwd based key derivitive function 2 ]");
    })
    
    function sum (a, b) {
        return a+b;
    }
    
    const c = sum(10, 30);
    console.log(c);
    ```
    

<aside>
💡

NOTE:

---

- `require('node:crypto')` && `require('crypto')` both are SAME
    - We are requiring the Core Node Modules
    - Hence we can use anyone of the way of requiring the Module
</aside>

## What is the O/P..?

```jsx
const crypto = require('node:crypto')

console.log("Hello World");

setTimeout(() => {
    console.log("Immediately Executed");
}, 0)

setTimeout(() => {
    console.log("Executed after 3 Seconds");
}, 3000)

function sum (a, b) {
    return a+b;
}

const c = sum(10, 30);
console.log("Sum: " + c);
```

- Here, The O/P will be
    
    ```jsx
    Hello World
    Sum: 40
    Immediately Executed
    Executed after 3 Seconds
    ```
    

Why..?

- set Timeout is an Async function → It will be offloaded to `libuv`
- This `libuv` will return back the callback function to JS Engine, Only if the Call Stack is Empty
- i.e., if the GEC is still Executing → Call Stack is NOT Empty, Then the Async Callback functions won’t be returned to JS Engine
- Here, 0 milli seconds → when the call stack is Empty, then returns the callback function to JS Engine after 0 milli seconds

<aside>
💡

NOTE:

---

- Async functions calls will ONLY be called
    - only Once the Call Stack is Empty
    - But NOT immediately
</aside>