import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mitt from 'mitt'
import less from 'less'

const emitter = mitt()


// 创建vue实例
const app = createApp(App)

// app.config.globalProperties.$bus = createApp()
// app.provide("$bus", app.config.globalProperties.$bus);

app.config.globalProperties.$mitt = mitt()
// app.provide("mitt", app.config.globalProperties.mitt);

app.use(store)
  .use(router).use(less)
  .mount("#app");


// import { inject } from 'vue'
// export default {
//   setup() {
//     const $http = inject('$bus')
//   }
// }
