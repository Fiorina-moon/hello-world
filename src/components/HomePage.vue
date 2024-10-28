<template>
  <div id="home">
    <h2>首页</h2>
    <el-input v-model="message" placeholder="请输入内容" />
    <el-button type="primary" @click="displayMessage">显示消息</el-button>
    <p v-if="displayedMessage">你输入的内容是：{{ displayedMessage }}</p>
    <el-button type="success" @click="goToSecondPage">前往第二页</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      displayedMessage: ''
    };
  },
  methods: {
    displayMessage() {
      this.displayedMessage = this.message;
    },
    goToSecondPage() {
      this.$router.push({ name: 'Second' });
    }
  }
};
</script>

<style scoped>
#home {
  text-align: center;
  margin-top: 20px;
}
</style>
