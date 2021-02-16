<template>
    <div class="chatuser">
        <div class="header">
            <span class="back" @click="closeChat">&lt;</span>
            <div>{{touser.username}}</div>
        </div>
        <div class="chatlist">
            <div class="chatItem" v-for="(item,index) in chatlist" :key=index :class="{self:$root.me.username==item.from.username}">
                <!-- <div>123456</div> -->
                <div class="header" >
                    <img :src="item.from.headerimg">
                </div>
                <div class="chatContent">
                    {{item.content}}
                </div>
            </div>

        </div>
        <div class="inputcom">
            <!-- <button>表情</button> -->
            <input type="text" @keydown.enter="sendEvent" v-model="inputData" name="" id="">
            <button @click="sendEvent" >发送</button>
        </div>
    </div>
</template>

<script>
import socket from '../socket'
export default {
    props:[
        'touser',
        'chooseUser',
        'closeChat',
    ],
    data(){
        return {
            chatlist:[],
            inputData:"",
        }
    },
    methods:{
        sendEvent:function(){
           let msg = {
               from:this.$root.me,
               to:this.touser,
               content:this.inputData,
               time:new Date().getTime()
            }
            this.chatlist.push(msg)
            console.log(this.chatlist)
            console.log("+++++++++++++")
            // 发送到服务端
            socket.emit('sentMsg',msg)
            // 保存聊天记录到本地
            this.saveStorage()
    
        },
        saveStorage(){
            let strKey = 'chat-user-' + this.$root.me.username+ '-'+this.touser.username
            console.log("====",strKey)
            console.log(JSON.stringify(this.chatlist))
            localStorage[strKey] = JSON.stringify(this.chatlist)
        },
        getStorage(){
            let strKey = 'chat-user-' + this.$root.me.username+ '-'+this.touser.username
            this.chatlist = JSON.parse(localStorage[strKey])
        }
    },
    beforeMount(){
        this.getStorage()
    }
}
</script>
<style scoped>
    .chatItem{
        display: flex;
        margin:5px 10px;
        
    }
    .chatItem.self{
        flex-direction: row-reverse;
        justify-content: flex-start;
    }
    .chatItem .header img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .chatItem .chatContent{
        background: #bbb;
        border-radius: 5px;
        padding: 8px 10px;
        color: #fff;
        margin: 0 0px 0px 20px;
        font-size: 16px;
        line-height: 40px;
        position: relative;
    }
    .chatItem .chatContent{
       
        margin: 0 20px 0px 0px;
        
    }
    .chatItem .chatContent::before{
        display: block;
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-right: 10px solid #bbb;
        border-top: 8px solid transparent;
        border-bottom: 5px solid transparent;
        top:20px;
        left:-10px;
    }
    .chatItem.self .chatContent::before{
        display: block;
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-left: 10px solid #bbb;
        
        border-top: 8px solid transparent;
        border-bottom: 5px solid transparent;
        top:20px;
        right:-10px;
        left:initial;
        border-right: initial;
    }
    .chatuser{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0px;
        left: 0px;
        background: #efefefef;
        
    }
    .chatuser .header{
        font-size: 18px;
        font-weight: 900;
        background: skyblue;
        height: 40px;
        text-align: center;
        line-height: 40px;
    }
    .chatlist{
        flex: 1;
    }
    .inputcom{
        height: 50px;
        display: flex;
        background: #eee;
        justify-content: space-around;
    }
    .inputcom input{
        width: 270px;
        height: 40px;
        /* font-size: 16px; */
        border-radius: 5px;
        outline: none;
        border:1px solid #CCC;
        margin: 0 0;
    }
    .inputcom button{
        width: 80px;
        height: 40px;
        border-radius: 5px;
        outline: none;
        border:1px solid #CCC;
        margin: 0 0px;
    }
    .chatuser .header{
        position: relative;
    }
    .chatuser .back{
        display: block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        position: absolute;
        left:0;
        top:0;
    }

</style>