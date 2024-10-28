<template>
  <div id="app">
    <router-view></router-view> <!-- 显示路由组件 -->
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
  margin-top: 20px;
}
</style>
