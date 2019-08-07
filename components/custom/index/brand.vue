<template>
    <div class="col-6 col-sm-4 col-md-3 col-lg-2 px-1 my-1">
        <div class="bg-light text-center py-5">
            <img class="img-fluid w-50 p-3"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png"
                 alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "brand"
    }
</script>

<style lang="scss" scoped>
    img {
        opacity: .3;
        cursor: pointer;
        transition: all .2s ease;
        &:hover {
            opacity: .8;
        }
    }
</style>