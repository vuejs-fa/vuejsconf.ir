<template>
	<nav class="navbar navbar-expand-lg navbar-light position-absolute top-0 w-100 bg-white">
		<div class="container">
			<nuxt-link to="/" class="navbar-brand ml-5">
				<img id="logo-image" src="~/assets/img/logo.png" alt="VueJSConf Logo">
				<span class="text-dark">VueJSConf</span>
			</nuxt-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<nuxt-link to="/" class="nav-item nav-link">درباره ما</nuxt-link>
					<nuxt-link to="/" class="nav-item nav-link">سخنرانان</nuxt-link>
					<nuxt-link to="/" class="nav-item nav-link">مکان برگزاری</nuxt-link>
					<nuxt-link to="/" class="nav-item nav-link">حامیان</nuxt-link>
					<nuxt-link to="/" class="nav-item nav-link">خرید بلیط</nuxt-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'Navbar'
	}
</script>

<style scoped>
	#logo-image {
		width: 50px;
	}

	nav {
		z-index: 10;
	}
</style>
