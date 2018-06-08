import Vue from 'vue';
import App from './App.vue';
import Asyn from './components/Asyn.vue'
import VFrom from './components/Form.vue'
import Axios from 'axios'
import './style/common.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$ajax = Axios
Vue.use(ElementUI);
new Vue({
    el: '#app',
    template: '<VFrom></VFrom>',
    components: {
        App, Asyn, VFrom
    }
})