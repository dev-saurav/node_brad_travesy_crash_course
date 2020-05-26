const EventEmitter = require('events')

class MyEmitter extends EventEmitter { }

//Init object
const myEmitter = new MyEmitter()

//Event listner
myEmitter.on('event', () => {
    console.log('event fired')
})

//init event
myEmitter.emit('event');