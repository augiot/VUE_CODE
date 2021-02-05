<template>
    <div class="chatuser">
        <div class="heaer">
            {{touser.username}}
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
    ]
}
</script>
<style scoped>
    .chatuser{
        width: 100vw;
        height: 100vh;
        
    }

</style>