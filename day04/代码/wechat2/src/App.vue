<template>
  <div id="app">
    <div class="content">
      <!-- 父传子的方式 -->
      <chat-com :currentUser = 'currentUser'></chat-com>
      <!-- 插槽的方式 -->
      <!-- <chat-com>
        <h1 class="user">用户：{{currentUser.username}}</h1>
      </chat-com> -->
      
      <userlist-com @chooseuser='toggleUser' :userlist='userlist'></userlist-com>
    </div>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import chatCom from './components/chatcom'
import userlistCom from './components/userlistcom'

export default {
  name: 'app',
  components: {
    HelloWorld,chatCom,userlistCom
  },
  data(){
    return{
      msg:'老陈聊天',
      userlist:[
        {
          username:'小明',
          headerimg:require('./assets/img/1.jpg')
        },
        {
          username:'小红',
          headerimg:require('./assets/img/2.jpg')
        },
        {
          username:'小黑',
          headerimg:require('./assets/img/3.jpg')
        },
        {
          username:'小白',
          headerimg:require('./assets/img/4.jpg')
        },
        {
          username:'小黄',
          headerimg:require('./assets/img/5.jpg')
        },
      ],
      currentUser:{
        username:'小明',
        headerimg:require('./assets/img/1.jpg')
      }
    }
  },
  methods:{
    toggleUser:function(index){
      
      this.currentUser = this.userlist[index]
    }
  }

  // data:function(){
  //   return
  // }
}
</script>

<style scoped>
#app123 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content{
  display: flex;
  width: 800px;
  height: 700px;
  margin: 100px auto;

}


</style>
