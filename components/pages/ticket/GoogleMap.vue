<template>
  <iframe :src="meetup.map" height="400" allowfullscreen class="border-0 w-100"></iframe>
</template>

<script>
import meetup from "~/data/meetup";
export default {
  data() {
    return {
      meetup
    };
  }
};
</script>