# E06: Sync (vs) Async

---

## Recap

- JS is a Synchronous, Single Threaded Language
    - Synchronous → Executes Line by Line Sequentially.
        - Go to Next Line only if the Current Line is Executed
    - single-threaded programming language → language supports only one thread of execution at a time
        - i.e., It can only execute one operation at a time in a sequential order
- But Node JS has Event-Driven Architecture capable of Asynchronous
    - JS itself is Synchronous
    - But, With the Help of Node & it’s features [ Super Powers ], JS becomes Asynchronous

## Sync vs Async

![image.png](E06%20Sync%20(vs)%20Async%20%5B%2004%2002%202025%20%5D%201904978bf36680e8bc15fefe33d9f752/image.png)

![image.png](E06%20Sync%20(vs)%20Async%20%5B%2004%2002%202025%20%5D%201904978bf36680e8bc15fefe33d9f752/image%201.png)

![image.png](E06%20Sync%20(vs)%20Async%20%5B%2004%2002%202025%20%5D%201904978bf36680e8bc15fefe33d9f752/image%202.png)

In Terms of JS,

- Sync → Tasks which are Executed Immediately
- Async → Tasks which takes time to Execute

![image.png](E06%20Sync%20(vs)%20Async%20%5B%2004%2002%202025%20%5D%201904978bf36680e8bc15fefe33d9f752/image%203.png)

## How Sync Code is Executed by JS Engine [ V8 ]

- WKT, JS is a Single Threaded → only ONE Thread
- It will have a Single Call Stack [ which runs on that Single Thread ]
- When ever a New JS Code/File is Executed
    - A new Execution Context will be Created in the Call Stack called Global Execution Context [ GEC ]
    - All the Code will be Executed inside this GEC [ Similar to Main function in Other Languages ]
    - Whenever a New Function call happens, JS Engine will Create a new Execution Context for that Function [ called Function Execution Context ] on top of the GEC
    - Then Flow of Execution will be Shifted to that New function Execution Context
    - Once the Function Execution is Completed, It will be Removed from Call Stack & The Flow of Execution will be returned to GEC
    - Once the Execution in GEC is Completed, JS Engine will remove GEC from Call Stack

## NOTE

- JS Engine Cannot perform Async tasks like
    - Interact with File Systems
    - Connect with DB
    - Timer functions like Set Timeout & Timeout
    - etc..
- All these above Async tasks can only be performed by OS
- Hence, To perform above Async tasks, JS Engine somehow needs to interact with OS
    - WKT Node has some super powers [ Extra Functionalities ]
    - With the Help of Node’s Super Powers, JS Engine is able to Interact with OS & Perform Async Operations
    - Super Powers to Node are provided by a Library called `libuv`
- Node JS Provides Async functionalities via a library called `libuv`
- Now, JS Engine will Offload all the Async tasks to `libuv` &
- `libuv` will perform it [ Async Task ] & returns the output back to JS Engine

![image.png](E06%20Sync%20(vs)%20Async%20%5B%2004%2002%202025%20%5D%201904978bf36680e8bc15fefe33d9f752/image%204.png)

![image.png](E06%20Sync%20(vs)%20Async%20%5B%2004%2002%202025%20%5D%201904978bf36680e8bc15fefe33d9f752/image%205.png)

- Node JS Provides Async functionalities via a library called `libuv`
- Now, JS Engine will Offload all the Async tasks to `libuv` &
- `libuv` will perform it [ Async Task ] & returns the output back to JS Engine

## `libuv`

- `libuv` is a multi-platform, support library [ C Library ] which makes **Asynchronous I/O simple & Possible**
- It is Written in C language → `libuv` is a C Program
    - Why C Language ?
        - Because it needs to interact/talk with OS [ To get Async task done ]
- `libuv` is a Genie for us/Node
- Node JS is Asynchronous because of `libuv`
    - In **Node.js**, **`libuv`** enables Asynchronous, non-blocking operations [ which is a key feature of Node's event-driven, non-blocking I/O model ]
    - **`libuv`** is the backbone of Node.js’s non-blocking, event-driven I/O model.
- Key Features
    - Async I/O
    - Event Loop
    - Thread Pool
    - Networking & HTTP
    - Timers
- `libuv` is NOT just used in NODEJS,
    - It is used in other areas as well where interacting with OS is Required

## How Async Code is Executed by JS Engine [ V8 ]

- JS Engine [V8] will Execute the Operations/Tasks Synchronously
- But, whenever it encounters Async Tasks, it will offload those tasks to `libuv` & `libuv` will handle it
- Once all the tasks are Offloaded & Executed, JS Engine will remove GEC from Call Stack
    - This is completed very quicky [ within milli seconds ]
- Now whenever the Offloaded tasks are completed by `libuv`, then it will be returned back to JS Engine again
    - Then JS Engine creates a function execution context for Callback function in  the Call Stack [ Won’t create a GEC ]
    - Once it/callback gets executed. It will be removed from Call Stack as well
    - In this way, Individual tasks offloaded to `libuv` will be again returned back to JS Engine & are executed

![image.png](E06%20Sync%20(vs)%20Async%20%5B%2004%2002%202025%20%5D%201904978bf36680e8bc15fefe33d9f752/image%206.png)

<aside>
💡

NOTE:

---

- JS Engine is Synchronous [ Sync == Blocking I/O ]
- Node JS is Asynchronous [ Async == Non-Blocking I/O ]
    - Non-Blocking → Doesn’t block the Main Thread’s Execution [ As seen in the Async Example ]
</aside>