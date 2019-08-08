<template>
	<footer class="position-relative">
		<div class="container pt-7 pb-5">
			<div class="w-md-80 w-lg-50 text-center mx-md-auto mb-5">
				<h2 class="text-white">
					برای آمدن به <strong class="font-weight-semi-bold">میتاپ Vue.JS</strong> آماده هستید؟
				</h2>
				<p class="text-white-70 mb-0">
					برای مطلع شدن از اخبار میتاپ ایمیل خود را وارد کنید.
				</p>
			</div>

			<form class="js-validate w-lg-80 mx-lg-auto">
				<div class="row mx-gutters-2">
					<div class="col-6 col-sm mb-2">
						<div class="js-form-message">
							<label class="sr-only" for="signupSrName">نام</label>
							<div class="input-group input-group-borderless">
								<input id="signupSrName" class="form-control" placeholder="نام" required>
							</div>
						</div>
					</div>

					<div class="col-6 col-sm mb-2">
						<div class="js-form-message">
							<label class="sr-only" for="signupSrEmail">ایمیل</label>
							<div class="input-group input-group-borderless">
								<input id="signupSrEmail" type="email" class="form-control" placeholder="آدرس ایمیل" required>
							</div>
						</div>
					</div>

					<div class="col-sm mb-2">
						<button class="btn btn-secondary btn-block transition-3d-hover">
							ثبت اطلاعات
						</button>
					</div>
				</div>
			</form>

			<hr class="opacity-md my-5">

			<div class="row align-items-lg-center">
				<div class="col-lg-3 mb-4 mb-lg-0">
					<samp class="small text-white-70 mb-0">© VueJSConf.ir 2019</samp>
				</div>

				<div class="col-md-8 col-lg-6 mb-4 mb-md-0">
					<ul
							class="list-inline list-group-transparent list-group-white list-group-flush list-group-borderless text-lg-center mb-0"
					>
						<li class="list-inline-item px-2">
							<a class="list-group-item-action" href="#">درباره ما</a>
						</li>
						<li class="list-inline-item px-2">
							<a class="list-group-item-action" href="#">سخنرانان</a>
						</li>
						<li class="list-inline-item px-2">
							<a class="list-group-item-action" href="#">خرید بلیط</a>
						</li>
						<li class="list-inline-item px-2">
							<a class="list-group-item-action" href="#">بلاگ</a>
						</li>
					</ul>
				</div>

				<div class="col-md-4 col-lg-3">
					<ul class="list-inline text-md-left mb-0">
						<li class="list-inline-item">
							<a class="btn btn-sm btn-icon btn-soft-light rounded" href="#">
								<span class="fab fa-facebook-f btn-icon__inner"></span>
							</a>
						</li>
						<li class="list-inline-item">
							<a class="btn btn-sm btn-icon btn-soft-light rounded" href="#">
								<span class="fab fa-google btn-icon__inner"></span>
							</a>
						</li>
						<li class="list-inline-item">
							<a class="btn btn-sm btn-icon btn-soft-light rounded" href="#">
								<span class="fab fa-twitter btn-icon__inner"></span>
							</a>
						</li>
						<li class="list-inline-item">
							<a class="btn btn-sm btn-icon btn-soft-light rounded" href="#">
								<span class="fab fa-github btn-icon__inner"></span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<figure class="position-absolute m-0 top-0 right-0 h-100 d-none d-md-block">
			<img src="~assets/img/vuejs2.png" class="img-fluid h-100" alt="">
		</figure>
	</footer>
</template>

<script>
	export default {
		name: 'CustomFooter'
	}
</script>

<style lang="scss" scoped>
	footer {
		background-image: linear-gradient(250deg, #40b883 20%, #35495e 170%);
	}

	.text-white-70 {
		color: hsla(0, 0%, 100%, .7);
	}

	.list-group-white .list-group-item-action[href],
	.list-group-white .list-group-item[href] {
		color: hsla(0, 0%, 100%, .7);
	}

	.btn-soft-light {
		color: #f8f9fa;
		background: rgba(248, 249, 250, .1);
		width: 2.2rem;
		border-color: transparent;
		height: 2.2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.1rem;

		&:hover {
			color: #35495e;
			background: #f8f9fa;
			box-shadow: 0 4px 11px rgba(248, 249, 250, .35);
		}
	}
</style>
