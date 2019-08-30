<template>
  <div
    class="evand-widget evand-widget-event-registration my-7"
    :data-event-slug="meetup.evandSlug"
    data-setting
  ></div>
</template>

<script>
import meetup from "~/data/meetup";
export default {
  head: {
    script: [
      {
        async: true,
        id: "evand-widget-event-registration",
        src: "https://widgets.evand.com/event-registration.js?load=10"
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

<style lang="scss" scoped>
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