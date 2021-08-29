const emitter = require('events');

const customEvent = new emitter();

customEvent.on('custom', () => {
    console.log('custom event has briiiv')
});

customEvent.on('props', () => {
    console.log('props event has listened');
});

customEvent.on('hool', arg => {
    console.log(arg);
})

console.log('This custom events will be triggered');
customEvent.emit('custom');
console.log('===================================');
console.log('This props event will be triggered');
customEvent.emit('props')
console.log('===================================');
customEvent.emit('hool', 10)