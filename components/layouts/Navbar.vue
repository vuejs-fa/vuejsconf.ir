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
					<div class="nav-item nav-link"
							 v-scroll-to="{el: '#introduction-section',duration: 1000}">درباره ما</div>
					<div class="nav-item nav-link"
							 v-scroll-to="{el: '#host-location',duration: 1000}">مکان برگزاری</div>
					<div class="nav-item nav-link"
							 v-scroll-to="{el: '#sponsors-section',duration: 1000}">حامیان</div>
					<div class="nav-item nav-link"
							 v-scroll-to="{el: '#pricing-section',duration: 1000}">خرید بلیط</div>
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

<style lang="scss" scoped>
	#logo-image {
		width: 50px;
	}

	nav {
		z-index: 10;
	}

	.nav-link {
		cursor: pointer;
	}
</style>
