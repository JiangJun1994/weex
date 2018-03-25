// import foo from './src/foo.vue'
// import home from './src/assets/views/home.vue'
// home.el = '#root'
// export default new Vue(home)
// foo.el = '#root'
// export default new Vue(foo)
import App from './src/App.vue'
import router from './src/router'

new Vue(Vue.util.extend({ el: '#root', router }, App));

router.push('/');