import { createApp } from "vue";
import ElementPlus from 'element-plus' //引入element-plus 组件
import 'element-plus/dist/index.css'  //引入element-plus 样式
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import './styles/main.scss'  //全局样式


createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
