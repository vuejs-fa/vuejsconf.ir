import head from './config/head';
import modules from "./config/modules";
import plugins from "./config/plugins";

export default {
	mode: 'universal',

	head,
	modules,
	plugins,

	loading: {color: '#35495e'},

	css: ['~assets/scss/app.scss'],
}
