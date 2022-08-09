<template>
    <div class="swiper-slide tips">
        <img src="../assets/2.jpeg" alt="更新您的浏览器" />
        <div class="tip">
            <h1><slot name="h">这是一个标题</slot></h1>
        </div>
    </div>
</template>
<script setup>
</script>

<style scoped>
   .tips{
        display: flex;
        background-color: transparent;
        background-color: transparent;
        border-radius: 20px;
    } 
    img{
        width: 0px;
        height: 600px;
        flex-grow: 1;
    }
    .tip{
        width:0px;
        height: 600px;
        flex-grow: 1;
    }
</style>