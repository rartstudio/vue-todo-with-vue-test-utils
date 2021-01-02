<template>
    <button data-testid="btn" :class="[`btn-${config}`]" v-on="$listeners">{{title}}</button>
</template>

<script>
    export default {
        props: {
            title : {
                type: String
            },
            config: {
                type: String
            }
        }
    }
</script>

<style scoped>
.btn-close {
    @apply bg-red-500;
}
.btn-add {
    @apply bg-green-500;
}
</style>