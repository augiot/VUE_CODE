<template>
    <div class="chatItem">
        <img :style="imgStyle" :src="chatitem.user.headerimg" alt="">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:['chatitem'],
    data(){
        return{
            imgStyle:{
                width:"60px",
                height:"60px"
            }
        }
    }
}
</script>
// scoped 表示该样式只在该组件有效
<style scoped> 
.chatItem{
    display: flex;
}

</style>