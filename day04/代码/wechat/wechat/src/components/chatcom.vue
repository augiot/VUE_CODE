<template>
    
    <div class="chat"> 
        <h1 class="user">用户：{{currentUser.username}}</h1>
        <!-- 聊天列表 -->
        <div class="chatlist">
            <chatItem-com v-for="(item,index) in chatList" :chatitem='item' :key='index'>
                {{item.chatcontent}}
            </chatItem-com>
        </div>
        <chatInput-com :sendEvent='sendEvent'></chatInput-com> 
    </div>
    
</template>


<style scoped>
    .chat{
        width: 500px;
        height: 700px;
        border: 1px solid #ccc;
    }
</style>
<script>
import chatInputCom from './chatinputcom'
import chatItemCom from './chatitem'
export default {
    props:['currentUser'],
    components:{
        chatInputCom,
        chatItemCom
    },
    data(){
        return{
            chatList:[
                {
                    user:{
                        username:'小黑',
                        hearderimg:require("../assets/img/2.jpg")
                    },
                    chatcontent:'吃了吗？'
                }
            ]
        }
    },
    methods:{
         sendEvent:function(value){
            this.chatList.push({
                user:{
                        username:'小黑',
                        hearderimg:require("../assets/img/2.jpg")
                    },
                    chatcontent:value
            })
        }
    }
}
</script>