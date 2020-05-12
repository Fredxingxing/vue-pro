<template>
    <div class="test">
        welcome to  test
    </div>
</template>

<script>
  export default {
    name: 'Test'
  }
</script>

<style scoped>
.test{
    padding-top: 50px;
    width: 100px;
    margin: 0 auto;
    animation:rotate 5s infinite;
}
@keyframes rotate {
    0%{ transform:rotate(0deg); }
    100%{ transform:rotate(360deg); }
}
</style>
