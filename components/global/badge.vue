<template>
  <span class="d-inline-flex align-items-center position-relative text-white mb-2">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'Badge'
}
</script>

<style lang="scss" scoped>

    $width: 19px;
    $background: #30475eb8;

    span {
        height: $width * 2;
        background: $background;

        &:before, &:after {
            content: '';
            top: 0;
            width: 0;
            height: 0;
            position: absolute;
            border-top: $width solid transparent;
            border-bottom: $width solid transparent;
        }

        &:before {
            right: -$width;
            border-left: $width solid $background;
        }

        &:after {
            left: -$width;
            border-right: $width solid $background;
        }
    }
</style>
