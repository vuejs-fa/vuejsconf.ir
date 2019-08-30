<template>
  <div>
    <div id="poster-header">
      <img src="~/assets/img/poster2.jpg" class="pt-6 w-100" alt="Vue.js Meetup Poster" />
    </div>
    <div class="container py-7">
      <div class="contents">
        <h4>مختصری درباره گردهمایی Vue.js</h4>
        <p>همایش یک روزه تخصصی برنامه نویسی و نرم افزار در ایران، تهران با حضور برنامه نویس های مطرح ایرانی مناسب برای برنامه نویس ها، شرکت ها، استارتاپ ها و دانشجویان . ۱۷ سخنرانی با موضوعات بسیار جذاب در مباحث مختلف توسط برنامه نویس های مطرح شرکت های داخلی و خارجی.</p>
        <p>ری اکت کانف ( گردهمایی Vue.js ) کنفرانس تخصصی جاوا اسکریپت با بورد اصلی React.js می باشد که قرار است به صورت تخصصی جاوا اسکریپت و ری اکت را مورد بررسی عمیق تری قرار دهد، یک گردهمایی متفاوت با طعم JavaScript و React و برنامه نویسانی که جاوا اسکریپت می نویسند و جاوا اسکریپت را دوست دارند.</p>
        <p>حضور برنامه نویسان با تجربه، افرادی که تازه میخواهند با برنامه نویسی آشنا شوند و دیدار با دوستان قدیمی و افرادی که تجربه کاری زیادی در سال های گذشته در صنعت نرم افزار دارند و همچنین شرکت هایی که به دنبال جذب نیروهای پر انرژی و پر توان هستند، می توانند گرمی این کنفرانس را افزایش دهند.</p>
        <p>هدف اصلی تیم برگزاری همایش ایجاد یک پل ارتباطی برای برقراری راحت ارتباط بین شرکت ها، استارتاپ ها با برنامه نویسان جاوا اسکریپت و همچنین ارتباط بیشتر برنامه نویسان با یکدیگر است.</p>
      </div>
      <div
        class="evand-widget evand-widget-event-registration my-7"
        :data-event-slug="meetup.evandSlug"
        data-setting
      ></div>
      <iframe :src="meetup.map" height="450" allowfullscreen class="border-0 w-100"></iframe>
    </div>
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

#poster-header {
  margin-top: 5rem;
  img {
    height: 500px;
    object-fit: contain;
    background: #c9e9e6;
  }
}
</style>
