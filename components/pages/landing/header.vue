<template>
  <div
    id="header-section"
    class="d-flex align-items-center justify-content-center position-relative height-lg-100vh bg-secondary"
  >
    <div class="container position-absolute top-0 d-none d-lg-block">
      <img id="header-image" class="img-fluid position-absolute" src="~/assets/img/meetup.jpg" alt="">
    </div>
    <div class="container mt-6 mt-md-0 position-relative">
      <div class="row py-6 py-md-7 align-items-md-center">
        <div class="col-lg-6">
          <div class="mb-5">
            <h1 class="text-white">
              <no-ssr>
                <vue-typed-js
                  class="font-weight-semi-bold"
                  :strings="strings"
                  :loop="true"
                  :type-speed="100"
                  :start-delay="1000"
                  :back-speed="20"
                >
                  <span class="typing font-weight-medium" />
                </vue-typed-js>
              </no-ssr>
            </h1>
            <h4 class="text-white font-weight-light mt-5">
              منتظر ملاقات شما در
              <span class="text-primary">
                <span class="font-weight-bold">
                  گردهمایی Vue.js
                </span>
              </span>
              هستیم.
            </h4>
          </div>

          <button
            v-scroll-to="{el: '#pricing-section',duration: 1000}"
            class="btn btn-white btn-wide transition-3d-hover"
          >
            ثبت نام
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      strings: [
        'اولین گردهمایی Vue.js ایران'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  #header-image {
    left: 1rem;
    top: 3.5rem;
    width: 30vw;
  }
</style>
