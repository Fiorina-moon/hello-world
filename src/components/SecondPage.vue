<template>
  <div id="second">
    <h2>第二页</h2>
    <p>这是一个新的页面。</p>
    <el-button type="primary" @click="goToHomePage">返回首页</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHomePage() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>

<style scoped>
#second {
  text-align: center;
  margin-top: 20px;
}
</style>
