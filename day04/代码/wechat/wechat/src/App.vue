<template>
  <div id="app">
    <!-- {{ msg }} -->
    <div class="content">
      <chat-com :currentUser="currentUser"></chat-com>
      <!-- ：父传子数据 && @子传父方法监听 -->
      <userlist-com @chooseuser="toggleUser" :userlist="userlist"></userlist-com>
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
    HelloWorld,
    chatCom,
    userlistCom
  },
  data(){
    return {
      msg:'zag聊天...!!!',
      userlist:[
        {
          username:"小明",
          headerimg:require('./assets/img/1.jpg')
        },
        {
          username:"小黑",
          headerimg:require('./assets/img/2.jpg')
        },
        {
          username:"小红",
          headerimg:require('./assets/img/3.jpg')
        },
        {
          username:"小白",
          headerimg:require('./assets/img/4.jpg')
        },
        {
          username:"小黄",
          headerimg:require('./assets/img/5.jpg')
        },
      ],
      currentUser:{
        username:"小黄",
        headerimg:require('./assets/img/5.jpg')
      }
    }
  },
  methods:{
          toggleUser:function(index){
            this.currentUser = this.userlist[index]
        }

  }
}
</script>

<style scoped>

  .content{
    display: flex;
    width: 800px;
    height: 700px;
    margin: 100px auto;
  }
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px; */
  }

</style>
