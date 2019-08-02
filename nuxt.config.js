import head from './config/head';

export default {
	mode: 'universal',

	head,

	loading: {color: '#35495e'},

	css: [
		'~assets/scss/app.scss'
	],

	modules: [
		'@nuxtjs/pwa',
		'@nuxtjs/axios',
		'vue-scrollto/nuxt',
	],

	plugins: [
		{src: '~/plugins/vue-typer.js', ssr: false},
	],

	eslint: {
		fix: true
	}
}
