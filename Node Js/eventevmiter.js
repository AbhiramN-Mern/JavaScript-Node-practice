const eventEmitter = require('events')
const emitter = new eventEmitter()


emitter.on('click', () => {
    console.log('Button Clicked!');
})

emitter.emit('click')

