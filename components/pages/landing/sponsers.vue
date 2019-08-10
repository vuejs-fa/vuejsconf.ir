<template>
  <div
    id="sponsors-section"
    class="container-fluid py-10"
  >
    <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
      <h2 class="text-primary mb-4">
        حامیان ما در <span class="font-weight-semi-bold">میتاپ Vue.js</span>
      </h2>
      <p>
        در گردهمایی ١٣٩٨ Vue.js بهترین‌های جاوااسکریپت و Vue.js در یک گردهمایی یک روزه دور هم جمع می‌شوند تا
        به ارتقا سطح کیفی جامعه برنامه‌نویسی کمک کنند. در این مسیر به حمایت شما نیاز داریم.
      </p>
      <p>
        اگر شما هم مایل به همراهی ما هستید، با ما <a
          class="text-primary"
          :href="`mailto: ${$store.state.meetup.emails.sponsors}`"
        >تماس</a> بگیرید.
      </p>
    </div>
    <div class="row">
      <GlobalBrand v-for="(sponsor, index) in $store.state.sponsors" :key="index" :brand="sponsor" />
    </div>
  </div>
</template>

<script>
import GlobalBrand from '~/components/global/brand'

export default {
  components: {
    GlobalBrand
  }
}
</script>
