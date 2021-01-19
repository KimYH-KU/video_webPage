import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify,
  template: '<App/>'
});
