<template>
  <div id="app" class="container">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  left: 0;
  top: 0;
  margin: auto auto;
  width: 100%;
  height: 100%;
  background: url("assets/bg.jpg")no-repeat center;
  background-size: 100% 100%;
}
</style>
