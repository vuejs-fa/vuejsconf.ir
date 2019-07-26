<template>
	<main id="content" role="main">
		<div id="header-section"
		     class="d-flex align-items-center justify-content-center position-relative height-lg-100vh bg-secondary">
			<div class="container position-absolute top-0">
				<img id="header-image" class="img-fluid position-absolute" src="~/assets/img/meetup.jpg" alt="">
			</div>
			<div class="container position-relative">
				<div class="row space-top-3 space-bottom-2 space-top-md-4 space-bottom-md-3 align-items-md-center">
					<div class="col-lg-6">
						<div class="mb-7">
							<h1 class="text-white">
								<vue-typed-js
										class="font-weight-semi-bold"
										:strings="strings" :loop="true"
										:typeSpeed="100" :startDelay="1000" :backSpeed="20">
			            <span class="typing font-weight-medium"></span>
			          </vue-typed-js>
              </h1>
							<h4 class="text-white font-weight-light">
								مشتاقانه منتظر آمدن شما به
								<span class="text-primary">
                  <span class="u-text-animation u-text-animation--typing font-weight-bold">
	                  میتاپ VUE.JS
                  </span>
                </span>
								هستیم.
							</h4>
						</div>

						<a class="btn btn-white btn-wide transition-3d-hover" href="">ثبت نام</a>
					</div>
				</div>
			</div>
		</div>
		<div id="introduction-section"
		     class="container space-top-5 space-bottom-5">
			<h2 class="text-center">
				ماموریت ما در این میتاپ
			</h2>
			<p>
				Vuejs تهران 2019 میراث را ادامه خواهد داد و بار دیگر بزرگترین میتاپ Vuejs در جهان خواهد بود. با پویا پارسا،
				بیشتر تیم اصلی Vue.js و در مجموع 20+ سخنران، بینش خود را در مورد Vue.js به اشتراک می گذارند. در عرض یک روز ما
				دانش را با بیش از 200 علاقه مندان به Vue.js به اشتراک می گذاریم، به شما این امکان را می دهد که در مورد شبکه Vue
				با بزرگترین گروه توسعه دهندگان Vue در ایران کشف کنید و یاد بگیرید!
			</p>
		</div>
		<div id="speakers-section" class="bg-light">
			<div class="container space-2 space-md-3">
				<div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
					<span class="btn btn-xs btn-soft-success btn-pill mb-2">بهترین های Vue</span>
					<h2 class="font-weight-normal">سخنرانان میتاپ</h2>
					<p>بهترین های Vue برای شما صحبت خواهند کرد</p>
				</div>
				<div class="row mt-3">
					<div v-for="(speaker, index) in speakers"
					     :key="index" class="col-lg-3 col-md-4 col-sm-6 my-3">
						<div class="figure-img rounded">
							<img class="img-fluid w-100 rounded" :src="speaker.image" alt="Image Description">
						</div>
						<div class="card border-0 shadow-sm mt-n6 mx-3">
							<div class="card-body text-center p-4">
								<h3 class="h6 mb-1" v-text="speaker.name"></h3>
								<p class="font-size-1 mb-0" v-text="speaker.bio"></p>
								<ul class="list-inline mt-2 mb-0">
									<li class="list-inline-item mx-0">
										<a class="btn btn-sm btn-icon btn-soft-secondary" href="#" tabindex="0">
											<span class="fab fa-facebook-f btn-icon__inner"></span>
										</a>
									</li>
									<li class="list-inline-item mx-0">
										<a class="btn btn-sm btn-icon btn-soft-secondary" href="#" tabindex="0">
											<span class="fab fa-google btn-icon__inner"></span>
										</a>
									</li>
									<li class="list-inline-item mx-0">
										<a class="btn btn-sm btn-icon btn-soft-secondary" href="#" tabindex="0">
											<span class="fab fa-twitter btn-icon__inner"></span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="host-location"
		     class="parallax d-flex justify-content-center align-items-center">
			<div class="content w-100 h-100 d-flex align-items-center justify-content-center flex-column text-white">
				<h2>میزبان فضای کار گروهی زاویه</h2>
				<p class="text-white">
					زاویه یک فضای کاری اشتراکی برای کارآفرینان، فری لنسرها و افراد خلاق است.
				</p>
			</div>
		</div>
		<div id="sponsors-section"
		     class="container-fluid space-2 space-md-3">
			<div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
				<span class="btn btn-xs btn-soft-success btn-pill mb-2">حامیان</span>
				<h2 class="text-success">
					حامیان ما در <span class="font-weight-semi-bold">میتاپ Vue.JS</span>
				</h2>
				<p>کسانی که توفیق همکاری و حمایت از ما را در متاپ Vue.JS پیدا کردند.</p>
			</div>
			<div class="row">
				<div v-for="(brand, index) in 12" :key="index"
				     class="col-6 col-sm-4 col-md-3 col-lg-2 px-1 my-1">
					<div class="bg-light text-center py-5">
						برند
					</div>
				</div>
			</div>
		</div>
		<div id="pricing-section">
			<div class="container space-2 space-md-3">
				<div class="w-md-75 w-lg-50 text-center mx-md-auto mb-9">
					<h2 class="h1 font-weight-normal">
						خرید بلیط
					</h2>
					<p>یک روز کامل با Vue.js و عاشقان کد نویسی</p>
				</div>

				<div class="row">
					<div class="col-md-5 mb-9 mb-md-0">
						<div id="price-card"
						     class="position-relative d-flex flex-column shadow-lg text-white rounded z-index-2 p-7">
              <span class="d-block">
                <span class="align-top">تومان</span>
                <span class="display-4 font-weight-semi-bold">۸۶,۰۰۰</span>
              </span>

							<hr class="opacity-md my-4">

							<div class="mb-5">
								<p class="text-light">
									دانش خود را با ما به اشتراک بگذارید و با بزرگان Vue.Js هم صحبت بشوید.
								</p>
							</div>

							<a class="btn btn-white btn-pill transition-3d-hover mb-2 mr-auto" href="#">
								خرید بلیط
								<span class="fas fa-arrow-left text-primary font-size-1 mr-2"></span>
							</a>

							<div class="position-absolute bottom-0 right-0 w-100 max-width-15 z-index-n1">
								<img class="img-fluid" src="~assets/img/vue-half.png" alt="Ticket Background">
							</div>
						</div>
					</div>

					<div class="col-md-7">
						<div class="pl-lg-6">
							<div class="row">
								<div class="col-sm-6 mb-5">
									<h4 class="h5">
										<i class="fa fa-check-square"></i>
										قابلیت
									</h4>
									<p>
										لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
									</p>
								</div>
								<div class="col-sm-6 mb-5">
									<h4 class="h5">
										<i class="fa fa-check-square"></i>
										ویژگی
									</h4>
									<p>
										لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
									</p>
								</div>
							</div>

							<div class="row mb-9">
								<div class="col-sm-6 mb-5">
									<h4 class="h5">
										<i class="fa fa-check-square"></i>
										فیوچر
									</h4>
									<p>
										لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
									</p>
								</div>
								<div class="col-sm-6">
									<h4 class="h5">
										<i class="fa fa-check-square"></i>
										امکانات
									</h4>
									<p>
										لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	import speakers from '../data/speakers';

	export default {
		head: {
			title: 'Homepage'
		},
		data() {
			return {
				strings: [
					'اولین میتاپ VUE.JS',
					'بزرگ ترین همایش Vue'
				],
				speakers: speakers.speakers
			}
		}
	}
</script>

<style scoped lang="scss">

	$primaryColor: #40b984;
	$secondaryColor: #30475e;

	.text-primary {
		color: $primaryColor !important;
	}
	.text-secondary {
		color: $secondaryColor !important;
	}
	.bg-primary {
		background: $primaryColor !important;
	}
	.bg-secondary {
		background: $secondaryColor !important;
	}

	#header-image {
		left: 1rem;
		top: 3.5rem;
		width: 30rem;
	}

	.figure-img {
		background: #40b883;

		img {
			filter: grayscale(100%) contrast(1.2);
			mix-blend-mode: darken;
		}
	}

	.parallax {
		height: 500px;
		background-image: url('~assets/img/zavie.jpg');
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		.content {
			background-color: #35495ebd;
		}
	}

	#price-card {
		background: $secondaryColor;
	}
</style>
