<template>
	<span class="d-inline-flex align-items-center text-white mb-2">
		<slot></slot>
	</span>
</template>

<script>
	export default {
		name: "badge"
	}
</script>

<style lang="scss" scoped>

	$width: 19px;

	span {
		height: $width * 2;
		display: inline-block;
		position: relative;
		background: #30475eb8;

		&:before, &:after {
			content: '';
			width: 0;
			height: 0;
			position: absolute;
			top: 0;
			border-top: $width solid transparent;
			border-bottom: $width solid transparent;
		}

		&:before {
			right: -$width;
			border-left: $width solid #30475eb8;
		}

		&:after {
			left: -$width;
			border-right: $width solid #30475eb8;
		}
	}
</style>
