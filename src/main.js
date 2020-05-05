// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/assets/css/styles.css')

import VueScrollTo from 'vue-scrollto'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import {faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import VueMatomo from 'vue-matomo'
import '@fortawesome/fontawesome-svg-core/styles.css'
import DefaultLayout from '~/layouts/Default.vue'

config.autoAddCss = false;
library.add(faBlog, faFacebook, faLinkedin, faTwitter, faGithub, faArrowAltCircleRight)

export default function (Vue, { router, head, isClient }) {
  Vue.use(VueScrollTo,  {
    container: "body",
    duration: 800,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
  })

  /*Vue.use(VueMatomo, {
    host: "https://analytics.michaelbrooks.dev",
    siteId: 2,
    router: router,
    enableLinkTracking: true,
    requireConsent: false,
    trackInitialView: false,
    trackerFileName: "piwik",
    debug: false
  })*/

  Vue.component('font-awesome', FontAwesomeIcon)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
