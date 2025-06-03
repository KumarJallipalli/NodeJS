# E05: BTS of require()

---

```jsx
function A () {
    const x = 20;
    const y = 30;

    function B () {
        console.log("This is inner function")
    }
}

console.log(x)
```

- Here, The variable `x` is NOT accessible outside the function
    - As `x` is Function Scoped
    - Meaning, All the data inside the Function is Encapsulated & Protected
    - Hence, NOT accessible from Outside the Function

- `require('./module_path')` uses the same process to protect the module
- All the Code inside the Module will be Wrapped inside a Function [ IIFE ]
- Making the module, Function Scope → Encapsulated & Protected

## How `require()` works

- `require('./app.js')` → This require function will Wrap all of app.js code inside a function
    - This function is a Special Function called IIFE
    - This makes the code, function scope
    - Hence, Variables & Functions are NOT available to Access  [ outside the `require()` ]
- Now this function is given to V8 Engine to Execute
    - i.e., `require("module_path")` will wrap all of the code inside the Module into IIFE & then given to V8 Engine to Execute
    - i.e., the reason
        - All the Variables, Functions & Classes are Protected → Due to Function Scope [ through IIFE ]
        - All the Code inside the module gets Executed ONCE → Due to Immediate Invocation [ through IIFE ]

## IIFE

- IIFE → Immediately Invoked Function Expression
    - i.e., A Function Expression which gets invoked immediately
- IIFE is a JS function that is Executed/Invoked immediately once it is Defined
- IIFE is used
    - To create a local scope for variables to prevent them from polluting the global scope.
    - To create private scope, allowing variables and functions to be encapsulated and inaccessible from outside the function.
    - To Work with `require()` function
    - To Create Closures in JS
- Syntax → `(function () { // Code }) ()`

![image.png](E05%20BTS%20of%20require()%20%5B%2004%2002%202025%20%5D%2018f4978bf3668064bf66d015cf1ddd74/image.png)

<aside>
💡

NOTE:

---

- Any Piece of JS code, is NOT directly Passed/sent to V8 Engine for Execution
- It is 1st Wrapped inside IIFE
- Then it is Passed/sent to V8 Engine for Execution
</aside>

## Q: How are Variables & Functions Private in Different Modules..?

- Because of `IIFE` & `require()` statement [ Wraps Code inside the IIFE ]

## Q: how do we get Access to `module.exports`

- Node JS Passes module, require & others as a Parameters to IIFE
- EX: `(function(module, require, ...) {}) ()`

![image.png](E05%20BTS%20of%20require()%20%5B%2004%2002%202025%20%5D%2018f4978bf3668064bf66d015cf1ddd74/image%201.png)

## Steps involved in a `require()` function

1. **Resolving**: 
    - The first step is to resolve the module's location.
    - Node.js searches for the module using the following order:
        - Built-in core modules (e.g., `'fs'`, `'http'`, etc.).
        - **Node modules** in `node_modules` folders (if just a name like `'express'`)
        - The File or Folder path (`'./file'`, `'../lib'`)
2. **Loading**: 
    - Once the module is resolved, Node.js will load the module depending on its type:
        - **JavaScript Module**: If the module is a JavaScript file, Node.js reads its content
        - **JSON File**: If it’s a JSON file, Node.js parses it
        - **C++ Addon**:  The addon is loaded using the `process.dlopen()` method.
            - If it’s a binary file (like `.node`), Node.js loads it using native bindings
3. **Wrapping :** 
    - Node.js wraps the module code inside a function to create a Local Private Scope [ Function Scope ]
        - It ensures variables inside the module do NOT Pollute the global scope.
    - This function looks like:
        
        ```jsx
        javascript
        Copy
        (function(exports, require, module, __filename, __dirname) {
          // module code here
        });
        ```
        
    - The `require()` function itself is available in this scope, along with the `exports` object (where the module can export its functionality), `module` object (which has details like the module’s filename), `__filename`, and `__dirname`.
4. Execution/Evaluation
    - The wrapped function is executed, allowing the module to run.
    - If the module has dependencies, they are loaded recursively.
5. **Returning**: 
    - The `require()` function returns the `exports` object to the Callee,
        - allowing you to use the exported functionalities in your code.
6. **Caching**: 
    - Once the module is loaded and executed, it is cached in `require.cache`.
    - Subsequent calls to `require()` for the same module will return the cached version, —> improving performance by avoiding redundant loading.

## How Wrapping is coded Officially

- This below code will wrap the contents of File inside an IIFE

```jsx
/**
 * Add the CommonJS wrapper around a module's source code.
 * @param {string} script Module source code
 */
let wrap = function(script) { // eslint-disable-line func-style
  return Module.wrapper[0] + script + Module.wrapper[1];
};

const wrapper = [
  '(function (exports, require, module, __filename, __dirname) { ',
  '\n});',
];
// It is an array which is used inside wrap function above
```

---

## Anonymous Function in JS

- `Anonymous Function` → Function with NO Name
- Use Cases
    - Callbacks
    - IIFE
    - Event Listeners/Handlers
    - Function as Variable
    - Return Function from a function