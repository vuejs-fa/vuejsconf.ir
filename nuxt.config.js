
export default {
  mode: 'universal',

  head: require('./utils/seo/main').mainSEO(),

  loading: { color: '#35495e' },

  css: [
    { src: '@/static/css/app.css', lang: 'css' }
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  eslint: {
    fix: true
  }
}
