<template>
  <div>
    <navbar />
    <nuxt />
    <custom-footer />
  </div>
</template>
<script>
import Navbar from '~/components/layout/Navbar'
import CustomFooter from '~/components/layout/CustomFooter'

export default {
  components: {
    CustomFooter,
    Navbar
  }
}
</script>
