<template>
  <header id="header" class="u-header u-header--bg-transparent u-header--abs-top">
    <div class="u-header__section">
      <div id="logoAndNav" class="container">
        <nav class="navbar navbar-expand u-header__navbar">
          <nuxt-link
            to="/"
            class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-text-white w-100"
          >
            <img style="width: 50px;" src="/img/logo.png" alt="Logo">
            <span class="u-header__navbar-brand-text">VueJSConf</span>
          </nuxt-link>

          <button
            id="sidebarHeaderInvoker"
            class="navbar-toggler d-block btn u-hamburger mr-auto target-of-invoker-has-unfolds"
            aria-controls="sidebarHeader"
            aria-haspopup="true"
            aria-expanded="false"
            data-unfold-event="click"
            data-unfold-hide-on-scroll="false"
            data-unfold-target="#sidebarHeader"
            data-unfold-type="css-animation"
            data-unfold-animation-in="fadeInRight"
            data-unfold-animation-out="fadeOutRight"
            data-unfold-duration="500"
          >
            <span id="hamburgerTrigger" class="u-hamburger__box">
              <span class="u-hamburger__inner" />
            </span>
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
