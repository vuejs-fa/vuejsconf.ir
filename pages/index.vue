<template>
  <main id="content" role="main">
    <LandingHeader />
    <LandingIntro />
    <!-- <LandingSpeakers /> -->
    <LandingHost />
    <!-- <LandingSponsers /> -->
    <LandingArticles />
    <LandingPricing />
  </main>
</template>

<script>
import LandingHeader from '~/components/pages/landing/header'
import LandingIntro from '~/components/pages/landing/intro'
// import LandingSpeakers from '~/components/pages/landing/speakers'
import LandingHost from '~/components/pages/landing/host'
// import LandingSponsers from '~/components/pages/landing/sponsers'
import LandingArticles from '~/components/pages/landing/articles'
import LandingPricing from '~/components/pages/landing/pricing'

export default {
  components: {
    LandingHeader,
    LandingIntro,
    // LandingSpeakers,
    LandingHost,
    // LandingSponsers,
    LandingArticles,
    LandingPricing
  },
  head: {
    title: 'اولین گردهمایی Vue.js ایران'
  }
}
</script>
