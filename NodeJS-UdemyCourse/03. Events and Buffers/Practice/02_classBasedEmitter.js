const EventEmitter = require('node:events');

// Creating a Chat class
class Chat extends EventEmitter {
    sendMessage (msg) {
        console.log(`Created a class function to trigger event`);
        // Adding event emitter inside a Class Function
        this.emit('message', msg);
    }
}

// Create an Instance/Object
let chat = new Chat();

// Adding Listener
chat.on('message', (data) => {
    console.log(`The Message is : ${data}`);
})

// Calling class function using chat Obj
chat.sendMessage('Event is Triggered using a class function')


const eventEmitter = new EventEmitter();

// Error Handling
eventEmitter.on('error', (err) => {
    console.error(`Error Message is ${err.message}`)
})

eventEmitter.emit('error', new Error("some Random Error"));