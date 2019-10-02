<template>
  <div id="pricing-section">
    <div class="container py-7">
      <div class="w-md-75 w-lg-50 text-center mx-md-auto mb-9">
        <h2 class="text-primary mb-4">تهیه بلیت</h2>
        <p>یک روز با Vue.js و عاشقان کد‌نویسی</p>
      </div>

      <div class="row">
        <div class="col-md-5 mb-9 mb-md-0">
          <div
            id="price-card"
            class="position-relative d-flex flex-column shadow-lg text-white rounded z-index-2 p-5"
          >
            <span class="d-block">
              <span class="display-4 font-weight-bold">رایگان</span>
            </span>

            <hr class="opacity-md my-4" />

            <div class="mb-5">
              <p
                class="text-light"
              >دانش خود را با ما به اشتراک بگذارید و با علاقه‌مندان Vue.js هم صحبت شوید.</p>
            </div>

            <nuxt-link
              :to="{name: 'ticket'}"
              class="btn btn-white rounded-pill mb-2 mr-auto d-flex align-items-center"
              href="#"
            >
              تهیه بلیت
              <span class="fas fa-arrow-left text-primary font-size-1 mr-2" />
            </nuxt-link>

            <div class="position-absolute bottom-0 right-0 w-100 price-card__image">
              <img class="img-fluid" src="~assets/img/vue-half.png" alt="Ticket Background" />
            </div>
          </div>
        </div>

        <div class="col-md-7">
          <div class="pl-lg-6">
            <div class="row">
              <div class="col-sm-6 mb-5">
                <h4 class="h5">
                  <div class="vuejs-icon ml-2 d-inline-block" />شبکه‌سازی
                </h4>
                <p>با اعضای فعال و با‌تجربه جامعه Vue.js ایران آشنا شوید و روابط خود را با متخصصان این حوزه گسترش دهید.</p>
              </div>
              <div class="col-sm-6 mb-5">
                <h4 class="h5">
                  <div class="vuejs-icon ml-2 d-inline-block" />توسعه
                </h4>
                <p>از دانش برنامه‌نویسان فعال و با‌تجربه این حوزه استفاده کنید و برای مسائل حل نشده خود، راه‌حل پیدا کنید.</p>
              </div>
            </div>

            <div class="row mb-9">
              <div class="col-sm-6">
                <h4 class="h5">
                  <div class="vuejs-icon ml-2 d-inline-block" />اشتراک‌گذاری
                </h4>
                <p>از تجارب دیگر برنامه‌نویسان این حوزه استفاده کنید و با اشتراک‌‌گذاری تجارب شخصیتان، هم بیاموزید و هم آموزش دهید.</p>
              </div>
              <div class="col-sm-6 mb-5">
                <h4 class="h5">
                  <div class="vuejs-icon ml-2 d-inline-block" />آینده‌نگری
                </h4>
                <p>شانس شما برای یافتن یک فرصت شغلی ایده‌آل یا پروژه‌ای بزرگ به اندازه تعداد افرادی است که شما را می شناسند، پس آینده‌نگر باشید و شناخته شوید.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$primaryColor: #40b984;
$secondaryColor: #30475e;

#price-card {
  background: $secondaryColor;
}

.price-card__image {
  max-width: 7rem;
}

.vuejs-icon {
  width: 1rem;
  height: 1rem;
  background: repeating-linear-gradient(
    0deg,
    $primaryColor,
    $primaryColor 0.5rem,
    $secondaryColor 0.5rem,
    $secondaryColor 1rem
  );
}
</style>
