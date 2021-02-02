<template>
    <div class="chatItem">
        <!-- {{chatitem.user.username}} -->
        <img :style="imgStyle" :src="chatitem.user.hearderimg" alt="">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:["chatitem"],
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

<style scoped>
.chatItem{
    display: flex;
}
</style>
