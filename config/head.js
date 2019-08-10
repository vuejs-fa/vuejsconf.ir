const accounts = {
  twitter: '@vuejsconf',
  facebook: '@vuejsconf'
}

export default {
  htmlAttrs: {
    dir: 'rtl',
    lang: 'fa'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'google', content: 'notranslate' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    { name: 'theme-color', content: '#35495e' },
    { name: 'msapplication-navbutton-color', content: '#35495e' },
    { name: 'apple-mobile-web-app-status-bar-style', content: '#35495e' },

    { name: 'referrer', content: 'unsafe-url' },
    { name: 'robots', content: 'index, follow' },

    // OpenGraph
    { property: 'og:site_name', content: 'میتاپ vue.js' },

    // Twitter
    { name: 'twitter:site', content: accounts.twitter },
    { name: 'twitter:creator', content: accounts.twitter }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
  ]
}
