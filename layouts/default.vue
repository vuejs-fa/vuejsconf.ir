<template>
  <div>
    <navbar />
    <nuxt />
    <custom-footer />
  </div>
</template>
<script>
import Navbar from '../components/global/Navbar'
import CustomFooter from '../components/global/CustomFooter'
export default {
  components: { CustomFooter, Navbar }
}
</script>
