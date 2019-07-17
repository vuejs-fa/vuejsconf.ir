
export default {
  mode: 'universal',

  head: {
    titleTemplate: '%s - Iranian Vuejs Meetup'
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  devModules: [
    '@nuxtjs/eslint-module'
  ],

  meta: {
    name: 'Iranian Vuejs Meetup',
    description: 'Iranian Vuejs Meetup Website',
    lang: 'fa'
  },

  eslint: {
    fix: true
  }
}
