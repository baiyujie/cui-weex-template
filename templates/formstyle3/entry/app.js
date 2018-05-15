import App from '../views/app.vue'
import cuiweex from 'cui-weex'

Vue.use(cuiweex);

App.el = '#root'

new Vue(App)