<template>
  <div
    id="articles-section"
    class="container-fluid bg-light position-relative py-7 py-lg-13"
  >
    <div class="w-md-80 w-lg-50 text-center mx-md-auto">
      <h2 class="text-primary mb-4">
        ارسال مقالات
      </h2>
      <div class="d-flex align-items-center flex-column-reverse flex-sm-row">
        <p>
          تجربه‌های جالبی از کار با جاوا‌اسکریپت و Vue.js را دارید؟ ایده‌های جدید برای استفاده از ​Vue.js در سر دارید؟
          می‌خواهید مفاهیم Vue.js را به سبک جدیدی ارائه دهید؟ مطالب خود را در قالب یک پروپازال برای ما
          <a class="text-primary" :href="`mailto: ${$store.state.meetup.emails.article}`">ارسال</a> کنید. در
          گردهمایی به پروپازال‌های منتخب توسط داوران زمانی برای ارائه اختصاص داده میشود.
        </p>
        <img id="articles-image" class="img-fluid mr-4" src="~/assets/svg/collecting_fjjl.svg" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  #articles-image {
    left: 1rem;
    width: 20rem;
    bottom: 1rem;
    position: absolute;
  }

  @media screen and  (max-width: 992px) {
    #articles-image {
      position: relative;
    }
  }

  @media screen and (max-width: 768px) {
    #articles-image {
      width: 15rem;
    }
  }
</style>
