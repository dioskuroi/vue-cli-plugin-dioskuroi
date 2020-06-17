import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initInterceptors } from './utils/request'
import './assets/stylus/reset.styl'
<%_ if (sentry) { _%>
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

process.env.NODE_ENV === 'production' &&
  Sentry.init({
    dsn: 'http://1a120486c8ce47a2857596a3c8ef7a18@192.168.2.68:9000/2',
    integrations: [
      new Integrations.Vue({
        Vue,
        attachProps: true
      }),
      new Integrations.RewriteFrames()
    ],
    release: process.env.RELEASE_VERSION,
    environment: process.env.SENTRY_ENV
  })
<%_ } _%>

Vue.config.productionTip = false

initInterceptors(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')