<template>
  <div class="container py-15">
    <div
      class="evand-widget evand-widget-event-registration"
      data-event-slug="test-88342248" data-setting></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          async: true,
          id: "evand-widget-event-registration",
          src: "https://widgets.evand.com/event-registration.js?load=1"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "~assets/scss/_variables";

.evand-widget {
  .powered-by-evand {
    display: none;
  }
  .evand-button {
    background: $secondary !important;
  }
}
</style>