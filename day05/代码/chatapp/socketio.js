let socketio = {}
let sqlQuery = require("./module/lcMysql")
function getSocket(server){
    socketio.io =require('socket.io')(server);

    let io = socketio.io;
    
    io.on('connect', function (socket) {
        // 此处的socket是当前浏览器某个浏览器与服务器的连接对象！
        console.log(socket.id+"建立连接")
        //  接收登录事件
        socket.on('login', async function(data){
            // 修改数据库的登录信息（socketid，isonline）
            
            let sqlStr = "update user set socketid=?,isonline =?  where username = ?"
            let result = await sqlQuery(sqlStr,[socket.id,'true',data.username])
            socket.emit("login",{
                state:'ok',
                content:"登录成功！"
            })
        })
    });
    

}

socketio.getSocket = getSocket;

module.exports = socketio