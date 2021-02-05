<template>
    <div class="userlist">
        <div class="nav">
            <div class="headerimg" :class="{online:islogin}">
                <img v-if="$root.me!=null" :src="$root.me.headerimg" alt="">
            </div>
            <div class="title">消息</div>
            <div class="headerimg">
                
            </div>
        </div>
        <div class="users">
             <div @click="chooseUser(item)" class="useritem" v-for="(item,index) in users" :key=index>
                 <div class="left" :class="{online:(item.isonline=='true')}">
                     <img :src="item.headerimg" alt="">
                 </div>
                 <div class="right">
                     <span class="username">{{item.username}}</span>
                     <span class="msg"></span>
                 </div>
             </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["islogin","users","chooseUser","touser"]
}
</script>

<style  scoped>
    .nav .title{
        font-weight: 900;
        font-size: 18px;
    }
    .useritem .left{
        filter: grayscale(1);
    }
    .headerimg{
        filter: grayscale(1);
        height: 50px;
        width: 50px;
        margin: 10px;
    }
    .online{
        filter: grayscale(0) !important; 
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
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
</style>