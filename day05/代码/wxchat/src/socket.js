import io from 'socket.io-client'

let socket = io.connect('http://localhost')
// socket.on("connect",function(){
//     console.log("与服务器建立起socket.io 连接！")
// })
export default socket;

