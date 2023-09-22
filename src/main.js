import './assets/main.css'

import { createApp } from 'vue'
import { register } from "swiper/element/bundle";
import {
  Button,
  Form,
  Table,
  message,
  Input,
  Upload,
  Radio,
  Popconfirm,
  ConfigProvider,
  Image,
} from "ant-design-vue";
import axios from "axios";

axios.defaults.baseURL = "http://101.200.160.44/";


// axios.defaults.baseURL = 'http://127.0.0.1:3000/'

import App from './App.vue'

import { store } from "./store";
import { router } from "./router";

const vue = createApp(App);

vue.use(store);
vue.use(router);

vue.use(ConfigProvider);
vue.use(Table);
vue.use(Button);
vue.use(Form);
vue.use(Input);
vue.use(Upload);
vue.use(Radio);
vue.use(Popconfirm);
vue.use(Image);
// vue.use(Textarea);

register();

vue.mount("#app");

vue.config.globalProperties.$message = message;