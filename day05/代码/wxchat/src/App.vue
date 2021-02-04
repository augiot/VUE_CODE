<template>
  <div id="app">
    <choose-user v-if="$root.me==null" :userlist=userlist></choose-user>
    <user-list v-if="$root.me!=null" :islogin='islogin'></user-list>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import chooseUser from './components/chooseUser'
import userList from './components/userlist'
import axios from 'axios'
import socket from './socket'


export default {
  name: 'app',
  components: {
    HelloWorld,
    chooseUser,
    userList,
    
  },
  data(){
    return {
      userlist:[],
      islogin:false,
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
    console.log(this.$root)
    socket.on("login",(data) =>{
      if(data.state=='ok'){
        this.islogin = true
      }
    })
  },


}
</script>

<style>
* {
 margin: 0;
 padding: 0;
}
</style>
