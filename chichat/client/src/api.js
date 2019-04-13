import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

function recieveMessage(cb) {
    socket.on('message', (message) => {
        //console.log('Here ', message);
        cb(null, message)
    });
}

function sendMessage(message) {
    socket.emit('newMessage', message);
}

function userTyping(user) {
    socket.emit('typing', user);
}

function listenTyping(cb) {

    socket.on('typing', (user) => {
        cb(null, user)
    })
}

export { recieveMessage, sendMessage, userTyping, listenTyping };