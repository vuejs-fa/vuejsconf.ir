<template>
  <div id="speakers-section" class="bg-light">
    <div class="container py-7">
      <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mb-md-6">
        <GlobalBadge>بهترین های Vue</GlobalBadge>
        <span class="btn btn-xs btn-soft-success btn-pill mb-2" />
        <h2 class="font-weight-normal">
          سخنرانان میتاپ
        </h2>
        <p>بهترین های Vue برای شما صحبت خواهند کرد</p>
      </div>
      <div class="row mt-3">
        <div
          v-for="(speaker, index) in speakers"
          :key="index"
          class="col-lg-3 col-md-4 col-sm-6 my-3"
        >
          <div class="figure-img rounded">
            <img class="img-fluid w-100 rounded" :src="speaker.image" alt="Image Description">
          </div>
          <div class="card border-0 shadow-sm mt-n5 mx-3">
            <div class="card-body text-center p-4">
              <h3 class="h6 mb-1" v-text="speaker.name" />
              <p class="font-size-1 mb-0" v-text="speaker.bio" />
              <ul class="list-inline mt-2 mb-0">
                <li class="list-inline-item mx-0">
                  <a class="btn btn-sm btn-icon btn-soft-secondary" href="#" tabindex="0">
                    <span class="fab fa-facebook-f btn-icon__inner" />
                  </a>
                </li>
                <li class="list-inline-item mx-0">
                  <a class="btn btn-sm btn-icon btn-soft-secondary" href="#" tabindex="0">
                    <span class="fab fa-google btn-icon__inner" />
                  </a>
                </li>
                <li class="list-inline-item mx-0">
                  <a class="btn btn-sm btn-icon btn-soft-secondary" href="#" tabindex="0">
                    <span class="fab fa-twitter btn-icon__inner" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import speakers from '~/data/speakers'

import GlobalBadge from '~/components/global/badge'

export default {
  components: {
    GlobalBadge
  },
  data () {
    return {
      speakers
    }
  }
}
</script>

<style scoped lang="scss">
  .figure-img {
    background: #83cdaa;

    img {
      filter: grayscale(100%) contrast(1.2);
      mix-blend-mode: darken;
    }
  }
</style>
