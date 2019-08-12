import head from './config/head'
import modules from './config/modules'
import plugins from './config/plugins'
import manifest from './config/manifest'

export default {
  mode: 'universal',

  head,
  modules,
  plugins,
  manifest,

  loading: { color: '#35495e' },

  css: ['~assets/scss/app.scss']
}
