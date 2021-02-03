<template>
    <div class="userlist">
        <div class="nav">
            <div class="headerimg" :class="{online:islogin}">
                <img v-if="$root.me!=null" :src="$root.me.headerimg" alt="">
            </div>
            <div>消息</div>
            <div class="headerimg">
                
            </div>
        </div>
        <div class="users">
             <div class="useritem">
                 <div class="left">
                     <img src="" alt="">
                 </div>
                 <div class="right">
                     <span class="username"></span>
                     <span class="msg"></span>
                 </div>
             </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["islogin"]
}
</script>

<style  scoped>
    .headerimg{
        filter: grayscale(1);
        height: 60px;
        width: 60px;
    }
    .online{
        filter: grayscale(0);
    }
    .nav{
        height: 80px;
        width: 100vw;
        background: skyblue;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .headerimg img{
        height: 60px;
        width: 60px;
        border-radius: 50%;


    }
</style>