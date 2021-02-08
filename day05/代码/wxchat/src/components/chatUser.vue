<template>
    <div class="chatuser">
        <div class="header">
            <span class="back" @click="closeChat"><</span>
            <div>{{touser.username}}</div>
        </div>
        <div class="chatlist">
            
        </div>
        <div class="inputcom">
            <!-- <button>表情</button> -->
            <input type="text" name="" id="">
            <button>发送</button>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'touser',
        'chooseUser',
        'closeChat',
    ]
}
</script>
<style scoped>
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