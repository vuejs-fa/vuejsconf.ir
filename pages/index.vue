<template>
  <main id="content" role="main">
    <div
      id="SVGGraphicIllustration1"
      class="d-lg-flex align-items-lg-center gradient-half-primary-v1 height-lg-100vh"
      style=""
    >
      <div
        class="d-none d-lg-block bg-img-hero position-absolute top-0 right-0 left-0 height-lg-100vh"
        style="background-image: url(/svg/bg1.png);"
      />
      <div class="container space-top-3 space-bottom-2 space-top-md-4 space-bottom-md-3">
        <div class="row align-items-md-center">
          <div class="col-lg-6">
            <div class="mb-7">
              <h1 class="text-white font-weight-normal">
                مشتاقانه منتظر آمدن شما به
                <span style="color: #35495e">
                  <span class="u-text-animation u-text-animation--typing font-weight-bold"> میتاپ VUE.JS هستیم</span><span
                    class="typed-cursor"
                  >|</span>
                </span>
              </h1>
              <p class="lead text-white-70">
                اولین میتاپ برنامه نویسان VUE.JS
              </p>
            </div>

            <a class="btn btn-white btn-wide transition-3d-hover" href="">ثبت نام</a>
          </div>

          <div class="col-lg-6 d-none d-lg-inline-block">
            <figure class="ie-graphic-illustration-1">
              <img src="/svg/index/lines.svg" alt="">
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="container space-top-2 space-top-md-0 space-bottom-2 space-bottom-md-5">
      <h2 class="text-center">
        ماموریت ما در این میتاپ
      </h2>
      <p>
        Vuejs تهران 2019 میراث را ادامه خواهد داد و بار دیگر بزرگترین میتاپ Vuejs در جهان خواهد بود. با پویا پارسا،
        بیشتر تیم اصلی Vue.js و در مجموع 20+ سخنران، بینش خود را در مورد Vue.js به اشتراک می گذارند. در عرض یک روز ما
        دانش را با بیش از 200 علاقه مندان به Vue.js به اشتراک می گذاریم، به شما این امکان را می دهد که در مورد شبکه Vue
        با بزرگترین گروه توسعه دهندگان Vue در ایران کشف کنید و یاد بگیرید!
      </p>
    </div>
    <div class="bg-light">
      <div class="container space-2 space-md-3">
        <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
          <span class="btn btn-xs btn-soft-success btn-pill mb-2">بهترین های Vue</span>
          <h2 class="font-weight-normal">
            سخنرانان میتاپ
          </h2>
          <p>بهترین های Vue برای شما صحبت خواهند کرد</p>
        </div>
        <div class="row mt-3">
          <div v-for="(speaker, index) in speakers" :key="index" class="col-lg-3 col-md-4 col-sm-6 my-3">
            <div class="figure-img rounded">
              <img class="img-fluid w-100 rounded" :src="speaker.image" alt="Image Description">
            </div>
            <div class="card border-0 shadow-sm mt-n6 mx-3">
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
    <div class="parallax d-flex justify-content-center align-items-center">
      <div class="content rounded px-2 text-center text-white">
        <h2>میزبان فضای کار گروهی زاویه</h2>
        <p class="text-white">
          زاویه یک فضای کاری اشتراکی برای کارآفرینان، فری لنسرها و افراد خلاق است.
        </p>
      </div>
    </div>
    <div class="container-fluid space-2 space-md-3">
      <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
        <span class="btn btn-xs btn-soft-success btn-pill mb-2">حامیان</span>
        <h2 class="text-success">
          حامیان ما در <span class="font-weight-semi-bold">میتاپ Vue.JS</span>
        </h2>
        <p>کسانی که توفیق همکاری و حمایت از ما را در متاپ Vue.JS پیدا کردند.</p>
      </div>
      <div class="row">
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
        <div class="col-md-2 px-1 my-1">
          <div class="bg-light text-center py-5">
            برند
          </div>
        </div>
      </div>
    </div>
    <div id="pricingSection" class="active" style="">
      <div class="container space-2 space-md-3">
        <!-- Title -->
        <div class="w-md-75 w-lg-50 text-center mx-md-auto mb-9">
          <h2 class="h1 font-weight-normal">
            خرید بلیط
          </h2>
          <p>یک روز کامل با Vue.js و عاشقان کد نویسی</p>
        </div>
        <!-- End Title -->

        <div class="row">
          <link rel="stylesheet" href="">
          <div id="stickyBlockStartPoint" class="col-md-5 mb-9 mb-md-0">
            <div
              class="position-relative shadow-lg text-white rounded z-index-2 p-7"
              style="background: #35495e;"
            >
              <span class="d-block">
                <span class="align-top">تومان</span>
                <span class="display-4 font-weight-semi-bold">۸۶,۰۰۰</span>
              </span>

              <hr class="opacity-md my-4">

              <div class="mb-5">
                <p class="text-light">
                  دانش خود را با ما به اشتراک بگذارید و با بزرگان Vue.Js هم صحبت بشوید.
                </p>
              </div>

              <a class="btn btn-white btn-pill transition-3d-hover mb-2" href="#">
                خرید بلیط
                <span class="fas fa-arrow-left text-primary font-size-1 mr-2" />
              </a>

              <!-- SVG Shape -->
              <div class="position-absolute bottom-0 right-0 w-100 max-width-15 z-index-n1">
                <img src="/svg/index/ticket_bg.svg" alt="Ticket Background">
              </div>
              <!-- End SVG Shape -->
            </div>
          </div>

          <div class="col-md-7">
            <div class="pl-lg-6">
              <div class="row">
                <div class="col-sm-6 mb-5">
                  <figure class="ie-height-40 w-100 max-width-6 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 120 120"
                      style="enable-background:new 0 0 120 120;"
                      xml:space="preserve"
                      class="injected-svg js-svg-injector"
                      data-parent="#pricingSection"
                    >
                      <style type="text/css">
                        .icon-29-0 {
                        fill: none;
                        stroke: #BDC5D1;
                        }

                        .icon-29-1 {
                        fill: #BDC5D1;
                        }

                        .icon-29-2 {
                        fill: #377DFF;
                        }
                      </style>
                      <g>
                        <path
                          class="icon-29-0 fill-none stroke-gray-400"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          d="M52.9,42.5c-2.7,0-5.2,1.2-6.8,3.2v-17h-36c-5,0-9.1,4.1-9.1,9.1v36h16.7c-1.8-1.6-3-4-3-6.6   c0-4.9,3.9-8.8,8.8-8.8c4.9,0,8.8,3.9,8.8,8.8c0,2.6-1.1,5-3,6.6h16.7V56.8c1.6,2,4,3.2,6.8,3.2c4.8,0,8.7-3.9,8.7-8.7   C61.7,46.4,57.8,42.5,52.9,42.5z"
                        />
                        <path
                          class="icon-29-0 fill-none stroke-gray-400"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          d="M17.8,73.8H1v36c0,5,4.1,9.1,9.1,9.1h36v-16.7c-1.6,1.8-4,3-6.6,3c-4.9,0-8.8-3.9-8.8-8.8s3.9-8.8,8.8-8.8   c2.6,0,5,1.1,6.6,3V73.8H29.5"
                        />
                        <path
                          class="icon-29-0 fill-none stroke-gray-400"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          d="M46.2,102.3V119h36c5,0,9.1-4.1,9.1-9.1v-36H74.6c1.8,1.6,3,4,3,6.6c0,4.9-3.9,8.8-8.8,8.8s-8.8-3.9-8.8-8.8   c0-2.6,1.1-5,3-6.6H46.2v16.7"
                        />
                        <path
                          class="icon-29-1 fill-gray-400"
                          opacity=".5"
                          d="M105.9,16.1c-1.4-4.8-6.5-7.6-11.3-6.2L60,19.8l4.6,16.1c1-2.2,3-3.9,5.5-4.7c4.7-1.4,9.6,1.3,10.9,6   c1.4,4.7-1.3,9.6-6,10.9c-2.5,0.7-5.1,0.3-7.1-1l4.6,16.1l15.7-4.5c-1.1,2-1.5,4.4-0.8,6.8c1.4,4.7,6.3,7.5,11.1,6.1   c4.7-1.4,7.5-6.3,6.1-11.1c-0.7-2.4-2.3-4.3-4.3-5.4l15.6-4.5L105.9,16.1z"
                        />
                        <path
                          class="icon-29-2 fill-primary"
                          d="M110,6.6c-1.4-4.8-6.5-7.6-11.3-6.2l-34.6,10l4.6,16.1c1-2.2,3-3.9,5.5-4.7c4.7-1.4,9.6,1.3,10.9,6   c1.4,4.7-1.3,9.6-6,10.9c-2.5,0.7-5.1,0.3-7.1-1l4.6,16.1l15.7-4.5c-1.1,2-1.5,4.4-0.8,6.8c1.4,4.7,6.3,7.5,11.1,6.1   c4.7-1.4,7.5-6.3,6.1-11.1c-0.7-2.4-2.3-4.3-4.3-5.4l15.6-4.5L110,6.6z"
                        />
                      </g>
                    </svg>
                  </figure>
                  <h4 class="h5">
                    قابلیت
                  </h4>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                  </p>
                </div>
                <div class="col-sm-6 mb-5">
                  <figure class="ie-height-40 w-100 max-width-6 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 120 120"
                      style="enable-background:new 0 0 120 120;"
                      xml:space="preserve"
                      class="injected-svg js-svg-injector"
                      data-parent="#pricingSection"
                    >
                      <style type="text/css">
                        .icon-30-0 {
                        fill: #BDC5D1;
                        }

                        .icon-30-1 {
                        fill: #FFFFFF;
                        stroke: #BDC5D1;
                        }

                        .icon-30-2 {
                        fill: #FFFFFF;
                        }

                        .icon-30-3 {
                        fill: #377DFF;
                        }

                        .icon-30-4 {
                        fill: none;
                        stroke: #377DFF;
                        }
                      </style>
                      <g>
                        <polygon
                          class="icon-30-0 fill-gray-400"
                          opacity=".3"
                          points="119.2,47.9 103.5,26.8 96.3,17.2 96.3,17.2 71.9,14.6 66.7,14.1 66.7,14.1 66.7,14.1 66.7,14.1   66.7,14.1 66.7,14.1 66.7,14.1 64.3,14.3 37.1,17.2 14.2,47.9 14.2,47.9 14.2,47.9 66.7,109.1 119.2,47.9  "
                        />
                        <path
                          class="icon-30-1 fill-white stroke-gray-400"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          d="M25.7,14.1L55.3,11l29.6,3.1l22.9,30.7l-52.5,61.1L2.8,44.8L25.7,14.1z"
                        />
                        <g transform="translate(59.000000, 85.000000)">
                          <polygon class="icon-30-2 fill-white" points="-3.7,-73.3 -32,-70.3 -33.6,-40.9" />
                          <polygon class="icon-30-2 fill-white" points="-3.7,-73.3 24.5,-70.3 26.1,-40.9" />
                          <polygon class="icon-30-3 fill-primary" points="46.4,-40.9 24.5,-70.3 26.1,-40.9" />
                          <polygon class="icon-30-3 fill-primary" points="-53.9,-40.9 -32,-70.3 -33.6,-40.9" />
                          <polygon class="icon-30-3 fill-primary" points="-3.7,-73.3 -33.6,-40.9 26.1,-40.9" />
                        </g>
                      </g>
                      <line
                        class="icon-30-4 fill-none stroke-primary"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="27"
                        y1="56.8"
                        x2="40.2"
                        y2="72.6"
                      />
                      <line
                        class="icon-30-4 fill-none stroke-primary"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="44.4"
                        y1="77.6"
                        x2="48"
                        y2="82"
                      />
                    </svg>
                  </figure>
                  <h4 class="h5">
                    ویژگی
                  </h4>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                  </p>
                </div>
              </div>

              <div class="row mb-9">
                <div class="col-sm-6 mb-5">
                  <figure class="ie-height-40 w-100 max-width-6 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 120 120"
                      style="enable-background:new 0 0 120 120;"
                      xml:space="preserve"
                      class="injected-svg js-svg-injector"
                      data-parent="#pricingSection"
                    >
                      <style type="text/css">
                        .icon-32-1 {
                        fill: #BDC5D1;
                        }

                        .icon-32-2 {
                        fill: #FFFFFF;
                        stroke: #BDC5D1;
                        }

                        .icon-32-3 {
                        fill: none;
                        stroke: #377DFF;
                        }

                        .icon-32-4 {
                        fill: #377DFF;
                        }

                        .icon-32-5 {
                        fill: none;
                        stroke: #FFFFFF;
                        }
                      </style>
                      <path
                        class="icon-32-1 fill-gray-400"
                        opacity=".5"
                        d="M73,46.6l-7.5-7.7l-2-2.1l-2.2-2.3l-9.5-9.8l-24.5-5.4L7.4,38.6l4.7,24.7l9.5,9.8l2.1,2.2l2.1,2.2L66,118.6  c1.8,1.8,4.7,1.9,6.6,0.1l32.9-32c1.8-1.8,1.9-4.7,0.1-6.6l-5.7-5.8"
                      />
                      <path
                        class="icon-32-2 fill-white stroke-gray-400"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        d="M75.1,29.1l-7.5-7.7l-2-2.1L63.4,17l-9.5-9.8L29.4,1.8L9.6,21.1l4.7,24.7l9.5,9.8l2.1,2.2l2.1,2.2l40.1,41.2  c1.8,1.8,4.7,1.9,6.6,0.1l32.9-32c1.8-1.8,1.9-4.7,0.1-6.6l-5.7-5.8"
                      />
                      <ellipse
                        transform="matrix(0.7169 -0.6972 0.6972 0.7169 -9.027869e-02 78.3307)"
                        class="icon-32-1 fill-gray-400"
                        opacity=".5"
                        cx="96.4"
                        cy="39.3"
                        rx="16.2"
                        ry="16.2"
                      />
                      <ellipse
                        transform="matrix(0.7169 -0.6972 0.6972 0.7169 -7.8341 29.0343)"
                        class="icon-32-3 fill-none stroke-primary"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        cx="31.8"
                        cy="24.2"
                        rx="7"
                        ry="7"
                      />
                      <ellipse
                        transform="matrix(0.7169 -0.6972 0.6972 0.7169 -4.81 73.837)"
                        class="icon-32-4 fill-primary"
                        cx="88.5"
                        cy="42.8"
                        rx="16.2"
                        ry="16.2"
                      />
                      <line
                        class="icon-32-5 fill-none stroke-white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="82.6"
                        y1="37"
                        x2="93.1"
                        y2="47.8"
                      />
                      <line
                        class="icon-32-5 fill-none stroke-white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="82.4"
                        y1="47.6"
                        x2="93.2"
                        y2="37.1"
                      />
                      <line
                        class="icon-32-3 fill-none stroke-primary"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="57.2"
                        y1="54.8"
                        x2="49.1"
                        y2="62.4"
                      />
                      <line
                        class="icon-32-3 fill-none stroke-primary"
                        opacity=".5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="66.9"
                        y1="59.3"
                        x2="55.9"
                        y2="69.7"
                      />
                      <line
                        class="icon-32-3 fill-none stroke-primary"
                        opacity=".5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="73.4"
                        y1="66.8"
                        x2="62.7"
                        y2="76.9"
                      />
                    </svg>
                  </figure>
                  <h4 class="h5">
                    فیوچر
                  </h4>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                  </p>
                </div>
                <div class="col-sm-6">
                  <figure class="ie-height-40 w-100 max-width-6 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 120 120"
                      style="enable-background:new 0 0 120 120;"
                      xml:space="preserve"
                      class="injected-svg js-svg-injector"
                      data-parent="#pricingSection"
                    >
                      <style type="text/css">
                        .icon-31-0 {
                        fill: none;
                        stroke: #377DFF;
                        }

                        .icon-31-1 {
                        fill: none;
                        stroke: #BDC5D1;
                        }

                        .icon-31-2 {
                        fill: #377DFF;
                        }

                        .icon-31-3 {
                        fill: none;
                        stroke: #FFFFFF;
                        }

                        .icon-31-4 {
                        fill: #BDC5D1;
                        }

                        .icon-31-5 {
                        fill: #FFFFFF;
                        stroke: #BDC5D1;
                        }
                      </style>
                      <g>
                        <path
                          class="icon-31-0 fill-none stroke-primary"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          d="M67.7,67.4c1.3,1.7,3.3,2.8,5.6,2.8c3.8,0,6.9-3.1,6.9-6.9c0-3.8-3.1-6.9-6.9-6.9h-0.1c-3,0-5.3-2.4-5.3-5.3   c0-3,2.4-5.3,5.3-5.3c1.8,0,3.3,0.9,4.3,2.2"
                        />
                        <line
                          class="icon-31-0 fill-none stroke-primary"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          x1="73.2"
                          y1="45.7"
                          x2="73.2"
                          y2="42.7"
                        />
                        <line
                          class="icon-31-0 fill-none stroke-primary"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          x1="73.2"
                          y1="73.2"
                          x2="73.2"
                          y2="70.2"
                        />
                      </g>
                      <g>
                        <line
                          class="icon-31-1 fill-none stroke-gray-400"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          x1="65.3"
                          y1="23.3"
                          x2="65.3"
                          y2="15.1"
                        />
                        <line
                          class="icon-31-1 fill-none stroke-gray-400"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          x1="82.7"
                          y1="15.1"
                          x2="82.7"
                          y2="23.3"
                        />
                      </g>
                      <path
                        class="icon-31-2 fill-primary"
                        d="M59.1,0.9h29.8c0.8,0,1.3,0.8,1,1.5l-5.7,11.9c-0.2,0.4-0.6,0.6-1,0.6H64.8c-0.4,0-0.8-0.2-1-0.6L58.1,2.4  C57.8,1.7,58.3,0.9,59.1,0.9z"
                      />
                      <path
                        class="icon-31-1 fill-none stroke-gray-400"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        d="M101.5,88.3c1.3-2.2,2.1-4.7,2.1-7.5V51.6c0-13.3-8.8-24.6-20.9-28.3H65.3c-12.1,3.7-20.9,15-20.9,28.3v24.7"
                      />
                      <g>
                        <line
                          class="icon-31-3 fill-none stroke-white"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          x1="76.9"
                          y1="11.7"
                          x2="79.3"
                          y2="5.4"
                        />
                        <line
                          class="icon-31-3 fill-none stroke-white"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          x1="71.1"
                          y1="11.7"
                          x2="68.6"
                          y2="5.4"
                        />
                      </g>
                      <g>
                        <line
                          class="icon-31-1 fill-none stroke-gray-400"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          x1="86.9"
                          y1="59.3"
                          x2="88.7"
                          y2="59.3"
                        />
                        <line
                          class="icon-31-1 fill-none stroke-gray-400"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          x1="59.3"
                          y1="59.3"
                          x2="61"
                          y2="59.3"
                        />
                      </g>
                      <path
                        class="icon-31-4 fill-gray-400"
                        opacity=".5"
                        d="M90.7,93.8l21.3-5.8c2.6-0.7,5.3,0.7,6.2,3.3l0,0c0.7,2.3-0.2,5.1-2.6,6.2l-41.3,20.7  c-4.6,2.2-9.9,2.5-14.4,0.5L37,108.9H26.7c-0.7,0-1.3-0.6-1.3-1.3v-8L90.7,93.8z"
                      />
                      <path
                        class="icon-31-5 fill-white stroke-gray-400"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        d="M77.8,86.3l34.3-7.1c2.6-0.7,5.3,0.7,6.2,3.3l0,0c0.7,2.3-0.2,5.1-2.6,6.2l-41.3,20.7  c-4.6,2.2-9.9,2.5-14.4,0.5L37,100.1H25.5"
                      />
                      <path
                        class="icon-31-5 fill-white stroke-gray-400"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        d="M25.3,67.5h11.6L61.3,75h14.3c3.3,0,6,2.7,6,6l0,0c0,3.1-2.5,5.5-5.5,5.5H61.3c-3.2,0-5.8,2.6-5.8,5.8l0,0"
                      />
                      <path
                        class="icon-31-2 fill-primary"
                        d="M1.9,104.2h21.7c1,0,1.7-0.7,1.7-1.7V65.1c0-1-0.7-1.7-1.7-1.7H1.9c-1,0-1.7,0.7-1.7,1.7v37.3  C0.2,103.3,0.9,104.2,1.9,104.2z"
                      />
                      <line
                        class="icon-31-3 fill-none stroke-white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        x1="13.8"
                        y1="78.8"
                        x2="13.8"
                        y2="82.6"
                      />
                    </svg>
                  </figure>
                  <h4 class="h5">
                    امکانات
                  </h4>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  head: {
    title: 'Homepage'
  },
  data() {
    return {
      speakers: [
        {
          bio: 'سازنده Nuxt.js',
          name: 'پویا پارسا',
          image: '/img/speakers/pooya.jpeg'
        },
        {
          bio: 'سازنده Nuxt.js',
          name: 'پویا پارسا',
          image: '/img/speakers/evan-you.jpg'
        },
        {
          bio: 'سازنده Nuxt.js',
          name: 'پویا پارسا',
          image: '/img/speakers/alex-chopin.jpg'
        },
        {
          bio: 'سازنده Nuxt.js',
          name: 'پویا پارسا',
          image: '/img/speakers/sebastien-chopin.jpg'
        },
        {
          bio: 'سازنده Nuxt.js',
          name: 'پویا پارسا',
          image: '/img/speakers/thorsten-luneborg.jpg'
        },
        {
          bio: 'سازنده Nuxt.js',
          name: 'پویا پارسا',
          image: '/img/speakers/eduardo-san-martin-morote.jpeg'
        },
        {
          bio: 'سازنده Nuxt.js',
          name: 'Evan You',
          image: '/img/speakers/evan-you.jpg'
        },
        {
          bio: 'سازنده Nuxt.js',
          name: 'پویا پارسا',
          image: '/img/speakers/alex-chopin.jpg'
        },
        {
          bio: 'سازنده Nuxt.js',
          name: 'پویا پارسا',
          image: '/img/speakers/gregg-pollack.jpeg'
        },
        {
          bio: 'سازنده Nuxt.js',
          name: 'پویا پارسا',
          image: '/img/speakers/guillaume-chau.jpg'
        },
        {
          bio: 'سازنده Nuxt.js',
          name: 'پویا پارسا',
          image: '/img/speakers/damian-dulisz.jpeg'
        },
        {
          bio: 'سازنده Nuxt.js',
          name: 'پویا پارسا',
          image: '/img/speakers/sean-larkin.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .figure-img {
    background: #40b883;

    img {
      filter: grayscale(100%) contrast(1.2);
      mix-blend-mode: darken;
    }
  }

  .parallax {
    height: 500px;
    background-image: url('/img/zavie.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .content {
      background-color: #2d2c2c82;
    }
  }
</style>
