<template>
    <div class="userlist">
        <h1>用户列表</h1>
        <ul>
            <li v-for="(item,index) in userlist" @click="chooseUser(index)" :key="'userlist' + index">
                <img :src="item.headerimg" alt="">
                <h3>{{item.username}}</h3>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data(){
        return {

        }
    },
    props:['userlist'],
    methods:{
        chooseUser:function(index){
            // 将选择用户的事件触发，发送到父元素
            this.$emit('chooseuser',index)
        }
    }
}
</script>

<style scoped>  /* scoped 可设置样式局部有效 */
    .userlist{
        width :300px;
        height :700px;
        background-color: skyblue;
    }
    .userlist ul li{
        display: flex; /* 弹性布局 */ 
    }
    .userlist ul li img{
        width: 80px;
        height: 80px;
    }
    .redbg{
        background-color: pink;
    }
</style>