import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import routes from './routes';
// import HippyVueUi from "hippy-vue-ui";

Vue.config.productionTip = false;

// Vue.use(HippyVueUi);
Vue.use(VueRouter);
const router = new VueRouter(routes);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
