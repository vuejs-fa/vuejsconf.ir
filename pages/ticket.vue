<template>
  <div class="container py-15">
    <div
      class="evand-widget evand-widget-event-registration"
      data-event-slug="test-88342248"
      data-setting
    ></div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!document.getElementById("evand-widget-event-registration")) {
      const t = document.createElement("script");
      t.type = "text/javascript";
      t.async = !0;
      t.src =
        ("https:" == document.location.protocol ? "https://" : "http://") +
        "widgets.evand.com/event-registration.js?load=1";
      t.setAttribute("id", "evand-widget-event-registration");
      const e = document.getElementsByTagName("script")[0];
      e.parentNode.insertBefore(t, e);
    }
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