<template>
    <div class="userlist">
        <h1>用户列表</h1>
        <ul>
            <li v-for="(item,index) in userlist" @click="chooseUser(index)" :key="'userlist'+index" >
                <img :src="item.headerimg">
                <h3>{{item.username}}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['userlist'],
    data(){
        return {

        }
    },
    methods:{
        chooseUser:function(index){
            // 将选择用户的事件触发，发送给到 父元素
            this.$emit('chooseuser',index)
        }
    }
}
</script>

<style scoped>
    .userlist{
        width: 300px;
        height: 700px;
        background: skyblue;
    }
    .userlist ul li{
        display: flex;
    }
    .userlist ul li img{
        width: 80px;
        height: 80px;

    }
    .redBg{
        background: pink;
    }

</style>