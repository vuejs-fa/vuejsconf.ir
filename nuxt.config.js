import head from './config/head';
import modules from "./config/modules";

export default {
	mode: 'universal',

	head,
	modules,

	loading: {color: '#35495e'},

	css: [
		'~assets/scss/app.scss'
	],

	plugins: [
		{src: '~/plugins/vue-typer.js', ssr: false},
	],
}
