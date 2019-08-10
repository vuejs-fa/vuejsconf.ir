<template>
  <div>
    <navbar />
    <nuxt />
    <custom-footer />
  </div>
</template>
<script>
import Navbar from '~/components/layouts/Navbar'
import CustomFooter from '~/components/layouts/CustomFooter'
export default {
  components: { CustomFooter, Navbar }
}
</script>
