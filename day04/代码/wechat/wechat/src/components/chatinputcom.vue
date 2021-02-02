<template>
    <div>
        <input @keydown.enter="sendEvent($event.target.value)" v-model="inputContent" type="text">
        <button @click="sendEvent">发送</button>
    </div>
</template>

<script>
export default {
    props:['sendEvent'],
    data(){
        return{
            innputContent:""
        }
    },
    methods:{
       
    }
}
</script>