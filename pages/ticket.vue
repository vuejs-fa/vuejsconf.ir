<template>
  <div class="container py-15">
    <div
      class="evand-widget evand-widget-event-registration"
      :data-event-slug="meetup.evandSlug"
      data-setting
    ></div>
  </div>
</template>

<script>
import meetup from "~/data/meetup";

export default {
  head: {
    script: [
      {
        async: true,
        id: "evand-widget-event-registration",
        src: "https://widgets.evand.com/event-registration.js?load=1"
      }
    ]
  },
  data() {
    return {
      meetup
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