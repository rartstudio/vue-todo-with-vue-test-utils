<template>
  <form
    class="flex items-center mb-8"
    @submit.prevent="submitToDo"
    data-testid="formToDo"
  >
    <BaseInput data-testid="inputToDo" v-model="title" />
    <BaseButton
      class="px-4 py-2 focus:outline-none"
      title="Save"
      config="add"
    />
  </form>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
export default {
  components: {
    BaseInput,
    BaseButton
  },
  data(){
    return {
      title : null
    }
  },
  methods: {
    submitToDo() {
      this.$emit('formSubmitted',this.title)
      this.title = null
    }
  }
};
</script>

<style scoped></style>
