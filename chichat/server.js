const io = require('socket.io')();

io.on('connection', (socket) => {

    socket.on('newMessage', (message) => {
        //console.log('New Message', message);

        io.sockets.emit('message', message);
    });
    socket.on('typing', (user) => {
        socket.broadcast.emit('typing', user)
    })
});

const port = 5000;
io.listen(port);
console.log('listening on port ', port);