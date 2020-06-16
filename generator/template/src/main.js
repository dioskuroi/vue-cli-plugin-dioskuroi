---
extend: '@vue/cli-service/generator/template/src/main.js'
replace:
  - !!js/regexp /Vue.config.productionTip = false/
---

<%# REPLACE %>
<%_ if (sentry) { _%>
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

Vue.config.productionTip = false

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
<%_ } else { _%>
Vue.config.productionTip = false
<%_ } _%>
<%# END_REPLACE %>