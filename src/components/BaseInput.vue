<template>
    <input type="text" name="" id="" @input="updateValue" data-testid="inputText" :value="value" :placeholder="placeholder" class="px-4 py-2 w-3/12 focus:outline-none border border-gray-400 block">
</template>

<script>
    export default {
        props: {
            value: {
                type: [String,Number]
            },
            placeholder : {
                type: String
            }
        },
        methods: {
            updateValue(){
                this.$emit('input', event.target.value);
            }
        }
    }
</script>

<style scoped>

</style>