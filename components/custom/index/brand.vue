<template>
    <div class="col-6 col-sm-4 col-md-3 col-lg-2 px-1 my-1">
        <div class="bg-light d-flex justify-content-center text-center py-5 h-100">
            <img class="img-fluid w-100"
                 :src="brand.image" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "brand",
        props: {
            brand: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    img {
        opacity: .3;
        max-width: 75%;
        cursor: pointer;
        max-height: 5rem;
        object-fit: contain;
        transition: all .2s ease;
        &:hover {
            opacity: .8;
        }
    }
</style>