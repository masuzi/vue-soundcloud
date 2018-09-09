// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
  Col,
  Row,
  Menu,
  Input,
  Container,
  Header,
  Main,
  Footer,
  ButtonGroup,
  Button,
  Loading,
  MessageBox,
  Notification,
  Message,
  Slider,
} from 'element-ui';
import store from './store';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Col);
Vue.use(Row);
Vue.use(Menu);
Vue.use(Input);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(ButtonGroup);
Vue.use(Button);
Vue.use(Slider);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
