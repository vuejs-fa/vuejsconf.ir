<template>
  <nav class="navbar navbar-expand-lg navbar-light position-absolute top-0 w-100 bg-white">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand ml-5">
        <img id="logo-image" src="~/assets/img/logo.png" alt="VueJSConf Logo">
        <span class="text-dark">جامعه ویو ایران</span>
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
        <div class="navbar-nav">
          <div
            v-scroll-to="'#introduction-section'"
            class="nav-item nav-link"
          >
            درباره ما
          </div>
          <div
            v-scroll-to="'#host-location'"
            class="nav-item nav-link"
          >
            مکان برگزاری
          </div>
          <!-- <div
            v-scroll-to="'#sponsors-section'"
            class="nav-item nav-link"
          >
            حامیان
          </div> -->
          <div
            v-scroll-to="'#pricing-section'"
            class="nav-item nav-link"
          >
            خرید بلیت
          </div>
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
