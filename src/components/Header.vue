/* eslint-disable */
<template>
    <div>
        <img  :src="topBarPic"/>
    </div>
</template>

<script>
  export default {
    name: 'Header',
    computed:{
      topBarPic:function () {
         // eslint-disable-line
        return  this.$route.name === 'home'? require('../assets/top_bar_big.png') : require('../assets/top_bar.png')
      }
    }
  }
</script>

<style scoped>
    img{
        width: 100%;min-width: 1080px
    }
</style>
