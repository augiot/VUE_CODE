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
            // 登陆，检查登陆状态，如果有人登陆，强制使其退出
            let sqlStr1 = "select * from user where isonline=? and username =?"
            let result1 = await sqlQuery(sqlStr1,['true',data.username])
            // console.log(result1)
            // console.log(result1[0].socketid)
        
            if (result1.length>0){
                socket.to(result1[0].socketid).emit('logout',{content:"有人登陆进来，將你强制退出！"})
                // 断开连接
                // socket.to(result1[0].socketid).disconnect()  // 此处断开是断开整个socket，而不是某个人的端口，直接在前端进行断开操作就行。
            }

            // 修改数据库的登录信息（socketid，isonline）
            let sqlStr = "update user set socketid=?,isonline =?  where username = ?"
            let result = await sqlQuery(sqlStr,[socket.id,'true',data.username])
            socket.emit("login",{
                state:'ok',
                content:"登录成功！"
            })

            let sqlStr2 = "select * from user"
            //  等待获取mysql查询结果
            let result2 = await sqlQuery(sqlStr2)
            io.sockets.emit("users",Array.from(result2)) 
        })

        // 接收登出事件
        socket.on('disconnect',async function(data){
            console.log(socket.id,"+++")
            // 修改数据库的登录信息（socketid，isonline）
            let sqlStr = "update user set socketid=?,isonline =?  where socketid = ?"
            let result = await sqlQuery(sqlStr,[null,null,socket.id])
            // socket.emit("disconnect",{
            //     state:'ok',
            //     content:"断开连接！"
            // })
        })

        // 获取所有用户的信息
        socket.on('users',async function(data){
            let sqlStr = "select * from user"
            //  等待获取mysql查询结果
            let result = await sqlQuery(sqlStr)

            socket.emit("users",Array.from(result))
        })
2
        socket.on('sentMsg',async function(msg){
            console.log(msg)

        })
    });
    

}

socketio.getSocket = getSocket;

module.exports = socketio