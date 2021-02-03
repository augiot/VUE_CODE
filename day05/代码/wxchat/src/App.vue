<template>
  <div id="app">
    <choose-user v-if="$root.me==null" :userlist=userlist></choose-user>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import chooseUser from './components/chooseUser'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    HelloWorld,chooseUser
  },
  data(){
    return {
      userlist:[],
      
    }
  },
  async beforeMount(){
      // axios.get('http://localhost/api/userlist').then(function(res){
      //   alert("hello")
      //   console.log(res)
      // })
      let res = await axios.get('http://localhost/api/userlist')
      this.userlist = res.data
  }
}
</script>

<style>
* {
 margin: 0;
 padding: 0;
}
</style>
