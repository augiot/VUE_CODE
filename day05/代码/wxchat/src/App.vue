<template>
  <div id="app">
    <choose-user v-if="$root.me==null" :userlist=userlist></choose-user>
    <user-list v-if="$root.me!=null" :islogin='islogin' :users="users" :chooseUser="chooseUser" :unreadlist="unreadlist"></user-list>
    <chat-user v-if="ischat" :touser="touser" :closeChat="closeChat" :newMsg="newMsg"></chat-user>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import chooseUser from './components/chooseUser'
import userList from './components/userlist'
import chatUser from './components/chatUser'
import axios from 'axios'
import socket from './socket'



export default {
  name: 'app',
  components: {
    HelloWorld,
    chooseUser,
    userList,
    chatUser,
  },
  data(){
    return {
      userlist:[],
      islogin:false,
      users:null,
      touser:{},
      ischat:false,
      unreadlist:[],
      newMsg:null
    }
  },
  async beforeMount(){
      // axios.get('http://localhost/api/userlist').then(function(res){
      //   alert("hello")
      //   console.log(res)
      // })
      let res = await axios.get('http://localhost:3000/api/userlist')
      this.userlist = res.data
      
  },
  mounted(){
    // console.log(this.$root)
    // 监听登录成功，设置为true
    socket.on("login",(data) =>{
      if(data.state=='ok'){
        this.islogin = true;
        socket.emit("users")
      }
    })
    // 监听断开连接事件
    socket.on("logout",(data) =>{
      console.log(data)
      this.islogin = false
      // 断开连接
      socket.disconnect()
    })
    // 监听断开连接事件
    socket.on('disconnect',(data) => {
      console.log("连接已断开！")
    })

    //  重连需要刷新页面，执行socked.io connect 的时候会重新连接！

    // 监听用户列表
    socket.on("users",(data)=>{
      // console.log(data)
      this.users = data
      
    })

    // 监听未读消息
    socket.on("unreadMsg",(data)=>{
      console.log('unreadMsg......')
      console.log(data)
      data.forEach((item,index) => {
        // 设置未读的红点
        // 将聊天的内容分别添加到本地存储


        // 将from/to改成有头像的对象
        item.from = this.usersObj[item.from]
        item.to = this.usersObj[item.to]
        this.unreadlist.push(item.from)
        
        let strKey = 'chat-user-' + this.$root.me.username+ '-'+item.from.username
        // console.log("====",strKey)
        // console.log(JSON.stringify(this.chatlist))
        // 先解析本地存储数据，再添加
        // console.log(strKey)
        // console.log(localStorage[strKey])
        localStorage[strKey] = localStorage[strKey]?localStorage[strKey]:"[]";
        let newArr = JSON.parse(localStorage[strKey])
        newArr.push(item)
        console.log(newArr)
        localStorage[strKey] = JSON.stringify(newArr);
        // console.log("输出用户对象....")
        // console.log(this.usersObj)

        
      });
    })

    socket.on('accept',(msg)=>{
      console.log("------接收的数据")
      console.log(msg.from.username)
      console.log(this.touser.username)
      
      if(this.ischat == true && msg.from.username == this.touser.username){
         this.newMsg = msg;
         
         console.log(msg)
      }
    })
  },

  methods:{
    chooseUser:function (user) {
      console.log("点击了用户：",user)
      this.touser = user;
      this.ischat = true;
    },
    closeChat:function(){
      this.ischat = false;
    },
  },
  computed:{
    usersObj:function(){
      let obj = {}
      this.users.forEach((item,index)=>{
        obj[item.username] = item;
      })
      console.log(obj)
      return obj;
    }
  }


}
</script>

<style>
* {
 margin: 0;
 padding: 0;
}
</style>
