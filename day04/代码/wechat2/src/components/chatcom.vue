<template>
    <div class="chat">
        <!-- 父传子方式 -->
        <h1 class="user">用户：{{currentUser.username}}</h1>
        <!-- 插槽方式 -->
        <!-- <slot></slot> -->
        <!-- 聊天列表 -->
        <div class="chatlist">
            <chatitem-com :chatitem="item" v-for="(item,index) in chatList" :key='index'>
                {{item.chatcontent}}
            </chatitem-com>
        </div>
        <chatinput-com :sendEvent='sendEvent'></chatinput-com>
    </div>
</template>
<script>
import chatinputCom from './chatinputcom'
import chatitemCom from './chatitemcom'

export default {
    components:{
        chatinputCom,chatitemCom
    },
    props:['currentUser'],
    
    data(){
        return{
            chatList:[
                {
                    user:{
                        username:'小明',
                        headerimg:require('../assets/img/1.jpg')
                    },
                    chatcontent:'吃了吗？'
                }
            ]
        }
    },
    methods:{
         sendEvent:function(value){
            this.chatList.push(
                {
                    user:{
                        username:'小明',
                        headerimg:require('../assets/img/1.jpg')
                    },
                    chatcontent:value
                }
            )
            
            this.chatList.push(
                {
                    user:this.$root.$children[0].currentUser,
                    chatcontent:new Date()
                }
            )
        }
    }
}
</script>

<style scoped>
    .chat{
        width: 500px;
        height: 700px;
        border: 1px solid #ccc;
    }
</style>