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
             <div @click="chooseUser(item)" class="useritem" v-for="(item,index) in friends" :key=index>
                 <div class="left" :class="{online:(item.isonline=='true'),unread:unreadlist.indexOf(item.username) != -1}">
                     <img :src="item.headerimg" alt="">
                     <div></div>
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
    props:["islogin","users","chooseUser","touser","unreadlist"],
    computed:{
        friends:function(){
            console.log(this.$root.me)
            console.log(this.users)
            if(this.users !=null){
                let username = this.$root.me.username;
                return this.users.filter((item,index)=>{
                    return item.username != username;
                })
            }else{
                return this.users
            }
        }
    },
    mounted(){
        console.log('-----')
        console.log(this.unreadlist)
    }
}

</script>

<style  scoped>
    .unread{
        position: relative;
    }
    .unread::before{
        position:absolute;
        content:'';
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: red;
        bottom: 5px;
        right: 5px;
    }
    .nav .title{
        font-weight: 900;
        font-size: 18px;
    }
    .useritem .left{
        filter: grayscale(1);
    }
    .useritem{
        display: flex;
        height: 80px;
        background: #eee;
        border-bottom: 1px solid #ccc;
        align-items: center;
        padding: 0 10px;
    }
    .useritem .left img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .useritem .right{
        padding: 0 10px;
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