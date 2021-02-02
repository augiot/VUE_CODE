<template>
  <div id="app">
    <choose-user></choose-user>
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
      userlist:[]
    }
  },
  beforeMount(){
      axios.get('http://localhost/api/userlist').then(function(res){
        alert("hello")
        console.log(res)
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
