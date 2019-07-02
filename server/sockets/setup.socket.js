const socket = require('socket.io');

const socketConnection = (server, app) => {
    // SOCKET.IO SETUP
    const io = socket(server);

    //SOCKET.IO ENDPOINTS
    io.on('connection', socket => {
        console.log('Connected to socket.io');

        socket.on('join room', data => {
            socket.join(data.roomId);
            console.log('Joined room:', data.roomId)
        })
    })

}

// EXPORT SOCKET CONNECTION
module.exports = {
    socketConnection
}