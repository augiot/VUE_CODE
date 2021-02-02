let socketio = {}
function getSocket(server){
    socketio.io =require('socket.io')(server);

    let io = socketio.io;
    io.on('connection', function (socket) {
        // 此处的socket是当前浏览器某个浏览器与服务器的连接对象！
    });

}

socketio.getSocket = getSocket;

module.exports = socketio