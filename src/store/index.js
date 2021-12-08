import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/config/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    eventDrawer:true,
    config: {
      generalConfig: {
        socialLinks:{}
      },
      keysandsecurity: {},
      footerConfig: {},
    },
    items: [{
        text: 'Inicio',
        to: '/',
        icon: 'mdi-home',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Realidad Virtual',
        to: '/events',
        icon: 'mdi-assistant',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Realidad Aumentada',
          to: '/about',
          icon: 'mdi-comment-alert',
          meta: {
            showToolbar: true,
            showBottomNav: true
         },
        },
      {
        text: 'xd',
        to: '/team',
        icon: 'mdi-account-settings',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Galeria',
        to: '/speakers',
        icon: 'mdi-assistant',
        meta: {
          showToolbar: true,
          showBottomNav: false
        },
      },
      {
        text: 'Contacto',
        to: '/contact',
        icon: 'mdi-contacts',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
     {
       text: 'Partners',
       to: '/partners',
        icon: 'mdi-currency-usd',
        meta: {
          showToolbar: false,
         showBottomNav: false
        },
      },
      {
        text: 'Blogs',
        to: '/blogs',
        icon: 'mdi-blogger',
        meta: {
         showToolbar: true,
         showBottomNav: false
        },
     }
    ]
  },
  getters: {
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    setEventDrawer: (state, payload) => (state.eventDrawer = payload),
    toggleEventDrawer: state => (state.eventDrawer = !state.eventDrawer),
    setGeneralConfig: (state, payload) => (state.config.generalConfig = payload),
    setKeysAndSecutityConfig: (state, payload) => (state.config.keysandsecurity = payload),
    setFooterConfig: (state, payload) => (state.config.footerConfig = payload),
  },
  modules: {},
  actions: {}

})