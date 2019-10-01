<template>
	<div>
		<image-header />
		<div class="container py-7">
			<div class="contents">
				<h4>مختصری درباره گردهمایی Vue.js</h4>
				<p>
					اولین جلسه گردهمایی Vue.js با هدف آشنایی با دیگر اعضای جامعه برنامه‌نویسان Vue.js و معرفی این جامعه، در تاریخ ۱۸ مهر ۱۳۹۸ در ساختمان روز اول سفر‌های علی‌بابا، واقع در کارخانه نوآوری آزادی، برگزار می‌گردد.
					در این رویداد از ساعت ۱۴ الی ۱۶ گردهم می‌آییم و هم‌زمان با گذراندن اوقاتی شاد، فرصتی برای تبادل اطلاعات و تجارب خواهیم داشت.
				</p>
			</div>
			<evand-widget />
			<google-map />
		</div>
	</div>
</template>

<script>
import EventSchema from "~/utils/schema/event";
import GoogleMap from "~/components/pages/ticket/GoogleMap";
import ImageHeader from "~/components/pages/ticket/ImageHeader";
import EvandWidget from "~/components/pages/ticket/EvandWidget";

export default {
	components: { GoogleMap, ImageHeader, EvandWidget },
	jsonld() {
		return EventSchema;
	}
};
</script>
