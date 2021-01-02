<template>
  <div class="flex">
    <div data-testid="card" class="mr-4 w-1/2 text-left">{{ todo }}</div>
    <BaseButton title='Done' class="bg-blue-300 px-4 py-2 focus:outline-none" @click="toDoIndex(todo)" data-testid="btnDone"/>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
export default {
  components: {
    BaseButton
  },
  props: {
    todo: {
      type: String
    }
  },
  methods: {
    toDoIndex(index){
      this.$emit('doneToDo',index);
    }
  }
};
</script>

<style scoped></style>
