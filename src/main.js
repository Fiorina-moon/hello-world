import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import router from './router'; // 导入路由
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(ElementPlus);
app.use(router); // 使用路由
app.mount('#app');
