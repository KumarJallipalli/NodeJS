const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
// This Creates an eventEmitter Object

eventEmitter.on('greet', (user) => {
    console.log(`Hello ${user}, Welcome to Events in NodeJS`);
    
})
// This allows you to register a listener (callback function) ON a specific event.

eventEmitter.emit('greet', 'Paris');
// This Emits the Event [ Custom Event ] called 'greet'
// 1st para --> Name of the Event
// 2nd Para --> Arguments


// Single & Multi Listeners
eventEmitter.on('scream', (user) => {
    console.log(`Heard a Scream from ${user}`);
});

eventEmitter.once('notify', (user) => {
    console.log(`Notified the User: ${user}`);
});

eventEmitter.emit('scream', "London");
eventEmitter.emit('scream', "Paris");
eventEmitter.emit("notify", "Hamilton");
eventEmitter.emit("notify", "Pamela");
eventEmitter.emit('scream', "Toretto");



// Removing Listeners
function listener (user) {
    console.log(`Hello ${user}`);
}
eventEmitter.on('hello', listener);
eventEmitter.emit('hello', 'Fandiago');
eventEmitter.emit('hello', 'fandom');

eventEmitter.removeListener('hello', listener);
eventEmitter.emit('hello');

eventEmitter.on('hi', (user) => {
    console.log(`Hi ${user}`);
});
eventEmitter.emit('hi', "Dominic")

// eventEmitter.removeListener('hi');       // Throws Error
eventEmitter.removeAllListeners('hi');
eventEmitter.emit('hi', "Brainiac") 
